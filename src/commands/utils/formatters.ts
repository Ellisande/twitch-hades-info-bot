import { mapValues, mapKeys } from "lodash";
import { BoonRarity, abbreviate } from "../../data/gods/rarities";
import { Boon, BoonValues } from "../../data/gods/god";

const summaryFormatter = (values: BoonValues) => {
  const baseValues = mapValues(values, (value = {}) =>
    Object.values(value).find(() => true)
  );
  const abbreviatedKeys = mapKeys(baseValues, (_, key) =>
    abbreviate(key as BoonRarity)
  );
  const summarized = mapValues(
    abbreviatedKeys,
    (value, key) => `${key}:${value}`
  );
  return "(" + Object.values(summarized).join(" ") + ")";
};

const abilityFormatter =
  (god: string) =>
  ({ name, element, info, values, prerequisites }: Boon) => {
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
