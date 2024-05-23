import { ATTACK, CAST, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { flutterFlourish, flutterStrike } from "./aphrodite";
import { blindingSprint, lucidGain } from "./apollo";
import {
  coldStorage,
  frigidSprint,
  rareCrop,
  tranquilGain,
  winterCoat,
} from "./demeter";
import { COSMIC, WATER } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { smithySprint, volcanicFlourish, volcanicStrike } from "./hephaestus";
import { bornGain, nexusSprint, swornStrike } from "./hera";
import {
  burningDesire,
  controlledBurn,
  flameFlourish,
  flameStrike,
  glowingCoal,
  smolderRing,
  spontaneousCombustion,
} from "./hestia";
import { COMMON, DUO, EPIC, LEGENDARY, RARE } from "./rarities";
import {
  divineVengeance,
  heavenFlourish,
  heavenStrike,
  lightningLance,
  stormRing,
  thunderSprint,
} from "./zeus";

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attack: Boon = {
  name: "Wave Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attacks hit foes with a splash that knocks foes away and deals ${value} damage`,
  values: {
    [COMMON]: {
      1: 15,
    },
  },
};

export const waveStrike: Boon = attack;

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

export const waveFlourish: Boon = special;

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

export const geyserRing: Boon = cast;

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

export const breakerSprint: Boon = dash;

const floodControl: Boon = {
  name: "Flood Control",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `After you enter a Location, Prime 30 [mana] to reduce any damage you would take by ${value} per hit.`,
  values: {
    [COMMON]: { 1: -2 },
    [RARE]: { 1: -3 },
  },
};

// Note: At least in EA, Double Up can also double the Path of Stars reward!
export const doubleUp: Boon = {
  name: "Double Up",
  type: OTHER,
  info: (value) =>
    `Whenever you claim a Minor Find or similar resource reward, a copy has a ${value} chance to appear`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "25%" },
    [EPIC]: { 1: "30%" },
  },
};

export const fluidGain: Boon = {
  name: "Fluid Gain",
  type: OTHER,
  element: WATER,
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

const waterFitness: InfusionBoon = {
  name: "Water Fitness",
  type: INFUSION,
  info: (value) =>
    `If you have at least 4 [water] boons, then gain ${value} max health`,
  values: {
    [COMMON]: { 1: 100 },
  },
  requiredElements: [WATER],
};

export const sunkenTreasure: Boon = {
  name: "Sunken Treasure",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Gain ${value} [gold], [max health], and sometimes [ashes] and [psyche].`,
  values: {
    [COMMON]: { 1: 90 },
    [RARE]: { 1: 117 },
  },
};

export const oceansBounty: Boon = {
  name: "Ocean's Bounty",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Any Minor Finds and [coins] you find are worth ${value} more`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: "75%" },
  },
};

export const slipperySlope: Boon = {
  name: "Slippery Slope",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Your splash effects from Poseidon also inflict Slip on foes for ${value} bonus damage`,
  values: {
    [COMMON]: { 1: "5%" },
    [RARE]: { 1: "10%" },
  },
  prerequisites: [[waveStrike, waveFlourish]],
};

const crashingWave: Boon = {
  name: "Crashing Wave",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Whenever your knock-away effects slam foes into barriers, create a blast in the area that deals ${value} damage`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: { 1: 72 },
    [EPIC]: { 1: 94 },
  },
  prerequisites: [[waveStrike, waveFlourish, geyserRing, breakerSprint]],
};

const kingTide: Boon = {
  name: "King Tide",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Your splash effects from Poseidon are larger and deal ${value} bonus damage to Guardians`,
  values: {
    [LEGENDARY]: { 1: "150%" },
  },
  prerequisites: [[waveStrike, waveFlourish], [slipperySlope], [crashingWave]],
};

const islandGetaway: Boon = {
  name: "Island Getaway",
  type: OTHER,
  info: (value) =>
    `You take ${value} less damage from nearby foes. Boons of Aphrodite treat all foes as nearby.`,
  values: {
    [DUO]: { 1: "15%" },
  },
  prerequisites: [
    [waveStrike, waveFlourish, geyserRing, breakerSprint],
    [flutterStrike, flutterFlourish],
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

const killerCurrent: Boon = {
  name: "Killer Current",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your lightning deals ${value} bonus damage to [slip]-afflicted foes`,
  values: {
    [DUO]: { 1: "30%" },
  },
  prerequisites: [
    [slipperySlope],
    [
      heavenStrike,
      heavenFlourish,
      stormRing,
      thunderSprint,
      divineVengeance,
      lightningLance,
    ],
  ],
};

const seismicHammer: Boon = {
  name: "Seismic Hammer",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your [omega] cast occasionally creates a blast that deals 500 damage in the area. Recharges after ${value} seconds`,
  values: {
    [DUO]: { 1: 15 },
  },
  prerequisites: [
    [geyserRing],
    [volcanicStrike, volcanicFlourish, smithySprint],
  ],
};

const goldenRule: Boon = {
  name: "Golden Rule",
  type: OTHER,
  info: (value) => `You deal ${value} more damage per 100 gold you have`,
  values: {
    [DUO]: "5%",
  },
  prerequisites: [
    [swornStrike, nexusSprint, bornGain],
    [geyserRing, breakerSprint, fluidGain],
    [oceansBounty, doubleUp],
  ],
};

const beachBall: Boon = {
  name: "Beach Ball",
  type: OTHER,
  info: (value) =>
    `Your Sprint creates a water sphere behind you. After you stop, it surges ahead and bursts for ${value} damage`,
  values: {
    [DUO]: { 1: 140 },
  },
  prerequisites: [
    [blindingSprint, lucidGain],
    [breakerSprint, fluidGain],
  ],
};

const scaldingVapor: Boon = {
  name: "Scalding Vapor",
  type: OTHER,
  info: (value) =>
    `If foes with [slip] are struck with fire from Hestia, they are engulfed in [steam] that deals ${value} damage every 0.2 seconds`,
  values: {
    [DUO]: { 1: 25 },
  },
  prerequisites: [
    [slipperySlope],
    [
      flameStrike,
      flameFlourish,
      smolderRing,
      spontaneousCombustion,
      burningDesire,
      controlledBurn,
      glowingCoal,
    ],
  ],
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
  naturalSelection,
  killerCurrent,
  seismicHammer,
  goldenRule,
  beachBall,
  scaldingVapor,
};

export const poseidon: God = {
  name: "Poseidon",
  info,
  abilities,
  elements: listElements(abilities),
};
