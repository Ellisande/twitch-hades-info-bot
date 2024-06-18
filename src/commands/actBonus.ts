import { actBonuses } from "../data/actBonus/all";
import { Command } from "./command";

const allActBonusNames = actBonuses.map((bonus) => bonus.name).join("|");

const actBonusCommandExpression = RegExp(`^(${allActBonusNames}) ?(.*)?$`, "i");

const bonusCommand = new Command({
  command: actBonusCommandExpression,
  name: "ActBonus",
  test: false,
  example: "icarus",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const bonusName = commandMatches[1];
    logger.debug("Bonus to find " + bonusName);
    const bonus = actBonuses.find(
      (bonus) => bonus.name.toLowerCase() == bonusName
    );
    if (!bonus) {
      logger.debug("Bonus not found");
      return;
    }
    const baseMessage = `${bonus.name} - ${bonus.info}`;
    logger.debug("Bonus info found ", bonus);
    const filteredAbilities = Object.values(bonus.abilities);
    const abilitiesMessage = filteredAbilities
      .map((ability) => `[${ability.name.toLowerCase()}]`)
      .join(" ");
    const fullMessage = `${baseMessage} ${abilitiesMessage}`;
    logger.debug("Bonus message " + fullMessage);
    return bot.say(channelId, fullMessage);
  },
});

export { bonusCommand };
