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

const info = "Athena, Goddess of Wisdom. Her powers deflect attacks.";

const attackBase = 40;
const attack = {
  name: "Divine Strike",
  type: ATTACK,
  info: (value) => `Your Attack is ${value} stronger and can Deflect`,
  values: calculatePercentage(attackBase, true),
};

const specialBase = 60;
const special = {
  name: "Divine Flourish",
  type: SPECIAL,
  info: (value) => `Your Special is ${value} stronger and Deflect`,
  values: calculatePercentage(specialBase, true),
};

const cast = {
  name: "Phalanx Shot",
  type: CAST,
  info: (value) =>
    `Your Cast damages foes for ${value} in a small area and can Deflect`,
  values: {
    [COMMON]: {
      1: 85,
    },
    [RARE]: {
      1: 102,
    },
    [EPIC]: {
      1: 119,
    },
    [HEROIC]: {
      1: 136,
    },
  },
};

const phalanxFlare = {
  name: "Phalanx Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast damages foes around you for ${value} and can Deflect`,
  values: {
    [COMMON]: { 1: 80 },
  },
};

const dashBase = 10;
const dash = {
  name: "Divine Dash",
  type: DASH,
  info: (value) => `Your Dash deals ${value} damage and can Deflect`,
  values: calculateFlat(dashBase, true),
};

const brilliantRiposte = {
  name: "Brilliant Riposte",
  type: OTHER,
  info: (value) => `When you Deflect attacks they deal ${value} more damage`,
  values: calculatePercentage(80, false),
};

const sureFooting = {
  name: "Sure Footing",
  type: OTHER,
  info: (value) => `Resist ${value} damage from Traps`,
  values: {
    [COMMON]: { 1: "60%" },
    [RARE]: { 1: "75%" },
    [EPIC]: { 1: "90%" },
    [HEROIC]: { 1: "95%" },
  },
};

const bronzeSkin = {
  name: "Bronze Skin",
  type: OTHER,
  info: (value) => `Resist ${value}% damage from foes's attack`,
  values: {
    [COMMON]: {
      1: 5,
    },
    [RARE]: {
      1: 7.5,
    },
    [EPIC]: {
      1: 10,
    },
    [HEROIC]: {
      1: 12.5,
    },
  },
};

const revenge = {
  name: "Holy Shield",
  type: REVENGE,
  info: (value) =>
    `After you take damage, damage nearby foes for ${value} and briefly Deflect`,
  values: {
    [COMMON]: {
      1: 30,
    },
    [RARE]: {
      1: `${30 * 1.3}-${30 * 1.5}`,
    },
    [EPIC]: {
      1: `${30 * 1.8}-60`,
    },
    [HEROIC]: {
      1: `${30 * 2.3}-${30 * 2.5}`,
    },
  },
};

const deathlessStand = {
  name: "Deathless Stand",
  type: OTHER,
  info: (value) =>
    `Death Defiance makes your Impervious ${value} seconds longer and gain one immediately`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 2.5 },
    [EPIC]: { 1: 3 },
    [HEROIC]: { 1: 3.5 },
  },
};

const lastStand = {
  name: "Last Stand",
  type: OTHER,
  info: (value) =>
    `Death Defiance restores ${value} more health than usual. Gain 1 charge now.`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "12%" },
    [EPIC]: { 1: "14%" },
    [HEROIC]: { 1: "16%" },
  },
};

const blindingFlash = {
  name: "Blinding Flash",
  type: OTHER,
  info: (value) =>
    `Your attacks that Deflect also make foes Exposed for 5 seconds increasing backstab damage by ${value}`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: "62.5%" },
    [EPIC]: { 1: "75%" },
    [HEROIC]: { 1: "87.5%" },
  },
};

const proudBearing = {
  name: "Proud Bearing",
  type: OTHER,
  info: (value) =>
    `You begin each Encounter with your Wrath Gauge ${value} full`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "25%" },
    [EPIC]: { 1: "30%" },
    [HEROIC]: { 1: "40%" },
  },
};

const athenasAid = {
  name: "Athena's Aid",
  type: AID,
  info: (value) =>
    `Your Call makes you invulnerable for ${value} seconds and Deflect all attacks. Max gauage: 6x duration`,
  values: {
    [COMMON]: { 1: 1.5 },
    [RARE]: { 1: 1.65 },
    [EPIC]: { 1: 1.8 },
    [HEROIC]: { 1: 1.95 },
  },
};

const mercifulEnd = {
  name: "Merciful End",
  type: OTHER,
  info: (value) =>
    `Your attacks that can Deflect immediately active Doom effects for ${value} additional damage`,
  values: {
    [DUO]: { 1: 40 },
  },
};

const deadlyReversal = {
  name: "Deadly Reversal",
  type: OTHER,
  info: (value) =>
    `After you Deflect briefly gain +20% change to deal Critical damage for ${value} seconds`,
  values: {
    [DUO]: { 1: 2 },
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

const spentSpirit = {
  name: "Spent Spirit",
  type: OTHER,
  info: (value) => `Your foes' ranged-attack projectiles are ${value} slower`,
  values: {
    [DUO]: { 1: "40%" },
  },
};

const divineProtection = {
  name: "Divine Protection",
  type: OTHER,
  info: (value) =>
    `You have a barrier that negates incoming damage every ${value} seconds`,
  values: {
    [LEGENDARY]: { 1: 20 },
  },
};

const stubbornRoots = {
  name: "Stubborn Roots",
  type: OTHER,
  info: (value) =>
    `While you have no Death Defiance, you recover ${value} health every 0.8 seconds`,
  values: { [DUO]: { 1: 1 } },
};

const partingShot = {
  name: "Parting Shot",
  type: OTHER,
  info: (value) =>
    `Your Cast gains any bonuses you have for striking foes from behind and gains ${value}% bonus backstab damage.`,
  values: {
    [DUO]: { 1: 35 },
  },
};

const calculatedRisk = {
  name: "Calculated Risk",
  type: OTHER,
  info: (value) => `Your foes' ranged-attack projectiles are ${value}% slower`,
  values: {
    [DUO]: 40,
  },
};

const unshakeableMettle = {
  name: "Unshakable Mettle",
  type: OTHER,
  info: (value) =>
    `You cannot be stunned and resist ${value}% damage from Bosses`,
  values: {
    [DUO]: 10,
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: athenasAid,
  "sure footing": sureFooting,
  "bronze skin": bronzeSkin,
  "brilliant riposte": brilliantRiposte,
  "deathless stand": deathlessStand,
  "last stand": lastStand,
  "blinding flash": blindingFlash,
  "proud bearing": proudBearing,
  "merciful end": mercifulEnd,
  "deadly reversal": deadlyReversal,
  "lightning phalanx": lightningPhalanx,
  "spent spirit": spentSpirit,
  "divine protection": divineProtection,
  "stubborn roots": stubbornRoots,
  "phalanx flare": phalanxFlare,
  "parting shot": partingShot,
  "calculated risk": calculatedRisk,
  "unshakeable mettle": unshakeableMettle,
};

const base = {
  name: "Athena",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const athena = {
  ...base,
  ...formattedAbilities,
};

module.exports = { athena };
