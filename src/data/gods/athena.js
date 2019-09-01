const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange,
  calculateFlat
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Athena, Goddess of Wisdom. Her powers deflect attacks.";

const attackBase = 40;
const attack = {
  name: "Divine Strike",
  type: ATTACK,
  info: value => `Your Attack is ${value} stronger and can Deflect`,
  values: calculatePercentage(attackBase, true)
};

const specialBase = 60;
const special = {
  name: "Divine Flourish",
  type: SPECIAL,
  info: value => `Your Special is ${value} stronger and Deflect`,
  values: calculatePercentage(specialBase, true)
};

const cast = {
  name: "Phalanx Shot",
  type: CAST,
  info: value =>
    `Your Cast damages foes for ${value} in a small area and can Deflect`,
  values: {
    [COMMON]: {
      1: 85
    },
    [RARE]: {
      1: 102
    },
    [EPIC]: {
      1: 119
    },
    [HEROIC]: {
      1: 136
    }
  }
};

const dashBase = 15;
const dash = {
  name: "Divine Dash",
  type: DASH,
  info: value => `Your Dash deals ${value} damage and can Deflect`,
  values: calculateFlat(dashBase, true)
};

const brilliantRiposte = {
  name: "Brilliant Riposte",
  type: OTHER,
  info: value => `When you Deflect attacks they deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: `${20 * 1.3}-${20 * 1.5}%` },
    [EPIC]: { 1: `${20 * 2}-${20 * 2.5}%` }
  }
};

const sureFooting = {
  name: "Sure Footing",
  type: OTHER,
  info: value => `Resist ${value} damage from Traps`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "50%" },
    [EPIC]: { 1: "60%" }
  }
};

const bronzeSkin = {
  name: "Bronze Skin",
  type: OTHER,
  info: value => `Resist ${value} damage from foes's attack`,
  values: {
    [COMMON]: {
      1: "5%-10%"
    },
    [RARE]: {
      1: `${5 * 1.3}%-${10 * 1.5}%`
    },
    [EPIC]: {
      1: `${5 * 0.18}%-${10 * 2.0}%`
    }
  }
};

const revenge = {
  name: "Holy Shield",
  type: REVENGE,
  info: value =>
    `After you take damage, damage nearby foes for ${value} and briefly Deflect`,
  values: {
    [COMMON]: {
      1: 30
    },
    [RARE]: {
      1: `${30 * 1.3}-${30 * 1.5}`
    },
    [EPIC]: {
      1: `${30 * 1.8}-60`
    }
  }
};

const deathlessStand = {
  name: "Deathless Stand",
  type: OTHER,
  info: value =>
    `Death Defiance makes your Impervious ${value} seconds longer and gain one immediately`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 2.5 },
    [EPIC]: { 1: 3 }
  }
};

const lastStand = {
  name: "Last Stand",
  type: OTHER,
  info: value =>
    `Death Defiance restores ${value} more health than usual. Gain 1 charge now.`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
    [EPIC]: { 1: "20%" }
  }
};

const blindingFlash = {
  name: "Blinding Flash",
  type: OTHER,
  info: value =>
    `Your attacks that Deflect also make foes Exposed for 5 seconds increasing backstab damage by ${value}`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: `${50 * 1.3}-${50 * 1.8}%` },
    [EPIC]: { 1: `${50 * 1.8}-${50 * 2}%` }
  }
};

const proudBearing = {
  name: "Proud Bearing",
  type: OTHER,
  info: value => `You begin each Encounter with your Wrath Gauge ${value} full`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "25%" },
    [EPIC]: { 1: "30%" }
  }
};

const athenasAid = {
  name: "Athena's Aid",
  type: AID,
  info: value =>
    `Your Call makes you invulnerable for ${value} seconds and Deflect all attacks`,
  values: {
    [COMMON]: { 1: 1 },
    [RARE]: { 1: 1.2 },
    [EPIC]: { 1: 1.4 },
    [HEROIC]: { 1: 1.6 }
  }
};

const mercifulEnd = {
  name: "Merciful End",
  type: OTHER,
  info: value =>
    `Your attacks that can Deflect immediately active Doom effects for ${value} damage`,
  values: {
    [DUO]: { 1: 90 }
  }
};

const deadlyReversal = {
  name: "Deadly Reversal",
  type: OTHER,
  info: value =>
    `After you Deflect briefly gain +35% change to deal Critical damage for ${value} seconds`,
  values: {
    [DUO]: { 1: 2 }
  }
};

const lightningPhalanx = {
  name: "Lightning Phalanx",
  type: OTHER,
  info: value =>
    `Your phalanx shot casts bounce between nearby foes ${value} times`,
  values: {
    [DUO]: { 1: 5 }
  }
};

const spentSpirit = {
  name: "Spent Spirit",
  type: OTHER,
  info: value => `Your foes' ranged-attack projectiles are ${value} slower`,
  values: {
    [DUO]: { 1: "40%" }
  }
};

const divineProtection = {
  name: "Divine Protection",
  type: OTHER,
  info: value =>
    `You have a barrier that negates incoming damage every ${value} seconds`,
  values: {
    [LEGENDARY]: { 1: 20 }
  }
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
  "divine protection": divineProtection
};

const base = {
  name: "Athena",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const athena = {
  ...base,
  ...formattedAbilities
};

module.exports = { athena };
