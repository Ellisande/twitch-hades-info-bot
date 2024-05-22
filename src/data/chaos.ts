import { INFUSION } from "./gods/abilityTypes";
import { COSMIC } from "./gods/elements";
import { God, InfusionBoon } from "./gods/god";
import { COMMON, RARE, EPIC, LEGENDARY } from "./gods/rarities";

type ChaosCurseValues = {
  [COMMON]?: { value: string | number; duration: number };
  [RARE]?: { value: string | number; duration: number };
  [EPIC]?: { value: string | number; duration: number };
};

type ChaosCurse = {
  name: string;
  type: "curse" | "blessing";
  matcher: RegExp;
  info: (value: string | number, duration: number) => string;
  values: ChaosCurseValues;
};

type ChaosBlessingValues = {
  [COMMON]?: { value: string | number };
  [RARE]?: { value: string | number };
  [EPIC]?: { value: string | number };
  [LEGENDARY]?: { value: string | number };
};

type ChaosBlessing = {
  name: string;
  type: "blessing";
  matcher: RegExp;
  info: (value: string | number) => string;
  values: ChaosBlessingValues;
};

const chant: InfusionBoon = {
  name: "Chant",
  type: INFUSION,
  requiredElements: [COSMIC],
  info: (value) =>
    `Afterward, your [omega] moves deal ${value} more damage per [cosmic] you have`,
  values: {
    [COMMON]: { 1: "30%" },
  },
};

export const chaos: God = {
  name: "Chaos",
  info: "Primordial god of the abyss. His boons are provide powerful blessings, if you can survive their curses",
  abilities: {},
  other: [chant],
};

