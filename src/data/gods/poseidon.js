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

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attackBase = 30;
const attack = {
  name: "Tempest Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attack deals ${value} more damage and knocks foes away`,
  values: calculatePercentage(attackBase, true),
};

specialBase = 70;
const special = {
  name: "Tempest Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Special deals ${value} more damage and knocks foes away`,
  values: calculatePercentage(specialBase, true),
};

const cast = {
  name: "Flood Shot",
  type: CAST,
  info: (value) => `Your Cast damages foes for ${value} and knocks them away`,
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

const dash = {
  name: "Tidal Dash",
  type: DASH,
  info: (value) =>
    `Your Dash damages foes in an area for ${value} and knocks them away`,
  values: {
    [COMMON]: {
      1: 35,
    },
    [RARE]: {
      1: 42,
    },
    [EPIC]: {
      1: 49,
    },
    [HEROIC]: {
      1: 56,
    },
  },
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: () => `Poseidon does not have a revenge ability.`,
  values: {},
};

const typhoonsFury = {
  name: "Typhoon's Fury",
  type: OTHER,
  info: (value) =>
    `You deal ${value} more damage when slamming foes into barriers`,
  values: {
    [COMMON]: { 1: "200%" },
    [RARE]: { 1: "250%" },
    [EPIC]: { 1: "300%" },
  },
};

const breakingWave = {
  name: "Breaking Wave",
  type: OTHER,
  info: (value) =>
    `Slamming foes into walls or corners creates a water blast in the area that deals ${value} damage`,
  values: calculateFlat(100, true),
};

const wavePounding = {
  name: "Wave Pounding",
  type: OTHER,
  info: (value) =>
    `Your Boons with knock-away effect deal ${value}% bonus damage to Bosses.`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 30 },
    [EPIC]: { 1: 40 },
    [HEROIC]: { 1: 50 },
  },
};

const razorShoals = {
  name: "Razor Shoals",
  type: OTHER,
  info: (value) =>
    `Your Boons with knock-away effects also Rupture for ${value} every 0.2 seconds`,
  values: {
    [COMMON]: { 1: "10" },
  },
};

const oceansBounty = {
  name: "Ocean's Bounty",
  type: OTHER,
  info: (value) =>
    `After clearing encounters gain ${value} more darkness and money than usual`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: "55%" },
    [EPIC]: { 1: "60%" },
    [HEROIC]: { 1: "65%" },
  },
};

const sunkenTreasure = {
  name: "Sunken Treasure",
  type: OTHER,
  info: () => `Gain an assortment of darkness, money, and health`,
};

const boilingPoint = {
  name: "Boiling Point",
  type: OTHER,
  info: (value) =>
    `Your Wrath Gauge charges ${value} faster when you take damage`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "50%" },
    [EPIC]: { 1: "60%" },
    [HEROIC]: { 1: "70%" },
  },
};

const hydraulicMight = {
  name: "Hydraulic Might",
  type: OTHER,
  info: (value) =>
    `Your Attack and Special are ${value} stronger for the first 10 seconds in Encounters`,
  values: {
    [COMMON]: { 1: "50" },
  },
};

const ripCurrent = {
  name: "Rip Current",
  type: OTHER,
  info: (value) =>
    `Your Call pulls in foes and the effects last ${value} seconds longer`,
  values: {
    [COMMON]: { 1: 1 },
  },
};

const poseidonsAid = {
  name: "Poseidon's Aid",
  type: AID,
  info: (value) =>
    `Your Call makes you surge into foes dealing ${value} damage while Invulnerable for 1.2 Sec. Max gauge: 7.2 second duration.`,
  values: {
    [COMMON]: { 1: 250 },
    [RARE]: { 1: 300 },
    [EPIC]: { 1: 350 },
    [HEROIC]: { 1: 400 },
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

const exclusiveAccess = {
  name: "Exclusive Access",
  type: OTHER,
  info: (value) => `Any boons you find have ${value} rarity effects`,
  values: {
    [DUO]: { 1: "epic" },
  },
};

const sweetNectar = {
  name: "Sweet Nectar",
  type: OTHER,
  info: (value) =>
    `Any Poms of Power you find are now ${value} level more effective`,
  values: {
    [DUO]: { 1: 1 },
  },
};

const secondWave = {
  name: "Second Wave",
  type: OTHER,
  info: (value) =>
    `Your Boons with knock-away effects shove foes ${value} more times`,
  values: {
    [LEGENDARY]: { 1: 1 },
  },
};

const hugeCatch = {
  name: "Huge Catch",
  type: OTHER,
  info: (value) =>
    `You have a ${value}% greater chance to find a Fishing Point in each Chamber`,
  values: {
    [LEGENDARY]: { 1: 20 },
  },
};

const mirageShot = {
  name: "Mirage Shot",
  type: OTHER,
  info: (value) =>
    `Your Cast fires a second projectile which deals ${value}% reduced base damage`,
  values: {
    [DUO]: { 1: "30%" },
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

const curseOfDrowning = {
  name: "Curse of Drowning",
  type: OTHER,
  info: (value) =>
    `Your Flood Shot becomes a pulse that damages foes around you for ${value}`,
  [DUO]: { 1: 3 },
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
  aid: poseidonsAid,
  "typhoons fury": typhoonsFury,
  "sunken treasure": sunkenTreasure,
  "breaking wave": breakingWave,
  "razor shoals": razorShoals,
  "oceans bounty": oceansBounty,
  "boiling point": boilingPoint,
  "wave pounding": wavePounding,
  "sea storm": seaStorm,
  "exclusive access": exclusiveAccess,
  "sweet nectar": sweetNectar,
  "second wave": secondWave,
  "huge catch": hugeCatch,
  "hydraulic might": hydraulicMight,
  ripCurrent,
  mirageShot,
  blizzardShot,
  unshakeableMettle,
  curseOfDrowning,
};

const base = {
  name: "Poseidon",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const poseidon = {
  ...base,
  ...formattedAbilities,
};

module.exports = { poseidon };
