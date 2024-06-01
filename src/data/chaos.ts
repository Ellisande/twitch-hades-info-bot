import { INFUSION } from "./gods/abilityTypes";
import { COSMIC } from "./gods/elements";
import { God, InfusionBoon } from "./gods/god";
import { COMMON, RARE, EPIC, HEROIC, LEGENDARY } from "./gods/rarities";

export type Range = {
  min: number;
  max: number;
};

export type ChaosCurseValues = {
  value?: Range;
  duration: Range;

  // This is a formatter flag that indicates whether the values should be
  // presented as percentages after calculations are done. This breaks
  // encapsulation between data and formatting, but it allows us to store
  // all values as numbers and to do math on them.
  asPercent: boolean;
};

const defaultDuration: Range = {
  min: 3,
  max: 5
};

type ChaosCurse = {
  // Commented object name in game source code, where known
  name: string;
  matcher: RegExp;
  info: (value: string, duration: string) => string;
  values: ChaosCurseValues;
};

// Defining RarityMultipliers guarantees that an implementer defines
// at least one rarity, but allows for multiple.
type RarityMultipliers =
  { [COMMON]: number; } |
  { [RARE]: number; } |
  { [EPIC]: number; } |
  { [HEROIC]: number; } |
  { [LEGENDARY]: number; };

type ChaosBlessingValues = {
  base: Range;
  rarityMultipliers: RarityMultipliers;
  // See ChaosCurseValues.asPercent
  asPercent: boolean;
};

const defaultRarityMultipliers: RarityMultipliers = {
  [COMMON]: 1.0,
  [RARE]: 1.5,
  [EPIC]: 2.0,
  [HEROIC]: 2.5,
};

type ChaosBlessing = {
  // Commented object name in game source code, where known
  name: string;
  matcher: RegExp;
  info: (value: string) => string;
  values: ChaosBlessingValues;
};

// Chant is a blessing but should _also_ be queriable as an Infusion-type Boon.
// To achieve this, we export a Chaos God object with only one "Boon".
// Technically, this boon has a prereq: The user must have at least one other
// Chaos blessing in the current run. Implementing this will require some type
// of refactor given that prerequisites expects a list of Boons.
const chant: InfusionBoon = {
  name: "Chant",
  type: INFUSION,
  requiredElements: [COSMIC],
  info: (value) =>
    `Afterward, your [omega] moves deal ${value} more damage per [cosmic] you have`,
  values: {
    [COMMON]: { 1: "30%" },
    [RARE]: { 1: "36%" },
    [EPIC]: { 1: "42%" },
    [HEROIC]: { 1: "48%" },
  },
};

export const chaos: God = {
  name: "Chaos",
  info: "Primordial god of the abyss. His boons provide powerful blessings, if you can survive their curses.",
  abilities: {chant},
  elements: [],
};

