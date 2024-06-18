import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "./abilityTypes";
import {
  flutterFlourish,
  flutterStrike,
  passionDash,
  raptureRing,
} from "./aphrodite";
import { solarRing } from "./apollo";
import { arcticRing, frigidSprint, iceFlourish, iceStrike } from "./demeter";
import { AIR, COSMIC } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import {
  fixedGain,
  heavyMetal,
  mintCondition,
  toughTrade,
  trustyShield,
} from "./hephaestus";
import {
  bornGain,
  engagementRing,
  nexusSprint,
  swornFlourish,
  swornStrike,
} from "./hera";
import { flameFlourish, flameStrike } from "./hestia";
import { slipperySlope } from "./poseidon";
import { COMMON, DUO, EPIC, LEGENDARY, RARE } from "./rarities";

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

export const heavenStrike: Boon = attack;

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

export const heavenFlourish: Boon = special;

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

export const stormRing: Boon = cast;

const dash: Boon = {
  name: "Thunder Sprint",
  type: DASH,
  element: AIR,
  info: (value) =>
    `Your Sprint causes nearby foes to be struck by lightning bolts for ${value} damage, which use 3 [magick] each`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 25 },
  },
};

export const thunderSprint: Boon = dash;

const gain: Boon = {
  name: "Ionic Gain",
  type: GAIN,
  element: AIR,
  info: (value) =>
    `Gradually restore [magick] by ${value}/sec, but your total amount is reduced by 70%`,
  values: {
    [COMMON]: { 1: 4 },
    [RARE]: { 1: 6 },
  },
};

export const ionicGain: Boon = gain;

const airQuality: InfusionBoon = {
  name: "Air Quality",
  type: INFUSION,
  info: (value) =>
    `While you have at least 5 [air], you can never deal less damage than ${value} per hit.`,
  values: {
    [COMMON]: { 1: 30 },
  },
  requiredElements: [AIR],
};

export const divineVengeance: Boon = {
  name: "Divine Vengeance",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you take damage, your foe is struck by lightning for 100 damage, and again 50% of the time (up to ${value} times)`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 3 },
  },
};

export const lightningLance: Boon = {
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

export const staticShock: Boon = {
  name: "Static Shock",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you enter a Location, [prime] 50 [magick] to make your strikes emit chain-lightning that deals ${value} damage`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 15 },
    [EPIC]: { 1: 20 },
  },
};

const spiritSurge: Boon = {
  name: "Spirit Surge",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `While you have no more than 10 [magick], all foes are occasionally struck by lightning for ${value} damage`,
  values: {
    [COMMON]: { 1: 60 },
    [EPIC]: { 1: "90" },
  },
};

const doubleStrike: Boon = {
  name: "Double Strike",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Your lightning bolt effects have a ${value} chance to strike 1 more time`,
  values: {
    [COMMON]: { 1: "5%", 2: "10%" },
    [EPIC]: { 1: "15%", 4: "25%" },
  },
  prerequisites: [
    [
      heavenStrike,
      heavenFlourish,
      stormRing,
      thunderSprint,
      spiritSurge,
      divineVengeance,
      lightningLance,
    ],
  ],
};

const kingsRansom: Boon = {
  name: "King's Ransom",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Give up all your Boons of Hera. For each raise all of your Boons of Zeus by ${value} levels`,
  values: {
    [DUO]: { 1: 2 },
  },
  prerequisites: [
    [swornFlourish, swornStrike, engagementRing, nexusSprint, bornGain],
    [heavenFlourish, heavenStrike, stormRing, thunderSprint, ionicGain],
  ],
};

const electricOverload: Boon = {
  name: "Electric Overload",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Whenever your [blitz] effects activate, a bolt of chain-lightning fires from the foe dealing ${value} damage`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 15 },
  },
  prerequisites: [[heavenFlourish, heavenStrike]],
};

const masterConductor: Boon = {
  name: "Master Conductor",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your chain-lightning deals ${value} more damage per bounce and can bounce to you`,
  values: {
    [DUO]: { 1: "15%" },
  },
  prerequisites: [
    [staticShock],
    [fixedGain, trustyShield, heavyMetal, mintCondition, toughTrade],
  ],
};

const toastingFork: Boon = {
  name: "Toasting Fork",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Your [blitz] effects deal ${value} damage even if they expire without being activated.`,
  values: {
    [COMMON]: { 1: "75%" },
    [RARE]: { 1: "100%" },
  },
  prerequisites: [[heavenFlourish, heavenStrike]],
};

const shockingLoss: Boon = {
  name: "Shocking Loss",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Most foes have a ${value} chance to be instantly destroyed as soon as they enter the Encounter`,
  values: {
    [LEGENDARY]: { 1: "7%" },
  },
};

const gloriousDisaster: Boon = {
  name: "Glorious Disaster",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `You can Channel +30 [magick] into your [omega] Cast to repeatedly strike foes for ${value} bolt damage every 0.13 seconds`,
  values: {
    [LEGENDARY]: { 1: 50 },
  },
  prerequisites: [[solarRing], [heavenStrike, heavenFlourish, thunderSprint]],
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

const thermalDynamics: Boon = {
  name: "Thermal Dynamics",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your [blitz] effects also inflict ${value} [scorch] whenever they deal damage`,
  values: {
    [DUO]: { 1: 80 },
  },
  prerequisites: [
    [heavenStrike, heavenFlourish],
    [flameFlourish, flameStrike],
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

const romanticSpark: Boon = {
  name: "Romantic Spark",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `If you Sprint into [blitz]-afflicted foes, the effect actives immediately and is ${value} stronger`,
  values: {
    [DUO]: { 1: "200%" },
  },
  prerequisites: [
    [heavenFlourish, heavenStrike],
    [passionDash, raptureRing, flutterFlourish, flutterStrike],
  ],
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
  shockingLoss,
  gloriousDisaster,
  apocalypticStorm,
  thermalDynamics,
  killerCurrent,
  romanticSpark,
};

export const zeus: God = {
  name: "Zeus",
  info,
  abilities,
  elements: listElements(abilities),
};
