import { Command } from "./command";
import { hexes, Hex } from "../data/hexes";

const hexExpressionMap = hexes.reduce((map, hex) => {
  let hexMatcher = hex.name.replace(" ", " *");
  map[hexMatcher] = hex;
  return map;
}, {} as { [key: string]: Hex });

const hexExpressionString = Object.keys(hexExpressionMap).join("|");
const hexCommandExpression = RegExp(`^(${hexExpressionString})$`, "i");

const hexCommand = new Command({
  command: hexCommandExpression,
  name: "Hex",
  test: false,
  example: "total eclipse",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const hexName = commandMatches[1];
    const hexKey = Object.keys(hexExpressionMap).find((key) =>
      RegExp(key, "i").test(hexName)
    );
    if (!hexKey) {
      return;
    }

    const currentHex = hexExpressionMap[hexKey];
    const message = `${currentHex.name} - ${currentHex.info} (Ready after ${currentHex.ready} [magick].)`;
    bot.say(channelId, message);
  },
});

export { hexCommand };
