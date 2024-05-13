const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");
const { godListCommand } = require("./godList");
const { boonCommand } = require("./boon");
const { hammerAbilityCommand } = require("./hammerAbility");
const { hammerCommand } = require("./hammer");
const { effectCommand } = require("./effect");
const { effectListCommand } = require("./effectList");
const { elementCommand } = require("./element");
const { elementListCommand } = require("./elementList");

const allCommands = [
  pingCommand,
  weaponCommand,
  godCommand,
  godListCommand,
  boonCommand,
  hammerAbilityCommand,
  hammerCommand,
  effectCommand,
  effectListCommand,
  elementCommand,
  elementListCommand,
];

module.exports = { allCommands };
