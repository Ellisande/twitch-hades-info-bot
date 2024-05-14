import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";
import { EARTH, AIR, } from "./elements";

const info =
  "Hermes, God of Speed and Commerce. His abilities increase your speed";

const attack: Boon = {
  name: "Swift Strike",
  type: ATTACK,
  info: (value) => `Your Attack is ${value} faster`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: { 1: "15%" },
    [EPIC]: {
      1: "20%",
    },
  },
};

const special: Boon = {
  name: "Swift Flourish",
  type: SPECIAL,
  element: EARTH,
  info: (value) => `Your Special is ${value} faster`,
  values: {
    [COMMON]: {
      1: "15%",
    },
    [RARE]: {
      1: "18%",
    },
    [EPIC]: {
      1: "30%",
    },
  },
};

const cast: Boon = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {},
};

const dash: Boon = {
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

const hardTarget: Boon = {
  name: "Hard Target",
  type: OTHER,
  info: (value) => `Most foes' ranged shots are ${value} slower`,
  values: {
    [COMMON]: { 1: "-30%" },
    [RARE]: { 1: "-40%" },
  },
};

const meanStreak: Boon = {
  name: "Mean Streak",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Each time you slay a foe, deal ${value} more damage for the next 30 seconds`,
  values: {
    [COMMON]: { 1: "1%" },
    [RARE]: { 1: "1.5%" },
  },
};

const wittyRetort: Boon = {
  name: "Witty Retort",
  type: OTHER,
  info: (value) =>
    `Your Hex requires using less ${value} [mana] before it is ready`,
  values: {
    [RARE]: { 1: "-20%" },
  },
};

const quickBuck: Boon = {
  name: "Quick Buck",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `You find ${value} more [gold]. Receive 100 [gold] now, plus the bonus!`,
  values: {
    [COMMON]: { 1: "20%" },
  },
};

const greaterEvasion: Boon = {
  name: "Greater Evasion",
  type: OTHER,
  info: (value) =>
    `Whenever you are struck, you have a ${value} chance to Dodge any damage`,
  values: {
    [RARE]: { 1: "15%" },
  },
};

const savedBreath: Boon = {
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

const base: God = {
  name: "Hermes",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hermes: God = {
  ...base,
  ...formattedAbilities,
};

export { hermes };
