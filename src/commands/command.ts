import * as winston from "winston";
import { handleMessage } from "../bot/messageHandler";
import { Client } from "tmi.js";

const { combine, json } = winston.format;

const logLevel = process.env.LOG_LEVEL || "debug";

const commandFormat = winston.format((info, opts) => {
  return {
    ...info,
    message: `[${opts.command}] ${info.message}`,
    command: opts.command,
  };
});

type CommandHandler = ({
  bot,
  channelId,
  message,
  originalMessage,
  logger,
  commandMatches,
}: {
  bot: Client;
  channelId: string;
  message: string;
  originalMessage: string;
  logger: winston.Logger;
  commandMatches: RegExpMatchArray;
}) => Promise<any>;

class Command {
  test: boolean;
  handler: CommandHandler;
  commandMatcher: RegExp;
  name: string;
  logger: winston.Logger;
  example: string;
  constructor({
    command,
    name,
    handler,
    test,
    example,
  }: {
    command: RegExp;
    name: string;
    handler: CommandHandler;
    test: boolean;
    example: string;
  }) {
    this.test = test || false;
    this.handler = handler;
    this.commandMatcher = command;
    this.name = name;
    this.logger = winston.createLogger({
      format: combine(commandFormat({ command: this.name }), json()),
      transports: [new winston.transports.Console()],
    });
    this.logger.level = logLevel;
    this.example = example || "No example provided";
  }

  async handle({
    bot,
    channelId,
    message,
    commandMatches,
  }: {
    bot: Client;
    channelId: string;
    message: string;
    commandMatches: RegExpMatchArray;
  }) {
    const { logger } = this;
    const remaining = message
      .replace(this.commandMatcher, "")
      .replace(/\?$/, "");
    logger.debug(`executing command ${this.name} with ${message}`);
    try {
      const handlerResult = await this.handler({
        bot,
        channelId,
        message: remaining,
        originalMessage: message,
        logger,
        commandMatches,
      });
      logger.debug(`Command ${this.name} executed successfully`);
      return handlerResult;
    } catch (e) {
      logger.error(`Error executing command ${this.name}: ${e}`);
      return Promise.resolve();
    }
  }

  matches(command: string) {
    this.logger.debug(
      `checking if user command ${command} matches our command ${this.commandMatcher}`
    );
    const matched = command.match(this.commandMatcher);
    matched
      ? this.logger.debug("successfully matched")
      : this.logger.debug("not matched");
    return matched;
  }

  get command() {
    return this.name;
  }
}

export { Command };