export const curses: ChaosCurse[] = [
  {
    // ChaosCastCurse
    name: "Addled",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use your Cast, get hit for ${value} damage.`,
    matcher: /addled/i,
    values: {
      value: { min: 3, max: 6 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosCommonCurse
    name: "Ordinary",
    info: (_, duration) =>
      `The next ${duration} Boons you find are limited to common blessings.`,
    matcher: /ordinary/i,
    values: {
      duration: { min: 2, max: 3 },
      asPercent: false,
    },
  },
  {
    // ChaosDamageCurse
    name: "Excruciating",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you take ${value} increased damage.`,
    matcher: /excruciating/i,
    values: {
      value: { min: 0.2, max: 0.5 },
      duration: defaultDuration,
      asPercent: true,
    },
  },
  {
    // ChaosDashCurse
    name: "Hobbled",
    info: (value, duration) =>
      `For the next ${duration} Encounters, your Dash is slower and uses ${value} mana (if you have it).`,
    matcher: /hobbled/i,
    values: {
      value: { min: 3, max: 6 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosDeathWeaponCurse
    name: "Caustic",
    info: (_, duration) =>
      `For the next ${duration} Encounters, slain foes toss and Inferno Bomb at you.`,
    matcher: /caustic/i,
    values: {
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosExAttackCurse
    name: "Gagged",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use [omega] moves, get hit for ${value} damage.`,
    matcher: /gagged/i,
    values: {
      value: { min: 5, max: 8 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosHealthCurse
    name: "Atrophic",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you have ${value} less max health.`,
    matcher: /atrophic/i,
    values: {
      value: { min: 20, max: 29 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosHiddenRoomRewardCurse
    name: "Enshrouded",
    info: (_, duration) =>
      `For the next ${duration} Encounters, your Location Reward previews are hidden.`,
    matcher: /enshrouded/i,
    values: {
      duration: { min: 4, max: 6 },
      asPercent: false,
    },
  },
  {
    // ChaosManaFocusCurse
    name: "Fixated",
    info: (_, duration) =>
      `For the next ${duration} Encounters, whenever you use [mana] prime it.`,
    matcher: /fixated/i,
    values: {
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosMetaUpgradeCurse
    // Special curse; guarantees a heroic blessing.
    name: "Barren",
    info: (_, duration) =>
      `For the next ${duration} Encounters, your arcana cards have no effect. [Paired Blessing is always Heroic.]`,
    matcher: /barren/i,
    values: {
      duration: { min: 7, max: 11 },
      asPercent: false,
    },
  },
  {
    // ChaosNoMoneyCurse
    name: "Pauper's",
    info: (_, duration) =>
      `For the next ${duration} Encounters, you cannot earn money.`,
    matcher: /pauper'?s/i,
    values: {
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosPrimaryAttackCurse
    name: "Maimed",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use Attacks, get hit for ${value} damage.`,
    matcher: /maimed/i,
    values: {
      value: { min: 3, max: 6 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosRestrictBoonCurse
    name: "Rejected",
    info: (_, duration) =>
      `Your next ${duration} Boons you find will have 1 fewer blessing to choose from.`,
    matcher: /rejected/i,
    values: {
      duration: { min: 2, max: 4 },
      asPercent: false,
    },
  },
  {
    // ChaosSecondaryAttackCurse
    name: "Flayed",
    info: (value, duration) =>
      `For the next ${duration} Encounters, each time you use Specials, get hit for ${value} damage.`,
    matcher: /flayed/i,
    values: {
      value: { min: 3, max: 6 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosSpeedCurse
    name: "Slothful",
    info: (value, duration) =>
      `For the next ${duration} Encounters, you move and Sprint ${value} slower.`,
    matcher: /slothful/i,
    values: {
      value: { min: 0.4, max: 0.6 },
      duration: defaultDuration,
      asPercent: true,
    },
  },
  {
    // ChaosStunCurse
    name: "Paralyzing",
    info: (value, duration) =>
      `For the next ${duration} Encounters, whenever you take damage, you are stunned for ${value} seconds.`,
    matcher: /paralyzing/i,
    values: {
      value: { min: 0.5, max: 1.4 },
      duration: defaultDuration,
      asPercent: false,
    },
  },
  {
    // ChaosTimeCurse
    name: "Doomed",
    info: (value, duration) =>
      `You have 120 seconds to clear ${duration} Encounters, or get hit for 500 damage.`,
    matcher: /doomed/i,
    values: {
      duration: { min: 2, max: 3 },
      asPercent: true,
    },
  },
];

export const blessings: ChaosBlessing[] = [
  {
    // ChaosCastBlessing
    name: "Chasm",
    info: (value) => `Afterward, your Casts deal ${value} more damage.`,
    matcher: /chasm/i,
    values: {
      base: { min: 0.2, max: 0.5 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: true,
    }
  },
  {
    // ChaosDoorHealBlessing
    name: "Blood",
    info: (value) =>
      `Afterward, whenever you exit a Location, restore ${value} health.`,
    matcher: /blood/i,
    values: {
      base: { min: 3, max: 4 },
      rarityMultipliers: {
        [COMMON]: 1,
        [RARE]: 3,
        [EPIC]: 5,
        [HEROIC]: 7,
      },
      asPercent: false,
    },
  },
  {
    // ChaosElementalBlessing
    name: "Creation",
    info: (value) =>
      `Afterward, gain ${value} [earth] [water] [air] [fire] [cosmic].`,
    matcher: /creation/i,
    values: {
      base: { min: 1, max: 1 },
      rarityMultipliers: {
        [COMMON]: 1,
        [RARE]: 2,
        [EPIC]: 3,
        [HEROIC]: 4,
      },
      asPercent: false,
    },
  },
  {
    // ChaosExSpeedBlessing
    name: "Revelation",
    info: (value) =>
      `Afterward, you Channel  your [omega] Moves ${value} faster.`,
    matcher: /revelation/i,
    values: {
      base: { min: 0.10, max: 0.15 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: true,
    },
  },
  {
    // ChaosHarvestBlessing
    name: "Discovery",
    info: (value) =>
      `Afterward, you have a ${value} chance to find +100% resources with your Gathering Tools.`,
    matcher: /discovery/i,
    values: {
      base: { min: 0.4, max: 0.5 },
      rarityMultipliers: {
        [COMMON]: 1.4,
        [RARE]: 1.6,
        [EPIC]: 1.8,
        [HEROIC]: 2.0,
      },
      asPercent: true,
    },
  },
  {
    // ChaosHealthBlessing
    name: "Soul",
    info: (value) => `Afterward, you get +${value} max health.`,
    matcher: /soul/i,
    values: {
      base: { min: 26, max: 35 },
      rarityMultipliers: {
        [COMMON]: 1,
        [RARE]: 2,
        [EPIC]: 3,
        [HEROIC]: 4,
      },
      asPercent: false,
    },
  },
  {
    // ChaosManaBlessing
    name: "Mind",
    info: (value) => `Afterward, you get +${value} max [mana].`,
    matcher: /mind/i,
    values: {
      base: { min: 30, max: 40 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: false,
    },
  },
  {
    // ChaosManaCostBlessing
    name: "Talent",
    info: (value) => `Afterward, you use ${value} less [mana].`,
    matcher: /talent/i,
    values: {
      base: { min: 0.2, max: 0.3 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: true,
    },
  },
  {
    // ChaosManaOverTimeBlessing
    name: "Will",
    info: (value) => `Afterward, restore ${value} mana every 1 second.`,
    matcher: /will/i,
    values: {
      base: { min: 4, max: 6 },
      rarityMultipliers: {
        [COMMON]: 1,
        [RARE]: 2,
        [EPIC]: 3,
        [HEROIC]: 4,
      },
      asPercent: false,
    },
  },
  {
    // ChaosMoneyBlessing
    name: "Affluence",
    info: (value) => `Afterward, any [gold] you find is worth ${value} more.`,
    matcher: /affluence/i,
    values: {
      base: { min: 0.4, max: 0.6 },
      rarityMultipliers: {
        [COMMON]: 1,
        [RARE]: 2,
        [EPIC]: 3,
        [HEROIC]: 4,
      },
      asPercent: true,
    },
  },
  {
    // ChaosRarityBlessing
    name: "Favor",
    info: (value) =>
      `Afterward, Boons have a ${value} chance to be Rare or better.`,
    matcher: /favor/i,
    values: {
      base: { min: 0.4, max: 0.5 },
      rarityMultipliers: {
        [COMMON]: 1.0,
        [RARE]: 1.34,
        [EPIC]: 1.67,
        [HEROIC]: 2.0,
      },
      asPercent: true,
    },
  },
  {
    // ChaosSpecialBlessing
    name: "Flourish",
    info: (value) => `Afterward, your Specials deal ${value} more damage.`,
    matcher: /flourish/i,
    values: {
      base: { min: 0.3, max: 0.6 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: true,
    },
  },
  {
    // ChaosSpeedBlessing
    name: "Celerity",
    info: (value) => `Afterward, you move and Sprint ${value} faster.`,
    matcher: /celerity/i,
    values: {
      base: { min: 0.15, max: 0.15 },
      rarityMultipliers: {
        [COMMON]: 1.0,
        [RARE]: 1.33,
        [EPIC]: 1.67,
        [HEROIC]: 2.0,
      },
      asPercent: true,
    },
  },
  {
    // ChaosWeaponBlessing
    name: "Strike",
    info: (value) => `Afterward, your Attacks deal ${value} more damage.`,
    matcher: /strike/i,
    values: {
      base: { min: 0.2, max: 0.5 },
      rarityMultipliers: defaultRarityMultipliers,
      asPercent: true,
    },
  },
  {
    // ChaosOmegaDamageBlessing
    // Prereq: >=1 cosmic / aether in current run.
    name: "Chant",
    info: (value) =>
      `Afterward, your [omega] moves deal ${value} more damage per [cosmic] you have.`,
    matcher: /chant/i,
    values: {
      base: { min: 0.3, max: 0.3 },
      rarityMultipliers: {
        [COMMON]: 1.0,
        [RARE]: 1.2,
        [EPIC]: 1.4,
        [HEROIC]: 1.6,
      },
      asPercent: true,
    },
  },
  {
    // ChaosLastStandBlessing
    // Prereq: At least one Chaos blessing in the current run.
    name: "Defiance",
    info: (value) =>
      `Afterward, gain ${value} uses of Death Defiance this night.`,
    matcher: /defiance/i,
    values: {
      base: { min: 1, max: 1 },
      rarityMultipliers: { [LEGENDARY]: 1 },
      asPercent: false,
    },
  },
];
