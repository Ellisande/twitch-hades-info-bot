const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  WRATH
} = require("./abilityTypes");
const { mapValues, toArray } = require("lodash");

const info = "Athena, Goddess of Wisdom. Her powers deflect attacks.";

const attack = {
  name: "Divine Strike",
  type: ATTACK,
  info: value => `Your Attack is ${value} stronger and can Deflect`,
  values: {
    [COMMON]: {
      1: "30%"
    },
    [RARE]: {
      1: `${30 * 1.3}-${30 * 1.5}%`
    },
    [EPIC]: {
      1: `${30 * 1.8}-${30 * 2.0}%`
    },
    [HEROIC]: {
      1: `${30 * 2.3}-${30 * 2.5}%`
    }
  }
};

const special = {
  name: "Divine Flourish",
  type: SPECIAL,
  info: value => `Your Special is ${value} stronger and Deflect`,
  values: {
    [COMMON]: {
      1: "60%"
    },
    [RARE]: {
      1: `${60 * 1.3}-${60 * 1.5}`
    },
    [EPIC]: {
      1: `${60 * 1.8}-${60 * 2.0}`
    },
    [HEROIC]: {
      1: `${60 * 2.3}-${60 * 2.5}`
    }
  }
};

const dash = {
  name: "Divine Dash",
  type: DASH,
  info: value => `Your Dash deals ${value} damage and can Deflect`,
  values: {
    [COMMON]: {
      1: 15
    },
    [RARE]: {
      1: `${15 * 1.3}-${15 * 1.5}`
    },
    [EPIC]: {
      1: `${15 * 1.8}-${15 * 2.0}`
    },
    [HEROIC]: {
      1: `${15 * 2.3}-${15 * 2.5}`
    }
  }
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
      1: "5-10%"
    },
    [RARE]: {
      1: `${5 * 1.3}-${10 * 1.5}%`
    },
    [EPIC]: {
      1: `${5 * 0.18}-${10 * 2.0}%`
    }
  }
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
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
    [EPIC]: { 1: "20%" }
  }
};

const grayEyedVigiliance = {
  name: "Gray Eyed Vigiliance",
  type: WRATH,
  info: value =>
    `Your Wrath makes Invulnerable for ${value} seconds and Deflect`,
  values: {
    [COMMON]: { 1: 3 },
    [RARE]: { 1: 4.5 },
    [EPIC]: { 1: 6 }
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

const mercifulEnd = {
  name: "Merciful End",
  type: OTHER,
  info: value =>
    `Your attacks that can Deflect immediately active Doom effects for ${value} damage`,
  values: {
    [DUO]: { 1: 120 }
  }
};

const deadyReversal = {
  name: "Deadly Reversal",
  type: OTHER,
  info: value =>
    `After you Deflect briefly gain +35% change to deal Critical damage for ${value} seconds`,
  values: {
    [DUO]: { 1: 2 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  wrath: grayEyedVigiliance,
  "sure footing": sureFooting,
  "bronze skin": bronzeSkin,
  "brilliant ripsote": brilliantRiposte,
  "deathless stand": deathlessStand,
  "last stand": lastStand,
  "blinding flash": blindingFlash,
  "proud bearing": proudBearing,
  "divine protection": divineProtection,
  "merciful end": mercifulEnd,
  "deadyly reversal": deadyReversal
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
