import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";

const info = "Apollo, God of Light and Sun";

const attack: Boon = {
  name: "Nova Strike",
  type: ATTACK,
  info: (value) => `Your Attacks deal ${value} more damage in a larger area`,
  values: {
    [RARE]: { 1: "50%", 4: "70%" },
    [EPIC]: { 1: "60%", 2: "70%", 4: "80%" },
  },
};

const special: Boon = {
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

const cast: Boon = {
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

const lucidGain: Boon = {
  name: "Lucid Gain",
  type: OTHER,
  info: (value) =>
    `While standing in your Casts, gradually restore ${value} mana per second`,
  values: {
    [COMMON]: { 1: 12 },
    [RARE]: { 1: 18 },
  },
};

const dash: Boon = {
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

const extraDose: Boon = {
  name: "Extra Dose",
  type: OTHER,
  info: (value) => `Your Attack has a ${value} chance to hit 2 times`,
  values: {
    [COMMON]: { 1: "5%", 2: "8%" },
    [RARE]: { 1: "8%", 4: "14%" },
  },
};

const superNova: Boon = {
  name: "Super Nova",
  type: OTHER,
  info: (value) => `Your Casts expand in size by ${value} until they expire`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "50%", 2: "60%", 3: "68%", 5: "78%" },
    [EPIC]: { 1: "60%", 2: "70%" },
  },
};

const lightSmite: Boon = {
  name: "Light Smite",
  type: OTHER,
  info: (value) =>
    `After you take damage, your foes takes ${value} damage and you inflict Daze on all foes`,
  values: {
    [RARE]: { 1: 75 },
  },
};

const selfHealing: Boon = {
  name: `Self Healing`,
  type: OTHER,
  info: (value) =>
    `While you have at least 3 [fire] boons, whenever you take damage, restore ${value} of the damage taken`,
  values: {
    [COMMON]: { 1: "30%" },
  },
};

const perfectImage: Boon = {
  name: "Perfect Image",
  type: OTHER,
  info: (value) =>
    `In each encounter, you deal ${value} more damage until you take damage`,
  values: { [RARE]: { 1: "15%" } },
};

const dazzlingDisplay: Boon = {
  name: "Dazzling Display",
  type: OTHER,
  info: (value) => `Your Attacks have a ${value} chance to inflict [daze]`,
  values: {
    [RARE]: { 1: "15%" },
  },
};

const backBurner: Boon = {
  name: "Back Burner",
  type: OTHER,
  info: (value) =>
    `Foes with [daze] take more ${value} more damage if struck from behind`,
  values: {
    [COMMON]: { 1: "50%" },
  },
};

const criticalMiss: Boon = {
  name: "Critical Miss",
  type: OTHER,
  info: (value) =>
    `Foes take ${value} damage whenever [daze] causes them to miss`,
  values: {
    [RARE]: { 1: 150 },
  },
};

const stellarSlam: Boon = {
  name: "Stellar Slam",
  type: OTHER,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
};

const phoenixSkin: Boon = {
  name: "Phoenix Skin",
  type: OTHER,
  info: (value) =>
    `Give up -100 max health. If you do not take or deal damage for 3 seconds, rapidly restore ${value} health/sec`,
  values: {
    [DUO]: {
      1: 3,
    },
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
  phoenixSkin,
};

const base: God = {
  name: "Apollo",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const apollo: God = {
  ...base,
  ...formattedAbilities,
};

export { apollo };
