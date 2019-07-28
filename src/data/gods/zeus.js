const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER
} = require("./abilityTypes");
const { mapValues, omit } = require("lodash");

const info =
  "Zeus, God of Thunder. His powers create bouncing lightning projectiles.";

const attack = {
  name: "Lightning Strike",
  type: ATTACK,
  info: value =>
    `Your Attack emits chain-lightning for ${value} when you damage a foe.`,
  values: {
    [COMMON]: {
      1: 10
    },
    [RARE]: {
      1: 12
    },
    [EPIC]: {
      1: 15
    },
    [HEROIC]: {
      1: 18
    }
  }
};

const special = {
  name: "Thunder Flourish",
  type: SPECIAL,
  info: value =>
    `Your Special causes a lightning bolt to strike nearby foe for ${value} damage.`,
  values: {
    [COMMON]: {
      1: 30
    },
    [RARE]: {
      1: "37.5"
    },
    [EPIC]: {
      1: "40"
    },
    [HEROIC]: {
      1: 60
    }
  }
};

const dash = {
  name: "Thunder Dash",
  type: DASH,
  info: value =>
    `Your Dash causes a lightning bolt to strike nearby foes for ${value} damage`,
  values: {
    [COMMON]: {
      1: "15-20"
    },
    [RARE]: {
      1: "19.5-30"
    },
    [EPIC]: {
      1: "27-40"
    },
    [HEROIC]: {
      1: "34.5-50"
    }
  }
};

const cast = {
  name: "Electric Shot",
  type: CAST,
  info: value =>
    `Your Cast is a burst of chain-lightning that bounces between foes for ${value} damage`,
  values: {
    [COMMON]: {
      1: 60
    },
    [RARE]: {
      1: 75
    },
    [EPIC]: {
      1: 90
    },
    [HEROIC]: {
      1: 105
    }
  }
};

const revenge = {
  name: "Heaven's Vengeance",
  type: REVENGE,
  info: value =>
    `After you take damage, your foe is struck by lightning for ${value} damage`,
  values: {
    [COMMON]: {
      1: "60-80"
    },
    [RARE]: {
      1: "78-120"
    },
    [EPIC]: { 1: "108-160" }
  }
};

const stormLightning = {
  name: "Storm Lightning",
  type: OTHER,
  info: value =>
    `Your chain-lightning effects bounce ${value} more times before expiring.`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: 4 },
    [EPIC]: { 1: 6 }
  }
};

const highVoltage = {
  name: "High Voltage",
  type: OTHER,
  info: value =>
    `Your lightning bolt effects deal damage in a ${value} larger area.`,
  values: {
    [COMMON]: {
      1: "60%"
    },
    [RARE]: {
      1: "72%"
    },
    [EPIC]: {
      1: "84%"
    }
  }
};

const doubleStrike = {
  name: "Double Strike",
  type: OTHER,
  info: value =>
    `Your lightning bolt effects have a ${value} chance to strike twice.`,
  values: {
    [COMMON]: { 1: "25%" },
    [RARE]: { 1: "30%" },
    [EPIC]: { 1: "35%" }
  }
};

const staticDischarge = {
  name: "Static Discharge",
  type: OTHER,
  info: value =>
    `Your lighting effect also make foes Jolted. Jolted: when an enemy attacks they take ${value} damage`,
  values: {
    [COMMON]: { 1: "50-60" },
    [RARE]: { 1: "65-90" },
    [EPIC]: { 1: "90-120" }
  }
};

const cloudedJudgement = {
  name: "Clouded Judgement",
  type: OTHER,
  info: value =>
    `Your Wrath Gauge charges ${value} faster when you deal or take damage`,
  values: {
    [COMMON]: { 1: "15%" },
    [RARE]: { 1: "38%" },
    [EPIC]: { 1: "61%" }
  }
};

const thunderGodsFury = {
  name: "Thunder God's Fury",
  type: OTHER,
  info: value =>
    `Your Wrath makes lightning strike nearby foes repeatedly for ${value} over 5 seconds`,
  values: {
    [COMMON]: { 1: 80 },
    [RARE]: { 1: 100 },
    [EPIC]: { 1: 120 },
    [HEROIC]: { 1: 140 }
  }
};

const splittingBolt = {
  name: "Splitting Bolt",
  type: OTHER,
  info: value =>
    `All your lightning effects create an additional burst for ${value} damage`,
  values: {
    [LEGENDARY]: { 1: 40 }
  }
};

const seaStorm = {
  name: "Sea Storm",
  type: OTHER,
  info: value =>
    `Your knock-away effects also cause foes to be struck by lightning for ${value} damage `,
  values: {
    [DUO]: { 1: 40 }
  }
};

const scintillatingFeast = {
  name: "Scintillating Feast",
  type: OTHER,
  info: value =>
    `Your Festive Fog effects also deal ${value} lightning damage periodically`,
  values: {
    [DUO]: { 1: 60 }
  }
};

const freakAccident = {
  name: "Freak Accidnet",
  type: OTHER,
  info: value =>
    `Your Critical effects also cause foes to be struck by a lightning bolt for ${value} damage`,
  values: {
    [DUO]: { 1: 20 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "storm lightning": stormLightning,
  "high voltage": highVoltage,
  "double strike": doubleStrike,
  "static discharge": staticDischarge,
  "clouded judgement": cloudedJudgement,
  "thunder gods fury": thunderGodsFury,
  "sea storm": seaStorm,
  "scintillating feast": scintillatingFeast,
  "freak accident": freakAccident
};

const base = {
  name: "Zeus",
  info,
  other: _.toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const zeus = {
  ...base,
  ...formattedAbilities
};

module.exports = { zeus };
