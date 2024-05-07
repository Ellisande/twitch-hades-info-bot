const { hammerFormatter } = require("./formatter");
const weaponNameString = "Staff";

const vampiricCataclysm = {
  name: "Vampiric Cataclysm",
  description:
    "After you slay a foe with your [omega] attack, restore 5 health",
  exclusives: [],
};

const aethericMoonburst = {
  name: "Aetheric Moonburst",
  description:
    "Your [omega] Special gains a Power Shot that does +20% damage and restores 5 mana",
  exclusives: [],
};

const shimmeringMoonshot = {
  name: "Shimmering Moonshot",
  description:
    "Your Special bounces towards up to 2 more foes, dealing +10% damage for each hit",
  exclusives: [],
};

const meltingSwipe = {
  name: "Melting Swipe",
  description:
    "Your Dash-Strike hits a larger area and destroys 60% of any Amor (based on the total)",
  exclusives: [],
};

const crossCataclysm = {
  name: "Cross Cataclysm",
  description:
    "Your [omega] Attack deals +40% damage and also strikes sideways",
  exclusives: [],
};

const extendingWallop = {
  name: "Extending Wallop",
  description:
    "Your Attack has more range and deals +50% damage to distant foes",
  exclusives: [],
};

const doubleCataclysm = {
  name: "Double Cataclysm",
  description:
    "Your [omega] Attack hits 2 times, but not longer strikes behind you",
  exclusives: [],
};

const doubleWallop = {
  name: "Double Wallop",
  description: "Your Attack hits 2 times",
  exclusives: [],
};

const doubleMoonshot = {
  name: "Double Moonshot",
  description: "Your Special fires 2 projectiles that seek foes.",
  exclusives: [],
};

const marauderWallop = {
  name: "Double Moonshot",
  description:
    "Hold Attack to strike 50% faster, but you cannot use your [omega] Attack",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const staffHammerAbilities = [
  vampiricCataclysm,
  aethericMoonburst,
  shimmeringMoonshot,
  meltingSwipe,
  crossCataclysm,
  extendingWallop,
  doubleMoonshot,
  doubleCataclysm,
  doubleWallop,
  marauderWallop,
].map(formatter);

module.exports = {
  staffHammerAbilities,
};
