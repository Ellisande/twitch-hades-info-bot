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
  "Hermes, God of Speed and Commerce. His abilities increase your speed";

const attack = {
  name: "Swift Strike",
  type: ATTACK,
  info: value => `Your Attack is ${value} faster`,
  values: {
    [COMMON]: {
      1: "12-13%"
    },
    [RARE]: {
      1: "21%"
    },
    [EPIC]: {
      1: "30%"
    }
  }
};

const special = {
  name: "Swift Flourish",
  type: SPECIAL,
  info: value => `Your Special is ${value} faster`,
  values: {
    [COMMON]: {
      1: "12-13%"
    },
    [RARE]: {
      1: "21%"
    },
    [EPIC]: {
      1: "30%"
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
  name: "Rapid Cast",
  type: CAST,
  info: value => `Your Cast is ${value} faster and fully automatic`,
  values: {
    [COMMON]: {
      1: "20%"
    },
    [RARE]: {
      1: "60%"
    },
    [EPIC]: {
      1: "80%"
    }
  }
};

const driftDash = {
  name: "Drift Dash",
  type: OTHER,
  info: value => `After you Dash, gain +100% move speed for ${value} seconds`,
  values: {
    [COMMON]: { 1: 0.6 },
    [RARE]: { 1: 0.75 },
    [EPIC]: { 1: 0.9 }
  }
};

const passingThrough = {
  name: "Passing Through",
  type: OTHER,
  info: value => `Running into foes makes then ${value} slows for 3 seconds`,
  values: {
    [COMMON]: { 1: "60%" },
    [RARE]: { 1: "75%" },
    [EPIC]: { 1: "90%" }
  }
};

const greaterHaste = {
  name: "Greater Haste",
  type: OTHER,
  info: value => `Your move ${value} faster`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "40%" }
  }
};

const quickRecovery = {
  name: "Quick Recovery",
  type: OTHER,
  info: value =>
    `After you damage, quickly Dash to recover up to ${value} of health lost`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "40%" }
  }
};

const greaterEvasion = {
  name: "Greater Evaasion",
  type: OTHER,
  info: value => `Your have ${value} chance to dodge`,
  values: {
    [COMMON]: { 1: "15%" },
    [RARE]: { 1: `${15 * 1.3}-${15 * 1.5}` },
    [EPIC]: { 1: `${15 * 1.8}-${15 * 2}` }
  }
};

const greatestReflext = {
  name: "Greatest Reflex",
  type: DASH,
  info: value => `You can Dash ${value} more times`,
  values: {
    [COMMON]: { 1: 1 },
    [RARE]: { 1: 2 },
    [EPIC]: { 1: 3 }
  }
};

const relativeSpeed = {
  name: "Relative Speed",
  type: OTHER,
  info: () => `Your Dash makes nearby foes 50% for 1 second`,
  values: {}
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: () => `Hermes has no revenge ability`,
  values: {}
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "drift dash": driftDash,
  "passing through": passingThrough,
  "greater haste": greaterHaste,
  "quick recovery": quickRecovery,
  "greater evaasion": greaterEvasion,
  "greater reflect": greatestReflext,
  "relative speed": relativeSpeed
};

const base = {
  name: "Hermes",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const hermes = {
  ...base,
  ...formattedAbilities
};

module.exports = { hermes };
