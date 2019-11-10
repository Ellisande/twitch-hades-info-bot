const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");
const { godListCommand } = require("./godList");
const { boonCommand } = require("./boon");

const allCommands = [
  pingCommand,
  weaponCommand,
  godCommand,
  godListCommand,
  boonCommand
];

module.exports = { allCommands };
