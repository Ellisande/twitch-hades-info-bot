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
const { calculatePercentage } = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attackBase = 30;
const attack = {
  name: "Tempest Strike",
  type: ATTACK,
  info: value => `Your Attack deals ${value} more damage and knocks foes away`,
  values: calculatePercentage(attackBase, true)
};

specialBase = 70;
const special = {
  name: "Tempest Flourish",
  type: SPECIAL,
  info: value => `Your Special deals ${value} more damage and knocks foes away`,
  values: calculatePercentage(specialBase, true)
};

const cast = {
  name: "Flood Shot",
  type: CAST,
  info: value => `Your Cast damages foes for ${value} and knocks them away`,
  values: {
    [COMMON]: {
      1: 60
    },
    [RARE]: {
      1: 72
    },
    [EPIC]: {
      1: 84
    },
    [HEROIC]: {
      1: 96
    }
  }
};

const dash = {
  name: "Tidal Dash",
  type: DASH,
  info: value =>
    `Your Dash damages foes in an area for ${value} and knocks them away`,
  values: {
    [COMMON]: {
      1: 35
    },
    [RARE]: {
      1: `${35 * 1.3}-${35 * 1.5}`
    },
    [EPIC]: {
      1: `${35 * 1.8}-70`
    },
    [HEROIC]: {
      1: `${35 * 2.3}-${35 * 2.5}`
    }
  }
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: () => `Poseidon does not have a revenge ability.`,
  values: {}
};

const typhoonsFury = {
  name: "Typhoon's Fury",
  type: OTHER,
  info: value =>
    `You deal ${value} more damage when slamming foes into barriers`,
  values: {
    [COMMON]: { 1: "100%" },
    [RARE]: { 1: "130-150%" },
    [EPIC]: { 1: "180-200%" }
  }
};

const breakingWave = {
  name: "Breaking Wave",
  type: OTHER,
  info: value =>
    `Slamming foes into walls or corners creates a water blast in the area that deals ${value} damage`,
  values: {
    [COMMON]: { 1: 100 },
    [RARE]: { 1: "130-150" },
    [EPIC]: { 1: "200-250" }
  }
};

const razorShoals = {
  name: "Razor Shoals",
  type: OTHER,
  info: value =>
    `Your knock-away effects make foes Rupture for ${value} of impulse distance`,
  values: {
    [COMMON]: { 1: "5%" },
    [RARE]: { 1: "7.5%" },
    [EPIC]: { 1: "10%" }
  }
};

const oceansBounty = {
  name: "Ocean's Bounty",
  type: OTHER,
  info: value =>
    `After clearing encounters gain ${value} more darkness and money than usual`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: "55%" },
    [EPIC]: { 1: "60%" }
  }
};

const sunkenTreasure = {
  name: "Sunken Treasure",
  type: OTHER,
  info: () => `Gain an assortment of darkness, money, and health`
};

const boilingPoint = {
  name: "Boiling Point",
  type: OTHER,
  info: value =>
    `Your Wrath Gauge charges ${value} faster when you take damage`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "75%" },
    [EPIC]: { 1: "100%" }
  }
};

const poseidonsAid = {
  name: "Poseidon's Aid",
  type: AID,
  info: value =>
    `Your Call makes you surge into foes dealing ${value} damage while Invulnerable for 1.5 Sec. Max gauge: 12 second duration.`,
  values: {
    [COMMON]: { 1: 150 },
    [RARE]: { 1: 180 },
    [EPIC]: { 1: 210 },
    [HEROIC]: { 1: 240 }
  }
};

const seaStorm = {
  name: "Sea Storm",
  type: OTHER,
  info: value =>
    `Your knock-away effects also cause foes to be stuck by lightning for ${value} damage`,
  values: {
    [DUO]: { 1: 40 }
  }
};

const exclusiveAccess = {
  name: "Exclusive Access",
  type: OTHER,
  info: value => `Any boons you find have ${value} rarity effects`,
  values: {
    [DUO]: { 1: "epic" }
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

const secondWave = {
  name: "Second Wave",
  type: OTHER,
  info: () => `Your knock-away effects show foes a second time after the first`,
  values: {}
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: poseidonsAid,
  "typhoons fury": typhoonsFury,
  "sunken treasure": sunkenTreasure,
  "breaking wave": breakingWave,
  "razor shoals": razorShoals,
  "oceans bounty": oceansBounty,
  "boiling point": boilingPoint,
  "sea storm": seaStorm,
  "exclusive access": exclusiveAccess,
  "sweet nectar": sweetNectar,
  "second wave": secondWave
};

const base = {
  name: "Poseidon",
  info,
  abilities,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const poseidon = {
  ...base,
  ...formattedAbilities
};

module.exports = { poseidon };
