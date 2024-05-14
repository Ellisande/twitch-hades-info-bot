import { mapValues, toArray } from "lodash";
import { notNullOrUndefined } from "../../utils/arrayUtils";
import { ATTACK, CAST, DASH, OTHER, SPECIAL, GAIN, } from "./abilityTypes";
import { AIR, WATER } from "./elements";
import { abilityFormatter } from "./formatters";
import { Boon, God } from "./god";
import { COMMON, DUO, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";

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

const special: Boon = {
  name: "Fluttery Flourish",
  type: SPECIAL,
  element: WATER,
  info: (value) => `Unknown`,
  values: { [COMMON]: { 1: "80%" } },
};

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

const dash: Boon = {
  name: "Unknown",
  type: DASH,
  element: AIR,
  info: (value) => `Unknown`,
  values: {
    [RARE]: {
      1: 30,
    },
  },
};

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

const shamelessAttitude: Boon = {
  name: "Shameless Attitude",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `While you have at least 80% health, you deal ${value} more damage`,
  values: { [RARE]: { 1: "15%" } },
};

const heartBreaker: Boon = {
  name: "Heart Breaker",
  type: OTHER,
  element: WATER,
  info: (value) =>
    `Whenever you use 30 [mana], create a Heartthrob that deals ${value} area damage.`,
  values: {
    [COMMON]: { 1: 120 },
  },
};

const lifeAffirmation: Boon = {
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

const burningDesire: Boon = {
  name: "Burning Desire",
  type: OTHER,
  info: (value) =>
    `Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for ${value} damage`,
  values: {
    [DUO]: { 1: 160 },
  },
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
  gain,
  "secret crush": secretCrush,
  "shameless attitude": shamelessAttitude,
  heartBreaker,
  lifeAffirmation,
  burningDesire,
  ecstaticObsession,
  islandGetaway,
};

const base: God = {
  name: "Aphrodite",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
  elements: [
    ...new Set(
      toArray(abilities)
        .map((ability) => ability.element)
        .filter((element) => element)
        .filter(notNullOrUndefined)
    ),
  ],
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const aphrodite: God = {
  ...base,
  ...formattedAbilities,
};

export { aphrodite };
