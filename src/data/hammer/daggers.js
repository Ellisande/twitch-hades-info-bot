const { hammerFormatter } = require("./formatter");
const weaponNameString = "Daggers";

const formatter = hammerFormatter(weaponNameString);

const daggersHammerAbilities = [].map(formatter);

module.exports = {
  daggersHammerAbilities,
};
