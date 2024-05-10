const { axeHammerAbilities } = require("./axe");
const { staffHammerAbilities } = require("./staff");
const { torchHammerAbilities } = require("./torch");
const { daggersHammerAbilities } = require("./daggers");
const { skullHammerAbilities } = require("./skull");

const all = [
  ...axeHammerAbilities,
  ...staffHammerAbilities,
  ...torchHammerAbilities,
  ...daggersHammerAbilities,
  ...skullHammerAbilities,
];

module.exports = {
  allHammerAbilities: all,
};
