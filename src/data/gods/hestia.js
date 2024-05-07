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

const info = "Goddess of flame";

const attackBase = "20";
const attack = {
  name: "Flame Strike",
  type: ATTACK,
  info: (value) => `Your attacks inflict ${value} scorch damage`,
  values: {
    [COMMON]: {
      1: 20,
      2: 25,
    },
    [RARE]: {
      1: 25,
    },
  },
};

const specialBase = 15;
const special = {
  name: "Flame Flourish",
  type: SPECIAL,
  info: (value) => `Your Special inflicts ${value} [scorch] damage`,
  values: {
    [EPIC]: { 1: 25 },
  },
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 90,
    },
    [RARE]: {
      1: 99,
    },
    [EPIC]: {
      1: 108,
    },
    [HEROIC]: {
      1: 117,
    },
  },
};

const dash = {
  name: "Soot Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint destroys most ranged shots near you, and inflicts ${value} [scorch] on foes that fired.`,
  values: {
    [COMMON]: {
      1: 2,
    },
    [EPIC]: {
      1: 6,
    },
  },
};

const hearthGain = {
  name: "Hearth Gain",
  type: OTHER,
  info: (value) =>
    `Rapidly restore ${value} [mana] every second, but you have -20% less max health`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const controlledBurn = {
  name: "Controlled Burn",
  type: OTHER,
  info: (value) =>
    `Your [omega] Special also launches a fiery projectile that deals ${value} damage, but also uses +10 [mana]`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const burntOffering = {
  name: "Burnt Offering",
  type: OTHER,
  info: (value) =>
    `Gain ${value} max health and max magic, but give up 1 boon selected by Hestia`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const naturalGas = {
  name: "Natural Gas",
  type: OTHER,
  info: (value) =>
    `Whenever [scorch]-afflicted foes are slain, they damage nearby foes for ${value} damage`,
  values: {
    [EPIC]: {
      1: 120,
    },
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
  hearthGain,
  controlledBurn,
  burntOffering,
  naturalGas,
};

const base = {
  name: "Hestia",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hestia = {
  ...base,
  ...formattedAbilities,
};

module.exports = { hestia };
