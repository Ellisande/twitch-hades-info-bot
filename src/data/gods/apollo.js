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

const info = "Apollo, God of Light and Sun";

const attack = {
  name: "Nova Strike",
  type: ATTACK,
  info: (value) => `Your Attacks deal ${value} more damage in a larger area`,
  values: {
    [RARE]: { 1: "50%", 4: "70%" },
    [EPIC]: { 1: "60%", 2: "70%", 4: "80%" },
  },
};

const special = {
  name: "Nova Flourish",
  type: SPECIAL,
  info: (value) => `Your Special deals ${value} more damage in a larger area`,
  values: {
    [COMMON]: {
      1: "60%",
      2: "80%",
    },
    [RARE]: {
      1: "80%",
    },
    [HEROIC]: {
      5: "170",
    },
  },
};

const cast = {
  name: "Solar Ring",
  type: CAST,
  info: (value) =>
    `After your [omega] cast expires, rapidly deal ${value} damage in the area for 2 seconds`,
  values: {
    [COMMON]: {
      1: 24,
    },
    [RARE]: {
      1: 15,
      2: 24,
      4: 27,
    },
  },
};

const lucidGain = {
  name: "Lucid Gain",
  type: OTHER,
  info: (value) =>
    `While standing in your Casts, gradually restore ${value} mana per second`,
  values: {
    [COMMON]: 12,
    [RARE]: 18,
  },
};

const dash = {
  name: "Blinding Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint is ${value} faster and inflicts [daze] on nearby foes`,
  values: {
    [RARE]: {
      1: "40%",
    },
    [EPIC]: {
      1: "50%",
      2: "60%",
    },
  },
};

const extraDose = {
  name: "Extra Dose",
  type: OTHER,
  info: (value) => `Your Attack has a ${value} chance to hit 2 times`,
  values: {
    [COMMON]: { 1: "5%", 2: "8%" },
    [RARE]: { 1: "8%", 4: "14%" },
  },
};

const superNova = {
  name: "Super Nova",
  type: OTHER,
  info: (value) => `Your Casts expand in size by ${value} until they expire`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "50%", 2: "60%", 3: "68%", 5: "78%" },
    [EPIC]: { 1: "60%", 2: "70%" },
  },
};

const lightSmite = {
  name: "Light Smite",
  type: OTHER,
  info: (value) =>
    `After you take damage, your foes takes ${value} damage and you inflict Daze on all foes`,
  values: {
    [RARE]: { 1: 75 },
  },
};

const selfHealing = {
  name: `Self Healing`,
  type: OTHER,
  info: (value) =>
    `While you have at least 3 [fire] boons, whenever you take damage, restore ${value} of the damage taken`,
  values: {
    [COMMON]: { 1: "30%" },
  },
};

const perfectImage = {
  name: "Perfect Image",
  type: OTHER,
  info: (value) =>
    `In each encounter, you deal ${value} more damage until you take damage`,
  values: { [RARE]: { 1: "15%" } },
};

const dazzlingDisplay = {
  name: "Dazzling Display",
  type: OTHER,
  info: (value) => `Your Attacks have a ${value} chance to inflict [daze]`,
  values: {
    [RARE]: { 1: "15%" },
  },
};

const backBurner = {
  name: "Back Burner",
  type: OTHER,
  info: (value) =>
    `Foes with [daze] take more ${value} more damage if struck from behind`,
  values: {
    [COMMON]: { 1: "50%" },
  },
};

const criticalMiss = {
  name: "Critical Miss",
  type: OTHER,
  info: (value) =>
    `Foes take ${value} damage whenever [daze] causes them to miss`,
  values: {
    [RARE]: { 1: 150 },
  },
};

const stellarSlam = {
  name: "Stellar Slam",
  type: DUO,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  "lucid gain": lucidGain,
  "extra dose": extraDose,
  "super nova": superNova,
  "self healing": selfHealing,
  "perfect image": perfectImage,
  dazzlingDisplay,
  backBurner,
  criticalMiss,
  stellarSlam,
  lightSmite,
};

const base = {
  name: "Apollo",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const apollo = {
  ...base,
  ...formattedAbilities,
};

module.exports = { apollo };
