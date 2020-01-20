const { hammerFormatter } = require("./formatter");
const weaponNameString = "Bow";

const twinShot = {
  name: "Twin Shot",
  description: "Your Attack fires 2 shots side-by-side, but has reduced range.",
  exclusives: ["triple shot"]
};

const sniperShot = {
  name: "Sniper Shot",
  description: "Your Attack deals +300% damage to distant foes.",
  exclusives: []
};

const explosiveShot = {
  name: "Explosive Shot",
  description:
    "Your Attack deals +300% damage in an area, but chargers slower.",
  exclusives: ["flurry shot"]
};

const flurryShot = {
  name: "Flurry Shot",
  description: "Hold Attack to shoot rapidly, but you cannot Power Shot.",
  exclusives: ["perfect shot", "explosive shot"]
};

const piercingBarrage = {
  name: "Piercing Barrage",
  description: "Your Special pierces foes and deals +100% damage to armor.",
  exclusives: ["chrion aspect"]
};

const perfectShot = {
  name: "Perfect Shot",
  description: "Your Power Shot deals +100% damage.",
  exclusives: ["flurry shot"]
};

const relentlessBarrage = {
  name: "Relentless Barrage",
  description: "Your Special shoots +4 shots",
  exclusives: []
};

const tripleShot = {
  name: "Triple Shot",
  description: "Your Attack fires 3 shots in a spread pattern",
  exclusives: ["twin shot"]
};

const formatter = hammerFormatter(weaponNameString);

const bowHammerAbilities = [
  twinShot,
  sniperShot,
  explosiveShot,
  flurryShot,
  piercingBarrage,
  perfectShot,
  relentlessBarrage,
  tripleShot
].map(formatter);

module.exports = {
  bowHammerAbilities
};
