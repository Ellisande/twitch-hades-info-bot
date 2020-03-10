const { hammerFormatter } = require("./formatter");
const weaponNameString = "Fists";

const rollingKnuckle = {
  name: "Rolling Knuckle",
  description: "You Attack sequence ends with a +60% damage Dash-Strike",
  exclusives: []
};

const flyingCutter = {
  name: "Flying Cutter",
  description: "Hold Special for longer range and up to +200% damage.",
  exclusives: []
};

const quakeCutter = {
  name: "Quick Cutter",
  description:
    "After using your Special, deal 80 damage in an area where you land.",
  exclusives: []
};

const formatter = hammerFormatter(weaponNameString);

const fistHammerAbilities = [rollingKnuckle, flyingCutter, quakeCutter].map(
  formatter
);

module.exports = {
  fistHammerAbilities;
};
