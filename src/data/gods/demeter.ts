import { ATTACK, CAST, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { EARTH, WATER } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { COMMON, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";

const info = "Demeter, Goddess of Seasons. Her abilities slows enemies.";

const attack: Boon = {
  name: "Ice Strike",
  type: ATTACK,
  element: WATER,
  info: (value) =>
    `Your Attacks deals ${value} additional damage and inflicts [freeze]`,
  values: {
    [COMMON]: {
      1: "30%",
    },
    [RARE]: {
      1: "45%",
    },
  },
};

export const iceStrike: Boon = attack;

const special: Boon = {
  name: "Ice Flourish",
  type: SPECIAL,
  element: WATER,
  info: (value) =>
    `Your Specials deal ${value} more damage and inflict [freeze]`,
  values: {
    [COMMON]: {
      1: "40%",
      3: "70%",
      4: "75%",
    },
    [RARE]: {
      1: "60%",
    },
  },
};

export const iceFlourish: Boon = special;

const cast: Boon = {
  name: "Arctic Ring",
  type: CAST,
  element: WATER,
  info: (value) =>
    `Your Casts repeatedly deal ${value} damage in the area and inflict [freeze]`,
  values: {
    [COMMON]: {
      1: 10,
    },
    [RARE]: {
      1: 15,
      2: 20,
      3: 23,
    },
  },
};
export const arcticRing: Boon = cast;

export const tranquilGain: Boon = {
  name: "Tranquil Gain",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `After remaining inactive for 1 second, rapidly restore ${value} [mana]/second until you act`,
  values: {
    [COMMON]: { 1: 25 },
    [RARE]: { 1: 35 },
  },
};

const dash: Boon = {
  name: "Frigid Sprint",
  type: DASH,
  element: WATER,
  info: (value) =>
    `Your Sprint forms a Cyclone around you that lingers after you stop dealing ${value} every 0.25 seconds.`,
  values: {
    [COMMON]: {
      1: 4,
    },
  },
};

export const frigidSprint: Boon = dash;

const weedKiller: Boon = {
  name: "Weed Killer",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Your [omega] Attack deals ${value} more damage, but uses 10 more [mana]`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: {
      1: "75%",
    },
  },
};

export const rareCrop: Boon = {
  name: "Rare Crop",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `${value} of your boons randomly become common, then gain rarity every 3 encounters.`,
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

const galeForce: Boon = {
  name: "Gale Force",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Your Casts also create a Cyclone at the binding circle dealing ${value} damage rapidly.`,
  values: {
    [COMMON]: { 1: 4 },
    [EPIC]: {
      1: 12,
      2: 14,
    },
  },
};

export const plentifulForage: Boon = {
  name: `Plentiful Forage`,
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Whenever you gather plants, seeds, or mushrooms gain ${value} max health. Receive 1 mystery seed now.`,
  values: {
    [COMMON]: { 1: 5 },
    [RARE]: {
      1: 8,
    },
  },
};

const coarseGrit: InfusionBoon = {
  name: `Coarse Grit`,
  type: INFUSION,
  info: (value) =>
    `While you have at least 6 [earth] boons, you cannot take more than ${value} damage per hit`,
  values: {
    [COMMON]: {
      1: 15,
    },
  },
  requiredElements: [EARTH],
};

export const winterCoat: Boon = {
  name: `Winter Coat`,
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `After you enter a Location, Prime ${value} [mana] a barrier that absorbs 1 instance of damage`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: {
      1: 15,
    },
  },
};

const localClimate: Boon = {
  name: "Local Climate",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Your [omega] cast deals ${value} bonus damage and follows you, even as you start to Channel it`,
  values: {
    [COMMON]: { 1: "20%" },
  },
};

export const coldStorage: Boon = {
  name: "Cold Storage",
  type: OTHER,
  element: WATER,
  info: (value) => `Your [freeze] effects last ${value} seconds longer`,
  values: {
    [COMMON]: { 1: 2 },
  },
  prerequisites: [[iceStrike, iceFlourish]],
};

const winterHarvest: Boon = {
  name: "Winter Harvest",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `[freeze]-afflicted foes shatter at 10% health, dealing ${value} damage in the area`,
  values: {
    [LEGENDARY]: { 1: 100 },
  },
  prerequisites: [
    [iceStrike, iceFlourish],
    [plentifulForage, winterCoat],
    [weedKiller, coldStorage],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  rareCrop,
  weedKiller,
  tranquilGain,
  galeForce,
  plentifulForage,
  coarseGrit,
  winterCoat,
  coldStorage,
  localClimate,
  winterHarvest,
};

export const demeter: God = {
  name: "Demeter",
  info,
  abilities,
  elements: listElements(abilities),
};
