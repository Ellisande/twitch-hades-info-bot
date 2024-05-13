import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";

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
  info: (value) =>
    `Your [omega] Cast immediately detonates, dealing ${value} damage and knocking foes away`,
  values: {
    [RARE]: {
      1: 150,
      3: 230,
    },
  },
};

const dash: Boon = {
  name: "Breaker Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint deals ${value} damage on impact and knocks foes away, but uses 5 [mana] per hit`,
  values: {
    [COMMON]: {
      1: 80,
    },
    [RARE]: {
      2: 120,
    },
  },
};

const doubleUp: Boon = {
  name: "Double Up",
  type: OTHER,
  info: (value) =>
    `Whenever you claim a Minor Find or similar resource reward, a copy has a ${value} chance to appear`,
  values: {
    [COMMON]: { 1: "20%" },
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
  info: (value) =>
    `Whenever your knock-away effects slam foes into barriers, create a blast in the area that deals ${value} damage`,
  values: {
    [EPIC]: { 1: 94 },
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
  doubleUp,
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
