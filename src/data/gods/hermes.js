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
const { mapValues, toArray } = require("lodash");

const info =
  "Hermes, God of Speed and Commerce. His abilities increase your speed";

const attack = {
  name: "Swift Strike",
  type: ATTACK,
  info: (value) => `Your Attack is ${value} faster`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: {
      1: "20%",
    },
    [EPIC]: {
      1: "30%",
    },
  },
};

const special = {
  name: "Swift Flourish",
  type: SPECIAL,
  info: (value) => `Your Special is ${value} faster`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: {
      1: "20%",
    },
    [EPIC]: {
      1: "30%",
    },
  },
};

const cast = {
  name: "Flurry Cast",
  type: CAST,
  info: (value) =>
    `Hold Cast to fire in rapid succession with ${value}% faster cast speed`,
  values: {
    [COMMON]: {
      1: 20,
    },
    [RARE]: {
      1: 40,
    },
    [EPIC]: {
      1: 60,
    },
    [HEROIC]: { 1: 80 },
  },
};

const dash = {
  name: "Greatest Reflex",
  type: DASH,
  info: (value) => `You can dash ${value} additional times`,
  values: {
    [COMMON]: {
      1: 1,
    },
    [RARE]: {
      1: 2,
    },
    [EPIC]: {
      1: 3,
    },
    [HEROIC]: {
      1: 4,
    },
  },
};

const hyperSprint = {
  name: "Hyper Sprint",
  type: OTHER,
  info: (value) =>
    `After you Dash, briefly becomes strudy and move 100% faster for ${value} seconds`,
  values: {
    [COMMON]: { 1: 0.5 },
    [RARE]: { 1: 0.6 },
    [EPIC]: { 1: 0.7 },
    [HEROIC]: { 1: 0.9 },
  },
};

const passingThrough = {
  name: "Passing Through",
  type: OTHER,
  info: (value) => `Running into foes makes then ${value} slows for 3 seconds`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "25%" },
    [EPIC]: { 1: "30%" },
  },
};

const greaterHaste = {
  name: "Greater Haste",
  type: OTHER,
  info: (value) => `Your move ${value} faster`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "40%" },
    [HEROIC]: { 1: "49%" },
  },
};

const quickRecovery = {
  name: "Quick Recovery",
  type: OTHER,
  info: (value) =>
    `After you damage, quickly Dash to recover up to ${value} of health lost`,
  values: {
    [COMMON]: { 1: "30%" },
    [RARE]: { 1: "40%" },
    [EPIC]: { 1: "50%" },
  },
};

const greaterEvasion = {
  name: "Greater Evasion",
  type: OTHER,
  info: (value) => `Your have ${value} chance to dodge`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: `15%` },
    [EPIC]: { 1: `20%` },
    [HEROIC]: { 1: "25%" },
  },
};

const secondWind = {
  name: "Second Wind",
  type: AID,
  info: (value) =>
    `After using Call, gain ${value} Dodge chance and move speed for 5 Sec.`,
  values: {
    [COMMON]: { 1: "30%" },
    [RARE]: { 1: "37%" },
    [EPIC]: { 1: "45%" },
    [HEROIC]: { 1: "52.5%" },
  },
};

const sideHustle = {
  name: "Side Hustle",
  type: OTHER,
  info: (value) => `Each time you enter a Chamber gain ${value} money`,
  values: {
    [COMMON]: { 1: "10" },
    [RARE]: { 1: "13" },
    [EPIC]: { 1: "16" },
    [HEROIC]: { 1: "19" },
  },
};

const rushDelivery = {
  name: "Rush Delivery",
  type: OTHER,
  info: (value) =>
    `You deal ${value} of your bonus move speed as extra damage.`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: "0" },
    [EPIC]: { 1: "0" },
  },
};

const relativeSpeed = {
  name: "Relative Speed",
  type: OTHER,
  info: () => `Your Dash makes nearby foes 50% for 1 second`,
  values: {},
};

const greaterRecall = {
  name: "Greater Recall",
  type: OTHER,
  info: () => `Your casts are automatically returned to you`,
  values: {},
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: () => `Hermes has no revenge ability`,
  values: {},
};

const quickReload = {
  name: "Quick Reload",
  type: OTHER,
  info: (value) => `Foes drop Casts stuck in them ${value} seconds faster`,
  values: {
    [COMMON]: { 1: 5 },
  },
};

const autoReload = {
  name: "Auto Reload",
  type: OTHER,
  info: (value) => `Your regenerate Casts ${value} faster`,
  values: {
    [COMMON]: { 1: 2.75 },
  },
};

const quickFavor = {
  name: "Quick Favor",
  type: OTHER,
  info: (value) =>
    `Your God Gauge charges up automatically at a rate of ${value}% every 2 seconds.`,
  values: {
    [COMMON]: { 1: 1 },
  },
};

const rushDelivery = {
  name: "Rush Delivery",
  type: OTHER,
  info: (value) =>
    `You deal bonus damage based on ${value}% of any bonus move speed`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: { 1: 75 },
    [EPIC]: { 1: 100 },
  },
};

const badNews = {
  name: "Bad News",
  type: OTHER,
  info: (value) =>
    `Your Cast deals ${value}% bonus damage to foes without a Cast stuck in them.`,
  values: {
    [LEGENDARY]: { 1: 50 },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: secondWind,
  hyperSprint,
  "passing through": passingThrough,
  "greater haste": greaterHaste,
  "quick recovery": quickRecovery,
  "greater evasion": greaterEvasion,
  "relative speed": relativeSpeed,
  "greater recall": greaterRecall,
  "side hustle": sideHustle,
  "rush delivery": rushDelivery,
  quickReload,
  autoReload,
  quickFavor,
  badNews,
};

const base = {
  name: "Hermes",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hermes = {
  ...base,
  ...formattedAbilities,
};

module.exports = { hermes };
