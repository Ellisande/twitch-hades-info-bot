const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID,
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateFlat,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Hephaestus, God of the Forge";

const attackBase = "50";
const attack = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: { [RARE]: { 1: "50%" } },
};

const specialBase = 80;
const special = {
  name: "Volcanic Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Special occasionally creates a blast that deals 400 damage in the area. Recharges after ${value} seconds`,
  values: {
    [COMMON]: {
      1: "20",
    },
  },
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 24,
    },
  },
};

const fixedGain = {
  name: "Fixed Gain",
  type: OTHER,
  info: (value) =>
    `You take -10% damage, and restore ${value} [mana] whenever you take damage`,
  values: {
    [COMMON]: 50,
  },
};

const dash = {
  name: "Unknown",
  type: DASH,
  info: (value) => `Unknown`,
  values: {
    [RARE]: {
      1: "40%",
    },
    [EPIC]: {
      1: "50%",
    },
  },
};

const toughTrade = {
  name: "Tough Trade",
  type: OTHER,
  info: (value) =>
    `If you take damage during your Attacks and Specials, they are ${value} stronger if they hit.`,
  values: {
    [COMMON]: { 1: "100%" },
  },
};

const revenge = {
  name: "Unknown",
  type: REVENGE,
  info: (value) => `Unknown`,
  values: calculateFlat(50, true),
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  toughTrade,
  fixedGain,
};

const base = {
  name: "Hephaestus",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hephaestus = {
  ...base,
  ...formattedAbilities,
};

module.exports = { hephaestus };
