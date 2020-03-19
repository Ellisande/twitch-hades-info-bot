const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");
const { godListCommand } = require("./godList");
const { boonCommand } = require("./boon");
const { hammerAbilityCommand } = require("./hammerAbility");
const { hammerCommand } = require("./hammer");
const { effectCommand } = require("./effect");

const allCommands = [
  pingCommand,
  weaponCommand,
  godCommand,
  godListCommand,
  boonCommand,
  hammerAbilityCommand,
  hammerCommand,
  effectCommand
];

module.exports = { allCommands };
