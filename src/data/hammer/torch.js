const { hammerFormatter } = require("./formatter");
const weaponNameString = "Torch";

const tripleHex = {
  name: "Triple Hex",
  description: "Your [omega] special creates +1 flame",
  exclusives: [],
};

const cleanHelix = {
  name: "Clean Helix",
  description:
    "You Channel your [omega] Special 20% faster, and it uses -2 mana",
  exclusives: [],
};

const growingCoils = {
  name: "Growing Coils",
  description:
    "Your Specials grow in size and deal up to +25% damage the longer they are active",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const torchHammerAbilities = [tripleHex, cleanHelix, growingCoils].map(
  formatter
);

module.exports = {
  torchHammerAbilities,
};
