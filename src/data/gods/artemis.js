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
  "Artemis, Goddess of the Hunt. Her powers cause critical hits and create seeking projectiles.";

const attack = {
  name: "Deadly Strike",
  type: ATTACK,
  info: value => `Attacks have ${value} chance to crit`,
  values: {
    [RARE]: {
      1: "50%"
    }
  }
};

const special = {
  name: "Deadly Flourish",
  type: SPECIAL,
  info: value => `Special has a ${value} chance to crit`,
  values: {
    [RARE]: {
      1: "60%"
    },
    [EPIC]: {
      1: "68%"
    }
  }
};

const dash = {
  name: "Hunter Dash",
  type: DASH,
  info: value => `Dash causes your attacks to critical for ${value}`,
  values: {
    [RARE]: {
      1: "1sec/2crits",
      2: "2sec/3crits"
    },
    [EPIC]: {
      1: "1sec/3crits",
      2: "2sec/4crits",
      3: "3sec/5crits"
    }
  }
};

const cast = {
  name: "True Shot",
  type: CAST,
  info: value => `Cast seeks enemies and deals ${value} damage`,
  values: {
    [EPIC]: {
      1: "149-179"
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

const pressurePoints = {
  name: "Pressure Points",
  type: OTHER,
  info: value => `All sources damage has ${value} chance to crit`,
  values: {
    [COMMON]: { 1: "10%", 2: "15%" },
    [EPIC]: { 1: "24%" }
  }
};

const quickReload = {
  name: "Quick Reload",
  type: OTHER,
  info: value => `Enemies drop casts ${value} faster`,
  values: {
    [EPIC]: {
      1: "1.9s-1.97s"
    }
  }
};

const fullyLoaded = {
  name: "Fully Loaded",
  type: OTHER,
  info: value => `Cast has ${value} additional charges`,
  values: {
    [RARE]: {
      1: "1"
    }
  }
};

const hideBreaker = {
  name: "Hide Breaker",
  type: OTHER,
  info: value => `Critical hits deal and additional ${value} damage to armor`,
  values: {
    [EPIC]: { 1: "231%" }
  }
};

const base = {
  name: "Artemis",
  info,
  other: [pressurePoints, quickReload, fullyLoaded, hideBreaker]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "pressure points": pressurePoints,
  "quick reload": quickReload,
  "fully loaded": fullyLoaded,
  "hide breaker": hideBreaker
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const artemis = {
  ...base,
  ...formattedAbilities
};

module.exports = { artemis };
