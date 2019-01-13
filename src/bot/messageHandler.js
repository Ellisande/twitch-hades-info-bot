const winston = require("winston");
const { allCommands } = require("../commands/all");
const { isTestChannel, isTestUser } = require("./testUtils");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});
logger.level = process.env.LOG_LEVEL || "debug";

const commandMatcher = /^!/;

const handleMessage = ({ channelId, originalMessage, bot, self }) => {
  const enableTestCommands = isTestChannel(channelId);
  if (self) {
    logger.debug("Message was from the bot herself");
    return;
  }

  // if (!isTestChannel(channelId)) {
  //   logger.debug("Only test channel right now");
  //   return;
  // }

  const commands = allCommands.filter(
    i => i.test == false || enableTestCommands
  );

  if (!originalMessage.match(commandMatcher)) {
    logger.debug("Message was not a command.");
    return;
  }

  const message = originalMessage.replace(commandMatcher, "");
  logger.debug(`Message without command pattern. ${message}`);
  const matchingCommand = commands.find(currentCommand =>
    currentCommand.matches(message)
  );
  if (matchingCommand) {
    return matchingCommand.handle({
      channelId,
      message,
      bot,
      commandMatches: matchingCommand.matches(message)
    });
  } else {
    logger.debug(`Message did not match a valid command ${message}`);
  }
  return Promise.resolve();
};

module.exports = { handleMessage };
