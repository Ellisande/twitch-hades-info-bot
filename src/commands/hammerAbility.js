const { allHammerAbilities } = require("../data/hammer/all");
const { Command } = require("./command");
const abilityCommandBase = allHammerAbilities.map(ability => ability.matcher);
const abilityCommand = RegExp(`^(${abilityCommandBase.join("|")})$`, "i");

const hammerAbilityCommand = new Command({
  command: abilityCommand,
  name: "Hammer Ability",
  test: false,
  example: "flurry slash",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const currentAbility = allHammerAbilities.find(ability => {
      const matches = RegExp(ability.matcher, "i").test(abilityName);
      return matches;
    });
    if (!currentAbility) {
      return;
    }
    const message = bot.say(channelId, currentAbility.description);
  }
});

module.exports = { hammerAbilityCommand };
