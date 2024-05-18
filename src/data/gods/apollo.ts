import { mapValues, toArray } from "lodash";
import {
  ATTACK,
  CAST,
  DASH,
  GAIN,
  INFUSION,
  OTHER,
  SPECIAL,
} from "./abilityTypes";
import { heartBreaker } from "./aphrodite";
import { arcticRing, frigidSprint, tranquilGain } from "./demeter";
import { AIR, COSMIC, FIRE } from "./elements";
import { abilityFormatter } from "./formatters";
import { Boon, God } from "./god";
import { smithySprint, volcanicFlourish, volcanicStrike } from "./hephaestus";
import { bornGain, engagementRing, nexusSprint } from "./hera";
import {
  burntOffering,
  flameFlourish,
  flameStrike,
  flammableCoating,
  hearthGain,
  smolderRing,
} from "./hestia";
import { breakerSprint, fluidGain } from "./poseidon";
import { COMMON, DUO, EPIC, HEROIC, LEGENDARY, RARE } from "./rarities";
import { heavenFlourish, heavenStrike, thunderSprint } from "./zeus";

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

const selfHealing: Boon = {
  name: `Self Healing`,
  type: INFUSION,
  info: (value) =>
    `While you have at least 3 [fire] boons, whenever you take damage, restore ${value} of the damage taken`,
  values: {
    [COMMON]: { 1: "30%" },
  },
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

const gloriousDisaster: Boon = {
  name: "Glorious Disaster",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `You can Channel +30 [mana] into your [omega] Cast to repeatedly strike foes for ${value} bolt damage every 0.13 seconds`,
  values: {
    [LEGENDARY]: { 1: 50 },
  },
  prerequisites: [[solarRing], [heavenStrike, heavenFlourish, thunderSprint]],
};

const torrentialDownpour: Boon = {
  name: "Torrential Downpour",
  type: OTHER,
  info: (value) =>
    `Each time you use your [omega] Cast in an Encounter, it gets ${value} stronger but also uses +5 [mana]`,
  values: {
    [DUO]: { 1: "20%" },
  },
  prerequisites: [
    [solarRing, blindingSprint, lucidGain],
    [arcticRing, frigidSprint, tranquilGain],
  ],
};

const stellarSlam: Boon = {
  name: "Stellar Slam",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Your blast effects from Hephaestus deal damage in a ${value} larger area`,
  values: {
    [DUO]: { 1: "50%" },
  },
  prerequisites: [
    [novaStrike, novaFlourish, superNova],
    [volcanicFlourish, volcanicStrike, smithySprint],
  ],
};

const phoenixSkin: Boon = {
  name: "Phoenix Skin",
  type: OTHER,
  element: COSMIC,
  info: (value) =>
    `Give up -100 max health. If you do not take or deal damage for 3 seconds, rapidly restore ${value} health/sec`,
  values: {
    [DUO]: {
      1: 3,
    },
  },
  prerequisites: [
    [novaStrike, novaFlourish, lucidGain],
    [flameStrike, flameFlourish, smolderRing],
    [burntOffering, flammableCoating, hearthGain],
  ],
};

const sunnyDisposition: Boon = {
  name: "Sunny Disposition",
  type: OTHER,
  info: (value) => `Whenever you create Heartthrobs, create ${value} more`,
  values: {
    [DUO]: { 1: 2 },
  },
  prerequisites: [
    [heartBreaker],
    [novaStrike, novaFlourish, lucidGain, solarRing],
  ],
};

const beachBall: Boon = {
  name: "Beach Ball",
  type: OTHER,
  info: (value) =>
    `Your Sprint creates a water sphere behind you. After you stop, it surges ahead and bursts for ${value} damage`,
  values: {
    [DUO]: { 1: 140 },
  },
  prerequisites: [
    [blindingSprint, lucidGain],
    [breakerSprint, fluidGain],
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
    [engagementRing, nexusSprint, bornGain],
    [solarRing, blindingSprint, lucidGain],
  ],
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  gain,
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
  exceptionalTalent,
  gloriousDisaster,
  torrentialDownpour,
  sunnyDisposition,
  beachBall,
  sunWorshiper,
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
