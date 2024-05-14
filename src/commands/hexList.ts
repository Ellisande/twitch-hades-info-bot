import { Command } from "./command";
import { hexes } from "../data/hexes";

const hexListCommand = new Command({
  command: /^hex(es)?/i,
  name: "Hex list",
  test: false,
  example: "hexes",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const hexNames = hexes.map((hex) => hex.name);
    logger.debug("Get names of all hexes " + hexNames);
    const formattedNames = hexNames.map((name) => `[${name}]`).join(" ");
    const message =
      `Put ! then the name of the hex to find out more. Example !total eclipse. ` +
      `Available hexes: ${formattedNames}`;
    const channel = channelId.slice(1);
    logger.debug("My channel is " + channel);
    bot.say(channel, message);
  },
});

export { hexListCommand };