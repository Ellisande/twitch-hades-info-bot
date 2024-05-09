const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  OTHER,
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateFlat,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Hera, Queen of the Gods";

const attackBase = "50";
const attack = {
  name: "Sworn Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attacks deal more ${value} more damage and inflict [hitch]`,
  values: { [COMMON]: { 1: "50%" }, [RARE]: { 1: "60%" } },
};

const specialBase = 80;
const special = {
  name: "Sworn Flourish",
  type: SPECIAL,
  info: (value) => `Your Specials day ${value} more data and inflict [hitch]`,
  values: {
    [COMMON]: {
      1: "20",
    },
    [RARE]: {
      1: 18,
    },
  },
};

const cast = {
  name: "Anvil Ring",
  type: CAST,
  info: (value) =>
    `Your Casts deal ${value} damage 3 times in succession, but in a smaller area`,
  values: {
    [RARE]: {
      1: 70,
    },
  },
};

const dash = {
  name: "Nexus Sprint",
  type: DASH,
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

const bornGain = {
  name: "Born Gain",
  type: OTHER,
  info: (value) =>
    `Whenever you run out of [mana], Prime ${value} [mana] to restore all [mana] up to the reduced limit`,
  values: {
    [COMMON]: 10,
  },
};

const engagementRing = {
  name: "Engagement Ring",
  type: OTHER,
  info: (value) =>
    `Your Casts last 200% longer and deal ${value} damage to every foe that joins the Encounter`,
  values: {
    [COMMON]: 70,
  },
};

const keenIntuition = {
  name: "Keen Intuition",
  type: OTHER,
  info: (value) =>
    `Whenever you use [omega] moves while you have 100% [mana], they deal ${value} more damage`,
  values: {
    [COMMON]: "30%",
  },
};

const kingsRansom = {
  name: "King's Ransom",
  type: DUO,
  info: (value) =>
    `Give up all your Boons of Hera. For each raise all of your Boons of Zeus by ${value} levels`,
  values: {
    [DUO]: 2,
  },
};

const familyTrade = {
  name: "Family Trade",
  type: OTHER,
  info: (value) =>
    `Any Sacrifice Boons you choose are ${value} levels stronger. One will be offered as soon as possible.`,
  values: {
    [COMMON]: { 1: "2" },
  },
};

const hereditaryBane = {
  name: "Hereditary Bane",
  type: OTHER,
  info: (value) =>
    `Your [hitch] effects deal ${value} more damage and last +5 seconds`,
  values: {
    [EPIC]: { 1: "20%", 2: "30%" },
  },
};

const nastyComeback = {
  name: "Nasty Comeback",
  type: OTHER,
  info: (value) =>
    `After you take damage, inflict your foe with [hitch] and deal ${value} damage in greater measure`,
  values: {
    [COMMON]: "500%",
  },
};

const bridalGlow = {
  name: "Bridal Glow",
  type: OTHER,
  info: (value) =>
    `${value} random Boons become Heroic, then lose Rarity every 7 Encounters`,
  values: {
    [RARE]: "2",
  },
};

const uncommonGrace = {
  name: "Uncommon Grace",
  type: OTHER,
  info: (value) =>
    `While none of your other Boons are Common, deal ${value} more damage`,
  values: {
    [COMMON]: "10%",
  },
};

const dyingWish = {
  name: "Dying Wish",
  type: OTHER,
  info: (value) =>
    `Whenever [hitch]-afflicted foes are slain, damage all over [hitch] afflicted foes for ${value}`,
  values: {
    [COMMON]: "60",
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  bornGain,
  engagementRing,
  keenIntuition,
  "king's ransom": kingsRansom,
  familyTrade,
  hereditaryBane,
  bridalGlow,
  uncommonGrace,
  dyingWish,
};

const base = {
  name: "Hera",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hera = {
  ...base,
  ...formattedAbilities,
};

module.exports = { hera };
