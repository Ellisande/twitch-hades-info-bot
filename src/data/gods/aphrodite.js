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
  calculateRange
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info =
  "Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage";

const attackBase = "50";
const attack = {
  name: "Heartbreak Strike",
  type: ATTACK,
  info: value => `Your Attack deals ${value} for damage and inflicts weak`,
  values: calculatePercentage(attackBase, true)
};

const specialBase = 80;
const special = {
  name: "Heartbreak Flourish",
  type: SPECIAL,
  info: value =>
    `Your Special deals more ${value} more damage and inflicts weak`,
  values: calculatePercentage(specialBase, true)
};

const cast = {
  name: "Crush Shot",
  type: CAST,
  info: value =>
    `Your Cast is a wide, short-range blast that deals ${value} damage and inflicts Weak`,
  values: {
    [COMMON]: {
      1: 90
    },
    [RARE]: {
      1: 99
    },
    [EPIC]: {
      1: 108
    },
    [HEROIC]: {
      1: 117
    }
  }
};

const dash = {
  name: "Passion Dash",
  type: DASH,
  info: value =>
    `Your Dash deals ${value} damage at the start and end, and inflicts Weak`,
  values: {
    [COMMON]: {
      1: 20
    },
    [RARE]: {
      1: 24
    },
    [EPIC]: {
      1: 28
    },
    [HEROIC]: {
      1: 32
    }
  }
};

const emptyInside = {
  name: "Empty Inside",
  type: OTHER,
  info: value =>
    `Your weak effects have a longer duration. Adds ${value} additional seconds`,
  values: {
    [COMMON]: { 1: 5 },
    [RARE]: { 1: 7.5 },
    [EPIC]: { 1: 10 },
    [HEROIC]: { 1: 12.5 }
  }
};

const dyingLament = {
  name: "Dying Lament",
  type: OTHER,
  info: value =>
    `When slain, foes damage other nearby foes for ${value} damage and inflict Weak`,
  values: calculateFlat(40, true)
};

const revengeMin = 20;
const revengeMax = 25;
const revenge = {
  name: "Wave of Despair",
  type: REVENGE,
  info: value =>
    `After you take damage, damage nearby fores for ${value} and turn them Weak`,
  values: {
    [COMMON]: {
      1: `${revengeMin}-${revengeMax}`
    },
    [RARE]: { 1: `${revengeMin * 1.3}-${revengeMax * 1.5}` },
    [EPIC]: { 1: `${revengeMin * 2}-${(revengeMax * 2.2).toFixed(0)}` }
  }
};

const differentLeague = {
  name: "Different League",
  type: OTHER,
  info: value => `Resist ${value} damage from nearby foes' attacks`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "12%" },
    [EPIC]: { 1: "15%" },
    [HEROIC]: { 1: "17%" }
  }
};

const surrdenderBase = 10;
const sweetSurrender = {
  name: "Sweet Surrender",
  type: OTHER,
  info: value =>
    `Your Weak effects also make foes ${value} more susceptible to damage`,
  values: calculatePercentage(surrdenderBase, true)
};

const lifeAffirmation = {
  name: "Life Affirmation",
  type: OTHER,
  info: value => `Your max health chamber rewards are worth ${value} more`,
  values: {
    [COMMON]: { 1: `30%` },
    [RARE]: { 1: `36%` },
    [EPIC]: { 1: `42%` }
  }
};

const brokenResolve = {
  name: "Broken Resolve",
  type: OTHER,
  info: value => `Your Weak effects are ${value}% more potent.`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 12 },
    [EPIC]: { 1: 15 },
    [HEROIC]: { 1: 17 }
  }
};

const aidBase = 2500;
const aphroditesAid = {
  name: "Aphrodite's Aid",
  type: AID,
  info: value =>
    `Your Call fires a seeking project that inflicts Charm. Max gauge projectile does ${value} damage.`,
  values: {
    [COMMON]: { 1: aidBase },
    [RARE]: { 1: aidBase },
    [EPIC]: { 1: aidBase },
    [HEROIC]: { 1: aidBase }
  }
};

const unhealthyFixation = {
  name: "Unhealthy Fixation",
  type: OTHER,
  info: value =>
    `Your Weak effects also have a ${value} chance to make foes Charmed for 4 seconds`,
  values: {
    [LEGENDARY]: { 1: "15%" }
  }
};

const curseOfLonging = {
  name: "Curse of Longing",
  type: OTHER,
  info: value =>
    `Your Doom effects continuously strike Weak foes for ${value} damage`,
  values: {
    [DUO]: { 1: "25%" }
  }
};

const lowTolerance = {
  name: "Low Tolerance",
  type: OTHER,
  info: value =>
    `Your Hangover effects stack ${value} more times against Weak foes`,
  values: {
    [DUO]: { 1: 3 }
  }
};

const heartRend = {
  name: "Heart Rend",
  type: OTHER,
  info: value => `Your Critical effects deal ${value} more damage to Weak foes`,
  values: {
    [DUO]: { 1: "35%" }
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

const sweetNectar = {
  name: "Sweet Nectar",
  type: OTHER,
  info: value =>
    `Any Poms of Power you find are now ${value} level more effective`,
  values: {
    [DUO]: { 1: 1 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: aphroditesAid,
  "dying lament": dyingLament,
  "empty inside": emptyInside,
  "different league": differentLeague,
  "sweet surrender": sweetSurrender,
  "life affirmation": lifeAffirmation,
  "broken resolve": brokenResolve,
  "unhealthy fixation": unhealthyFixation,
  "curse of longing": curseOfLonging,
  "low tolerance": lowTolerance,
  "heart rend": heartRend,
  "spent spirit": spentSpirit,
  "sweet nectar": sweetNectar
};

const base = {
  name: "Aphrodite",
  info,
  abilities,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const aphrodite = {
  ...base,
  ...formattedAbilities
};

module.exports = { aphrodite };
