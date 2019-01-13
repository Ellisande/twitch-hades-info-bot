const { mapValues, mapKeys } = require("lodash");
const { abbreviate } = require("./rarities");
const winston = require("winston");
const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});
logger.level = process.env.LOG_LEVEL || "debug";

const summaryFormatter = values => {
  logger.debug(`Values are: ${JSON.stringify(values)}`);
  const baseValues = mapValues(values, value => value[1]);
  logger.debug(`Base values are: ${JSON.stringify(baseValues)}`);
  const abbreviatedKeys = mapKeys(baseValues, (value, key) => abbreviate(key));
  logger.debug(`Abbreviated values are: ${JSON.stringify(abbreviatedKeys)}`);
  const summarized = mapValues(
    abbreviatedKeys,
    (value, key) => `${key}:${value}`
  );
  return "(" + Object.values(summarized).join(" ") + ")";
};

const abilityFormatter = ({ name, type, info, values }) => (rarity, level) => {
  const valueString = summaryFormatter(values);
  return `${name} (${type}) - ${info(valueString)}`;
};

module.exports = { summaryFormatter, abilityFormatter };
