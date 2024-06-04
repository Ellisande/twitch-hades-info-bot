import { ATTACK, DASH, INFUSION, OTHER, SPECIAL } from "./abilityTypes";
import { EARTH } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { COMMON, EPIC, LEGENDARY, RARE } from "./rarities";

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
  properUpbringing,
};

export const hera: God = {
  name: "Hera",
  info,
  abilities,
  elements: listElements(abilities),
};
