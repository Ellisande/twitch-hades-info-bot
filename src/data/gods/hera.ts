import { ATTACK, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { glamourGain, passionDash, raptureRing } from "./aphrodite";
import { blindingSprint, lucidGain, solarRing } from "./apollo";
import { arcticRing, frigidSprint, tranquilGain } from "./demeter";
import { COSMIC, EARTH } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import {
  fixedGain,
  heavyMetal,
  mintCondition,
  toughTrade,
  trustyShield,
  uncannyFortitude,
} from "./hephaestus";
import {
  special as flameFlourish,
  attack as flameStrike,
  hearthGain,
  cast as smolderRing,
} from "./hestia";
import {
  breakerSprint,
  doubleUp,
  fluidGain,
  geyserRing,
  oceansBounty,
} from "./poseidon";
import { COMMON, DUO, EPIC, LEGENDARY, RARE } from "./rarities";
import {
  heavenFlourish,
  heavenStrike,
  ionicGain,
  stormRing,
  thunderSprint,
} from "./zeus";

const info = "Hera, Queen of the Gods";

const attack: Boon = {
  name: "Sworn Strike",
  type: ATTACK,
  element: EARTH,
  info: (value) =>
    `Your Attacks deal more ${value} more damage and inflict [hitch]`,
  values: { [COMMON]: { 1: "50%" }, [RARE]: { 1: "60%" } },
};

export const swornStrike = attack;

const special: Boon = {
  name: "Sworn Flourish",
  type: SPECIAL,
  element: EARTH,
  info: (value) => `Your Specials day ${value} more damage and inflict [hitch]`,
  values: {
    [COMMON]: {
      1: "60%",
    },
  },
};

export const swornFlourish = special;

const dash: Boon = {
  name: "Nexus Sprint",
  type: DASH,
  element: EARTH,
  info: (value) =>
    `Your Sprint inflicts [hitch] on nearby foes, which spreads to ${value} other foes near them`,
  values: {
    [COMMON]: {
      1: 1,
    },
    [RARE]: {
      1: 2,
    },
  },
};

export const nexusSprint = dash;

export const bornGain: Boon = {
  name: "Born Gain",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Whenever you run out of [mana], Prime ${value} [mana] to restore all [mana] up to the reduced limit`,
  values: {
    [COMMON]: { 1: 10 },
  },
};

const cast: Boon = {
  name: "Engagement Ring",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Your Casts last 200% longer and deal ${value} damage to every foe that joins the Encounter`,
  values: {
    [COMMON]: { 1: 70 },
  },
};

export const engagementRing = cast;

const properUpbringing: InfusionBoon = {
  name: "Proper Upbringing",
  type: INFUSION,
  info: (value) =>
    `While you have at least 3 [earth], all your Common Boons gain ${value} Rarity`,
  values: {
    [COMMON]: { 1: "RARE" },
  },
  requiredElements: [EARTH],
};

export const keenIntuition: Boon = {
  name: "Keen Intuition",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Whenever you use [omega] moves while you have 100% [mana], they deal ${value} more damage`,
  values: {
    [COMMON]: { 1: "30%" },
  },
};

const familyTrade: Boon = {
  name: "Family Trade",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Any Sacrifice Boons you choose are ${value} levels stronger. One will be offered as soon as possible.`,
  values: {
    [COMMON]: { 1: "2" },
  },
};

export const nastyComeback: Boon = {
  name: "Nasty Comeback",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `After you take damage, inflict your foe with [hitch] and deal ${value} damage in greater measure`,
  values: {
    [COMMON]: { 1: "500%" },
  },
};

const hereditaryBane: Boon = {
  name: "Hereditary Bane",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Your [hitch] effects deal ${value} more damage and last +5 seconds`,
  values: {
    [COMMON]: { 1: "10%" },
    [EPIC]: { 1: "20%", 2: "30%" },
  },
  prerequisites: [[attack, special, dash, nastyComeback]],
};

const bridalGlow: Boon = {
  name: "Bridal Glow",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `${value} random Boons become Heroic, then lose Rarity every 7 Encounters`,
  values: {
    [COMMON]: { 1: "2" },
    [RARE]: { 1: "2" },
  },
};

const uncommonGrace: Boon = {
  name: "Uncommon Grace",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `While none of your other Boons are Common, deal ${value} more damage`,
  values: {
    [COMMON]: "10%",
  },
};

const dyingWish: Boon = {
  name: "Dying Wish",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Whenever [hitch]-afflicted foes are slain, damage all other [hitch] afflicted foes for ${value}`,
  values: {
    [COMMON]: "40",
  },
  prerequisites: [[attack, special, dash, nastyComeback]],
};

export const braveFace: Boon = {
  name: "Brave Face",
  type: OTHER,
  element: EARTH,
  info: (value) =>
    `Automatically use ${value} magic to resist up to 50% of any damage`,
  values: {
    [LEGENDARY]: { 1: 5 },
  },
  prerequisites: [
    [attack, special],
    [bornGain, keenIntuition],
    [hereditaryBane, dyingWish],
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
    [attack, special, cast, bornGain],
    [flameStrike, flameFlourish, smolderRing, hearthGain],
  ],
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

const cherishedHeirloom: Boon = {
  name: "Cherished Heirloom",
  type: OTHER,
  info: (value) =>
    `Most other Keepsakes you equip are ${value} ranks strong this night (if possible)`,
  values: {
    [DUO]: { 1: 1 },
  },
  prerequisites: [
    [dash, cast, bornGain],
    [arcticRing, frigidSprint, tranquilGain],
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
    [attack, special, dash, nastyComeback],
    [raptureRing, passionDash, glamourGain],
  ],
};

const goldenRule: Boon = {
  name: "Golden Rule",
  type: OTHER,
  info: (value) => `You deal ${value} more damage per 100 gold you have`,
  values: {
    [DUO]: "5%",
  },
  prerequisites: [
    [cast, dash, bornGain],
    [geyserRing, breakerSprint, fluidGain],
    [oceansBounty, doubleUp],
  ],
};

const sunWorshiper: Boon = {
  name: "Sun Worshiper",
  type: OTHER,
  info: (value) =>
    `In each Encounter, the first foe you slay returns to fight for you dealing ${value} of its normal damage`,
  values: {
    [DUO]: { 1: "200%" },
  },
  prerequisites: [
    [cast, dash, bornGain],
    [solarRing, blindingSprint, lucidGain],
  ],
};

const queensRansom: Boon = {
  name: "Queen's Ransom",
  type: OTHER,
  info: (value) =>
    `Give up all your Boons of Zeus. For each raise all of your Boons of Hera by ${value} levels`,
  values: {
    [DUO]: { 1: 3 },
  },
  prerequisites: [
    [attack, special, dash, cast, bornGain],
    [heavenStrike, heavenFlourish, stormRing, thunderSprint, ionicGain],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  bornGain,
  engagementRing: cast,
  keenIntuition,
  familyTrade,
  hereditaryBane,
  bridalGlow,
  uncommonGrace,
  dyingWish,
  nastyComeback,
  braveFace,
  funeralPyre,
  spitefulStrength,
  cherishedHeirloom,
  soulMate,
  goldenRule,
  sunWorshiper,
  queensRansom,
  properUpbringing,
};

export const hera: God = {
  name: "Hera",
  info,
  abilities,
  elements: listElements(abilities),
};
