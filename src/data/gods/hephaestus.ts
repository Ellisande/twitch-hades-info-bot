import { ATTACK, CAST, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { glamourGain, passionDash, raptureRing } from "./aphrodite";
import { novaFlourish, novaStrike, superNova } from "./apollo";
import { iceFlourish, iceStrike } from "./demeter";
import { COSMIC, EARTH, FIRE } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { bornGain, braveFace, keenIntuition, nastyComeback } from "./hera";
import { flameFlourish, flameStrike, smolderRing } from "./hestia";
import { geyserRing } from "./poseidon";
import { COMMON, DUO, EPIC, LEGENDARY, RARE } from "./rarities";
import { staticShock } from "./zeus";

const info = "Hephaestus, God of the Forge";

const attack: Boon = {
  name: "Volcanic Strike",
  type: ATTACK,
  element: FIRE,
  info: (value) =>
    `Your Attacks occasionally create a blast that deals 200 damage. Recharges after ${value} seconds`,
  values: { [COMMON]: { 1: 12 }, [RARE]: { 2: 8, 5: 5 } },
};

export const volcanicStrike: Boon = attack;

const special: Boon = {
  name: "Volcanic Flourish",
  type: SPECIAL,
  element: FIRE,
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

export const volcanicFlourish: Boon = special;

const cast: Boon = {
  name: "Anvil Ring",
  type: CAST,
  element: EARTH,
  info: (value) =>
    `Your Casts deal ${value} damage 3 times in succession, but in a smaller area`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: {
      1: 70,
    },
  },
};

export const anvilRing: Boon = cast;

export const fixedGain: Boon = {
  name: "Fixed Gain",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `You take -10% damage, and restore ${value} [magick] whenever you take damage`,
  values: {
    [COMMON]: { 1: 50 },
  },
};

const dash: Boon = {
  name: "Smithy Sprint",
  type: DASH,
  element: FIRE,
  info: (value) =>
    `After you Sprint for 1 second, use 10 [magick] to create a blast for ${value} damage to nearby foes`,
  values: {
    [COMMON]: { 1: 200 },
  },
};

export const smithySprint: Boon = dash;

const martialArt: InfusionBoon = {
  name: "Martial Art",
  type: INFUSION,
  // TODO(sneakyteak): Verify this infusion. Did it change from +5% damage per Earth?
  info: (value) =>
    `After you hit with an Attack or Special, your next Attack or Special deals ${value} more damage`,
  values: {
    [RARE]: { 1: "50%" },
  },
  requiredElements: [EARTH],
};

export const toughTrade: Boon = {
  name: "Tough Trade",
  type: OTHER,
  element: FIRE,
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
  element: FIRE,
  info: (value) =>
    `Your blast effects from Hephaestus also inflict ${value} [vent] damage on foes.`,
  values: {
    [COMMON]: { 1: 300 },
    [RARE]: { 1: "400" },
  },
  prerequisites: [[volcanicStrike, volcanicFlourish, smithySprint]],
};

export const heavyMetal: Boon = {
  name: "Heavy Metal",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Gain some ${value} [armor]. Foe's attacks cannot knock you away.`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: { 1: "75" },
  },
};

export const mintCondition: Boon = {
  name: "Mint Condition",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `At the start of each Encounter you are impervious for ${value} seconds`,
  values: {
    [COMMON]: { 1: "8" },
  },
};

export const trustyShield: Boon = {
  name: "Trusty Shield",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `After you enter a Location, Prime 30 [magick] to gain ${value} Armor until the next Location`,
  values: {
    [COMMON]: { 1: 10 },
  },
};

export const uncannyFortitude: Boon = {
  name: "Uncanny Fortitude",
  type: OTHER,
  element: EARTH,
  info: (value) => `Gain ${value} max health, based on your [magick] limit`,
  values: {
    [COMMON]: { 1: "20%" },
  },
};

const fineTuning: Boon = {
  name: "Fine Tuning",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Your Aspect of the Nocturnal Arms is ${value} ranks stronger`,
  values: {
    [LEGENDARY]: { 1: 1 },
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

const moltenTouch: Boon = {
  name: "Molten Touch",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Your Attacks and Specials deal ${value} bonus damage to Armor`,
  values: {
    [COMMON]: { 1: "20%" },
    [EPIC]: { 1: "40%", 4: "75%" },
  },
};

const spitefulStrength: Boon = {
  name: "Spiteful Strength",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your Attacks and Specials deal ${value} more damage while not empowered by Boons`,
  values: {
    [DUO]: "200%",
  },
  prerequisites: [
    [braveFace, nastyComeback, keenIntuition, bornGain],
    [
      trustyShield,
      mintCondition,
      heavyMetal,
      toughTrade,
      uncannyFortitude,
      fixedGain,
    ],
  ],
};

const softCaress: Boon = {
  name: "Soft Caress",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `The first time you would take damage in each Encounter, turn ${value} of the hit into healing`,
  values: {
    [DUO]: { 1: "75%" },
  },
  prerequisites: [
    [raptureRing, passionDash, glamourGain],
    [anvilRing, smithySprint, fixedGain],
  ],
};

const stellarSlam: Boon = {
  name: "Stellar Slam",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
  prerequisites: [
    [novaStrike, novaFlourish, superNova],
    [volcanicFlourish, volcanicStrike, smithySprint],
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
  spitefulStrength,
  softCaress,
  martialArt,
  fineTuning,
  seismicHammer,
  masterConductor,
};

export const hephaestus: God = {
  name: "Hephaestus",
  info,
  abilities,
  elements: listElements(abilities),
};
