const { swordHammerAbilities } = require("./sword");
const { spearHammerAbilities } = require("./spear");
const { bowHammerAbilities } = require("./bow");
const { shieldHammerAbilities } = require("./shield");
const { gunHammerAbilities } = require("./gun");

const all = [
  ...swordHammerAbilities,
  ...spearHammerAbilities,
  ...bowHammerAbilities,
  ...shieldHammerAbilities,
  ...gunHammerAbilities
];

module.exports = {
  allHammerAbilities: all
};
