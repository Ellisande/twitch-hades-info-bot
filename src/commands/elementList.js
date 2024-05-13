const { Command } = require("./command");
const { EARTH, WATER, AIR, FIRE, COSMIC, } = require("../data/elements");
const allElements = [ EARTH, WATER, AIR, FIRE, COSMIC, ];

const elementListCommand = new Command({
  command: /^element?s/i,
  name: "Element list",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    logger.debug("Get names of all elements " + allElements);
    const formattedNames = allElements.map((name) => `[${name}]`).join(" ");
    const message = `Put ! then the name of an element to find out more. Example !water.  Available elements: ${formattedNames}`;
    const channel = channelId.slice(1);
    logger.debug("My channel is " + channel);
    bot.say(channel, message);
  },
});

module.exports = { elementListCommand };
