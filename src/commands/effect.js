const { statuses } = require("../data/status");
const { pactModifiers } = require("../data/pact");
const { Command } = require("./command");
const allEffects = [...statuses, ...pactModifiers];
const effectCommandBase = allEffects.map(effect => effect.matcher);
const effectCommandExp = RegExp(`^(${effectCommandBase.join("|")})$`, "i");

const effectCommand = new Command({
  command: effectCommandExp,
  name: "Effects",
  test: false,
  example: "weak",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const currentAbility = allEffects.find(ability => {
      const matches = RegExp(ability.matcher, "i").test(abilityName);
      return matches;
    });
    if (!currentAbility) {
      return;
    }
    const message = bot.say(channelId, currentAbility.description);
  }
});

module.exports = { effectCommand };
