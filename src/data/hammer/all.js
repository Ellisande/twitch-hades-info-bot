const { axeHammerAbilities } = require("./axe");
const { staffHammerAbilities } = require("./staff");
const { torchHammerAbilities } = require("./torch");
const { daggersHammerAbilities } = require("./daggers");

const all = [
  axeHammerAbilities,
  staffHammerAbilities,
  torchHammerAbilities,
  daggersHammerAbilities,
];

module.exports = {
  allHammerAbilities: all,
};
