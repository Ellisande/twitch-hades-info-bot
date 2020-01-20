const { hammerFormatter } = require("./formatter");
const weaponNameString = "Spear";

const extendingJab = {
  name: "Extending Jab",
  description:
    "Your Attack has more range and deals +40% damage to distant foes.",
  exclusives: []
};

const multiSkewer = {
  name: "Multi Skewer",
  description:
    "Your Special bounces to up to 7 foes, diealing +30% damage for each.",
  exclusives: ["exploding launcher"]
};

const armorSkewer = {
  name: "Armor Skewer",
  description: "Your Special deal +400% damage to Armor",
  exclusives: []
};

const viciousSkewer = {
  name: "Vicious Skewer",
  description:
    "Your Special deals +50% damage; +50% Critical chance on recovery.",
  exclusives: ["exploding launcher"]
};

const explodingLauncher = {
  name: "Exploding Launcher",
  description:
    "Your Special is replaced with a shot that deals 60 damage in an area.",
  exclusives: ["achilles aspect", "vicious skewer", "multi skewer"]
};

const massiveSpin = {
  name: "Massive Spin",
  description: "Your Spin Attack deals +125% damage and hits a larger area.",
  exclusives: ["flurry jab"]
};

const quickSpin = {
  name: "Quick Spin",
  description: "Your Spin Attack charges and recovers much faster.",
  exclusives: ["flurry jab"]
};

const flurryJab = {
  name: "Flurry Jab",
  description: "Hold Attack to strike rapidly, but you cannot Spin Attack.",
  exclusives: ["massive spin", "quick spin"]
};

const formatter = hammerFormatter(weaponNameString);

const spearHammerAbilities = [
  extendingJab,
  multiSkewer,
  armorSkewer,
  viciousSkewer,
  explodingLauncher,
  massiveSpin,
  quickSpin,
  flurryJab
].map(formatter);

module.exports = {
  spearHammerAbilities
};