export const curses: ChaosCurse[] = [
  {
    name: "Addled",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use your Cast, get hit for ${value} damage`,
    matcher: /addled/i,
    values: {
      [COMMON]: { value: 6, duration: 5 },
    },
  },
  {
    name: "Ordinary",
    type: "curse",
    info: (value, duration) =>
      `The next ${value} Boons you find are limited to ${value} blessings`,
    matcher: /ordinary/i,
    values: {
      [COMMON]: { value: 6, duration: 5 },
    },
  },
  {
    name: "Excruciating",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you take ${value} increased damage`,
    matcher: /excruciating/i,
    values: {
      [COMMON]: { value: "34%", duration: 3 },
    },
  },
  {
    name: "Hobbled",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, your Dash is slower and uses ${value} mana (if you have it)`,
    matcher: /hobbled/i,
    values: {
      [COMMON]: { value: 5, duration: 5 },
    },
  },
  {
    name: "Caustic",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, slain foes toss and Inferno Bomb at you`,
    matcher: /caustic/i,
    values: {
      [COMMON]: { value: "", duration: 4 },
    },
  },
  {
    name: "Gagged",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use [omega] moves, get hit for ${value} damage`,
    matcher: /gagged/i,
    values: {
      [COMMON]: { value: 6, duration: 3 },
    },
  },
  {
    name: "Atrophic",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you have ${value} less max health`,
    matcher: /atrophic/i,
    values: {
      [COMMON]: { value: 26, duration: 5 },
    },
  },
  {
    name: "Enshrouded",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, your Location Reward previews are hidden`,
    matcher: /enshrouded/i,
    values: {
      [COMMON]: { value: "", duration: 5 },
    },
  },
  {
    name: "Fixated",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, whenever you use [mana] prime it`,
    matcher: /fixated/i,
    values: {
      [COMMON]: { value: "", duration: 4 },
    },
  },
  {
    name: "Barren",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, your arcana cards have no effect`,
    matcher: /barren/i,
    values: {
      [COMMON]: { value: "", duration: 9 },
    },
  },
  {
    name: "Pauper's",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you cannot earn money`,
    matcher: /pauper'?s/i,
    values: {
      [COMMON]: { value: "", duration: 3 },
    },
  },
  {
    name: "Maimed",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use Attacks, get hit for ${value} damage`,
    matcher: /maimed/i,
    values: {
      [COMMON]: { value: 5, duration: 5 },
    },
  },
  {
    name: "Rejected",
    type: "curse",
    info: (value, duration) =>
      `Your next ${duration} Boons you find will have ${value} fewer blessings to choose from`,
    matcher: /rejected/i,
    values: {
      [COMMON]: { value: 1, duration: 2 },
    },
  },
  {
    name: "Flayed",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use Specials, get hit for ${value} damage`,
    matcher: /flayed/i,
    values: {
      [COMMON]: { value: 4, duration: 3 },
    },
  },
  {
    name: "Slothful",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you move and Sprint ${value} slower`,
    matcher: /slothful/i,
    values: {
      [COMMON]: { value: "44%", duration: 4 },
    },
  },
  {
    name: "Paralyzing",
    type: "curse",
    info: (value, duration) =>
      `For the next ${duration} Encounters, whenever you take damage, you are stunned for ${value} seconds`,
    matcher: /Paralyzing/i,
    values: {
      [COMMON]: { value: 1.2, duration: 3 },
    },
  },
  {
    name: "Doomed",
    type: "curse",
    info: (value, duration) =>
      `You have ${value} seconds to clear ${duration} Encounters, or get hit for 500 damage`,
    matcher: /Doomed/i,
    values: {
      [COMMON]: { value: 120, duration: 3 },
    },
  },
];

export const blessings: ChaosBlessing[] = [
  {
    name: "Chasm",
    type: "blessing",
    info: (value) => `Afterward, your Casts deal ${value} damage`,
    matcher: /Chasm/i,
    values: {
      [COMMON]: { value: "39%" },
    },
  },
  {
    name: "Blood",
    type: "blessing",
    info: (value) =>
      `Afterward, whenever you exit a Location, restore ${value} health`,
    matcher: /Blood/i,
    values: {
      [COMMON]: { value: 3 },
    },
  },
  {
    name: "Creation",
    type: "blessing",
    info: (value) =>
      `Afterward, gain ${value} [earth] [water] [air] [fire] [cosmic]`,
    matcher: /creation/i,
    values: {
      [COMMON]: { value: 1 },
    },
  },
  {
    name: "Revelation",
    type: "blessing",
    info: (value) =>
      `Afterward, you Channel  your [omega] Moves ${value} faster`,
    matcher: /revelation/i,
    values: {
      [COMMON]: { value: "12%" },
    },
  },
  {
    name: "Discovery",
    type: "blessing",
    info: (value) =>
      `Afterward, you have a ${value} chance to find +100% resources with your Gathering Tools`,
    matcher: /discovery/i,
    values: {
      [COMMON]: { value: "58%" },
    },
  },
  {
    name: "Soul",
    type: "blessing",
    info: (value) => `Afterward, you get +${value} max health`,
    matcher: /soul/i,
    values: {
      [COMMON]: { value: 29 },
    },
  },
  {
    name: "Mind",
    type: "blessing",
    info: (value) => `Afterward, you get +${value} max [mana]`,
    matcher: /mind/i,
    values: {
      [COMMON]: { value: 37 },
    },
  },
  {
    name: "Talent",
    type: "blessing",
    info: (value) => `Afterward, you use ${value} less mana`,
    matcher: /talent/i,
    values: {
      [COMMON]: { value: "30%" },
    },
  },
  {
    name: "Will",
    type: "blessing",
    info: (value) => `Afterward, restore ${value} mana every 1 second`,
    matcher: /will/i,
    values: {
      [COMMON]: { value: 5 },
    },
  },
  {
    name: "Affluence",
    type: "blessing",
    info: (value) => `Afterward, any [gold] you find is worth ${value} more`,
    matcher: /Affluence/i,
    values: {
      [COMMON]: { value: "55%" },
    },
  },
  {
    name: "Favor",
    type: "blessing",
    info: (value) =>
      `Afterward, Boons have a ${value} chance to be Rare or better`,
    matcher: /favor/i,
    values: {
      [COMMON]: { value: "41%" },
    },
  },
  {
    name: "Flourish",
    type: "blessing",
    info: (value) => `Afterward, your Specials deal ${value} more damage`,
    matcher: /Flourish/i,
    values: {
      [COMMON]: { value: "32%" },
    },
  },
  {
    name: "Celerity",
    type: "blessing",
    info: (value) => `Afterward, you move and Sprint ${value} faster`,
    matcher: /Celerity/i,
    values: {
      [COMMON]: { value: "15%" },
    },
  },
  {
    name: "Strike",
    type: "blessing",
    info: (value) => `Afterward, your Attacks deal ${value} more damage`,
    matcher: /Strike/i,
    values: {
      [COMMON]: { value: "23%" },
    },
  },
  {
    name: "Chant",
    type: "blessing",
    info: (value) =>
      `Afterward, your [omega] moves deal ${value} more damage per [cosmic] you have`,
    matcher: /Chant/i,
    values: {
      [COMMON]: { value: "30%" },
    },
  },
  {
    name: "Defiance",
    type: "blessing",
    info: (value) =>
      `Afterward, gain ${value} uses of Death Defiance this night`,
    matcher: /Defiance/i,
    values: {
      [LEGENDARY]: { value: 1 },
    },
  },
];
