const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID,
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange,
  calculateFlat,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info =
  "Ares, God of War. His powers cause spinning clouds of blades or damaging curses.";

const attackBase = 50;
const attack = {
  name: "Curse of Agony",
  type: ATTACK,
  info: (value) =>
    `Your Attack inflicts Doom dealing ${value} damage after 1.1 seconds`,
  values: calculateFlat(attackBase, true),
};

const specialBase = 60;
const special = {
  name: "Curse of Pain",
  type: SPECIAL,
  info: (value) =>
    `Your Special inflicts Doom dealing ${value} damage after 1.2 seconds`,
  values: calculateFlat(specialBase, true),
};

const cast = {
  name: "Slicing Shot",
  type: CAST,
  info: (value) =>
    `Your Cast sends a Blade Rift hurling ahead dealing ${value} damage per 0.1 seconds for 4 seconds`,
  values: {
    [COMMON]: {
      1: 20,
    },
    [RARE]: {
      1: 21,
    },
    [EPIC]: {
      1: 22,
    },
    [HEROIC]: {
      1: 23,
    },
  },
};

const slicingFlare = {
  name: "Slicing Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast sends a large Blest Rift hurtling ahead for a brief time dealing ${value} damage per hit.`,
  values: {
    [COMMON]: { 1: 30 },
  },
};

const dashBase = 10;
const dash = {
  name: "Blade Dash",
  type: DASH,
  info: (value) =>
    `Your Dash creates a Blade Rift where you started dealing ${value} damage per 0.1 seconds for 0.7 seconds`,
  values: calculateFlat(dashBase, true),
};

const urgeToKill = {
  name: "Urge to Kill",
  type: OTHER,
  info: (value) => `Your Attack, Special, and Cast deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "8%" },
    [RARE]: { 1: "10%" },
    [EPIC]: { 1: "12%" },
    [HEROIC]: { 1: "14%" },
  },
};

const revenge = {
  name: "Curse of Vengeance",
  type: REVENGE,
  info: (value) =>
    `After you take damage, inflict Doom on surrounding foes dealing ${value} damage after 1.1 seconds`,
  values: {
    [COMMON]: { 1: 90 },
    [RARE]: { 1: 99 },
    [EPIC]: { 1: 108 },
    [LEGENDARY]: { 1: 117 },
  },
};

const blackMetal = {
  name: "Black Metal",
  type: OTHER,
  info: (value) =>
    `Your Blade Rift powers deal damage in a ${value} wider area`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "22%" },
    [EPIC]: { 1: "24%" },
    [HEROIC]: { 1: "26%" },
  },
};

const engulfingVortex = {
  name: "Engulfing Vortex",
  type: OTHER,
  info: (value) =>
    `Your Blade Rift effects lasts ${value} seconds longer and pulls foes in`,
  values: {
    [COMMON]: { 1: "0.2" },
    [RARE]: { 1: `${0.2 * 1.3}-0.3` },
    [EPIC]: { 1: `${0.2 * 2}-${0.2 * 2.5}` },
    [HEROIC]: { 1: `${0.2 * 2.5}-${0.2 * 2.7}` },
  },
};

const direMisfortune = {
  name: "Dire Misfortune",
  type: OTHER,
  info: (value) =>
    `Your Doom effects deal ${value} damage per application when applied multiple times`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 13 },
    [EPIC]: { 1: 15 },
    [HEROIC]: { 1: 17 },
  },
};

const battleRage = {
  name: "Battle Rage",
  type: OTHER,
  info: (value) =>
    `After slaying a foe,  your next Attack or Special deals ${value} more damage`,
  values: {
    [COMMON]: { 1: "100%" },
    [RARE]: { 1: "150%" },
    [EPIC]: { 1: "200%" },
    [HEROIC]: { 1: "250%" },
  },
};

const impendingDoom = {
  name: "Impending Doom",
  type: OTHER,
  info: (value) =>
    `Your Doom effects deal ${value} more damage after 0.5 seconds`,
  values: {
    [COMMON]: { 1: "60%" },
    [RARE]: { 1: "66%" },
    [EPIC]: { 1: "72%" },
    [HEROIC]: { 1: "78%" },
  },
};

const bloodFrenzy = {
  name: "Blood Frenzy",
  type: OTHER,
  info: (value) =>
    `After using Death Defiance, deal ${value}% more damage that Encounter`,
  values: {
    [COMMON]: { 1: 15 },
  },
};

const aresAid = {
  name: "Ares' Aid",
  type: AID,
  info: (value) =>
    `Your Call turns you into an Invulnerable Blade Rift for 1.2 seconds dealing ${value} damage per hit. Max guage increases the duration to 5 seconds.`,
  values: {
    [COMMON]: { 1: 30 },
    [RARE]: { 1: 37.5 },
    [EPIC]: { 1: 45 },
    [HEROIC]: { 1: 52.5 },
  },
};

const curseOfLonging = {
  name: "Curse of Longing",
  type: OTHER,
  info: (value) =>
    `Your Doom effects continuously strike Weak foes for ${value} damage`,
  values: {
    [DUO]: { 1: "50%" },
  },
};

const huntingBlades = {
  name: "Hunting Blades",
  type: OTHER,
  info: (value) =>
    `Your Cast creates a faster Blade Rift that seeks the nearest foe for ${value} seconds`,
  values: {
    [DUO]: { 1: "3.3" },
  },
};

const mericfulEnd = {
  name: "Merciful End",
  type: OTHER,
  info: (value) =>
    `Your attacks that Deflect immediately active Doom effects for ${value} additional damage`,
  values: {
    [DUO]: { 1: 40 },
  },
};

const vengefulMood = {
  name: "Vengeful Mood",
  type: OTHER,
  info: (value) =>
    `All of your Revenge attacks occur without taking damage every ${value} seconds`,
  values: {
    [DUO]: { 1: `3` },
  },
};

const curseOfNausea = {
  name: "Curse of Nausea",
  type: OTHER,
  info: (value) => `Your Hangover effects deal damage every ${value} seconds`,
  [DUO]: { 1: 0.35 },
};

const curseOfDrowning = {
  name: "Curse of Drowning",
  type: OTHER,
  info: (value) =>
    `Your Flood Shot becomes a pulse that damages foes around you for ${value}`,
  [DUO]: { 1: 3 },
};

const freezingVortex = {
  name: "Freezing Vortex",
  type: OTHER,
  info: (value) =>
    `Your Cast inflicts Chill, but is ${value}% smaller and moves slower`,
  [DUO]: { 1: -15 },
};

const viciousCycle = {
  name: "Vicious Cycle",
  type: OTHER,
  info: (value) =>
    `Your Blade Rift effects deal more ${value} damage for each consecutive hit`,
  values: {
    [LEGENDARY]: { 1: 2 },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: aresAid,
  "urge to kill": urgeToKill,
  "black metal": blackMetal,
  "engulfing vortex": engulfingVortex,
  "dire mistfortune": direMisfortune,
  "battle rage": battleRage,
  "impending doom": impendingDoom,
  "curse of longing": curseOfLonging,
  "hunting blades": huntingBlades,
  "mericful end": mericfulEnd,
  "vengeful mood": vengefulMood,
  "vicious cycle": viciousCycle,
  "slicing flare": slicingFlare,
  "curse of nausea": curseOfNausea,
  "curse of drowning": curseOfDrowning,
  "freezing vortex": freezingVortex,
  "bood frenzy": bloodFrenzy,
};

const base = {
  name: "Ares",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const ares = {
  ...base,
  ...formattedAbilities,
};

module.exports = { ares };
