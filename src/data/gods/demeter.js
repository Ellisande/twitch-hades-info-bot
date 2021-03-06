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
  name: "Frost Strike",
  type: ATTACK,
  info: (value) => `Your Attack is ${value}% stronger and inflicts Chill`,
  values: calculatePercentage(attackBase, true),
};

const specialBase = 60;
const special = {
  name: "Frost Flourish",
  type: SPECIAL,
  info: (value) => `Your Special is ${value} stronger and inflicts Chill`,
  values: calculatePercentage(specialBase, true),
};

const cast = {
  name: "Crystal Beam",
  type: CAST,
  info: (value) =>
    `Your Cast drops a crystal that fires a beam stright ahead for ${value} damage every 0.2s for 5s.`,
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

const icyFlare = {
  name: "Icy Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast damages foes around you for ${value} damage and inflicts Chill`,
  values: {
    [COMMON]: { 1: 70 },
  },
};

const dash = {
  name: "Mistral Dash",
  type: DASH,
  info: (value) =>
    `Your Dash shoots a gust ahead for ${value} damage that inflicts Chill`,
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
  name: "Frozen Touch",
  type: REVENGE,
  info: () =>
    `After you take damage, deal ${value} damage and completely Chill your foe.`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: {
      1: 15,
    },
    [EPIC]: { 1: 20 },
    [HEROIC]: { 1: 25 },
  },
};

const aidBase = 2500;
const aid = {
  name: "Demeter's Aid",
  type: AID,
  info: (value) =>
    `Your Call creates a winter vortex for 5s, inflicting ${value} every 0.25s and Chill. Max gauge increases duration to 15 seconds.`,
  values: {
    [COMMON]: {
      1: 10,
    },
    [RARE]: {
      1: 11,
    },
    [EPIC]: {
      1: 12,
    },
    [HEROIC]: {
      1: 13,
    },
  },
};

const arcticBlast = {
  name: "Arctic Blast",
  type: OTHER,
  info: (value) =>
    `Applying 10 stacks of Chill causes a blast for ${value} damage, clearing the effect.`,
  values: {
    [COMMON]: {
      1: 80,
    },
    [RARE]: {
      1: 100,
    },
    [EPIC]: {
      1: 120,
    },
    [HEROIC]: {
      1: 140,
    },
  },
};

const nourishedSoul = {
  name: "Nourished Soul",
  type: OTHER,
  info: (value) =>
    `Any Healing effects are ${value}% more potent. Restore health now.`,
  values: {
    [COMMON]: {
      1: 30,
    },
    [RARE]: {
      1: 32.25,
    },
    [EPIC]: {
      1: 34.5,
    },
    [HEROIC]: {
      1: 36.75,
    },
  },
};

const snowBurst = {
  name: "Snow Burst",
  type: OTHER,
  info: (value) =>
    `Whenver you Cast, damage nearby foes for ${value} and inflict Chill.`,
  values: {
    [COMMON]: {
      1: 40,
    },
    [RARE]: {
      1: 50,
    },
    [EPIC]: {
      1: 60,
    },
    [HEROIC]: {
      1: 70,
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

const ravenousWill = {
  name: "Ravenous Will",
  type: OTHER,
  info: (value) =>
    `While you have no Casts, take 10% less damage and do ${value}% more damage.`,
  values: {
    [COMMON]: {
      1: 10,
    },
    [RARE]: {
      1: 20,
    },
    [EPIC]: {
      1: 30,
    },
    [HEROIC]: {
      1: 40,
    },
  },
};

// Needs two values.
const killingFreeze = {
  name: "Killing Freeze",
  type: OTHER,
  info: (value) =>
    `While all foes are Chill-afllicted, they are slower and take ${value} decay damage every 0.5s`,
  values: {
    [COMMON]: {
      1: 20,
    },
    [RARE]: {
      1: 30,
    },
    [EPIC]: {
      1: 40,
    },
    [HEROIC]: {
      1: 50,
    },
  },
};

const glacialGlare = {
  name: "Glacial Glare",
  type: OTHER,
  info: (value) => `Your Cast fires ${value} seconds longer and inflicts Chill`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 2.4 },
    [EPIC]: { 1: 2.8 },
    [HEROIC]: { 1: 3.2 },
  },
};

const winterHarvest = {
  name: "Winter Harvest",
  type: OTHER,
  info: (value) =>
    `Chill-afflicted foes shatter at 10% health for ${value} area damage, inflicting Chill nearby.`,
  values: {
    [LEGENDARY]: {
      1: 50,
    },
  },
};

const coldFusion = {
  name: "Cold Fusion",
  type: OTHER,
  info: (value) =>
    `Your Jolted effects do not expire when foes attack. Instead it lasts for ${value} seconds.`,
  values: {
    [DUO]: { 1: 10 },
  },
};

const crystalClarity = {
  name: "Crystal Clarity",
  type: OTHER,
  info: (value) =>
    `Your Cast is ${value}% stronger and tracks foes more effectively`,
  values: {
    [DUO]: { 1: 10 },
  },
};

const blizzardShot = {
  name: "Blizzard Shot",
  type: OTHER,
  info: (value) =>
    `Your Cast moves slowly, piercing foes and firing shards around it for ${value} damage`,
  values: {
    [DUO]: { 1: 20 },
  },
};

const iceWine = {
  name: "Ice Wine",
  type: OTHER,
  info: (value) =>
    `Your Cast blasts an area with freezing Festive Fog and inflicts Chill. Increases blast damage by ${value}%`,
  values: {
    [DUO]: { 1: 30 },
  },
};

const stubbornRoots = {
  name: "Stubborn Roots",
  type: OTHER,
  info: (value) =>
    `While you have no Death Defiance, you recover ${value} health every 0.8 seconds`,
  values: { [DUO]: { 1: 1 } },
};

const coldEmbrace = {
  name: "Cold Embrace",
  type: OTHER,
  info: (value) =>
    `Your Cast crystal fires its beam directly at your for 4 additional seconds and increases cast damage by ${value}%`,
  values: {
    [DUO]: { 1: 30 },
  },
};

const freezingVortex = {
  name: "Freezing Vortex",
  type: OTHER,
  info: (value) =>
    `Your Cast inflicts Chill, but is ${value}% smaller and moves slower`,
  [DUO]: { 1: -15 },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid,
  arcticBlast,
  nourishedSoul,
  rareCrop,
  snowBurst,
  winterHarvest,
  ravenousWill,
  killingFreeze,
  coldFusion,
  crystalClarity,
  blizzardShot,
  iceWine,
  stubbornRoots,
  icyFlare,
  glacialGlare,
  coldEmbrace,
  freezingVortex,
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
