const { invert } = require("lodash");

const COMMON = "Common";
const RARE = "Rare";
const EPIC = "Epic";
const LEGENDARY = "Legendary";

const abbreviationLookup = {
  [COMMON]: "c",
  [RARE]: "r",
  [EPIC]: "e",
  [LEGENDARY]: "l"
};

const abbreviate = rarity => abbreviationLookup[rarity];
const expand = abbreviation => invert(abbreviationLookup)[abbreviation];

module.exports = {
  COMMON,
  RARE,
  EPIC,
  LEGENDARY,
  abbreviate,
  expand
};
