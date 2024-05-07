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

const info =
  "Zeus, God of Thunder. His powers create bouncing lightning projectiles.";

const attack = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 10,
    },
    [RARE]: {
      1: 12.5,
    },
    [EPIC]: {
      1: 15,
    },
    [HEROIC]: {
      1: 20,
    },
  },
};

const special = {
  name: "Heaven Flourish",
  type: SPECIAL,
  info: (value) => `Your Specials inflict ${value} [blitz]`,
  values: {
    [COMMON]: {
      1: 100,
    },
    // [RARE]: {
    //   1: "37.5",
    // },
    // [EPIC]: {
    //   1: "45",
    // },
    // [HEROIC]: {
    //   1: 60,
    // },
  },
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 60,
    },
    [RARE]: {
      1: 72,
    },
    [EPIC]: {
      1: 84,
    },
    [HEROIC]: {
      1: 96,
    },
  },
};

const stormRing = {
  name: "Storm Ring",
  type: OTHER,
  info: (value) =>
    `Your omega cast also causes lightning bolts to repeatedly strike 1 foe at a time for ${value} damage`,
  values: {
    [COMMON]: { 1: 30, 2: 40 },
  },
};

dashBase = 20;
const dash = {
  name: "Thunder Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint causes nearby foes to be struck by lightning bolts for ${value} damage, which use 3 [mana] each`,
  values: calculateFlat(dashBase, true),
};

const revenge = {
  name: "Divine Vengeance",
  type: REVENGE,
  info: (value) =>
    `After you take damage, your foe is stuck by lightning for ${value}, and again 50% of the time (up to 3 times)`,
  values: calculateFlat(100, true),
};

const ionicGain = {
  name: "Ionic Gain",
  type: OTHER,
  info: (value) =>
    `Gradually restore [mana] by ${value}/sec, but your total amount is reduced by 70%`,
  values: {
    [COMMON]: { 1: 6 },
    // [RARE]: { 1: 4 },
    // [EPIC]: { 1: 6 },
    // [HEROIC]: { 1: 8 },
  },
};

const lightningLance = {
  name: "Lightning Lance",
  type: OTHER,
  info: (value) =>
    `Hold Cast to aim where the binding circle appears. Foes within are stuck by lightning for ${value} damage`,
  values: {
    [RARE]: {
      1: "70",
      2: "90",
      3: "100",
      4: "105",
    },
    // [RARE]: {
    //   1: "72%",
    // },
    // [EPIC]: {
    //   1: "84%",
    // },
    // [HEROIC]: {
    //   1: "95%",
    // },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  lightningLance,
  ionicGain,
  stormRing,
};

const base = {
  name: "Zeus",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const zeus = {
  ...base,
  ...formattedAbilities,
};

module.exports = { zeus };
