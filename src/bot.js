const tmi = require("tmi.js");
const winston = require("winston");
const _ = require("lodash");
require("./api");
const { username, password } = require("./config");
const { handleMessage } = require("./bot/messageHandler");
const channels = require("./enabledChannels");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});
logger.level = process.env.LOG_LEVEL || "debug";

// Create a client with our options
const bot = new tmi.client({
  identity: {
    username,
    password
  },
  channels
});

const onConnectedHandler = event => {
  logger.info("Connected");
  logger.info("Logged in as");
  logger.info(`${bot.username} - (${bot.id})`);
};

const onMessageHandler = (channelId, context, originalMessage, self) => {
  return handleMessage({
    channelId,
    originalMessage,
    bot,
    self
  });
};

// Register our event handlers (defined below)
bot.on("message", onMessageHandler);
bot.on("connected", onConnectedHandler);

// Connect to Twitch:
bot.connect();
