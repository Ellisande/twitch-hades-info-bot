import { reduce } from "lodash";
import { Command } from "./command";
import { curses, blessings, ChaosCurseValues } from "../data/chaos";
import { BoonRarity, abbreviate } from "../data/gods/rarities";

// WIP: Given that we are stripping the flags from these regex literals,
// it's not clear that they should be regex in the first place. After all,
// the only flag we end up adding back is i, the case insensitive flag.
const curseRegexes = curses.reduce(
  (currentMatchers, curse) => {
    if (currentMatchers === "") {
      return curse.matcher.source;
    }
    
    return currentMatchers + "|" + curse.matcher.source;
  }, ""
);

const blessingRegexes = blessings.reduce(
  (currentMatchers, blessing) => {
    if (currentMatchers === "") {
      return blessing.matcher.source;
    }
    
    return currentMatchers + "|" + blessing.matcher.source;
  }, ""
);

const chaosBoonsCommand = RegExp(
  `^(${curseRegexes}) (${blessingRegexes})$`,
  "i"
);

console.log(`COMMAND: ${chaosBoonsCommand}`);

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
      return;
    }

    // WIP: Compose this mess into utility functions somehow. Can we merge
    // with some existing formatters?
    // I bet we can make this:
    // const rangeString (min, max, mult, asPercent)
    // and use that for all of the ranges.
    const curseString = (values: ChaosCurseValues) => {
      if (values.value) {
        const min = values.value.min;
        const minString = values.asPercent ?
          Math.round(min * 100) + "%" :
          `${min}`;
        const max = values.value.max;
        if (min !== max) {
          const maxString = values.asPercent ?
            Math.round(max * 100) + "%" :
            `${max}`;
          return minString + "-" + maxString
        } else {
          return minString;
        }
      } else {
        return "";
      }
    }

    const curseValue = curseString(curse.values);

    const curseDuration =
      curse.values.duration.min + "-" + curse.values.duration.max;

    const curseMessage = curse.info(curseValue, curseDuration);

    type BlessingRecord = {
      min: number;
      max: number;
    };

    const rarityAdjustedValues = reduce(
      blessing.values.rarityMultipliers, (hash, mult, key) => {
        if (!mult) {
          return hash;
        }
        const record = {
          min: mult * blessing.values.baseMin,
          max: mult * blessing.values.baseMax
        }
        return { ...hash, [key]: record };
      }, {} as Record<string, BlessingRecord>
    );

    const formattedValues = reduce(
      rarityAdjustedValues, (array, record, key) => {
        var value = abbreviate(key as BoonRarity);
        // WIP: Can we capture all of this as an anonymous function
        var min = `${record.min}`;
        var max = `${record.max}`;
        if (blessing.values.asPercent) {
          min = Math.round(record.min * 100) + "%";
          max = Math.round(record.max * 100) + "%";
        }

        value = value + ":" + min;
        if (blessing.values.baseMin === blessing.values.baseMax) {
          return [ ...array, value ];
        }
        
        value = value + "-" + max;
        return [ ...array, value ];
      }, [] as string[]
    );

    const blessingValue = "(" + formattedValues.join(" ") + ")";
    const blessingMessage = blessing.info(blessingValue);

    const message = `${curseMessage} ${blessingMessage}`;
    bot.say(channelId, message);
  },
});

export { chaosCommand };
