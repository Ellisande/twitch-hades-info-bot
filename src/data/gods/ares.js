const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange,
  calculateFlat
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info =
  "Ares, God of War. His powers cause spinning clouds of blades or damaging curses.";

const attackBase = 50;
const attack = {
  name: "Curse of Agony",
  type: ATTACK,
  info: value =>
    `Your Attack inflicts Doom dealing ${value} damage after 1.1 seconds`,
  values: calculateFlat(attackBase, true)
};

const specialBase = 70;
const special = {
  name: "Curse of Pain",
  type: SPECIAL,
  info: value =>
    `Your Special inflicts Doom dealing ${value} damage after 1.2 seconds`,
  values: calculateFlat(specialBase, true)
};

const cast = {
  name: "Slicing Shot",
  type: CAST,
  info: value =>
    `Your Cast sends a Blade Rift hurling ahead dealing ${value} damage per 0.1 seconds for 4 seconds`,
  values: {
    [COMMON]: {
      1: 10
    },
    [RARE]: {
      1: 11
    },
    [EPIC]: {
      1: 13
    },
    [HEROIC]: {
      1: 14
    }
  }
};

const dashBase = 5;
const dash = {
  name: "Blade Dash",
  type: DASH,
  info: value =>
    `Your Dash creates a Blade Rift where you started dealing ${value} damage per 0.1 seconds for 0.7 seconds`,
  values: calculateFlat(dashBase, true)
};

const urgeToKill = {
  name: "Urge to Kill",
  type: OTHER,
  info: value => `Your Attack, Special, and Cast deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "8%" },
    [RARE]: { 1: "10%" },
    [EPIC]: { 1: "12%" }
  }
};

const revenge = {
  name: "Curse of Vengeance",
  type: REVENGE,
  info: value =>
    `After you take damage, inflict Doom on surrounding foes dealing ${value} damage after 1.1 seconds`,
  values: {
    [COMMON]: { 1: 60 },
    [RARE]: { 1: `${60 * 1.3}-${60 * 1.5}` },
    [EPIC]: { 1: `${60 * 1.8}-${60 * 2}` }
  }
};

const blackMetal = {
  name: "Black Metal",
  type: OTHER,
  info: value => `Your Blade Rift powers deal damage in a ${value} wider area`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "22%" },
    [EPIC]: { 1: "24%" }
  }
};

const engulfingVortex = {
  name: "Engulfing Vortex",
  type: OTHER,
  info: value =>
    `Your Blade Rift effects lasts ${value} seconds longer and pulls foes in`,
  values: {
    [COMMON]: { 1: "0.2" },
    [RARE]: { 1: `${0.2 * 1.3}-0.3` },
    [EPIC]: { 1: `${0.2 * 2}-${0.2 * 2.5}` }
  }
};

const direMisfortune = {
  name: "Dire Misfortune",
  type: OTHER,
  info: value =>
    `Your Doom effects deal ${value} damage per application when applied multiple times`,
  values: {
    [COMMON]: { 1: 5 },
    [RARE]: { 1: 7 },
    [EPIC]: { 1: 10 }
  }
};

const battleRage = {
  name: "Battle Rage",
  type: OTHER,
  info: value =>
    `After slaying a foe,  your next Attack or Special deals ${value} more damage`,
  values: {
    [COMMON]: { 1: "100%" },
    [RARE]: { 1: "??" },
    [EPIC]: { 1: "??" }
  }
};

const impendingDoom = {
  name: "Impending Doom",
  type: OTHER,
  info: value =>
    `Your DOom effects deal ${value} more damage after 0.5 seconds`,
  values: {
    [COMMON]: { 1: "60%" },
    [RARE]: { 1: "76%" },
    [EPIC]: { 1: "92%" }
  }
};

const aresAid = {
  name: "Ares' Aid",
  type: AID,
  info: value =>
    `Your Call turns you into an Invulnerable Blade Rift for 5 seconds dealing ${value} damage per hit`,
  values: {
    [COMMON]: { 1: 15 },
    [RARE]: { 1: 18 },
    [EPIC]: { 1: 21 },
    [HEROIC]: { 1: 24 }
  }
};

const curseOfLonging = {
  name: "Curse of Longing",
  type: OTHER,
  info: value =>
    `Your Doom effects continuously strike Weak foes for ${value} damage`,
  values: {
    [DUO]: { 1: "25%" }
  }
};

const huntingBlades = {
  name: "Hunting Blades",
  type: OTHER,
  info: value =>
    `Your Cast creates a faster Blade Rift that seeks the nearest foe for ${value} seconds`,
  values: {
    [DUO]: { 1: "2.2" }
  }
};

const mericfulEnd = {
  name: "Merciful End",
  type: OTHER,
  info: value =>
    `Your attacks that Deflect immediately active Doom effects for ${value} damage`,
  values: {
    [DUO]: { 1: 90 }
  }
};

const vengefulMood = {
  name: "Vengeful Mood",
  type: OTHER,
  info: value =>
    `All of your Revenge attacks occur without taking damage every ${value} seconds`,
  values: {
    [DUO]: { 1: `3.5` }
  }
};

const viciousCycle = {
  name: "Vicious Cycle",
  type: OTHER,
  info: value =>
    `Your Blade Rift effects deal more ${value} damage for each consecutive hit`,
  values: {
    [LEGENDARY]: { 1: 2 }
  }
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
  "vicious cycle": viciousCycle
};

const base = {
  name: "Ares",
  info,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const ares = {
  ...base,
  ...formattedAbilities
};

module.exports = { ares };
