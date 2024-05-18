import { mapValues, mapKeys } from "lodash";
import { BoonRarity, abbreviate } from "./rarities";
import winston from "winston";
import { BoonElement } from "./elements";
import { Boon, BoonValues } from "./god";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
logger.level = process.env.LOG_LEVEL || "debug";

const summaryFormatter = (values: BoonValues) => {
  logger.debug(`Values are: ${JSON.stringify(values)}`);
  const baseValues = mapValues(values, (value = {}) =>
    Object.values(value).find(() => true)
  );
  logger.debug(`Base values are: ${JSON.stringify(baseValues)}`);
  const abbreviatedKeys = mapKeys(baseValues, (value, key) =>
    abbreviate(key as BoonRarity)
  );
  logger.debug(`Abbreviated values are: ${JSON.stringify(abbreviatedKeys)}`);
  const summarized = mapValues(
    abbreviatedKeys,
    (value, key) => `${key}:${value}`
  );
  return "(" + Object.values(summarized).join(" ") + ")";
};

const abilityFormatter =
  (god: string) =>
  ({ name, type, element, info, values }: Boon) =>
  (rarity?: BoonRarity, level?: number) => {
    const valueString = summaryFormatter(values);
    // Some boons, like infusions, have no element
    const formattedElement = element ? `[${element}] ` : "";
    return `${name} (${god}) ${formattedElement}- ${info(valueString)}`;
  };
export { summaryFormatter, abilityFormatter };
