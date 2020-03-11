const { capitalize } = require("lodash");
const { Command } = require("./command");
const { swordHammerAbilities } = require("../data/hammer/sword");
const { shieldHammerAbilities } = require("../data/hammer/shield");
const { gunHammerAbilities } = require("../data/hammer/gun");
const { spearHammerAbilities } = require("../data/hammer/spear");
const { bowHammerAbilities } = require("../data/hammer/bow");
const { fistHammerAbilities } = require("../data/hammer/fists");
const weaponAbilities = {
  sword: swordHammerAbilities,
  shield: shieldHammerAbilities,
  gun: gunHammerAbilities,
  bow: bowHammerAbilities,
  spear: spearHammerAbilities,
  fists: fistHammerAbilities
};

const baseDescription =
  "Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run. Learn more with !hammer [sword] [shield] [gun] [spear] [bow] [fists].";

const hammerCommand = new Command({
  command: /^(hammer|daedalus|daedalus hammer)(?: *)(sword|shield|bow|gun|spear|fists?)?$/i,
  name: "Hammer Command",
  test: false,
  example: "hammer",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    const secondCommand = commandMatches[2];
    if (!secondCommand) {
      bot.say(channelId, baseDescription);
      return;
    }
    const abilities = weaponAbilities[secondCommand.toLowerCase()];
    if (!abilities) {
      bot.say(channelId, baseDescription);

      return;
    }

    const message = `${capitalize(
      secondCommand
    )} hammer upgrades: ${abilities.map(({ name }) => `[${name}]`).join(" ")}`;
    bot.say(channelId, message);
  }
});

module.exports = { hammerCommand };
