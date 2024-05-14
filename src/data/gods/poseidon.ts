import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";
import { WATER } from "./elements";

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attack: Boon = {
  name: "Unknown",
  type: ATTACK,
  info: (value) => `Unknown`,
  values: {},
};

const special: Boon = {
  name: "Wave Flourish",
  type: SPECIAL,
  element: WATER,
  info: (value) =>
    `Your Specials hit foes with a splash that knocks other foes away and deals ${value} damage`,
  values: {
    [COMMON]: {
      1: 20,
    },
    [RARE]: {
      1: 30,
    },
    [EPIC]: {
      1: 40,
    },
  },
};

const cast: Boon = {
  name: "Geyser Ring",
  type: CAST,
  element: WATER,
  info: (value) =>
    `Your [omega] Cast immediately detonates, dealing ${value} damage and knocking foes away`,
  values: {
    [COMMON]: {
      1: 100,
    },
    [RARE]: {
      1: 150,
      3: 230,
    },
  },
};

const dash: Boon = {
  name: "Breaker Sprint",
  type: DASH,
  element: WATER,
  info: (value) =>
    `Your Sprint deals ${value} damage on impact and knocks foes away, but uses 5 [mana] per hit`,
  values: {
    [COMMON]: {
      1: 80,
    },
    [RARE]: {
      1: 120,
      2: 160,
      3: 180,
    },
  },
};

const floodControl: Boon = {
  name: "Flood Control",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `After you enter a Location, Prime 30 [mana] to reduce any damage you would take by ${value} per hit.`,
  values: {
    [RARE]: { 1: -3 },
  },
}

// Note: At least in EA, Double Up can also double the Path of Stars reward!
const doubleUp: Boon = {
  name: "Double Up",
  type: OTHER,
  info: (value) =>
    `Whenever you claim a Minor Find or similar resource reward, a copy has a ${value} chance to appear`,
  values: {
    [COMMON]: { 1: "20%", },
    [RARE]: { 1: "25%", },
    [EPIC]: { 1: "30%", },
  },
};

const fluidGain: Boon = {
  name: "Fluid Gain",
  type: OTHER,
  info: (value) =>
    `After you strike foes with your Weapon, a Spirit Bubble has a ${value} chance to appear`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: {
      1: "12%",
    },
  },
};
const hydraulicMight: Boon = {
  name: "Hydraulic Might",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `At the start of each Encounter, your Attacks and Specials are ${value} strong for 10 seconds.`,
  values: {
    [COMMON]: { 1: "100%" },
  },
};

const waterFitness: Boon = {
  name: "Water Fitness",
  type: OTHER,
  info: (value) =>
    `If you have at least 4 [water] boons, then gain ${value} max health`,
  values: {
    [COMMON]: { 1: 100 },
  },
};

const sunkenTreasure: Boon = {
  name: "Sunken Treasure",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Gain ${value} [gold], [max health], and sometimes [ashes] and [psyche].`,
  values: {
    [RARE]: { 1: 117 },
  },
}

const oceansBounty: Boon = {
  name: "Ocean's Bounty",
  type: OTHER,
  info: (value) =>
    `Any Minor Finds and [coins] you find are worth ${value} more`,
  values: {
    [RARE]: { 1: "75%" },
  },
};

const slipperySlope: Boon = {
  name: "Slippery Slope",
  type: OTHER,
  info: (value) =>
    `Your splash effects from Poseidon also inflict Slip on foes for ${value} bonus damage`,
  values: {
    [RARE]: { 1: "10%" },
  },
};

const crashingWave: Boon = {
  name: "Crashing Wave",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Whenever your knock-away effects slam foes into barriers, create a blast in the area that deals ${value} damage`,
  values: {
    [COMMON]: { 1: 50, },
    [RARE]: { 1: 72, },
    [EPIC]: { 1: 94, },
  },
};

const kingTide: Boon = {
  name: "King Tide",
  type: OTHER,
  info: (value) =>
    `Your splash effects from Poseidon are larger and deal ${value} bonus damage to Guardians`,
  values: {
    [LEGENDARY]: { 1: "150%" },
  },
};

const islandGetaway: Boon = {
  name: "Island Getaway",
  type: OTHER,
  info: (value) =>
    `You take ${value} less damage from nearby foes. Boons of Aphrodite treat all foes as nearby.`,
  values: {
    [DUO]: { 1: "15%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  waterFitness,
  hydraulicMight,
  fluidGain,
  floodControl,
  doubleUp,
  sunkenTreasure,
  "ocean's bounty": oceansBounty,
  slipperySlope,
  crashingWave,
  kingTide,
  islandGetaway,
};

const base: God = {
  name: "Poseidon",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const poseidon: God = {
  ...base,
  ...formattedAbilities,
};

export { poseidon };
