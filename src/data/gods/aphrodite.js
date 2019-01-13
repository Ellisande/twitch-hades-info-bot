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
  "Aphrodite, Goddess of Love. Her powers weaken enemies causing them to do less damage";

const attack = {
  name: "Unknown",
  type: ATTACK,
  info: value => `Unknown`,
  values: {
    [RARE]: {
      1: "45%"
    },
    [EPIC]: {
      1: "66%",
      2: "81%",
      3: "96%",
      4: "111%",
      5: "126%",
      6: "141%"
    }
  }
};

const special = {
  name: "Unknown",
  type: SPECIAL,
  info: value => `Unknown`,
  values: {
    [COMMON]: {
      1: "25%"
    },
    [RARE]: {
      1: "35%",
      2: "48%",
      3: "61%",
      4: "74%"
    }
  }
};

const dash = {
  name: "Unknown",
  type: DASH,
  info: value => `Unknown`,
  values: {
    [RARE]: {
      1: 32
    }
  }
};

const cast = {
  name: "Shatter Shot",
  type: CAST,
  info: value =>
    `Cast shoots six short range projectiles that each deal ${value} damage`,
  values: {
    [COMMON]: {
      1: "15",
      2: "23"
    }
  }
};

const revenge = {
  name: "Wave of Despair",
  type: REVENGE,
  info: value =>
    `Taking damage deals ${value} damage to nearby enemies and applies weak`,
  values: {
    [COMMON]: {
      1: "14"
    },
    [RARE]: { 1: "17", 2: "23" }
  }
};

const dyingLament = {
  name: "Dying Lament",
  type: OTHER,
  info: value =>
    `Killing an  enemy deals ${value} damage to nearby enemies and applies weak`,
  values: {
    [RARE]: { 1: "15-18" }
  }
};

const emptyInside = {
  name: "Empty Inside",
  type: OTHER,
  info: value => `Your weak effects last ${value} longer`,
  values: {
    [EPIC]: {
      1: "5sec"
    }
  }
};

const base = {
  name: "Aphrodite",
  info,
  other: [dyingLament, emptyInside]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "dying lament": dyingLament,
  "empty inside": emptyInside
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const aphrodite = {
  ...base,
  ...formattedAbilities
};

module.exports = { aphrodite };
