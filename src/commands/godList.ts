import { Command } from "./command";
import { gods } from "../data/gods/all";

const godListCommand = new Command({
  command: /^gods/i,
  name: "God list",
  test: false,
  example: "gods",
  handler: async ({ bot, channelId, commandMatches, logger, ...rest }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const godNames = gods.map((god) => god.name);
    logger.debug("Get names of all gods " + godNames);
    const formattedNames = godNames.map((name) => `[${name}]`).join(" ");
    const message = `Put ! then the name of the god to find out more. Example !zeus.  Available gods: ${formattedNames}`;
    const channel = channelId.slice(1);
    logger.debug("My channel is " + channel);
    bot.say(channel, message);
  },
});

export { godListCommand };
