const { find, reduce, mapKeys, omitBy } = require("lodash");
const { Command } = require("./command");
const gods = require("../data/gods/all.js");

const abilityMap = gods
  .map(god =>
    reduce(
      god.abilities,
      (hash, ability, key) => ({
        ...hash,
        [ability.name]: god[key]
      }),
      {}
    )
  )
  .reduce((resultObj, current) => ({ ...resultObj, ...current }));

const abilityMapWithoutNone = omitBy(abilityMap, (value, key) =>
  /None/i.test(key)
);

const abilityExpressionMap = mapKeys(abilityMapWithoutNone, (_, abilityName) =>
  abilityName.replace(" ", " *")
);

const abilityNameRegexes = Object.keys(abilityExpressionMap).join("|");

const abilityCommand = RegExp(`^(${abilityNameRegexes})$`, "i");

const boonCommand = new Command({
  command: abilityCommand,
  name: "Ability",
  test: false,
  example: "tipsy shot",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const message = find(abilityExpressionMap, (_, expressionString) =>
      RegExp(expressionString, "i").test(abilityName)
    )();
    bot.say(channelId, message);
  }
});

module.exports = { boonCommand };
