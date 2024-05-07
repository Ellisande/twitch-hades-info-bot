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

const meltingComet = {
  name: "Melting Comet",
  description:
    "Your Special fires straight ahead and destroys 80% of any Armor (based on the total)",
  exclusives: [],
};

const direCandle = {
  name: "Dire Candle",
  description:
    "Your [omega] Attack first 1 shot that deals +1500% damage, but uses 20 [mana]",
  exclusives: [],
};

const furiousFire = {
  name: "Furious Fire",
  description:
    "While you Channel your Attacks, they deal +10% damage and you move +30% faster",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const torchHammerAbilities = [
  tripleHex,
  cleanHelix,
  growingCoils,
  meltingComet,
  direCandle,
  furiousFire,
].map(formatter);

module.exports = {
  torchHammerAbilities,
};