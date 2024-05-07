const { Command } = require("./command");
const weapons = require("../data/weapons.js");
const weaponNames = Object.keys(weapons);

const weaponCommand = new Command({
  command: /^(staff|daggers|axe|torch) ?(special|attack|info)?$/i,
  name: "Weapon",
  test: false,
  example: "sword",
  handler: ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const weapon = commandMatches[1];
    logger.debug("Weapon to find " + weapon);
    const weaponInfo = weapons[weapon];
    logger.debug("Weapon info found ", weaponInfo);
    const variant = commandMatches[2];
    logger.debug("Variant to use " + variant);
    const message = variant ? weaponInfo[variant] : weaponInfo.info;
    logger.debug("Weapon message " + message);
    bot.say(channelId, message);
  },
});

module.exports = { weaponCommand };
