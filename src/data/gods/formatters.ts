import { mapValues, mapKeys } from "lodash";
import { BoonRarity, abbreviate } from "./rarities";
import winston from "winston";
import { BoonElement } from "./elements";

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});
logger.level = process.env.LOG_LEVEL || "debug";

const summaryFormatter = (values: any[]) => {
  logger.debug(`Values are: ${JSON.stringify(values)}`);
  const baseValues = mapValues(values, (value) => value[1]);
  logger.debug(`Base values are: ${JSON.stringify(baseValues)}`);
  const abbreviatedKeys = mapKeys(baseValues, (value, key) =>
    // TODO: Fix this any
    abbreviate(key as any)
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
  ({
    name,
    type,
    element,
    info,
    values,
  }: {
    name: string;
    element: BoonElement;
    info: (value: string) => string;
    values: any;
    type: any;
  }) =>
  (rarity: BoonRarity, level: number) => {
    const valueString = summaryFormatter(values);
    // Some boons, like infusions, have no element
    const formattedElement = element ? `[${element}] ` : "";
    return `${name} (${god}) ${formattedElement}- ${info(valueString)}`;
  };
export { summaryFormatter, abilityFormatter };
