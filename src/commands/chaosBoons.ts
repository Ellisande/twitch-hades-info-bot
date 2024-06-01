import { map } from "lodash";
import { Command } from "./command";
import { curses, blessings, Range } from "../data/chaos";
import { BoonRarity, abbreviate } from "../data/gods/rarities";

const curseRegexes = curses.map((curse) => curse.matcher.source).join("|");
const blessingRegexes =
  blessings.map((blessing) => blessing.matcher.source).join("|");

const chaosBoonsCommand = RegExp(
  `^(${curseRegexes}) (${blessingRegexes})$`,
  "i"
);

const chaosCommand = new Command({
  command: chaosBoonsCommand,
  name: "Chaos Boons",
  test: false,
  example: "addled blood",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const curseName = commandMatches[1];
    const blessingName = commandMatches[2];
    const curse = curses.find((curse) => curse.matcher.test(curseName));
    const blessing = blessings.find((blessing) =>
      blessing.matcher.test(blessingName)
    );
    if (!curse || !blessing) {
      const err = "User input matched chaosCommand but no curse or blessing " +
        "was identified.";
      logger.alert(err);
      return;
    }

    const rangeString =
      (range: Range | undefined, asPercent = false, mult = 1) => {
        if (!range) {
          return "";
        }

        const scaledMin = range.min * mult;
        const minString = asPercent ?
          Math.round(scaledMin * 100) + "%" :
          `${scaledMin}`;
        if (range.min === range.max) {
          return minString
        }

        const scaledMax = range.max * mult;
        const maxString = asPercent ?
          Math.round(scaledMax * 100) + "%" :
          `${scaledMax}`;
        return minString + "-" + maxString;
      };

    const curseValue = rangeString(curse.values.value, curse.values.asPercent);
    const curseDuration = rangeString(curse.values.duration);
    const curseMessage = curse.info(curseValue, curseDuration);

    const formattedValues: string[] =
      map(blessing.values.rarityMultipliers, (mult, key) => {
        const shortRarity = abbreviate(key as BoonRarity);
        const rarityValues =
          rangeString(blessing.values.base, blessing.values.asPercent, mult);
        return shortRarity + ":" + rarityValues;
      });

    const blessingValue = "(" + formattedValues.join(" ") + ")";
    const blessingMessage = blessing.info(blessingValue);

    const message = `${curseMessage} ${blessingMessage}`;
    bot.say(channelId, message);
  },
});

export { chaosCommand };
