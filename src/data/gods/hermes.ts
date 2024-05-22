import { toArray } from "lodash";
import { INFUSION, OTHER } from "./abilityTypes";
import { AIR, EARTH, FIRE, WATER } from "./elements";
import { Boon, God, InfusionBoon } from "./god";
import { COMMON, EPIC, LEGENDARY, RARE } from "./rarities";

const info =
  "Hermes, God of Speed and Commerce. His abilities increase your speed";

const attack: Boon = {
  name: "Swift Strike",
  type: OTHER,
  element: EARTH,
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
  type: OTHER,
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

const nitroBoost: Boon = {
  name: "Nitro Boost",
  type: OTHER,
  element: FIRE,
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
  element: AIR,
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
  element: EARTH,
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
  element: AIR,
  info: (value) =>
    `Whenever you are struck, you have a ${value} chance to Dodge any damage`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
  },
};

const savedBreath: Boon = {
  name: "Saved Breath",
  type: OTHER,
  element: EARTH,
  info: (value) => `Your [omega] Cast uses ${value} less [mana]`,
  values: {
    [COMMON]: { 1: "-50%" },
    [RARE]: { 1: "-60%" },
  },
};

const tallOrder: InfusionBoon = {
  name: "Tall Order",
  type: INFUSION,
  info: (value) =>
    `WHile you have at least 2 of each [earth] [water] [air] [fire], you deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "20%" },
  },
  requiredElements: [EARTH, WATER, AIR, FIRE],
};

const midnightOil: Boon = {
  name: "Midnight Oil",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `While your Hex is ready, you move and strike ${value} faster`,
  values: {
    [COMMON]: { 1: "15%" },
  },
};

const closeCall: Boon = {
  name: "Close Call",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Gain +1 use of Death Defiance that makes everything else move 90% slower for ${value} seconds`,
  values: {
    [LEGENDARY]: { 1: 8 },
  },
};

const abilities = {
  attack,
  special,
  nitroBoost,
  meanStreak,
  hardTarget,
  wittyRetort,
  quickBuck,
  greaterEvasion,
  savedBreath,
  tallOrder,
  midnightOil,
  closeCall,
};

export const hermes: God = {
  name: "Hermes",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};
