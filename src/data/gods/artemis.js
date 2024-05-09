const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  OTHER,
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange,
  calculateFlat,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info =
  "Artemis, Goddess of the Hunt. Her powers cause critical hits and create seeking projectiles.";

const attack = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: "20%",
    },
    [RARE]: {
      1: `${20 * 1.3}-${20 * 1.5}`,
    },
    [EPIC]: {
      1: `${20 * 1.8}-${20 * 2}`,
    },
    [HEROIC]: {
      1: `${20 * 2.3}-${20 * 2.5}`,
    },
  },
};

const special = {
  name: "Unknown",
  type: SPECIAL,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: "40%",
    },
    [RARE]: {
      1: `${40 * 1.3}-${40 * 1.5}`,
    },
    [EPIC]: {
      1: `${40 * 1.8}-${40 * 2}`,
    },
    [HEROIC]: {
      1: `${40 * 2.3}-${40 * 2.5}`,
    },
  },
};

const cast = {
  name: "Easy Shot",
  type: CAST,
  info: (value) =>
    `A piercing arrow dealing ${value} damage fires toward any foe damage by your [omega] Cast`,
  values: {
    [COMMON]: {
      1: 20,
    },
  },
};

const huntersFlare = {
  name: "Hunter's Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast damages foes around you for ${value} damage with a 10% Critical chance.`,
  values: {
    [COMMON]: 55,
  },
};

const dash = {
  name: "Silver Streak",
  type: DASH,
  info: (value) =>
    `After you Dash, your omega moves deal ${value} more damage for 2 seconds.`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: {
      1: "15%",
    },
    // [EPIC]: {
    //   1: "100%",
    // },
    // [HEROIC]: {
    //   1: "125%",
    // },
  },
};

const lethalSnare = {
  name: "Lethal Snare",
  type: OTHER,
  info: (value) =>
    `Foes in your Casts have an ${value} chance to take Critical damage from your Attacks`,
  values: {
    [COMMON]: { 1: "8%" },
  },
};

const supportFire = {
  name: "Support Fire",
  type: OTHER,
  info: (value) =>
    `After you hit with your Attacks or Specials, fire a seeking arrow for ${value} damage`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 15 },
    // [EPIC]: { 1: 14 },
    // [HEROIC]: { 1: 16 },
  },
};

const deathWarrant = {
  name: "Death Warrant",
  type: OTHER,
  info: (value) =>
    `A random foe becomes [marked] every ${value} seconds. If it takes Critical damage, this repeats.`,
  values: {
    [RARE]: { 1: 18 },
    // [RARE]: { 1: 12 },
    // [EPIC]: { 1: 14 },
    // [HEROIC]: { 1: 16 },
  },
};

const firstBlood = {
  name: "First Blood",
  type: OTHER,
  info: (value) =>
    `Foes with at least 80% health or 80% armor have a ${value} chance to take Critical damage`,
  values: {
    [RARE]: { 1: "15%" },
    // [RARE]: { 1: 12 },
    // [EPIC]: { 1: 14 },
    // [HEROIC]: { 1: 16 },
  },
};

const pressurePoints = {
  name: "Pressure Points",
  type: OTHER,
  info: (value) => `Any damage you deal has a ${value} chance to be Critical`,
  values: {
    [RARE]: { 1: "4%" },
  },
};

const easyShot = {
  name: "Easy Shot",
  type: OTHER,
  info: (value) =>
    `A piercing arrow fires toward any foe damage by your [omega] Cast for ${value} damage`,
  values: {
    [RARE]: 30,
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  "support fire": supportFire,
  "lethal snare": lethalSnare,
  "hunter's flare": huntersFlare,
  deathWarrant,
  firstBlood,
  pressurePoints,
  easyShot,
};

const base = {
  name: "Artemis",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const artemis = {
  ...base,
  ...formattedAbilities,
};

module.exports = { artemis };
