import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER, GAIN } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";
import { AIR } from "./elements";

const info =
  "Zeus, God of Thunder. His powers create bouncing lightning projectiles.";

const attack: Boon = {
  name: "Heaven Strike",
  type: ATTACK,
  element: AIR,
  info: (value) => `Your Attacks inflict ${value} [blitz] damage`,
  values: {
    [COMMON]: {
      1: 80,
    },
    [RARE]: {
      1: 120,
    },
    [EPIC]: {
      1: 160,
    },
  },
};

const special: Boon = {
  name: "Heaven Flourish",
  type: SPECIAL,
  element: AIR,
  info: (value) => `Your Specials inflict ${value} [blitz]`,
  values: {
    [COMMON]: {
      1: 100,
    },
    [RARE]: {
      3: "210",
    },
  },
};

const cast: Boon = {
  name: "Storm Ring",
  type: CAST,
  element: AIR,
  info: (value) =>
    `Your [omega] Cast also causes lightning bolts to repeatedly strike 1 foe at a time for ${value} damage`,
  values: {
    [COMMON]: { 1: 30, 2: 40 },
    [RARE]: { 1: 40 },
    [EPIC]: { 2: 60 },
  },
};

const dash: Boon = {
  name: "Thunder Sprint",
  type: DASH,
  element: AIR,
  info: (value) =>
    `Your Sprint causes nearby foes to be struck by lightning bolts for ${value} damage, which use 3 [mana] each`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 25 },
  },
};

const gain: Boon = {
  name: "Ionic Gain",
  type: GAIN,
  element: AIR,
  info: (value) =>
    `Gradually restore [mana] by ${value}/sec, but your total amount is reduced by 70%`,
  values: {
    [COMMON]: { 1: 4 },
    [RARE]: { 1: 6 },
  },
};

// Infusion
const airQuality: Boon = {
  name: "Air Quality",
  type: OTHER,
  info: (value) =>
    `While you have at least 5 [air], you can never deal less damage than ${value} per hit.`,
  values: {
    [COMMON]: { 1: 30, },
    [RARE]: { 1: 30, },
  },
};

const divineVengeance: Boon = {
  name: "Divine Vengeance",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you take damage, your foe is struck by lightning for 100 damage, and again 50% of the time (up to ${value} times)`,
  values: {
    [COMMON]: { 1: 2, },
    [RARE]: { 1: 3, },
  },
};

const lightningLance: Boon = {
  name: "Lightning Lance",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Hold Cast to aim where the binding circle appears. Foes within are stuck by lightning for ${value} damage`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: {
      1: "70",
      2: "90",
      3: "100",
      4: "105",
    },
  },
};

const staticShock: Boon = {
  name: "Static Shock",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you enter a Location, [prime] 50 [mana] to make your strikes emit chain-lightning that deals ${value} damage`,
  values: {
    [COMMON]: { 1: 10, },
    [RARE]: { 1: 15, },
    [EPIC]: { 1: 20, },
  },
};

const doubleStrike: Boon = {
  name: "Double Strike",
  type: OTHER,
  info: (value) =>
    `Your lightning bolt effects have a ${value} chance to strike 1 more time`,
  values: {
    [COMMON]: { 1: "5%", 2: "10%" },
    [EPIC]: { 1: "15%", 4: "25%" },
  },
};

const spiritSurge: Boon = {
  name: "Spirit Surge",
  type: OTHER,
  info: (value) =>
    `While you have no more than 10 [mana], all foes are occasionally struck by lightning for ${value} damage`,
  values: {
    [EPIC]: { 1: "90" },
  },
};

const kingsRansom: Boon = {
  name: "King's Ransom",
  type: OTHER,
  info: (value) =>
    `Give up all your Boons of Hera. For each raise all of your Boons of Zeus by ${value} levels`,
  values: {
    [DUO]: { 1: 2 },
  },
};

const electricOverload: Boon = {
  name: "Electric Overload",
  type: OTHER,
  info: (value) =>
    `Whenever your [blitz] effects activate, a bolt of chain-lightning fires from the foe dealing ${value} damage`,
  values: {
    [RARE]: { 1: 15 },
  },
};

const masterConductor: Boon = {
  name: "Master Conductor",
  type: OTHER,
  info: (value) =>
    `Your chain-lightning deals ${value} more damage per bounce and can bounce to you`,
  values: {
    [DUO]: { 1: "15%" },
  },
};

const toastingFork: Boon = {
  name: "Toasting Fork",
  type: OTHER,
  info: (value) =>
    `Your [blitz] effects deal ${value} damage even if they expire without being activated.`,
  values: {
    [RARE]: { 1: "100%" },
  },
};

const abilities = {
  attack,
  special,
  cast,
  dash,
  gain,
  airQuality,
  divineVengeance,
  lightningLance,
  staticShock,
  doubleStrike,
  spiritSurge,
  "king's ransom": kingsRansom,
  electricOverload,
  masterConductor,
  toastingFork,
};

const base: God = {
  name: "Zeus",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const zeus: God = {
  ...base,
  ...formattedAbilities,
};

export { zeus };
