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
  calculateRange,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Demeter, Goddess of Seasons. Her abilities slows enemies.";

const attackBase = "40";
const attack = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: calculatePercentage(attackBase, true),
};

const specialBase = 60;
const special = {
  name: "Ice Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Specials deal ${value} more damage and inflict [freeze]`,
  values: {
    [RARE]: {
      1: "60%",
    },
  },
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 8,
    },
    [RARE]: {
      1: 9.2,
    },
    [EPIC]: {
      1: 10.4,
    },
    [HEROIC]: {
      1: 11.6,
    },
  },
};

const tranquilGain = {
  name: "Tranquil Gain",
  type: OTHER,
  info: (value) =>
    `After remaining inactive for 1 second, rapidly restore ${value} [mana]/second until you act`,
  values: {
    [RARE]: { 1: 35 },
  },
};

const dash = {
  name: "Unknown",
  type: DASH,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 15,
    },
    [RARE]: {
      1: 22.5,
    },
    [EPIC]: {
      1: 30,
    },
    [HEROIC]: {
      1: 37.5,
    },
  },
};

const revenge = {
  name: "Unknown",
  type: REVENGE,
  info: () => `Unknown`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: {
      1: 15,
    },
    [EPIC]: { 1: 20 },
    [HEROIC]: { 1: 25 },
  },
};

const weedKiller = {
  name: "Weed Killer",
  type: OTHER,
  info: (value) =>
    `Your [omega] Attack deals ${value} more damage, but uses 10 more [mana]`,
  values: {
    [RARE]: {
      1: "75%",
    },
  },
};

const rareCrop = {
  name: "Rare Crop",
  type: OTHER,
  info: (value) =>
    `${value} of your boons randomly become common, then gain rarity every 3 encounters.`,
  values: {
    [COMMON]: {
      1: 1,
    },
    [RARE]: {
      1: 2,
    },
    [EPIC]: {
      1: 3,
    },
    [HEROIC]: {
      1: 4,
    },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  rareCrop,
  weedKiller,
  tranquilGain,
};

const base = {
  name: "Demeter",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const demeter = {
  ...base,
  ...formattedAbilities,
};

module.exports = { demeter };
