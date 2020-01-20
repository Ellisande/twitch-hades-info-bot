const { hammerFormatter } = require("./formatter");
const weaponNameString = "Gun";

const flurryFire = {
  name: "Flurry Fire",
  description:
    "Your Attack is faster and more accurate; gain +6 ammo capacity.",
  exclusives: ["infinity chamber", "spread fire"]
};

const spreadFire = {
  name: "Spread Fire",
  description: "Your Attack is replaced with a short-range spread of 5 shots.",
  exclusives: ["infinity chamber", "spread fire"]
};

const explosiveFire = {
  name: "Explosive Fire",
  description: "Your Attack deals damage in an area and briefly staggers foes.",
  exclusives: ["piercing fire"]
};

const infinityChamber = {
  name: "Infinity Chamber",
  description: "You never have to reload.",
  exclusives: ["spread fire", "flurry fire"]
};

const piercingFire = {
  name: "Piercing Fire",
  description: "Your Attack pierces foes and deals +50 damage to Armor",
  exclusives: ["explosive fire"]
};

const tripleBomb = {
  name: "Triple Bomb",
  description: "You can use your Special 3 times in rapid succession.",
  exclusives: []
};

const rocketBomb = {
  name: "Rocket Bomb",
  description:
    "Your Special is replaced with a rocket that deals 80 base damage.",
  exclusives: []
};

const inescapableBlast = {
  name: "Inescapable Blast",
  description:
    "While firing your Special, foes in the target radius are 75% slower.",
  exclusives: []
};

const formatter = hammerFormatter(weaponNameString);

const gunHammerAbilities = [
  flurryFire,
  spreadFire,
  explosiveFire,
  infinityChamber,
  piercingFire,
  tripleBomb,
  rocketBomb,
  inescapableBlast
].map(formatter);

module.exports = {
  gunHammerAbilities
};