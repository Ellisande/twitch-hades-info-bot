import * as auth from "../auth.json";
import winston from "winston";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

export type Auth = {
  identity: {
    username: string;
    password: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
  };
};
const identity = (auth as Auth)?.identity;
const actualUsername = process.env.BOT_USERNAME || identity.username;
const actualPassword = process.env.BOT_OAUTH_TOKEN || identity.password;

if (!actualUsername) {
  logger.error(
    "The bot must have a username specified in auth.json or in the BOT_USERNAME environment variable"
  );
  process.exit(1);
}

if (!actualPassword) {
  logger.error(
    "The bot must have an oauth token specified in auth.json or in the BOT_OAUTH_TOKEN environment variable"
  );
  process.exit(1);
}

export { actualUsername as username, actualPassword as password };
