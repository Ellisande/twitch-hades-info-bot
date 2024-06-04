import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "./abilityTypes";
import { AIR, FIRE } from "./elements";
import { Boon, God, InfusionBoon, listElements } from "./god";
import { COMMON, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";

const info = "Apollo, God of Light and Sun";

const attack: Boon = {
  name: "Nova Strike",
  type: ATTACK,
  element: AIR,
  info: (value) => `Your Attacks deal ${value} more damage in a larger area`,
  values: {
    [COMMON]: { 1: "40%" },
    [RARE]: { 1: "50%", 4: "70%" },
    [EPIC]: { 1: "60%", 2: "70%", 4: "80%" },
  },
};

export const novaStrike: Boon = attack;

const special: Boon = {
  name: "Nova Flourish",
  type: SPECIAL,
  element: AIR,
  info: (value) => `Your Special deals ${value} more damage in a larger area`,
  values: {
    [COMMON]: {
      1: "60%",
      2: "80%",
    },
    [RARE]: {
      1: "80%",
    },
    [EPIC]: {
      1: "100%",
      2: "120%",
    },
    [HEROIC]: {
      5: "170",
    },
  },
};

export const novaFlourish: Boon = special;

const cast: Boon = {
  name: "Solar Ring",
  type: CAST,
  element: FIRE,
  info: (value) =>
    `After your [omega] cast expires, rapidly deal ${value} damage in the area for 2 seconds`,
  values: {
    [COMMON]: {
      1: 10,
    },
    [RARE]: {
      1: 15,
      2: 24,
      4: 27,
    },
  },
};

export const solarRing: Boon = cast;

const gain: Boon = {
  name: "Lucid Gain",
  type: GAIN,
  element: AIR,
  info: (value) =>
    `While standing in your Casts, gradually restore ${value} mana per second`,
  values: {
    [COMMON]: { 1: 12 },
    [RARE]: { 1: 18, 2: 24 },
  },
};

export const lucidGain: Boon = gain;

const dash: Boon = {
  name: "Blinding Sprint",
  type: DASH,
  element: FIRE,
  info: (value) =>
    `Your Sprint is ${value} faster and inflicts [daze] on nearby foes`,
  values: {
    [COMMON]: { 1: "15%" },
    [RARE]: {
      1: "40%",
    },
    [EPIC]: {
      1: "50%",
      2: "60%",
    },
  },
};

export const blindingSprint: Boon = dash;

const extraDose: Boon = {
  name: "Extra Dose",
  type: OTHER,
  element: FIRE,
  info: (value) => `Your Attack has a ${value} chance to hit 2 times`,
  values: {
    [COMMON]: { 1: "5%", 2: "8%" },
    [RARE]: { 1: "8%", 4: "14%" },
  },
};

export const superNova: Boon = {
  name: "Super Nova",
  type: OTHER,
  element: AIR,
  info: (value) => `Your Casts expand in size by ${value} until they expire`,
  values: {
    [COMMON]: { 1: "40%", 2: "50%" },
    [RARE]: { 1: "50%", 2: "60%", 3: "68%", 5: "78%" },
    [EPIC]: { 1: "60%", 2: "70%" },
  },
};

const lightSmite: Boon = {
  name: "Light Smite",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `After you take damage, your foes takes ${value} damage and you inflict Daze on all foes`,
  values: {
    [COMMON]: { 1: 50 },
    [RARE]: { 1: 75 },
  },
};

const selfHealing: InfusionBoon = {
  name: `Self Healing`,
  type: INFUSION,
  info: (value) =>
    `While you have at least 3 [fire] boons, whenever you take damage, restore ${value} of the damage taken`,
  values: {
    [COMMON]: { 1: "30%" },
  },
  requiredElements: [FIRE],
};

const perfectImage: Boon = {
  name: "Perfect Image",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `In each encounter, you deal ${value} more damage until you take damage`,
  values: { [COMMON]: { 1: "10%" }, [RARE]: { 1: "15%" } },
};

const dazzlingDisplay: Boon = {
  name: "Dazzling Display",
  type: OTHER,
  element: FIRE,
  info: (value) => `Your Attacks have a ${value} chance to inflict [daze]`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
  },
  prerequisites: [[novaStrike]],
};

const backBurner: Boon = {
  name: "Back Burner",
  type: OTHER,
  element: FIRE,
  info: (value) =>
    `Foes with [daze] take more ${value} more damage if struck from behind`,
  values: {
    [COMMON]: { 1: "50%" },
  },
  prerequisites: [[blindingSprint, lightSmite, dazzlingDisplay]],
};

const criticalMiss: Boon = {
  name: "Critical Miss",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Foes take ${value} damage whenever [daze] causes them to miss`,
  values: {
    [COMMON]: { 1: 100 },
    [RARE]: { 1: 150 },
  },
  prerequisites: [[blindingSprint, lightSmite, dazzlingDisplay]],
};

const exceptionalTalent: Boon = {
  name: "Exceptional Talent",
  type: OTHER,
  element: AIR,
  info: (value) =>
    `Your [omega] Attack and [omega] Special fire 2 times, but use +${value} [mana]`,
  values: {
    [LEGENDARY]: { 1: 20 },
  },
  prerequisites: [
    [novaStrike, novaFlourish],
    [solarRing, lucidGain],
    [extraDose, superNova],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  gain,
  extraDose,
  superNova,
  selfHealing,
  perfectImage,
  dazzlingDisplay,
  backBurner,
  criticalMiss,
  lightSmite,
  exceptionalTalent,
};

export const apollo: God = {
  name: "Apollo",
  info,
  abilities,
  elements: listElements(abilities),
};
