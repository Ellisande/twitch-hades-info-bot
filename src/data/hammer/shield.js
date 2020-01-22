const { hammerFormatter } = require("./formatter");
const weaponNameString = "Shield";

const dreadFlight = {
  name: "Dread Flight",
  description: "Your Special can hit up to 6 foes before returning.",
  exclusives: ["zeus aspect"]
};

const suddenRush = {
  name: "Sudden Rush",
  description:
    "Your Bull Rush charges much faster, but does not knock foes away.",
  exclusives: []
};

const pulverizingBlow = {
  name: "Pulverizing Blow",
  description: "Your Attack hits twice, but does not knock foes away.",
  exclusives: []
};

const dashingWallop = {
  name: "Dashing Wallop",
  description: "Your Dash Attack deals +50% damage in a larger area.",
  exclusives: []
};

const explosiveReturn = {
  name: "Explosive Return",
  description: "Your Special deals 60 damage to nearby foes when you catch it.",
  exclusives: []
};

const minotaurRush = {
  name: "Minotaur Rush",
  description: "Your Bull Rush gains a Power Shot.",
  exclusives: []
};

const breachingRush = {
  name: "Breaching Rush",
  description: "Your Bull Rush deals +400% damage to Armor.",
  exclusives: []
};

const chargedShot = {
  name: "Charged Shot",
  description:
    "Your Bull Rush instead fires a piercing shot that deals 80 damage.",
  exclusives: []
};

const formatter = hammerFormatter(weaponNameString);

const shieldHammerAbilities = [
  dreadFlight,
  suddenRush,
  pulverizingBlow,
  dashingWallop,
  explosiveReturn,
  minotaurRush,
  breachingRush,
  chargedShot
].map(formatter);

module.exports = {
  shieldHammerAbilities
};
