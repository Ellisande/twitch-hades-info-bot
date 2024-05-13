import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";

const info = "Demeter, Goddess of Seasons. Her abilities slows enemies.";

const attack: Boon = {
  name: "Ice Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attacks deals ${value} additional damage and apply [freeze]`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: {
      1: "45%",
    },
  },
};

const special: Boon = {
  name: "Ice Flourish",
  type: SPECIAL,
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

const cast: Boon = {
  name: "Arctic Ring",
  type: CAST,
  info: (value) =>
    `Your Casts repeatedly deal ${value} damage in the area and inflict Freeze`,
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

const tranquilGain: Boon = {
  name: "Tranquil Gain",
  type: OTHER,
  info: (value) =>
    `After remaining inactive for 1 second, rapidly restore ${value} [mana]/second until you act`,
  values: {
    [COMMON]: { 1: 25 },
    [RARE]: { 1: 35 },
  },
};

const dash: Boon = {
  name: "Unknown",
  type: DASH,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 15,
    },
    [RARE]: {
      1: 22.5,
    },
    [EPIC]: {
      1: 30,
    },
    [HEROIC]: {
      1: 37.5,
    },
  },
};

const weedKiller: Boon = {
  name: "Weed Killer",
  type: OTHER,
  info: (value) =>
    `Your [omega] Attack deals ${value} more damage, but uses 10 more [mana]`,
  values: {
    [RARE]: {
      1: "75%",
    },
  },
};

const rareCrop: Boon = {
  name: "Rare Crop",
  type: OTHER,
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
  info: (value) =>
    `Your Casts also create a Cyclone at the binding circle dealing ${value} damage rapidly.`,
  values: {
    [EPIC]: {
      1: 12,
      2: 14,
    },
  },
};

const plentifulForage: Boon = {
  name: `Plentiful Forage`,
  type: OTHER,
  info: (value) =>
    `Whenever you gather plants, seeds, or mushrooms gain ${value} max health. Receive 1 mystery seed now.`,
  values: {
    [RARE]: {
      1: 8,
    },
  },
};

const coarseGrit: Boon = {
  name: `Coarse Grit`,
  type: OTHER,
  info: (value) =>
    `While you have at least 6 [earth] boons, you cannot take more than ${value} damage per hit`,
  values: {
    [EPIC]: {
      1: 15,
    },
  },
};

const winterCoat: Boon = {
  name: `Winter Coat`,
  type: OTHER,
  info: (value) =>
    `After you enter a Location, Prime ${value} [mana] a barrier that absorbs 1 instance of damage`,
  values: {
    [RARE]: {
      1: 15,
    },
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

const coldStorage: Boon = {
  name: "Cold Storage",
  type: OTHER,
  info: (value) => `Your [freeze] effects last ${value} seconds longer`,
  values: {
    [COMMON]: { 1: 2 },
  },
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
  roomTemperature,
  coldStorage,
};

const base: God = {
  name: "Demeter",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const demeter: God = {
  ...base,
  ...formattedAbilities,
};

export { demeter };
