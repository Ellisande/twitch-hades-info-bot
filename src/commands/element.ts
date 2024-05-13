import { Command } from "./command";
import {
  EARTH,
  WATER,
  AIR,
  FIRE,
  COSMIC,
  BoonElement,
} from "../data/gods/elements";
import { gods } from "../data/gods/all";
const allElements = [EARTH, WATER, AIR, FIRE, COSMIC];

const allElementNames = allElements.join("|");
const elementCommandExpression = RegExp(`^(${allElementNames}) ?$`, "i");

const elementMap = gods.reduce<Record<BoonElement, string[]>>(
  (hash, god) => {
    if (!god.elements) {
      return hash;
    }

    return {
      [EARTH]: god.elements.find((element) => element === EARTH)
        ? [...hash[EARTH], god.name]
        : hash[EARTH],
      [WATER]: god.elements.find((element) => element === WATER)
        ? [...hash[WATER], god.name]
        : hash[WATER],
      [AIR]: god.elements.find((element) => element === AIR)
        ? [...hash[AIR], god.name]
        : hash[AIR],
      [FIRE]: god.elements.find((element) => element === FIRE)
        ? [...hash[FIRE], god.name]
        : hash[FIRE],
      [COSMIC]: god.elements.find((element) => element === COSMIC)
        ? [...hash[COSMIC], god.name]
        : hash[COSMIC],
    };
  },
  {
    [EARTH]: [],
    [WATER]: [],
    [AIR]: [],
    [FIRE]: [],
    [COSMIC]: [],
  }
);

const elementCommand = new Command({
  command: elementCommandExpression,
  name: "Elements",
  test: false,
  example: "water",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const elementName = commandMatches[1];
    const currentElement = allElements.find((element) =>
      element.match(RegExp(elementName, "i"))
    );
    if (!currentElement) {
      logger.debug(
        "Matched elementCommand with: " +
          elementName +
          " but failed to find element in list."
      );
      return;
    }

    // Protects us if an element doesn't yet exist in the actual data.
    if (!elementMap[currentElement as keyof typeof elementMap]) {
      logger.debug(
        "Matched elementCommand with: " +
          elementName +
          " but no boons in the data have this element."
      );
      return;
    }

    const formattedGodNames = elementMap[
      currentElement as keyof typeof elementMap
    ]
      .map((name) => `[${name}]`)
      .join(" ");
    const message = `Gods with [${currentElement}] boons: ${formattedGodNames}`;
    bot.say(channelId, message);
  },
});

export { elementCommand };
