const { Command } = require("./command");
const gods = require("../data/gods/all.js");

const godListCommand = new Command({
  command: /^gods/i,
  name: "God list",
  test: false,
  example: "gods",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const godNames = gods.map(god => god.name);
    logger.debug("Get names of all gods " + godNames);
    const formattedNames = godNames.map(name => `[${name}]`).join(" ");
    const message = `Put ! then the name of the god to find out more. Example !zeus.  Available gods: ${formattedNames}`;
    bot.say(channelId, message);
  }
});

module.exports = { godListCommand };
