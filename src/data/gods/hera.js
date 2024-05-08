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

const info = "Hera, Queen of the Gods";

const attackBase = "50";
const attack = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: { [RARE]: { 1: "50%" } },
};

const specialBase = 80;
const special = {
  name: "Sworn Flourish",
  type: SPECIAL,
  info: (value) => `Your Specials day ${value} more data and inflict [hitch]`,
  values: {
    [COMMON]: {
      1: "20",
    },
    [RARE]: {
      1: 18,
    },
  },
};

const cast = {
  name: "Anvil Ring",
  type: CAST,
  info: (value) =>
    `Your Casts deal ${value} damage 3 times in succession, but in a smaller area`,
  values: {
    [RARE]: {
      1: 70,
    },
  },
};

const dash = {
  name: "Nexus Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint inflicts [hitch] on nearby foes, which spreads to ${value} other foes near them`,
  values: {
    [COMMON]: {
      1: 1,
    },
    [RARE]: {
      1: 3,
    },
  },
};

const bornGain = {
  name: "Born Gain",
  type: OTHER,
  info: (value) =>
    `Whenever you run out of [mana], Prime ${value} [mana] to restore all [mana] up to the reduced limit`,
  values: {
    [COMMON]: 8,
  },
};

const engagementRing = {
  name: "Engagement Ring",
  type: OTHER,
  info: (value) =>
    `Your Casts last 200% longer and deal ${value} damage to every foe that joins the Encounter`,
  values: {
    [COMMON]: 70,
  },
};

const keenIntuition = {
  name: "Keen Intuition",
  type: OTHER,
  info: (value) =>
    `Whenever you use [omega] moves while you have 100% [mana], they deal ${value} more damage`,
  values: {
    [COMMON]: "30%",
  },
};

const revenge = {
  name: "Unknown",
  type: REVENGE,
  info: (value) => `Unknown`,
  values: calculateFlat(50, true),
};

const kingsRansom = {
  name: "King's Ransom",
  type: DUO,
  info: (value) =>
    `Give up all your Boons of Hera. For each raise all of your Boons of Zeus by ${value} levels`,
  values: {
    [DUO]: 2,
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  bornGain,
  engagementRing,
  keenIntuition,
  "king's ransom": kingsRansom,
};

const base = {
  name: "Hera",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hera = {
  ...base,
  ...formattedAbilities,
};

module.exports = { hera };
