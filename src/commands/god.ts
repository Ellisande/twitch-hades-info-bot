import { gods } from "../data/gods/all";
import { Command } from "./command";

const allGodNames = gods.map((god) => god.name).join("|");

const godCommandExpression = RegExp(`^(${allGodNames}) ?(.*)?$`, "i");

const godOptions = ["attack", "special", "cast", "dash", "gain", "other"]
  .map((opt) => `[${opt}]`)
  .join(" ");

const godCommand = new Command({
  command: godCommandExpression,
  name: "God",
  test: false,
  example: "zeus attack",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const godName = commandMatches[1];
    logger.debug("God to find " + godName);
    const god = gods.find((god) => god.name.toLowerCase() == godName);
    if (!god) {
      logger.debug("God not found");
      return;
    }
    logger.debug("God info found ", god);
    const ability = commandMatches[2];
    logger.debug("Variant to use " + ability);
    const message = (function () {
      if (ability == "other") {
        const abilityNames = god.other
          .map((ability) => `[${ability.name.toLowerCase()}]`)
          .join(" ");
        return `${god.name}'s other abilities: ${abilityNames}`;
      }
      // TODO: Fix typing here
      if (ability && (god as any)[ability]) {
        return (god as any)[ability]();
      }
      return `${god?.info} ${godOptions}`;
    })();
    logger.debug("God message " + message);
    bot.say(channelId, message);
  },
});

export { godCommand };
