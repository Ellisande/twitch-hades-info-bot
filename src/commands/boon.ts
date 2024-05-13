import { find, reduce, mapKeys, omitBy } from "lodash";
import { Command } from "./command";
import { gods } from "../data/gods/all";

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

const abilityCommand = RegExp(`^(${abilityNameRegexes})$`, "i");

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
    const message = messageFactory();
    bot.say(channelId, message);
  },
});

export { boonCommand };
