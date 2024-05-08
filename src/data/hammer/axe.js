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

const meltingShedder = {
  name: "Melting Shredder",
  description: "Your Special destroys 35% of any Armor (based on the total)",
  exclusives: [],
};

const marauderSlash = {
  name: "Marauder Slash",
  description:
    "Hold Attack to strike 30% faster, but you can not use your [omega] attack",
  exclusives: [],
};

const suddenCleaver = {
  name: "Sudden Cleaver",
  description: "Your Channel your [omega] Special 50% faster",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const axeHammerAbilities = [
  advancingWhirlwind,
  empoweringGuard,
  gigaCleaver,
  meltingShedder,
  marauderSlash,
  suddenCleaver,
].map(formatter);

module.exports = {
  axeHammerAbilities,
};
