const winston = require("winston");

const { combine, json } = winston.format;

const logLevel = process.env.LOG_LEVEL || "debug";

const commandFormat = winston.format((info, opts) => {
  return {
    ...info,
    message: `[${opts.command}] ${info.message}`,
    command: opts.command
  };
});

class Command {
  constructor({ command, name, handler, test, example }) {
    this.test = test || false;
    this.handler = handler;
    this.commandMatcher = command;
    this.name = name;
    this.logger = winston.createLogger({
      format: combine(commandFormat({ command: this.name }), json()),
      transports: [new winston.transports.Console()]
    });
    this.logger.level = logLevel;
    this.example = example || this.commandString;
  }

  handle({ bot, channelId, message, commandMatches }) {
    const { logger } = this;
    const remaining = message
      .replace(this.commandMatcher, "")
      .replace(/\?$/, "");
    logger.debug(`executing command ${this.name} with ${message}`);
    const handlerResult = this.handler({
      bot,
      channelId,
      message: remaining,
      originalMessage: message,
      logger,
      commandMatches
    });
    if (handlerResult instanceof Promise) {
      handlerResult.finally(() => logger.debug("Finished command"));
    } else {
      logger.debug("finished command");
    }
    return handlerResult;
  }

  matches(command) {
    this.logger.debug(
      `checking if user command ${command} matches our command ${
        this.commandMatcher
      }`
    );
    const matched = command.match(this.commandMatcher);
    matched
      ? this.logger.debug("successfully matched")
      : this.logger.debug("not matched");
    return matched;
  }

  get command() {
    return this.commandString;
  }
}

module.exports = { Command };
