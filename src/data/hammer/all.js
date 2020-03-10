const { swordHammerAbilities } = require("./sword");
const { spearHammerAbilities } = require("./spear");
const { bowHammerAbilities } = require("./bow");
const { shieldHammerAbilities } = require("./shield");
const { gunHammerAbilities } = require("./gun");
const { fistHammerAbilities } = require("./fist");

const all = [
  ...swordHammerAbilities,
  ...spearHammerAbilities,
  ...bowHammerAbilities,
  ...shieldHammerAbilities,
  ...gunHammerAbilities,
  ...fistHammerAbilities
];

module.exports = {
  allHammerAbilities: all
};
