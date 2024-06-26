import { gods } from "../data/gods/all";
import { AIR, BoonElement, COSMIC, EARTH, FIRE, WATER } from "../data/gods/elements";
import { isInfusion } from "../data/gods/god";
import { Command } from "./command";

const allElements = [EARTH, WATER, AIR, FIRE, COSMIC];
const allElementNames = allElements.join("|");
const infusionCommandExpression = RegExp(`^(infusions?) ?(${allElementNames})?$`, "i");

type InfusionRecord = {
  boon: string;
  god: string;
};
const elementInfusionMap = gods.reduce<Record<BoonElement, InfusionRecord[]>>(
  (hash, god) => {
    // Assumes each god has no more than one infusion, which is currently true.
    const infusionBoon = Object.values(god.abilities).find(isInfusion);
    if (!infusionBoon) {
      return hash;
    }

    const record: InfusionRecord = { boon: infusionBoon.name, god: god.name };
    const requiredElements = infusionBoon.requiredElements;
    const result = requiredElements.reduce((resultHash, requiredElement) => {
      return {
        ...resultHash,
        [requiredElement]: [...hash[requiredElement], record]
      }
    }, {...hash});
    return result;
  },
  {
    [EARTH]: [],
    [WATER]: [],
    [AIR]: [],
    [FIRE]: [],
    [COSMIC]: [],
  }
);

const infusionCommand = new Command({
  command: infusionCommandExpression,
  name: "Infusions",
  test: false,
  example: "infusions water",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const channel = channelId.slice(1);
    logger.debug("My channel is " + channel);
    const elementFromUser = commandMatches[2];
    
    const formattedElementNames = allElements.map((name) => `[${name}]`).join(" ");
    const defaultMessage =
      "Infusions are a special type of boon that rewards stockpiling " +
      "elemental boons. Available elements: " + formattedElementNames;

    if (!elementFromUser) {
      logger.debug("No element provided. Defaulting to infusions overview.");
      return bot.say(channel, defaultMessage);
    }

    const matchedElement = allElements.find((element) =>
      element.match(RegExp(elementFromUser, "i"))
    );

    if (!matchedElement) {
      logger.debug("No element matched. Defaulting to infusions overview.");
      return bot.say(channel, defaultMessage);
    }

    // Protects us if an element doesn't yet exist in the actual data.
    const infusions = elementInfusionMap[matchedElement as keyof typeof elementInfusionMap];
    if (!infusions) {
      logger.debug(
        "Matched infusionCommand with: " +
          elementFromUser +
          " but no infusions in the data have this element."
      );
      return;
    }

    const formattedBoons = infusions
      .map((record) => `[${record.boon} (${record.god})]`)
      .join(" ");

    const message =
      `Infusions that require at least one [${matchedElement}]: ${formattedBoons}`
    
    return bot.say(channel, message);
  },
});

export { infusionCommand };