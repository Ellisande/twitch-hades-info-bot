import { find, reduce, mapKeys, omitBy } from "lodash";
import { Command } from "./command";
import { gods } from "../data/gods/all";
import { curses, blessings } from "../data/chaos";

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

const curseRegexes = /attack/i;
const blessingRegexes = /special/i;

const chaosBoonsCommand = RegExp(
  `^(${curseRegexes}) (${blessingRegexes})$`,
  "i"
);

const boonCommand = new Command({
  command: chaosBoonsCommand,
  name: "Chaos Boons",
  test: true,
  example: "flutter flourish",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const curseName = commandMatches[1];
    const blessingName = commandMatches[2];
    const curse = curses.find((curse) => curse.matcher.test(curseName));
    const blessing = blessings.find((blessing) =>
      blessing.matcher.test(blessingName)
    );
    if (!curse || !blessing) {
      return;
    }
    const message = "Pasta";
    bot.say(channelId, message);
  },
});

export { boonCommand };
