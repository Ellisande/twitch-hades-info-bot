import { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } from "./rarities";
import { abilityFormatter } from "./formatters";
import { ATTACK, SPECIAL, CAST, DASH, OTHER } from "./abilityTypes";
import { mapValues, toArray } from "lodash";
import { Boon, God } from "./god";

const info = "Goddess of flame";

const attack: Boon = {
  name: "Flame Strike",
  type: ATTACK,
  info: (value) => `Your attacks inflict ${value} scorch damage`,
  values: {
    [COMMON]: {
      1: 20,
      2: 25,
    },
    [RARE]: {
      1: 25,
    },
  },
};

const special: Boon = {
  name: "Flame Flourish",
  type: SPECIAL,
  info: (value) => `Your Special inflicts ${value} [scorch] damage`,
  values: {
    [RARE]: { 1: 20, 2: 25 },
    [EPIC]: { 1: 25 },
  },
};

const cast: Boon = {
  name: "Unknown",
  type: CAST,
  info: (value) => `Unknown`,
  values: {
    [COMMON]: {
      1: 90,
    },
    [RARE]: {
      1: 99,
    },
    [EPIC]: {
      1: 108,
    },
    [HEROIC]: {
      1: 117,
    },
  },
};

const dash: Boon = {
  name: "Soot Sprint",
  type: DASH,
  info: (value) =>
    `Your Sprint destroys most ranged shots near you, and inflicts ${value} [scorch] on foes that fired.`,
  values: {
    [COMMON]: {
      1: 2,
    },
    [RARE]: { 1: 4, 3: 7 },
    [EPIC]: {
      1: 6,
    },
  },
};

const hearthGain: Boon = {
  name: "Hearth Gain",
  type: OTHER,
  info: (value) =>
    `Rapidly restore ${value} [mana] every second, but you have -20% less max health`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const controlledBurn: Boon = {
  name: "Controlled Burn",
  type: OTHER,
  info: (value) =>
    `Your [omega] Special also launches a fiery projectile that deals ${value} damage, but also uses +10 [mana]`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const burntOffering: Boon = {
  name: "Burnt Offering",
  type: OTHER,
  info: (value) =>
    `Gain ${value} max health and max magic, but give up 1 boon selected by Hestia`,
  values: {
    [RARE]: {
      1: 10,
    },
  },
};

const naturalGas: Boon = {
  name: "Natural Gas",
  type: OTHER,
  info: (value) =>
    `Whenever [scorch]-afflicted foes are slain, they damage nearby foes for ${value} damage`,
  values: {
    [EPIC]: {
      1: 120,
    },
  },
};

const funeralPyre: Boon = {
  name: "Funeral Pyre",
  type: OTHER,
  info: (value) =>
    `While you Channel your [omega] Moves, repeatedly inflict ${value} [scorch] on nearby foes.`,
  values: {
    [DUO]: {
      1: 90,
    },
  },
};

const slowCooker: Boon = {
  name: "Slow Cooker",
  type: OTHER,
  info: (value) =>
    `Your Attacks and Specials gain ${value} Power for each [fire] boon you have`,
  values: {
    [COMMON]: {
      1: 2,
    },
  },
};

const glowingCoal: Boon = {
  name: "Glowing Coal",
  type: OTHER,
  info: (value) =>
    `Hold Cast to aim a fiery projectile that explodes on impact for ${value} damage. The binding circle forms there.`,
  values: {
    [EPIC]: {
      1: 90,
      2: 110,
      3: 125,
      4: 135,
      6: 155,
    },
  },
};

const fireExtinguisher: Boon = {
  name: "Fire Extinguisher",
  type: OTHER,
  info: (value) =>
    `Foes with at least 300 [scorch] take a burst of damage equal to ${value} their [scorch] that consumes the effect`,
  values: {
    [RARE]: {
      1: "62%",
    },
    [EPIC]: {
      1: "75%",
    },
  },
};

const flammableCoating: Boon = {
  name: "Flammable Coating",
  type: OTHER,
  info: (value) => `Your [scorch] effects deal ${value} bonus damage to Armor`,
  values: {
    [EPIC]: {
      1: "200%",
    },
  },
};

const chainReaction: Boon = {
  name: "Chain Reaction",
  type: OTHER,
  info: (value) =>
    `If you use your blast effects from Hephaestus just within ${value} seconds of them recharging, they fire 2 times`,
  values: {
    [DUO]: { 1: 0.85 },
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

const burningDesire: Boon = {
  name: "Burning Desire",
  type: OTHER,
  info: (value) =>
    `Up to +12 Lone Shades appear in Locations. Sprint into them to launch a fiery blast for ${value} damage`,
  values: {
    [DUO]: { 1: 160 },
  },
};

const pyroTechnique: Boon = {
  name: "Pyro Technique",
  type: OTHER,
  info: (value) => `Your [scorch] effects deal damage ${value} faster`,
  values: {
    [LEGENDARY]: {
      1: "100%",
    },
  },
};

const abilities = {
  attack,
  special,
  dash,
  cast,
  hearthGain,
  controlledBurn,
  burntOffering,
  naturalGas,
  funeralPyre,
  slowCooker,
  glowingCoal,
  fireExtinguisher,
  flammableCoating,
  chainReaction,
  phoenixSkin,
  burningDesire,
  pyroTechnique,
};

const base: God = {
  name: "Hestia",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const hestia: God = {
  ...base,
  ...formattedAbilities,
};

export { hestia };