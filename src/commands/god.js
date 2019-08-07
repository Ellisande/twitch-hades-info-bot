const { Command } = require("./command");
const gods = require("../data/gods/all.js");

const allGodNames = gods.map(god => god.name).join("|");

const godCommandExpression = RegExp(`^(${allGodNames}) ?(.*)?$`, "i");

const godOptions = [
  "attack",
  "special",
  "cast",
  "dash",
  "revenge",
  "wrath",
  "other"
]
  .map(opt => `[${opt}]`)
  .join(" ");

const godCommand = new Command({
  command: godCommandExpression,
  name: "God",
  test: false,
  example: "athena attack",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const godName = commandMatches[1];
    logger.debug("God to find " + godName);
    const god = gods.find(god => god.name.toLowerCase() == godName);
    logger.debug("God info found ", god);
    const ability = commandMatches[2];
    logger.debug("Variant to use " + ability);
    const message = (function() {
      if (ability == "other") {
        const abilityNames = god.other
          .map(ability => `[${ability.name.toLowerCase()}]`)
          .join(" ");
        return `${god.name}'s other abilities: ${abilityNames}`;
      }
      if (ability && god[ability]) {
        return god[ability]();
      }
      return `${god.info} ${godOptions}`;
    })();
    logger.debug("God message " + message);
    bot.say(channelId, message);
  }
});

module.exports = { godCommand };
