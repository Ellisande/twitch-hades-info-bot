const { hammerFormatter } = require("./formatter");
const weaponNameString = "Axe";

const advancingWhirlwind = {
  name: "Advancing Whirlwind",
  description: "Your [omega] Attack fires ahead of you and deals +80% damage",
  exclusives: [],
};

const empoweringGuard = {
  name: "Empowering Guard",
  description:
    "After blocking a foe with your Special, deal +50% damage for 15 seconds",
  exclusives: [],
};

const gigaCleaver = {
  name: "Giga Cleaver",
  description:
    "You can Channel +15 [mana] into your [omega] Special to fire 2 times ahead of you",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const axeHammerAbilities = [
  advancingWhirlwind,
  empoweringGuard,
  gigaCleaver,
].map(formatter);

module.exports = {
  axeHammerAbilities,
};
