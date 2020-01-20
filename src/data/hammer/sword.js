const { hammerFormatter } = require("./formatter");
const weaponNameString = "Sword";

const worldSplitter = {
  name: "World Splitter",
  description:
    "Your Attack is replaced with a big chop that deals 90 base damage.",
  exclusives: ["flurry slash", "cruel thrust"]
};

const flurrySlash = {
  name: "Flurry Slash",
  description: "Hold Attack to strike rapidly, dealing 25 base damage per hit.",
  exclusives: ["world splitter", "cruel thrust"]
};

const superNova = {
  name: "Super Nova",
  description: "Your Special hits a wider area and deals +20% damage.",
  exclusives: []
};

const doubleNova = {
  name: "Double Nova",
  description:
    "Your Special hits twice in a smaller area; no longer knocks foes away.",
  exclusives: []
};

const doubleEdge = {
  name: "Double Edge",
  description: "Your Dash Attack hits twice and deals +30% damage.",
  exclusives: []
};

const armorSlayer = {
  name: "Armor Slayer",
  description: "Your Attack deals +300% damage to Armor.",
  exclusives: []
};

const cruelThrust = {
  name: "Cruel Thrust",
  description: "Your Thrust deals +200% damage and has a +40% Critical chance.",
  exclusives: ["world splitter", "flurry slash"]
};

const piercingWave = {
  name: "Piercing Wave",
  description: "Your Attack fires a wave that pierces foes, dealing 20 damage.",
  exclusives: []
};

const formatter = hammerFormatter(weaponNameString);

const swordHammerAbilities = [
  worldSplitter,
  flurrySlash,
  superNova,
  doubleNova,
  doubleEdge,
  armorSlayer,
  cruelThrust,
  piercingWave
].map(formatter);

module.exports = {
  swordHammerAbilities
};