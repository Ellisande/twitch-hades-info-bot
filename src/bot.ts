import * as tmi from "tmi.js";
import * as winston from "winston";
import * as _ from "lodash";
import "./api";

import { username, password } from "./config";
import { handleMessage } from "./bot/messageHandler";
const channels = require("./enabledChannels");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
logger.level = process.env.LOG_LEVEL || "debug";

// Create a client with our options
const bot = new tmi.client({
  identity: {
    username,
    password,
  },
  channels,
});

const onConnectedHandler = () => {
  logger.info("Connected");
  logger.info("Logged in as");
  logger.info(`${bot.getUsername()}`);
};

const onMessageHandler = (
  channelId: string,
  context: tmi.ChatUserstate,
  originalMessage: string,
  self: boolean
) => {
  return handleMessage({
    channelId,
    originalMessage,
    bot,
    self,
  });
};

// Register our event handlers (defined below)
bot.on("message", onMessageHandler);
bot.on("connected", onConnectedHandler);

// Connect to Twitch:
const connectionPromise = bot.connect();
connectionPromise.catch((e) => console.log(e));
