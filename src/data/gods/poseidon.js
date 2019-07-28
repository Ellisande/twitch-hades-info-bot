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

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attack = {
  name: "Tempest Strike",
  type: ATTACK,
  info: value => `Your Attack deals ${value} more damage and knocks foes away`,
  values: {
    [COMMON]: {
      1: "60%"
    },
    [RARE]: {
      1: `${60 * 1.3}-${60 * 1.5}%`
    },
    [EPIC]: {
      1: `${60 * 1.8}-120%`
    },
    [HEROIC]: {
      1: `${60 * 2.3}-${60 * 2.5}%`
    }
  }
};

const special = {
  name: "Tempest Flourish",
  type: SPECIAL,
  info: value => `Your Special deals ${value} more damage and knocks foes away`,
  values: {
    [COMMON]: {
      1: "100%"
    },
    [RARE]: {
      1: "130-150%"
    },
    [EPIC]: {
      1: "180-200%"
    },
    [HEROIC]: {
      1: "230-250%"
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
    [EPIC]: { 1: "200-250%" }
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
    `After clearing encounters gain ${value} more darkness, money, and max health than usual`,
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

const seaGodsRage = {
  name: "Sea God's Rage",
  type: WRATH,
  info: value =>
    `Your Wrath makes you surge into foes while Invlunerable for 5 secs and deal ${value} damage on hit`,
  values: {
    [COMMON]: { 1: 150 },
    [RARE]: { 1: 180 },
    [EPIC]: { 1: 210 },
    [HEROIC]: { 1: 240 }
  }
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

const secondWave = {
  name: "Second Wave",
  type: OTHER,
  info: () => `Your knock-away effects show foes a second time after the first`,
  values: {}
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
const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  wrath: seaGodsRage,
  "typhoons fury": typhoonsFury,
  "sunken treasure": sunkenTreasure,
  "breaking wave": breakingWave,
  "razor shaols": razorShoals,
  "oceans bounty": oceansBounty,
  "boiling point": boilingPoint,
  "second wave": secondWave,
  "sea storm": seaStorm
};

const base = {
  name: "Poseidon",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER);
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const poseidon = {
  ...base,
  ...formattedAbilities
};

module.exports = { poseidon };
