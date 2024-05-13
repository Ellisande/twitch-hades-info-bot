const { Command } = require("./command");
const { EARTH, WATER, AIR, FIRE, COSMIC, } = require("../data/elements");
const allElements = [ EARTH, WATER, AIR, FIRE, COSMIC, ];

const allElementNames = allElements.join("|");
const elementCommandExpression = RegExp(`^(${allElementNames}) ?$`, "i");

const gods = require("../data/gods/all.js");
const elementMap = gods.reduce((hash, god) => {
  if (!god.elements) {
    return hash;
  }
  
  for (elem of god.elements) {
    if (!hash[elem]) {
      hash[elem] = [ god.name ];
    } else {
      hash[elem] = [ ...hash[elem], god.name ];
    }
  }
  return hash;
}, {});

const elementCommand = new Command({
  command: elementCommandExpression,
  name: "Elements",
  test: false,
  example: "water",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    const elementName = commandMatches[1];
    const currentElement = allElements.find((element) => {
      RegExp(element, "i").test(elementName);
    });
    if (!currentElement) {
      logger.debug("Matched elementCommand with: " + elementName + " but failed to find element in list.");
      return;
    }

    // Protects us if an element doesn't yet exist in the actual data.
    if (!elementMap[currentElement]) {
      logger.debug("Matched elementCommand with: " + elementName + " but no boons in the data have this element.");
      return;
    }
    
    const formattedGodNames = elementMap[currentElement].map((name) => `[${name}]`).join(" ");
    const message = `Gods with [${currentElement}] boons: ${formattedGodNames}`;
    bot.say(channelId, message);
  },
});

module.exports = { elementCommand };