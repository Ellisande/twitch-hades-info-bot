import { find, reduce } from "lodash";
import { actBonuses } from "../data/actBonus/all";
import { Boon } from "../data/gods/god";
import { Command } from "./command";
import { abilityFormatter } from "./utils/formatters";

type BonusBoonRecord = {
  bonus: string;
  boon: Boon;
};

const abilityMatchersMap: { [matcher: string]: BonusBoonRecord } = actBonuses
  .map((god) =>
    reduce(
      god.abilities,
      (hash, ability) => ({
        ...hash,
        [ability.name.replace(" ", " *")]: { god: god.name, boon: ability },
      }),
      {}
    )
  )
  .reduce((resultObj, current) => ({ ...resultObj, ...current }));

const abilityNameRegexes = Object.keys(abilityMatchersMap).join("|");
const abilityCommand = RegExp(`^(${abilityNameRegexes})$`, "i");

const bonusBoonCommand = new Command({
  command: abilityCommand,
  name: "Bonus Boons",
  test: false,
  example: "destructive coating",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const boonRecord = find(abilityMatchersMap, (_, matcher) =>
      RegExp(matcher, "i").test(abilityName)
    );
    if (!boonRecord) {
      logger.debug(
        `Error. User input matched boonCommand but no boonRecord was found.`
      );
      return;
    }

    const message = abilityFormatter(boonRecord.bonus)(boonRecord.boon);
    bot.say(channelId, message);
  },
});

export { bonusBoonCommand };
