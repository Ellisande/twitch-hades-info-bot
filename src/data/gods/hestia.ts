import { ATTACK, CAST, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { glamourGain, passionDash, raptureRing } from "./aphrodite";
import { lucidGain, novaFlourish, novaStrike } from "./apollo";
import { iceFlourish, iceStrike } from "./demeter";
import { COSMIC, FIRE } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { volcanicFlourish, volcanicStrike } from "./hephaestus";
import { bornGain, engagementRing, swornFlourish, swornStrike } from "./hera";
import { slipperySlope } from "./poseidon";
import { COMMON, DUO, EPIC, LEGENDARY, RARE } from "./rarities";
import { heavenFlourish, heavenStrike } from "./zeus";

const info = "Goddess of flame";

export const attack: Boon = {
  name: "Flame Strike",
  type: ATTACK,
  element: FIRE,
  info: (value) => `Your attacks inflict ${value} scorch damage`,
  values: {
    [COMMON]: {
      1: 20,
      2: 25,
    },
    [RARE]: {
      1: 25,
    },
  },
};

export const flameStrike = attack;

export const special: Boon = {
  name: "Flame Flourish",
  type: SPECIAL,
  element: FIRE,
  info: (value) => `Your Special inflicts ${value} [scorch] damage`,
  values: {
    [COMMON]: { 1: 15 },
    [RARE]: { 1: 20, 2: 25 },
    [EPIC]: { 1: 25 },
  },
};

export const flameFlourish = special;

export const cast: Boon = {
  name: "Smolder Ring",
  type: CAST,
  element: FIRE,
  info: (value) =>
    `Your Casts repeatedly inflict ${value} [scorch] per second on foes`,
  values: {
    [COMMON]: {
      1: 30,
    },
  },
};

export const smolderRing = cast;

const dash: Boon = {
  name: "Soot Sprint",
  type: DASH,
  element: FIRE,
  info: (value) =>
    `Your Sprint destroys most ranged shots near you, and inflicts ${value} [scorch] on foes that fired.`,
  values: {
    [COMMON]: {
      1: 2,
    },
    [RARE]: { 1: 4, 3: 7 },
    [EPIC]: {
      1: 6,
    },
  },
};

export const sootSprint = dash;

export const hearthGain: Boon = {
  name: "Hearth Gain",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Rapidly restore ${value} [magick] every second, but you have -20% less max health`,
  values: {
    [COMMON]: {
      1: 7,
    },
    [RARE]: {
      1: 10,
    },
  },
};

export const controlledBurn: Boon = {
  name: "Controlled Burn",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Your [omega] Special also launches a fiery projectile that deals ${value} damage, but also uses +10 [magick]`,
  values: {
    [COMMON]: { 1: 80 },
  },
};

export const burntOffering: Boon = {
  name: "Burnt Offering",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Gain ${value} max health and max magic, but give up 1 boon selected by Hestia`,
  values: {
    [COMMON]: {
      1: 50,
    },
  },
};
const slowCooker: InfusionBoon = {
  name: "Slow Cooker",
  type: INFUSION,
  info: (value) =>
    `Your Attacks and Specials gain ${value} Power for each [fire] boon you have`,
  values: {
    [COMMON]: {
      1: 2,
    },
  },
  requiredElements: [FIRE],
};

export const glowingCoal: Boon = {
  name: "Glowing Coal",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Hold Cast to aim a fiery projectile that explodes on impact for ${value} damage. The binding circle forms there.`,
  values: {
    [COMMON]: { 1: 50 },
    [EPIC]: {
      1: 90,
      2: 110,
      3: 125,
      4: 135,
      6: 155,
    },
  },
};

export const spontaneousCombustion: Boon = {
  name: "Spontaneous Combustion",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Your [omega] special inflicts ${value} bonus [scorch] if foes are not afflicted`,
  values: {
    [COMMON]: { 1: 60 },
  },
};

const naturalGas: Boon = {
  name: "Natural Gas",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Whenever [scorch]-afflicted foes are slain, they damage nearby foes for ${value} damage`,
  values: {
    [COMMON]: { 1: 60 },
    [EPIC]: {
      1: 120,
    },
  },
  prerequisites: [
    [flameFlourish, flameStrike, smolderRing, spontaneousCombustion],
  ],
};

export const flammableCoating: Boon = {
  name: "Flammable Coating",
  type: OTHER,
  element: FIRE,
  info: (value) => `Your [scorch] effects deal ${value} bonus damage to Armor`,
  values: {
    [COMMON]: { 1: "100%" },
    [EPIC]: {
      1: "200%",
    },
  },
  prerequisites: [
    [flameFlourish, flameStrike, smolderRing, spontaneousCombustion],
  ],
};

const fireExtinguisher: Boon = {
  name: "Fire Extinguisher",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Foes with at least 300 [scorch] take a burst of damage equal to ${value} their [scorch] that consumes the effect`,
  values: {
    [COMMON]: {
      1: "50%",
    },
    [RARE]: {
      1: "62%",
    },
    [EPIC]: {
      1: "75%",
    },
  },
  prerequisites: [
    [flameFlourish, flameStrike, smolderRing, spontaneousCombustion],
  ],
};

const chainReaction: Boon = {
  name: "Chain Reaction",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `If you use your blast effects from Hephaestus just within ${value} seconds of them recharging, they fire 2 times`,
  values: {
    [DUO]: { 1: 0.85 },
  },
  prerequisites: [
    [volcanicFlourish, volcanicStrike],
    [flameStrike, flameFlourish, smolderRing],
  ],
};

const phoenixSkin: Boon = {
  name: "Phoenix Skin",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Give up -100 max health. If you do not take or deal damage for 3 seconds, rapidly restore ${value} health/sec`,
  values: {
    [DUO]: {
      1: 3,
    },
  },
  prerequisites: [
    [novaStrike, novaFlourish, lucidGain],
    [flameStrike, flameFlourish, smolderRing],
    [burntOffering, flammableCoating, hearthGain],
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

export const burningDesire: Boon = {
  name: "Burning Desire",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for ${value} damage`,
  values: {
    [DUO]: { 1: 160 },
  },
  prerequisites: [
    [raptureRing, passionDash, glamourGain],
    [smolderRing, sootSprint, hearthGain],
  ],
};

const pyroTechnique: Boon = {
  name: "Pyro Technique",
  type: OTHER,
  element: FIRE,
  info: (value) => `Your [scorch] effects deal damage ${value} faster`,
  values: {
    [LEGENDARY]: {
      1: "100%",
    },
  },
  prerequisites: [
    [flameFlourish, flameStrike, smolderRing, spontaneousCombustion],
    [naturalGas, flammableCoating],
    [glowingCoal, controlledBurn],
  ],
};

const funeralPyre: Boon = {
  name: "Funeral Pyre",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `While you Channel your [omega] moves, repeatedly inflict ${value} [scorch] on nearby foes`,
  values: {
    [DUO]: { 1: 90 },
  },
  prerequisites: [
    [swornStrike, swornFlourish, engagementRing, bornGain],
    [flameStrike, flameFlourish, smolderRing, hearthGain],
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
  hearthGain,
  controlledBurn,
  burntOffering,
  naturalGas,
  funeralPyre,
  slowCooker,
  glowingCoal,
  fireExtinguisher,
  flammableCoating,
  chainReaction,
  phoenixSkin,
  burningDesire,
  pyroTechnique,
  spontaneousCombustion,
  freezerBurn,
  scaldingVapor,
  thermalDynamics,
};

export const hestia: God = {
  name: "Hestia",
  info,
  abilities,
  elements: listElements(abilities),
};
