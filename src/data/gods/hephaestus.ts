import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";

const info = "Hephaestus, God of the Forge";

const attack: Boon = {
  name: "Volcanic Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attacks occasionally create a blast that deals 200 damage. Recharges after ${value} seconds`,
  values: { [RARE]: { 2: 8, 5: 5 } },
};

const special: Boon = {
  name: "Volcanic Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Special occasionally creates a blast that deals 400 damage in the area. Recharges after ${value} seconds`,
  values: {
    [COMMON]: {
      1: "20",
    },
    [RARE]: {
      1: 18,
    },
  },
};

const cast: Boon = {
  name: "Anvil Ring",
  type: CAST,
  info: (value) =>
    `Your Casts deal ${value} damage 3 times in succession, but in a smaller area`,
  values: {
    [RARE]: {
      1: 70,
    },
  },
};

const fixedGain: Boon = {
  name: "Fixed Gain",
  type: OTHER,
  info: (value) =>
    `You take -10% damage, and restore ${value} [mana] whenever you take damage`,
  values: {
    [COMMON]: { 1: 50 },
  },
};

const dash: Boon = {
  name: "Smithy Sprint",
  type: DASH,
  info: (value) =>
    `After you Sprint for 1 second, use 10 [mana] to create a blast for ${value} damage to nearby foes`,
  values: {
    [RARE]: {
      1: "40%",
    },
    [EPIC]: {
      1: "50%",
    },
  },
};

const toughTrade: Boon = {
  name: "Tough Trade",
  type: OTHER,
  info: (value) =>
    `If you take damage during your Attacks and Specials, they are ${value} stronger if they hit.`,
  values: {
    [COMMON]: { 1: "100%" },
    [EPIC]: { 1: "150%" },
  },
};

const furnaceBlast: Boon = {
  name: "Furnace Blast",
  type: OTHER,
  info: (value) =>
    `Your blast effects from Hephaestus also inflict ${value} [vent] damage on foes.`,
  values: {
    [RARE]: { 1: "400" },
  },
};

const heavyMetal: Boon = {
  name: "Heavy Metal",
  type: OTHER,
  info: (value) =>
    `Gain some ${value} [armor]. Foe's attacks cannot knock you away.`,
  values: {
    [RARE]: { 1: "75" },
  },
};

const mintCondition: Boon = {
  name: "Mint Condition",
  type: OTHER,
  info: (value) =>
    `At the start of each Encounter you are impervious for ${value} seconds`,
  values: {
    [COMMON]: { 1: "8" },
  },
};

const uncannyFortitude: Boon = {
  name: "Uncanny Fortitude",
  type: OTHER,
  info: (value) => `Gain ${value} max health, based on your [mana] limit`,
  values: {
    [COMMON]: { 1: "20%" },
  },
};

const roomTemperature: Boon = {
  name: "Room Temperature",
  type: OTHER,
  info: (value) =>
    `Your blast effects from Hephaestus clear [freeze], so you [freeze] foes again right away`,
  values: {
    [RARE]: { 1: 50 },
  },
};

const chainReaction: Boon = {
  name: "Chain Reaction",
  type: OTHER,
  info: (value) =>
    `If you use your blast effects from Hephaestus just within ${value} seconds of them recharging, they fire 2 times`,
  values: {
    [DUO]: { 1: 0.85 },
  },
};

const stellarSlam: Boon = {
  name: "Stellar Slam",
  type: OTHER,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
};

const moltenTouch: Boon = {
  name: "Molten Touch",
  type: OTHER,
  info: (value) =>
    `Your Attacks and Specials deal ${value} bonus damage to Armor`,
  values: {
    [EPIC]: { 1: "40%", 4: "75%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  toughTrade,
  fixedGain,
  furnaceBlast,
  heavyMetal,
  mintCondition,
  uncannyFortitude,
  roomTemperature,
  chainReaction,
  stellarSlam,
  moltenTouch,
};

const base: God = {
  name: "Hephaestus",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hephaestus: God = {
  ...base,
  ...formattedAbilities,
};

export { hephaestus };
