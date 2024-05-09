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

const loomingIgnition = {
  name: "Looming Ignition",
  description:
    "Your Attack grows up to 50% bigger and stronger over 2 seconds or until it explodes",
  exclusives: [],
};

const suddenDriver = {
  name: "Sudden Driver",
  description: "Your Specials are 35% faster",
  exclusives: [],
};

const sidelongCrash = {
  name: "Sidelong Crash",
  description:
    "Your [omega] Special projectiles deal +120% damage and shoot farther, but only to one side",
  exclusives: [],
};

const bolsteredArray = {
  name: "Bolstered Array",
  description: "Gain +2 Skulls",
  exclusives: [],
};

const skullHammerAbilities = [
  possessedArray,
  fullSalvo,
  fetchingArray,
  loomingIgnition,
  sidelongCrash,
  suddenDriver,
  bolsteredArray,
].map(formatter);

module.exports = {
  skullHammerAbilities,
};
