const { COMMON, RARE, EPIC, LEGENDARY } = require("./rarities");
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
  name: "Thunder Strike",
  type: ATTACK,
  info: value => `Attacks creates chain lightning that does ${value} damage`,
  values: {
    [RARE]: {
      1: "15"
    },
    [EPIC]: {
      1: 21
    }
  }
};

const special = {
  name: "Thunder Flourish",
  type: SPECIAL,
  info: value =>
    `Special causes a chain lightning bolt that deals ${value} damage`,
  values: {
    [RARE]: {
      1: "15-16"
    },
    [EPIC]: {
      1: "29"
    }
  }
};

const dash = {
  name: "Thunder Dash",
  type: DASH,
  info: value => `Dash strikes nearby targets for ${value} damage`,
  values: {
    [EPIC]: {
      1: "42-54",
      2: "53"
    }
  }
};

const cast = {
  name: "Electric Shot",
  type: CAST,
  info: value => `Cast bounces and deals ${value} damage`,
  values: {
    [COMMON]: {
      1: 60
    },
    [RARE]: {
      1: "84-86"
    },
    [EPIC]: {
      1: 122
    }
  }
};

const revenge = {
  name: "Heaven's Vengeance",
  type: REVENGE,
  info: value => `Taking damage strikes nearby enemies for ${value} damage`,
  values: {
    [EPIC]: { 1: "151-173", 2: "206" }
  }
};

const stormLightning = {
  name: "Storm Lightning",
  type: OTHER,
  info: value => `Your chain lightning bounces an additional ${value} times`,
  values: {
    [COMMON]: { 1: 2 },
    [RARE]: { 1: "4" }
  }
};

const splittingBolt = {
  name: "Splitting Bolt",
  type: OTHER,
  info: value =>
    `Your lightning effects create an extra projectile that deals ${value} damage`,
  values: {
    [LEGENDARY]: {
      1: "40"
    }
  }
};

const base = {
  name: "Zeus",
  info,
  other: [stormLightning, splittingBolt]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "storm lightning": stormLightning,
  "splitting bolt": splittingBolt
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const zeus = {
  ...base,
  ...formattedAbilities
};

module.exports = { zeus };
