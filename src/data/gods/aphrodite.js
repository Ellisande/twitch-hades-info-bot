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

const info =
  "Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage";

const attack = {
  name: "Heartbreak Strike",
  type: ATTACK,
  info: value => `Your Attack deals ${value} for damage and inflicts weak`,
  values: {
    [COMMON]: {
      1: "45%"
    },
    [RARE]: {
      1: "58.5-67.5%"
    },
    [EPIC]: {
      1: "81-90%"
    },
    [HEROIC]: { 1: "103.5-112.5%" }
  }
};

const special = {
  name: "Heartbreak Flourish",
  type: SPECIAL,
  info: value =>
    `Your Special deals more ${value} more damage and inflicts weak`,
  values: {
    [COMMON]: {
      1: "80%"
    },
    [RARE]: {
      1: `${80 * 1.3}-${80 * 1.5}%`
    },
    [EPIC]: {
      1: `${80 * 1.8}-${80 * 2.0}%`
    },
    [HEROIC]: {
      1: `${80 * 2.3}-${80 * 2.5}%`
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
      1: "17-19"
    },
    [RARE]: {
      1: `${17 * 1.3}-${19 * 1.5}`
    },
    [EPIC]: {
      1: `${17 * 1.8}-${19 * 2.0}`
    },
    [HEROIC]: {
      1: `${17 * 2.3}-${19 * 2.5}`
    }
  }
};

const cast = {
  name: "Shatter Shot",
  type: CAST,
  info: value =>
    `Your Cast fires in a reduced-range spread pattern that deals ${value} damage and inflicts Weak`,
  values: {
    [COMMON]: {
      1: 90
    },
    [RARE]: {
      1: 108
    },
    [EPIC]: {
      1: 126
    },
    [HEROIC]: {
      1: 144
    }
  }
};

const revenge = {
  name: "Wave of Despair",
  type: REVENGE,
  info: value =>
    `After you take damage, damage nearby fores for ${value} and turn them Weak`,
  values: {
    [COMMON]: {
      1: "20-25"
    },
    [RARE]: { 1: `${20 * 1.3}-${25 * 1.5}` },
    [EPIC]: { 1: `${20 * 2}-${20 * 2.2}` }
  }
};

const dyingLament = {
  name: "Dying Lament",
  type: OTHER,
  info: value =>
    `When slain, foes damage other nearby foes for ${value} damage and inflict Weak`,
  values: {
    [COMMON]: { 1: "25-30" },
    [RARE]: { 1: `${25 * 1.3}-${30 * 1.5}` },
    [EPIC]: { 1: `${25 * 2}-${30 * 2.2}` }
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
    [EPIC]: { 1: 10 }
  }
};

const differentLeague = {
  name: "Different League",
  type: OTHER,
  info: value => `Resist ${value} damage from nearby foes' attacks`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "12%" },
    [EPIC]: { 1: "15%" }
  }
};

const sweetSurrender = {
  name: "Sweet Surrender",
  type: OTHER,
  info: value =>
    `Your Weak effects also make foes ${value} more susceptible to damage`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "13-15%" },
    [EPIC]: { 1: "20-25%" }
  }
};

const charmOfTheLovelyGoddess = {
  name: "Charm of the Lovely Goddess",
  type: WRATH,
  info: value =>
    `Your Wrath fires a seeking projectile that leaves foes Charmed for ${value} seconds`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 11 },
    [EPIC]: { 1: 12 },
    [HEROIC]: { 1: 13 }
  }
};

const unhealthyFixation = {
  name: "Unhealthy Fixation",
  type: OTHER,
  info: value =>
    `Your Weak effects also have a ${value} chance to make foes Charmed for 7 seconds`,
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
    `Your Blight Wine effects stack ${value} more times against Weak foes`,
  values: {
    [DUO]: { 1: 3 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  wrath: charmOfTheLovelyGoddess,
  "dying lament": dyingLament,
  "empty inside": emptyInside,
  "different league": differentLeague,
  "sweet surrender": sweetSurrender,
  "unhealthy fixation": unhealthyFixation,
  "curse of longing": curseOfLonging,
  "low tolerance": lowTolerance
};

const base = {
  name: "Aphrodite",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const aphrodite = {
  ...base,
  ...formattedAbilities
};

module.exports = { aphrodite };
