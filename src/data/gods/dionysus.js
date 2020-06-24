const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID,
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange,
  calculateFlat,
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info =
  "Dionysus, God of Wine and the Revel. His abilities poison and disorient";

const attack = {
  name: "Drunken Strike",
  type: ATTACK,
  info: (value) =>
    `Your Attack inflicts Hangover dealing ${value} damage per tick`,
  values: {
    [COMMON]: {
      1: 4,
      2: 6,
      3: 7,
      4: 8,
    },
    [RARE]: {
      1: 5,
    },
    [EPIC]: {
      1: 6,
    },
    [HEROIC]: {
      1: 7,
    },
  },
};

const special = {
  name: "Drunken Flourish",
  type: SPECIAL,
  info: (value) =>
    `Your Special inflicts Poison dealing ${value} damage per tick`,
  values: {
    [COMMON]: {
      1: 5,
    },
    [RARE]: {
      1: 6,
    },
    [EPIC]: {
      1: 7,
    },
    [HEROIC]: {
      1: 8,
    },
  },
};

const dash = {
  name: "Drunken Dash",
  type: DASH,
  info: (value) =>
    `Your Dash inflicts foes near you with Poison dealing ${value} per tick`,
  values: {
    [COMMON]: {
      1: 2,
    },
    [RARE]: {
      1: 3,
    },
    [EPIC]: {
      1: 4,
    },
    [HEROIC]: {
      1: 5,
    },
  },
};

const cast = {
  name: "Trippy Shot",
  type: CAST,
  info: (value) =>
    `Your Cast lobs a projectile that bursts into Festive Fog dealing ${value} damage when it lands`,
  values: {
    [COMMON]: {
      1: 100,
    },
    [RARE]: {
      1: 120,
      2: 180,
      3: 222,
    },
    [EPIC]: {
      1: 140,
    },
    [HEROIC]: {
      1: 160,
    },
  },
};

const trippyFlare = {
  name: "Trippy Flare",
  type: OTHER,
  info: (value) =>
    `Your Cast damages foes around you for ${value} leaving behind Festive Fog`,
  values: {
    [COMMON]: {
      1: 120,
    },
    [RARE]: {
      1: 0,
    },
    [EPIC]: {
      1: 0,
    },
    [HEROIC]: {
      1: 0,
    },
  },
};

const revenge = {
  name: "None",
  type: REVENGE,
  info: () => `Dionysus does not have a revenge ability`,
  values: {},
};

const numbingSensation = {
  name: "Numbing Sensation",
  type: OTHER,
  info: (value) => `Your Poison effects also make foes move ${value} slower`,
  values: {
    [COMMON]: { 1: "10-15%" },
    [RARE]: { 1: `${10 * 1.3}%-${15 * 1.5}%` },
    [EPIC]: { 1: `${10 * 2}%-${15 * 2.5}%` },
  },
};

const strongDrink = {
  name: "Strong Drink",
  type: OTHER,
  info: (value) =>
    `Using a Fountain restores all health and gives you ${value} bonus damage.`,
  values: {
    [COMMON]: { 1: "3%" },
    [RARE]: { 1: `4%` },
    [EPIC]: { 1: `5%` },
  },
};

const peerPressure = {
  name: "Peer Pressure",
  type: OTHER,
  info: (value) =>
    `Poison-afflicted foes contaminate other nearby foes every 4 seconds for ${value} poison`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: `${2 * 1.3}-${2 * 1.5}` },
    [EPIC]: { 1: `4-5` },
  },
};

const highTolerance = {
  name: "High Tolerance",
  type: OTHER,
  info: (value) => `Take ${value} less damage while standing in Festive Fog`,
  values: {
    [COMMON]: { 1: `10-15%` },
    [RARE]: { 1: `13-${15 * 1.5}%` },
    [EPIC]: { 1: `20-${15 * 2.5}%` },
  },
};

const afterParty = {
  name: "After Party",
  type: OTHER,
  info: (value) =>
    `If your health is lower than ${value} after Encounters restore to the threshold`,
  values: {
    [COMMON]: { 1: "20%" },
    [RARE]: { 1: "38%" },
    [EPIC]: { 1: "45%" },
    [HEROIC]: { 1: "60%" },
  },
};

const positiveOutlook = {
  name: "Positive Outlook",
  type: OTHER,
  info: (value) => `Take ${value} less damage while at 40% or below`,
  values: {
    [COMMON]: { 1: "10%" },
    [RARE]: { 1: "15%" },
    [EPIC]: { 1: "20%" },
  },
};

const badInfluence = {
  name: "Bad Influence",
  type: OTHER,
  info: (value) =>
    `Deal ${value} more damage while 3 foes are Poison-afflicted`,
  values: {
    [COMMON]: { 1: "50%" },
    [RARE]: { 1: `${50 * 1.3}-${50 * 1.5}%` },
    [EPIC]: { 1: `${50 * 1.8}-100%` },
  },
};

const premiumVintage = {
  name: "Premium Vintage",
  type: OTHER,
  info: (value) =>
    `Gain ${value} max health when you pick up Ambrosia. Receive 1 Ambrosia now.`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 25 },
    [EPIC]: { 1: 30 },
  },
};

const dionysussAid = {
  name: "Dionysus's Aid",
  type: AID,
  info: (value) =>
    `Your Call inflicts Poison dealing ${value} damage to foes all around you for 1.5 Sec. Full gauge: 12 second duration.`,
  values: {
    [COMMON]: { 1: 10 },
    [RARE]: { 1: 12 },
    [EPIC]: { 1: 14 },
    [HEROIC]: { 1: 16 },
  },
};

const scintillatingFeast = {
  name: "Scintillating Feast",
  type: OTHER,
  info: (value) =>
    `Your Festive Fog effects also deal ${value} lightning damage periodically`,
  values: {
    [DUO]: { 1: 80 },
  },
};

const lowTolerance = {
  name: "Low Tolerance",
  type: OTHER,
  info: (value) =>
    `Your Blight Wine effects stack ${value} more times against Weak foes`,
  values: {
    [DUO]: { 1: 3 },
  },
};

const exclusiveAccess = {
  name: "Exclusive Access",
  type: OTHER,
  info: (value) => `Any boons you find have ${value} rarity effects`,
  values: {
    [DUO]: { 1: "epic" },
  },
};

const blackOut = {
  name: "Black Out",
  type: OTHER,
  info: (value) =>
    `Poison-afflicted foes take ${value} bonus damage in Festive Fog`,
  values: {
    [LEGENDARY]: { 1: "100%" },
  },
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid: dionysussAid,
  "numbing sensation": numbingSensation,
  "peer pressure": peerPressure,
  "high tolerance": highTolerance,
  "after party": afterParty,
  "positive outlook": positiveOutlook,
  "bad influence": badInfluence,
  "premium vintage": premiumVintage,
  "scintillating feast": scintillatingFeast,
  "low tolerance": lowTolerance,
  "exclusive access": exclusiveAccess,
  "black out": blackOut,
  "strong drink": strongDrink,
  "trippy flare": trippyFlare,
};

const base = {
  name: "Dionysus",
  info,
  abilities,
  other: toArray(abilities).filter((ability) => ability.type === OTHER),
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const dionysus = {
  ...base,
  ...formattedAbilities,
};

module.exports = { dionysus };
