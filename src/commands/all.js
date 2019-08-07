const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");
const { godListCommand } = require("./godList");

const allCommands = [pingCommand, weaponCommand, godCommand, godListCommand];

module.exports = { allCommands };
