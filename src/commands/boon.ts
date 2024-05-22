import { find, reduce, mapKeys, omitBy } from "lodash";
import { Command } from "./command";
import { gods } from "../data/gods/all";
import { prereqsFormatter } from "../data/gods/formatters";

const abilityPrereqMap = gods
  .map((god) =>
    reduce(
      god.abilities,
      (hash, ability) => ({
        ...hash,
        [ability.name]: () => prereqsFormatter(god.name)(ability),
      }), {}
    )
  ).reduce(
    (resultObj, current) => ({ ...resultObj, ...current })
  ) as { [key: string]: () => string };

const abilityMap = gods
  .map((god) =>
    reduce(
      god.abilities,
      (hash, ability, key) => ({
        ...hash,
        [ability.name]: god[key as keyof typeof god],
      }),
      {}
    )
  )
  .reduce((resultObj, current) => ({ ...resultObj, ...current }));

const abilityMapWithoutNone = omitBy(abilityMap, (value, key) =>
  /None/i.test(key)
);

const abilityExpressionMap = mapKeys(abilityMapWithoutNone, (_, abilityName) =>
  abilityName.replace(" ", " *")
) as { [key: string]: () => string };

const abilityNameRegexes = Object.keys(abilityExpressionMap).join("|");

const abilityCommand = RegExp(`^(${abilityNameRegexes})( req(?:uirement)?s)?$`, "i");

const boonCommand = new Command({
  command: abilityCommand,
  name: "Ability",
  test: false,
  example: "flutter flourish",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const messageFactory = find(abilityExpressionMap, (_, expressionString) =>
      RegExp(expressionString, "i").test(abilityName)
    );
    if (!messageFactory) {
      return;
    }

    const prereqsRequest = commandMatches[2];
    if (prereqsRequest) {
      const abilityKey = Object.keys(abilityPrereqMap).find((ability) =>
        RegExp(ability, "i").test(abilityName)
      ) as keyof typeof abilityPrereqMap;
      if (!abilityKey) {
        logger.debug(`Error. Failed to match user input ability ${abilityName} in boonCommand.`);
        return;
      }

      const prereqMessage = abilityPrereqMap[abilityKey]();
      if (!prereqMessage || prereqMessage === "") {
        return bot.say(channelId, "No known requirements.");
      }

      return bot.say(channelId, prereqMessage);
    }

    const message = messageFactory();
    bot.say(channelId, message);
  },
});

export { boonCommand };
