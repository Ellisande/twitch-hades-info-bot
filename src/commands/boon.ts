import { find, reduce } from "lodash";
import { Command } from "./command";
import { gods } from "../data/gods/all";
import { abilityFormatter, prereqsFormatter } from "./utils/formatters";
import { Boon } from "../data/gods/god";

type BoonRecord = {
  god: string;
  boon: Boon;
};

const abilityMatchersMap: { [matcher: string]: BoonRecord} = gods
  .map((god) =>
    reduce(
      god.abilities,
      (hash, ability) => ({
        ...hash,
        [ability.name.replace(" ", " *")]: {god: god.name, boon: ability},
      }), {}
    )
  ).reduce(
    (resultObj, current) => ({ ...resultObj, ...current })
  );

const abilityNameRegexes = Object.keys(abilityMatchersMap).join("|");
const abilityCommand = RegExp(`^(${abilityNameRegexes})( req(?:uirement)?s)?$`, "i");

const boonCommand = new Command({
  command: abilityCommand,
  name: "Ability",
  test: false,
  example: "flutter flourish",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const boonRecord = find(abilityMatchersMap, (_, matcher) =>
      RegExp(matcher, "i").test(abilityName)
    );
    if (!boonRecord) {
      logger.debug(`Error. User input matched boonCommand but no boonRecord was found.`);
      return;
    }

    const prereqsRequest = commandMatches[2];
    if (prereqsRequest) {
      const prereqMessage = prereqsFormatter(boonRecord.god)(boonRecord.boon);
      return bot.say(channelId, prereqMessage);
    }

    const message = abilityFormatter(boonRecord.god)(boonRecord.boon);
    bot.say(channelId, message);
  },
});

export { boonCommand };
