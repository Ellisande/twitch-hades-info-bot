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
  name: "Heaven Strike",
  type: ATTACK,
  info: (value) => `Your Attacks inflict ${value} [blitz] damage`,
  values: {
    [RARE]: {
      1: 120,
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
    [RARE]: {
      3: "210",
    },
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
    [EPIC]: { 2: 60 },
  },
};

dashBase = 20;
const dash = {
  name: "Thunder Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint causes nearby foes to be struck by lightning bolts for ${value} damage, which use 3 [mana] each`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 25 },
  },
};

const revenge = {
  name: "Divine Vengeance",
  type: REVENGE,
  info: (value) =>
    `After you take damage, your foe is stuck by lightning for ${value}, and again 50% of the time (up to 3 times)`,
  values: {
    [RARE]: { 1: 100 },
  },
};

const ionicGain = {
  name: "Ionic Gain",
  type: OTHER,
  info: (value) =>
    `Gradually restore [mana] by ${value}/sec, but your total amount is reduced by 70%`,
  values: {
    [COMMON]: { 1: 6 },
    [RARE]: { 1: 6 },
    // [EPIC]: { 1: 6 },
    // [HEROIC]: { 1: 8 },
  },
};

const staticShock = {
  name: "Static Shock",
  type: OTHER,
  info: (value) =>
    `After you enter a Location, [prime] 50 [mana] to make your strikes emit chain-lightning that deals ${value} damage`,
  values: {
    // [COMMON]: { 1: 6 },
    [RARE]: { 1: 15 },
    // [EPIC]: { 1: 6 },
    // [HEROIC]: { 1: 8 },
  },
};

const doubleStrike = {
  name: "Double Strike",
  type: OTHER,
  info: (value) =>
    `Your lightning bolt effects have a ${value} chance to strike 1 more time`,
  values: {
    // [COMMON]: { 1: 6 },
    // [RARE]: { 1: 15 },
    [EPIC]: { 1: "15%" },
    // [HEROIC]: { 1: 8 },
  },
};

const spiritSurge = {
  name: "Spirit Surge",
  type: OTHER,
  info: (value) =>
    `While you have no more than 10 [mana], all foes are occasionally struck by lightning for ${value} damage`,
  values: {
    // [COMMON]: { 1: 6 },
    // [RARE]: { 1: 15 },
    [EPIC]: { 1: "90" },
    // [HEROIC]: { 1: 8 },
  },
};

const lightningLance = {
  name: "Lightning Lance",
  type: OTHER,
  info: (value) =>
    `Hold Cast to aim where the binding circle appears. Foes within are stuck by lightning for ${value} damage`,
  values: {
    [COMMON]: { 1: 50 },
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
  staticShock,
  doubleStrike,
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
