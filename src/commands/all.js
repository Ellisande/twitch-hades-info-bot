const { pingCommand } = require("./ping");
const { weaponCommand } = require("./weapon");
const { godCommand } = require("./god");

const allCommands = [pingCommand, weaponCommand, godCommand];

module.exports = { allCommands };
