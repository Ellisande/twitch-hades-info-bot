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
  "Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage";

const attackBase = "50";
const attack = {
  name: "Flutter Strike",
  type: ATTACK,
  info: (value) => `Your Attacks ${value} more damage to nearby foes`,
  values: {
    [COMMON]: {
      1: "80%",
      2: "105%",
    },
    [RARE]: {
      1: "100%",
    },
  },
};

const specialBase = 80;
const special = {
  name: "Unknown",
  type: SPECIAL,
  info: (value) => `Unknown`,
  values: calculatePercentage(specialBase, true),
};

const cast = {
  name: "Rapture Ring",
  type: CAST,
  info: (value) =>
    `Your Casts drag foes in and inflict [weak] reducing their damage by ${value}`,
  values: {
    [COMMON]: {
      1: "10%",
      2: "15%",
      3: "17%",
    },
  },
};

const dash = {
  name: "Unknown",
  type: DASH,
  info: (value) => `Unknown`,
  values: {
    [RARE]: {
      1: 30,
    },
  },
};

const glamourGain = {
  name: "Glamour Gain",
  type: OTHER,
  info: (value) =>
    `In each encounter, 1 foe is always Weak. You gradually restore ${value} [mana]/second while near [weak] foes.`,
  values: {
    [COMMON]: { 1: 6 },
    [EPIC]: { 1: 10 },
  },
};

const shamelessAttitude = {
  name: "Shameless Attitude",
  type: OTHER,
  info: (value) =>
    `While you have at least 80% health, you deal ${value} more damage`,
  values: { [RARE]: { 1: "15%" } },
};

const heartBreaker = {
  name: "Heart Breaker",
  type: OTHER,
  info: (value) =>
    `Whenever you use 30 [mana], create a Heartthrob that deals ${value} area damage.`,
  values: {
    [COMMON]: { 1: 120 },
  },
};

const lifeAffirmation = {
  name: "Life Affirmation",
  type: OTHER,
  info: (value) =>
    `Any max health rewards you find have ${value} greater effect`,
  values: {
    [COMMON]: { 1: "40%" },
  },
};

const revenge = {
  name: "Unknown",
  type: REVENGE,
  info: (value) => `Unknown`,
  values: calculateFlat(50, true),
};

const secretCrush = {
  name: "Secret Crash",
  type: OTHER,
  info: (value) =>
    `After you enter a Location, [prime] 20 [mana] to add ${value} Power to your Attack`,
  values: {
    [COMMON]: { 1: "5" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "secret crush": secretCrush,
  "shameless attitude": shamelessAttitude,
  "glamour gain": glamourGain,
  heartBreaker,
  lifeAffirmation,
};

const base = {
  name: "Aphrodite",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const aphrodite = {
  ...base,
  ...formattedAbilities,
};

module.exports = { aphrodite };
