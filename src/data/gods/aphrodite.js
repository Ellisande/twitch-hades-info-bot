const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const { ATTACK, SPECIAL, CAST, DASH, OTHER } = require("./abilityTypes");
const { WATER, AIR, COSMIC, } = require("./elements")
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
  element: WATER,
  info: (value) => `Your Attacks ${value} more damage to nearby foes`,
  values: {
    [COMMON]: {
      1: "80%",
      2: "105%",
    },
    [RARE]: {
      1: "100%",
      2: "125%",
    },
    [EPIC]: {
      2: "145%",
      4: "300%",
      7: "330%",
    },
    [HEROIC]: {
      2: "165%",
    },
  },
};

const specialBase = 80;
const special = {
  name: "Unknown",
  type: SPECIAL,
  element: WATER,
  info: (value) => `Unknown`,
  values: calculatePercentage(specialBase, true),
};

const cast = {
  name: "Rapture Ring",
  type: CAST,
  element: AIR,
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
  element: AIR,
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
  element: AIR,
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
  element: AIR,
  info: (value) =>
    `While you have at least 80% health, you deal ${value} more damage`,
  values: { [RARE]: { 1: "15%" } },
};

const heartBreaker = {
  name: "Heart Breaker",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Whenever you use 30 [mana], create a Heartthrob that deals ${value} area damage.`,
  values: {
    [COMMON]: { 1: 120 },
  },
};

const lifeAffirmation = {
  name: "Life Affirmation",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Any max health rewards you find have ${value} greater effect`,
  values: {
    [COMMON]: { 1: "40%" },
  },
};

const secretCrush = {
  name: "Secret Crash",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you enter a Location, [prime] 20 [mana] to add ${value} Power to your Attack`,
  values: {
    [COMMON]: { 1: "5" },
  },
};

const burningDesire = {
  name: "Burning Desire",
  type: DUO,
  info: (value) =>
    `Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for ${value} damage`,
  values: {
    [DUO]: { 1: 160 },
  },
};

const ecstaticObsession = {
  name: "Ecstatic Obsession",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `During Encounters with at least ${value} foes, 1 foe is always afflicted with Charm`,
  values: {
    [LEGENDARY]: { 1: 3 },
  },
};

const islandGetaway = {
  name: "Island Getaway",
  type: DUO,
  info: (value) =>
    `You take ${value} less damage from nearby foes. Boons of Aphrodite treat all foes as nearby.`,
  values: {
    [DUO]: { 1: "15%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  "secret crush": secretCrush,
  "shameless attitude": shamelessAttitude,
  "glamour gain": glamourGain,
  heartBreaker,
  lifeAffirmation,
  burningDesire,
  ecstaticObsession,
  islandGetaway,
};

const base = {
  name: "Aphrodite",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
  elements: [...new Set(toArray(abilities).map(ability => ability.element).filter(element => element))],
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const aphrodite = {
  ...base,
  ...formattedAbilities,
};

module.exports = { aphrodite };
