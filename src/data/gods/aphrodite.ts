import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "./abilityTypes";
import { AIR, WATER } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { COMMON, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";

const info =
  "Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage";

const attack: Boon = {
  name: "Flutter Strike",
  type: ATTACK,
  element: WATER,
  info: (value) => `Your Attacks ${value} more damage to nearby foes`,
  values: {
    [COMMON]: {
      1: "80%",
      2: "105%",
    },
    [RARE]: {
      1: "100%",
      2: "125%",
    },
    [EPIC]: {
      2: "145%",
      4: "300%",
      7: "330%",
    },
    [HEROIC]: {
      2: "165%",
    },
  },
};

export const flutterStrike = attack;

const special: Boon = {
  name: "Flutter Flourish",
  type: SPECIAL,
  element: WATER,
  info: (value) => `Your Specials deal ${value} more damage to nearby foes`,
  values: { [COMMON]: { 1: "80%" } },
};

export const flutterFlourish = special;

const cast: Boon = {
  name: "Rapture Ring",
  type: CAST,
  element: AIR,
  info: (value) =>
    `Your Casts drag foes in and inflict [weak] reducing their damage by ${value}`,
  values: {
    [COMMON]: {
      1: "10%",
      2: "15%",
      3: "17%",
    },
  },
};

export const raptureRing = cast;

const dash: Boon = {
  name: "Passion Dash",
  type: DASH,
  element: AIR,
  info: (value) =>
    `Your Dash blasts foes near where you start and end for ${value}, and inflicts [weak]`,
  values: {
    [COMMON]: {
      1: 20,
    },
  },
};

export const passionDash = dash;

const gain: Boon = {
  name: "Glamour Gain",
  type: GAIN,
  element: AIR,
  info: (value) =>
    `In each encounter, 1 foe is always Weak. You gradually restore ${value} [mana]/second while near [weak] foes.`,
  values: {
    [COMMON]: { 1: 6 },
    [EPIC]: { 1: 10 },
  },
};

export const glamourGain = gain;

const wispyWiles: InfusionBoon = {
  name: "Wispy Wiles",
  type: INFUSION,
  info: (value) =>
    `While you have at least 4 [air], you have a ${value} chance to dodge any damage`,
  values: {
    [COMMON]: { 1: "15%" },
  },
  requiredElements: [AIR],
};

export const shamelessAttitude: Boon = {
  name: "Shameless Attitude",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `While you have at least 80% health, you deal ${value} more damage`,
  values: { [COMMON]: { 1: "10%" }, [RARE]: { 1: "15%" } },
};

export const heartBreaker: Boon = {
  name: "Heart Breaker",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Whenever you use 30 [mana], create a Heartthrob that deals ${value} area damage.`,
  values: {
    [COMMON]: { 1: 120 },
  },
};

export const healthyRebound: Boon = {
  name: "Healthy Rebound",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `WHenever you exit a Location, restore 100% of health if you are above ${value} health`,
  values: {
    [COMMON]: { 1: "80%" },
  },
};

export const lifeAffirmation: Boon = {
  name: "Life Affirmation",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Any max health rewards you find have ${value} greater effect`,
  values: {
    [COMMON]: { 1: "40%" },
  },
};

const secretCrush: Boon = {
  name: "Secret Crush",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you enter a Location, [prime] 20 [mana] to add ${value} Power to your Attack`,
  values: {
    [COMMON]: { 1: "5" },
  },
};

const brokenResolve: Boon = {
  name: "Broken Resolve",
  type: OTHER,
  element: WATER,
  info: (value) => `Your [weak] effects are ${value} more potent`,
  values: {
    [COMMON]: { 1: "10%" },
  },
  prerequisites: [[raptureRing, passionDash, glamourGain]],
};

const sweetSurrender: Boon = {
  name: "Sweet Surrender",
  type: OTHER,
  element: WATER,
  info: (value) => `[weak]-afflicted foes take ${value} more damage`,
  values: {
    [COMMON]: { 1: "10%" },
  },
  prerequisites: [[raptureRing, passionDash, glamourGain]],
};

const ecstaticObsession: Boon = {
  name: "Ecstatic Obsession",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `During Encounters with at least ${value} foes, 1 foe is always afflicted with Charm`,
  values: {
    [LEGENDARY]: { 1: 3 },
  },
  prerequisites: [
    [brokenResolve, sweetSurrender],
    [raptureRing, passionDash, glamourGain],
    [flutterFlourish, flutterStrike],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  gain,
  secretCrush,
  shamelessAttitude,
  heartBreaker,
  lifeAffirmation,
  ecstaticObsession,
  wispyWiles,
};

export const aphrodite: God = {
  name: "Aphrodite",
  info,
  abilities,
  elements: listElements(abilities),
};
