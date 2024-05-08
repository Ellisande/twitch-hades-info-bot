const { hammerFormatter } = require("./formatter");
const weaponNameString = "Skull";

const formatter = hammerFormatter(weaponNameString);

const possessedArray = {
  name: "Possessed Array",
  description:
    "Your Skulls fire your [omega] Attack for 0 [mana] whenever retrieved, but take longer to drop",
  exclusives: [],
};

const fullSalvo = {
  name: "Full Salvo",
  description: "Your Attacks fire your Skulls all at once in a spread pattern",
  exclusives: [],
};

const fetchingArray = {
  name: "Fetching Array",
  description: "Your Skulls return to your automatically, but you have -1 ammo",
  exclusives: [],
};

const skullHammerAbilities = [possessedArray, fullSalvo, fetchingArray].map(
  formatter
);

module.exports = {
  skullHammerAbilities,
};
