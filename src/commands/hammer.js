const { capitalize } = require("lodash");
const { Command } = require("./command");
const { staffHammerAbilities } = require("../data/hammer/staff");
const { axeHammerAbilities } = require("../data/hammer/axe");
const { daggersHammerAbilities } = require("../data/hammer/daggers");
const { torchHammerAbilities } = require("../data/hammer/torch");
const weaponAbilities = {
  staff: staffHammerAbilities,
  axe: axeHammerAbilities,
  daggers: daggersHammerAbilities,
  torch: torchHammerAbilities,
};

const baseDescription =
  "Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run. Learn more with !hammer [staff] [axe] [daggers] [torch] [bow] [fists].";

const hammerCommand = new Command({
  command:
    /^(hammer|daedalus|daedalus hammer)(?: *)(staff|axe|daggers|torch?)?$/i,
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

    const message = `${capitalize(secondCommand)} hammer upgrades: ${abilities
      .map(({ name }) => `[${name}]`)
      .join(" ")}`;
    bot.say(channelId, message);
  },
});

module.exports = { hammerCommand };
