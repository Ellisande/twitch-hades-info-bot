const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");
const { godList } = require("./godList");

const allCommands = [pingCommand, weaponCommand, godCommand];

module.exports = { allCommands };
