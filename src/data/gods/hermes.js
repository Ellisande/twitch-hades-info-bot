const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  OTHER,
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
    [RARE]: { 1: "15%" },
    // [RARE]: {
    //   1: "20%",
    // },
    [EPIC]: {
      1: "20%",
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
      1: "18%",
    },
    [EPIC]: {
      1: "30%",
    },
  },
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
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
  name: "Nitro Boost",
  type: DASH,
  info: (value) =>
    `Your Sprint is 20% faster and gives you a barrier that ignores ${value} instance(s) of damage per encounter`,
  values: {
    [COMMON]: {
      1: 1,
    },
  },
};

const hardTarget = {
  name: "Hard Target",
  type: OTHER,
  info: (value) => `Most foes' ranged shots are ${value} slower`,
  values: {
    [COMMON]: { 1: "-30%" },
    [RARE]: { 1: "-40%" },
  },
};

const meanStreak = {
  name: "Mean Streak",
  type: OTHER,
  info: (value) =>
    `Each time you slay a foe, deal ${value} more damage for the next 30 seconds`,
  values: {
    [COMMON]: { 1: "1%" },
    [RARE]: { 1: "1.5%" },
  },
};

const wittyRetort = {
  name: "Witty Retort",
  type: OTHER,
  info: (value) =>
    `Your Hex requires using less ${value} [mana] before it is ready`,
  values: {
    [RARE]: { 1: "-20%" },
  },
};

const quickBuck = {
  name: "Quick Buck",
  type: OTHER,
  info: (value) =>
    `You find ${value} more [gold]. Receive 100 [gold] now, plus the bonus!`,
  values: {
    [COMMON]: { 1: "20%" },
  },
};

const greaterEvasion = {
  name: "Greater Evasion",
  type: OTHER,
  info: () =>
    `Whenever you are struck, you have a ${value} chance to Dodge any damage`,
  values: {
    [RARE]: { 1: "15%" },
  },
};

const savedBreath = {
  name: "Saved Breath",
  type: OTHER,
  info: (value) => `Your [omega] Cast uses ${value} less [mana]`,
  values: {
    [RARE]: { 1: "-60%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  meanStreak,
  hardTarget,
  wittyRetort,
  quickBuck,
  greaterEvasion,
  savedBreath,
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
