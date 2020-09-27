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
  name: "Lightning Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attack emits chain-lightning for ${value} when you damage a foe.`,
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
  name: "Thunder Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Special causes a lightning bolt to strike nearby foe for ${value} damage.`,
  values: {
    [COMMON]: {
      1: 30,
    },
    [RARE]: {
      1: "37.5",
    },
    [EPIC]: {
      1: "45",
    },
    [HEROIC]: {
      1: 60,
    },
  },
};

const cast = {
  name: "Electric Shot",
  type: CAST,
  info: (value) =>
    `Your Cast is a burst of chain-lightning that bounces between foes for ${value} damage`,
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

const thunderFlare = {
  name: "Thunder Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast causes a lightning bolt to strike nearby foes for ${value} damage`,
  values: {
    [COMMON]: { 1: 60 },
  },
};

dashBase = 10;
const dash = {
  name: "Thunder Dash",
  type: DASH,
  info: (value) =>
    `Your Dash causes a lightning bolt to strike nearby foes for ${value} damage`,
  values: calculateFlat(dashBase, true),
};

const revenge = {
  name: "Heaven's Vengeance",
  type: REVENGE,
  info: (value) =>
    `After you take damage, your foe is struck by lightning for ${value} damage`,
  values: calculateFlat(80, true),
};

const stormLightning = {
  name: "Storm Lightning",
  type: OTHER,
  info: (value) =>
    `Your chain-lightning effects bounce ${value} more times before expiring.`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 4 },
    [EPIC]: { 1: 6 },
    [HEROIC]: { 1: 8 },
  },
};

const highVoltage = {
  name: "High Voltage",
  type: OTHER,
  info: (value) =>
    `Your lightning bolt effects deal damage in a ${value} larger area.`,
  values: {
    [COMMON]: {
      1: "60%",
    },
    [RARE]: {
      1: "72%",
    },
    [EPIC]: {
      1: "84%",
    },
    [HEROIC]: {
      1: "95%",
    },
  },
};

const doubleStrike = {
  name: "Double Strike",
  type: OTHER,
  info: (value) =>
    `Your lightning bolt effects have a ${value} chance to strike twice.`,
  values: {
    [COMMON]: { 1: "25%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "35%" },
    [HEROIC]: { 1: "40%" },
  },
};

const staticDischarge = {
  name: "Static Discharge",
  type: OTHER,
  info: (value) =>
    `Your lighting effect also make foes Jolted. Jolted: when an enemy attacks they take ${value} damage`,
  values: calculateFlat(60, true),
};

const cloudedJudgement = {
  name: "Clouded Judgement",
  type: OTHER,
  info: (value) =>
    `Your Wrath Gauge charges ${value} faster when you deal or take damage`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "12%" },
    [EPIC]: { 1: "14%" },
    [HEROIC]: { 1: "16%" },
  },
};

const billowingStrength = {
  name: "Billowing Strength",
  type: OTHER,
  info: (value) => `After using Call, you deal ${value} more damage for 5 Sec.`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "22%" },
    [EPIC]: { 1: "24%" },
    [HEROIC]: { 1: "26%" },
  },
};

const lightningReflexes = {
  name: "Lightning Reflexes",
  type: OTHER,
  info: (value) =>
    `After you Dash just before getting hit, a bolt strikes a nearby foe for ${value} damage`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 30 },
    [EPIC]: { 1: 40 },
    [HEROIC]: { 1: 50 },
  },
};

const zeusAid = {
  name: "Zeus's aid",
  type: AID,
  info: (value) =>
    `Your Call makes lightning strike nearby foes for ${value} damage repeatedly for 1.5 Sec. Max gauge: 15 second duration.`,
  values: {
    [COMMON]: { 1: 50 },
  },
};

const seaStorm = {
  name: "Sea Storm",
  type: OTHER,
  info: (value) =>
    `Your knock-away effects also cause foes to be stuck by lightning for ${value} damage`,
  values: {
    [DUO]: { 1: 40 },
  },
};

const scintillatingFeast = {
  name: "Scintillating Feast",
  type: OTHER,
  info: (value) =>
    `Your Festive Fog effects also deal ${value} lightning damage periodically`,
  values: {
    [DUO]: { 1: 60 },
  },
};

const lightningRod = {
  name: "Lightning Rod",
  type: OTHER,
  info: (value) =>
    `Your collectible casts strike nearby foes with lightning for ${value} damage every 1.5 seconds`,
  values: {
    [DUO]: { 1: 100 },
  },
};

const lightningPhalanx = {
  name: "Lightning Phalanx",
  type: OTHER,
  info: (value) =>
    `Your phalanx shot casts bounce between nearby foes ${value} times`,
  values: {
    [DUO]: { 1: 3 },
  },
};

const vengefulMood = {
  name: "Vengeful Mood",
  type: OTHER,
  info: (value) =>
    `All of your Revenge attacks occur without taking damage every ${value} seconds`,
  values: {
    [DUO]: { 1: `3` },
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

const splittingBolt = {
  name: "Splitting Bolt",
  type: OTHER,
  info: (value) =>
    `All your lightning effects create an additional burst for ${value} damage`,
  values: {
    [LEGENDARY]: { 1: 40 },
  },
};

const smolderingAir = {
  name: "Smoldering Air",
  type: OTHER,
  info: (value) => `Your God Gauge charges up ${value}, but is capped at 25%`,
  values: {
    [DUO]: { 1: "1% (every 0.2 sec" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: zeusAid,
  "storm lightning": stormLightning,
  "high voltage": highVoltage,
  "double strike": doubleStrike,
  "static discharge": staticDischarge,
  "clouded judgement": cloudedJudgement,
  "billowing strength": billowingStrength,
  "sea storm": seaStorm,
  "scintillating feast": scintillatingFeast,
  "lightning rod": lightningRod,
  "lightning phalanx": lightningPhalanx,
  "vengeful mood": vengefulMood,
  "splitting bolt": splittingBolt,
  "cold fusion": coldFusion,
  thunderFlare,
  lightningReflexes,
  smolderingAir,
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
