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

const info =
  "Artemis, Goddess of the Hunt. Her powers cause critical hits and create seeking projectiles.";

const attack = {
  name: "Deadly Strike",
  type: ATTACK,
  info: value =>
    `Your Attack is ${value} stronger, with a +15% chance to deal Critical damage`,
  values: {
    [COMMON]: {
      1: "20%"
    },
    [RARE]: {
      1: `${20 * 1.3}-${20 * 1.5}`
    },
    [EPIC]: {
      1: `${20 * 1.8}-${20 * 2.0}`
    },
    [HEROIC]: {
      1: `${20 * 2.3}-${20 * 2.5}`
    }
  }
};

const special = {
  name: "Deadly Flourish",
  type: SPECIAL,
  info: value =>
    `Your Special is ${value} stronger with a +20% chance to deal Critical damage`,
  values: {
    [COMMON]: {
      1: "40%"
    },
    [RARE]: {
      1: `${40 * 1.3}-${40 * 1.5}`
    },
    [EPIC]: {
      1: `${40 * 1.8}-${40 * 2}`
    },
    [HEROIC]: {
      1: `${40 * 2.3}-${40 * 2.5}`
    }
  }
};

const cast = {
  name: "True Shot",
  type: CAST,
  info: value =>
    `Your Cast deals ${value} damage and seeks the nearest foe, piercing shields`,
  values: {
    [COMMON]: {
      1: 70
    },
    [RARE]: {
      1: 84
    },
    [EPIC]: {
      1: 98
    },
    [HEROIC]: {
      1: 112
    }
  }
};

const dash = {
  name: "Hunter Dash",
  type: DASH,
  info: value => `Your Dash Attack deals ${value} more damage`,
  values: {
    [COMMON]: {
      1: "50%"
    },
    [RARE]: {
      1: "75%"
    },
    [EPIC]: {
      1: "100%"
    },
    [HEROIC]: {
      1: "150%"
    }
  }
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: value => `Artemis does not have a revenge ability`,
  values: {}
};

const cleanKill = {
  name: "Clean Kill",
  type: OTHER,
  info: value => `Your Critical effects deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "15%" },
    [RARE]: { 1: "22%" },
    [EPIC]: { 1: "30%" }
  }
};

const fullyLoaded = {
  name: "Fully Loaded",
  type: OTHER,
  info: value => `Gain ${value} extra charges for your Cast`,
  values: {
    [COMMON]: {
      1: "1"
    },
    [RARE]: {
      1: "2"
    },
    [EPIC]: {
      1: "3"
    }
  }
};

const quickReload = {
  name: "Quick Reload",
  type: OTHER,
  info: value => `Foes drop casts stuck in after ${value} seconds`,
  values: {
    [COMMON]: {
      1: 8
    },
    [RARE]: {
      1: 6.9
    },
    [EPIC]: {
      1: 6.1
    }
  }
};

const exitWounds = {
  name: "Exit Wounds",
  type: OTHER,
  info: value =>
    `Your foes suffer ${value} damage when your casts stuck in them are dislodged.`,
  values: {
    [COMMON]: { 1: 100 },
    [RARE]: { 1: 200 },
    [EPIC]: { 1: 300 }
  }
};

const pressurePoints = {
  name: "Pressure Points",
  type: OTHER,
  info: value => `Any Damage you deal has a ${value} chance to be Critical`,
  values: {
    [COMMON]: { 1: "3%" },
    [RARE]: { 1: "4%" },
    [EPIC]: { 1: "5%" }
  }
};

const burstShot = {
  name: "Burst Shot",
  type: OTHER,
  info: value =>
    `Your Cast fires a second projectile, though it does ${value} of the original damage`,
  values: {
    [COMMON]: { 1: "25%" },
    [RARE]: { 1: "35%" },
    [EPIC]: { 1: "45%" }
  }
};

const hideBreaker = {
  name: "Hide Breaker",
  type: OTHER,
  info: value => `Your Critical effects deal ${value} more damage to Armor`,
  values: {
    [COMMON]: { 1: "200%" },
    [RARE]: { 1: `${200 * 1.3}-${200 * 1.5}%` },
    [EPIC]: { 1: "400-500%" }
  }
};

const hunterInstinct = {
  name: "Hunter Instinct",
  type: OTHER,
  info: value =>
    `Your Wrath Gauge charges ${value} faster when you deal Critical damage`,
  values: {
    [COMMON]: { 1: "25%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "35%" }
  }
};

const baseChance = 30;
const huntersMark = {
  name: "Hunter's Mark",
  type: OTHER,
  info: value =>
    `Your Critical effects also make foes Marked for 2.5 seconds increasing chance to be crit by ${value}`,
  values: {
    [COMMON]: { 1: `${baseChance}%` },
    [RARE]: { 1: `${baseChance * 1.3}-${baseChance * 1.5}%` },
    [EPIC]: { 1: `${baseChance * 1.8}-${baseChance * 2}%` }
  }
};

const artemisAid = {
  name: "Artemis' Aid",
  type: AID,
  info: value =>
    `Your Call fies a seeking arrow towards the nearest foe dealing ${value} damage. Max guage: 12 arrows fired for ${value *
      12} damage.`,
  values: {
    [COMMON]: { 1: 130 },
    [RARE]: { 1: 156 },
    [EPIC]: { 1: 182 },
    [HEROIC]: { 1: 208 }
  }
};

const deadlyReversal = {
  name: "Deadly Reversal",
  type: OTHER,
  info: value =>
    `After you Deflect, briefly gain +35% chance to deal Critical damage for ${value} seconds`,
  values: {
    [DUO]: { 1: 2 }
  }
};

const huntingBlades = {
  name: "Hunting Blades",
  type: OTHER,
  info: value =>
    `Your Cast creates a faster Blade Rift that seeks the nearest foe for ${value} seconds`,
  values: {
    [DUO]: { 1: 2.2 }
  }
};

const lightningRod = {
  name: "Lightning Rod",
  type: OTHER,
  info: value =>
    `Your collectible casts strike nearby foes with lightning for ${value} damage every 1.5 seconds`,
  values: {
    [DUO]: { 1: 100 }
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

const supportFire = {
  name: "Support Fire",
  type: OTHER,
  info: value =>
    `Your Attack, Cast, and Special spawn an additional seeking shot that deals ${value} damage`,
  values: {
    [LEGENDARY]: { 1: 15 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "pressure points": pressurePoints,
  "quick reload": quickReload,
  "fully loaded": fullyLoaded,
  "hide breaker": hideBreaker,
  "clean kill": cleanKill,
  "exit wounds": exitWounds,
  "burst shot": burstShot,
  "hunter instinct": hunterInstinct,
  "hunters mark": huntersMark,
  "barbs of the master huntress": barbsOfTheMasterHuntress,
  "deadly reversal": deadlyReversal,
  "hunting blades": huntingBlades,
  "lightning rod": lightningRod,
  "spent spirit": spentSpirit,
  "support fire": supportFire
};

const base = {
  name: "Artemis",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const artemis = {
  ...base,
  ...formattedAbilities
};

module.exports = { artemis };
