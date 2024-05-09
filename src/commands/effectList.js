const { statuses } = require("../data/status");
const { Command } = require("./command");
const allEffects = [...statuses];

const effectListCommand = new Command({
  command: /^effects/i,
  name: "Effect list",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const effectNames = allEffects.map((effect) => effect.name);
    logger.debug("Get names of all effects " + effectNames);
    const formattedNames = effectNames.map((name) => `[${name}]`).join(" ");
    const message = `Put ! then the name of an effect to find out more. Example !weak.  Available effects: ${formattedNames}`;
    const channel = channelId.slice(1);
    logger.debug("My channel is " + channel);
    bot.say(channel, message);
  },
});

module.exports = { effectListCommand };
