const { hammerFormatter } = require("./formatter");
const weaponNameString = "Shield";

const dreadFlight = {
  name: "Dread Flight",
  description: "Your Special can hit up to 6 foes before returning.",
  exclusives: ["zeus aspect"],
};

const suddenRush = {
  name: "Sudden Rush",
  description:
    "Your Bull Rush charges much faster, but does not knock foes away.",
  exclusives: [],
};

const pulverizingBlow = {
  name: "Pulverizing Blow",
  description: "Your Attack hits twice, but does not knock foes away.",
  exclusives: [],
};

const dashingWallop = {
  name: "Dashing Wallop",
  description: "Your Dash Attack deals +50% damage in a larger area.",
  exclusives: [],
};

const explosiveReturn = {
  name: "Explosive Return",
  description: "Your Special deals 60 damage to nearby foes when you catch it.",
  exclusives: [],
};

const minotaurRush = {
  name: "Minotaur Rush",
  description: "Your Bull Rush gains a Power Shot.",
  exclusives: [],
};

const breachingRush = {
  name: "Breaching Rush",
  description: "Your Bull Rush deals +400% damage to Armor.",
  exclusives: [],
};

const chargedShot = {
  name: "Charged Shot",
  description:
    "Your Bull Rush instead fires a piercing shot that deals 80 damage.",
  exclusives: [],
};

const chargedThrow = {
  name: "Charged Throw",
  description: "Hold Special to charge your throw for up to +300% damage.",
  exclusives: [],
};

const chargedFlight = {
  name: "Charged Flight",
  description: "Hold Special to charge your throw for up to +400% damage.",
  exclusives: [],
};

const dashingFlight = {
  name: "Dashing Flight",
  description:
    "While your Dash, your Special is faster and deals +100% damage.",
  exclusives: [],
};

const empoweringFlight = {
  name: "Empowering Flight",
  description: "After your Special hits, your next 2 Attacks deal +80% damage.",
  exclusives: [],
};

const unyieldingDefense = {
  name: "Unyielding Defense",
  description:
    "After using your Naegling's Board Cast your are Sturdy for 3 seconds",
  exclusives: [],
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
  chargedShot,
  chargedThrow,
  chargedFlight,
  dashingFlight,
  empoweringFlight,
  unyieldingDefense,
].map(formatter);

module.exports = {
  shieldHammerAbilities,
};
