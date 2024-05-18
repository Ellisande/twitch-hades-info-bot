import { mapValues, toArray } from "lodash";
import { OTHER } from "./abilityTypes";
import { AIR, EARTH } from "./elements";
import { abilityFormatter } from "./formatters";
import { Boon, God } from "./god";
import { COMMON, EPIC, RARE } from "./rarities";

const info =
  "Artemis, Goddess of the Hunt. Her powers cause critical hits and create seeking projectiles.";

const easyShot: Boon = {
  name: "Easy Shot",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `A piercing arrow dealing ${value} damage fires toward any foe damage by your [omega] Cast`,
  values: {
    [COMMON]: {
      1: 20,
    },
  },
};

const huntersFlare: Boon = {
  name: "Hunter's Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast damages foes around you for ${value} damage with a 10% Critical chance.`,
  values: {
    [COMMON]: { 1: 55 },
  },
};

const silverStreak: Boon = {
  name: "Silver Streak",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you Dash, your omega moves deal ${value} more damage for 2 seconds.`,
  values: {
    [COMMON]: {
      1: "10%",
    },
    [RARE]: {
      1: "15%",
    },
  },
};

const lethalSnare: Boon = {
  name: "Lethal Snare",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Foes in your Casts have an ${value} chance to take Critical damage from your Attacks`,
  values: {
    [COMMON]: { 1: "8%" },
  },
};

const supportFire: Boon = {
  name: "Support Fire",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `After you hit with your Attacks or Specials, fire a seeking arrow for ${value} damage`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 15 },
  },
};

const deathWarrant: Boon = {
  name: "Death Warrant",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `A random foe becomes [marked] every ${value} seconds. If it takes Critical damage, this repeats.`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 18 },
  },
};

const firstBlood: Boon = {
  name: "First Blood",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Foes with at least 80% health or 80% armor have a ${value} chance to take Critical damage`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
    [EPIC]: { 1: "20%" },
  },
};

const pressurePoints: Boon = {
  name: "Pressure Points",
  type: OTHER,
  element: EARTH,
  info: (value) => `Any damage you deal has a ${value} chance to be Critical`,
  values: {
    [COMMON]: { 1: "3%" },
    [RARE]: { 1: "4%" },
  },
};

const abilities = {
  "support fire": supportFire,
  "lethal snare": lethalSnare,
  "hunter's flare": huntersFlare,
  deathWarrant,
  firstBlood,
  pressurePoints,
  easyShot,
  silverStreak,
};

const base: God = {
  name: "Artemis",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const artemis: God = {
  ...base,
  ...formattedAbilities,
};

export { artemis };
