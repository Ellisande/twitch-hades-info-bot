import { mapValues, toArray } from "lodash";
import { ATTACK, CAST, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import {
  healthyRebound,
  lifeAffirmation,
  shamelessAttitude,
} from "./aphrodite";
import { blindingSprint, lucidGain, solarRing } from "./apollo";
import { COSMIC, EARTH, WATER } from "./elements";
import { abilityFormatter } from "./formatters";
import { Boon, God, InfusionBoon } from "./god";
import { smithySprint, volcanicFlourish, volcanicStrike } from "./hephaestus";
import { bornGain, engagementRing, nexusSprint } from "./hera";
import { flameFlourish, flameStrike } from "./hestia";
import {
  breakerSprint,
  doubleUp,
  fluidGain,
  oceansBounty,
  sunkenTreasure,
} from "./poseidon";
import { COMMON, DUO, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";
import { heavenFlourish, heavenStrike } from "./zeus";

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

const roomTemperature: Boon = {
  name: "Room Temperature",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your blast effects from Hephaestus clear [freeze], so you [freeze] foes again right away.`,
  values: {
    [DUO]: { 1: 0 },
  },
  prerequisites: [
    [volcanicFlourish, volcanicStrike, smithySprint],
    [iceStrike, iceFlourish],
  ],
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

const torrentialDownpour: Boon = {
  name: "Torrential Downpour",
  type: OTHER,
  info: (value) =>
    `Each time you use your [omega] Cast in an Encounter, it gets ${value} stronger but also uses +5 [mana]`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [solarRing, blindingSprint, lucidGain],
    [arcticRing, frigidSprint, tranquilGain],
  ],
};

const freezerBurn: Boon = {
  name: "Freezer Burn",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Whenever you inflict [freeze], amplify any [scorch] effects already on the foe by ${value}`,
  values: {
    [DUO]: { 1: "100%" },
  },
  prerequisites: [
    [iceStrike, iceFlourish],
    [flameStrike, flameFlourish],
  ],
};

const apocalypticStorm: Boon = {
  name: "Apocalyptic Storm",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your [blitz] effects last ${value} seconds longer, and active against all [blitz]-afflicted foes at once`,
  values: {
    [DUO]: { 1: 8 },
  },
  prerequisites: [
    [iceStrike, iceFlourish, arcticRing, frigidSprint],
    [heavenStrike, heavenFlourish],
  ],
};

const naturalSelection: Boon = {
  name: "Natural Selection",
  type: OTHER,
  info: (value) =>
    `Location Rewards exclude max health, max [mana], and gold. Boon are ${value} more likely to be Rare or better`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [fluidGain, breakerSprint, oceansBounty, sunkenTreasure, doubleUp],
    [tranquilGain, frigidSprint, winterCoat, coldStorage, rareCrop],
  ],
};

const cherishedHeirloom: Boon = {
  name: "Cherished Heirloom",
  type: OTHER,
  info: (value) =>
    `Most other Keepsakes you equip are ${value} ranks strong this night (if possible)`,
  values: {
    [DUO]: { 1: 1 },
  },
  prerequisites: [
    [nexusSprint, engagementRing, bornGain],
    [arcticRing, frigidSprint, tranquilGain],
  ],
};

const heartyAppetite: Boon = {
  name: "Hearty Appetite",
  type: OTHER,
  element: COSMIC,
  info: (value) => `You deal ${value} more damage per 100 max health`,
  values: {
    [DUO]: { 1: "10%" },
  },
  prerequisites: [
    [plentifulForage, winterCoat],
    [shamelessAttitude, lifeAffirmation, healthyRebound],
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
  roomTemperature,
  coldStorage,
  localClimate,
  winterHarvest,
  torrentialDownpour,
  freezerBurn,
  apocalypticStorm,
  naturalSelection,
  cherishedHeirloom,
  heartyAppetite,
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
