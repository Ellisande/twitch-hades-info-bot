import { toArray } from "lodash";
import { notNullOrUndefined } from "../../utils/arrayUtils";
import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "./abilityTypes";
import { lucidGain, novaFlourish, novaStrike, solarRing } from "./apollo";
import { plentifulForage, winterCoat } from "./demeter";
import { AIR, COSMIC, WATER } from "./elements";
import { Boon, God, InfusionBoon } from "./god";
import { anvilRing, fixedGain, smithySprint } from "./hephaestus";
import { nastyComeback, nexusSprint, swornFlourish, swornStrike } from "./hera";
import { hearthGain, smolderRing, sootSprint } from "./hestia";
import {
  breakerSprint,
  geyserRing,
  waveFlourish,
  waveStrike,
} from "./poseidon";
import { COMMON, DUO, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";
import { heavenFlourish, heavenStrike } from "./zeus";

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
  name: "Secret Crash",
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

const burningDesire: Boon = {
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

const islandGetaway: Boon = {
  name: "Island Getaway",
  type: OTHER,
  element: COSMIC,
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

const sunnyDisposition: Boon = {
  name: "Sunny Disposition",
  type: OTHER,
  element: COSMIC,
  info: (value) => `Whenever you create Heartthrobs, create ${value} more`,
  values: {
    [DUO]: { 1: 2 },
  },
  prerequisites: [
    [heartBreaker],
    [novaStrike, novaFlourish, lucidGain, solarRing],
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

const soulMate: Boon = {
  name: "Soul Mate",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Foes with [hitch] take ${value} more damage and are [weak], but only 2 can be afflicted at a time.`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [swornStrike, swornFlourish, nexusSprint, nastyComeback],
    [raptureRing, passionDash, glamourGain],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  gain,
  "secret crush": secretCrush,
  "shameless attitude": shamelessAttitude,
  heartBreaker,
  lifeAffirmation,
  burningDesire,
  ecstaticObsession,
  islandGetaway,
  softCaress,
  sunnyDisposition,
  heartyAppetite,
  soulMate,
  romanticSpark,
  wispyWiles,
};

export const aphrodite: God = {
  name: "Aphrodite",
  info,
  abilities,
  elements: [
    ...new Set(
      toArray(abilities)
        .map((ability) => ability.element)
        .filter((element) => element)
        .filter(notNullOrUndefined)
    ),
  ],
};
