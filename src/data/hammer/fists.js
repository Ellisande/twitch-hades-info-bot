const { hammerFormatter } = require("./formatter");
const weaponNameString = "fists";

const rollingKnuckle = {
  name: "Rolling Knuckle",
  description: "You Attack sequence ends with a +60% damage Dash-Strike",
  exclusives: [],
};

const flyingCutter = {
  name: "Flying Cutter",
  description: "Hold Special for longer range and up to +200% damage.",
  exclusives: [],
};

const quakeCutter = {
  name: "Quake Cutter",
  description:
    "After using your Special, deal 80 damage in an area where you land.",
  exclusives: [],
};

const concentratedKnuckle = {
  name: "Concentrated Knuckle",
  description:
    "Your Attack deals +5 damage for each uninterrupted hit to a foe.",
  exclusives: [],
};

const drainingCutter = {
  name: "Draining Cutter",
  description: "Whenever your Special slays foes, restore 2% health",
  exclusives: [],
};

const longKnuckle = {
  name: "Long Knuckle",
  description: "Your Attack has more range and deals 20% increased damage",
  exclusives: [],
};

const explosiveUpper = {
  name: "Explosive Upper",
  description: "Your Dash-Upper deals +50% damage in an area",
  exclusives: [],
};

const breachingCross = {
  name: "Breaching Cross",
  description:
    "Your Dash-Strike pierces foes and deals +1000% damage to Armor.",
  exclusives: [],
};

const rushKick = {
  name: "Rush Kick",
  description:
    "Your Special dashes toward foes with a kick that deals 50 damage",
  exclusives: [],
};

const colossusKnuckle = {
  name: "Colossus Knuckle",
  description: "While using your Attack or Special you are Sturdy",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const fistHammerAbilities = [
  rollingKnuckle,
  flyingCutter,
  quakeCutter,
  concentratedKnuckle,
  drainingCutter,
  longKnuckle,
  explosiveUpper,
  breachingCross,
  rushKick,
  colossusKnuckle,
].map(formatter);

module.exports = {
  fistHammerAbilities,
};
