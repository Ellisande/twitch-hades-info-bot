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
  ({ name, type, element, info, values, prerequisites }: Boon) => {
    const valueString = summaryFormatter(values);
    // Some boons, like infusions, have no element
    const formattedElement = element ? `[${element}] ` : "";
    const hasPrereqs = prerequisites ? " [has requirements]" : "";
    return `${name} (${god}) ${formattedElement}- ${info(valueString)}${hasPrereqs}`;
  };

const prereqsFormatter =
  (god: string) =>
  ({ name, prerequisites }: Boon) => {
    if (!prerequisites || prerequisites.length === 0) {
      return "No known requirements.";
    }

    const prereqsString = prerequisites
      .map(
        (boonList) => {
          let boonSet = boonList.reduce(
            (currentBoons, boon) => {
              return `${currentBoons}[${boon.name}]`
            }, ""
          );
          return `(one of ${boonSet})`;
        }
      ).join(" and ");

    return `Requirements for ${name} (${god}): ${prereqsString}`
  };

export { summaryFormatter, abilityFormatter, prereqsFormatter };
