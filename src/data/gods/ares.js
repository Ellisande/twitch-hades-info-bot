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
  "Ares, God of War. His powers cause spinning clouds of blades or damaging curses.";

const attack = {
  name: "Curse of Agony",
  type: ATTACK,
  info: value => `Attacks deal ${value} damage a short time later`,
  values: {
    [EPIC]: {
      1: "85"
    }
  }
};

const special = {
  name: "Curse of Pain",
  type: SPECIAL,
  info: value => `Special deals ${value} damage a short time later`,
  values: {
    [RARE]: {
      1: "43"
    },
    [EPIC]: {
      1: "73"
    }
  }
};

const dash = {
  name: "Unknown",
  type: DASH,
  info: value => `Unknown`,
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
  name: "Unknown",
  type: CAST,
  info: value => `Unknown`,
  values: {
    [EPIC]: {
      1: "149-179"
    }
  }
};

const revenge = {
  name: "Curse of Vengeance",
  type: REVENGE,
  info: value =>
    `Taking damage causes nearby enemies to take ${value} damage a short time later`,
  values: {
    [EPIC]: { 1: "140" }
  }
};

const urgeToKill = {
  name: "Urge to Kill",
  type: OTHER,
  info: value => `Attack and cast damage increased by ${value}`,
  values: {
    [EPIC]: { 1: "24%", 2: "29%", 3: "34%" }
  }
};

const base = {
  name: "Ares",
  info,
  other: [urgeToKill]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "urge to kill": urgeToKill
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const ares = {
  ...base,
  ...formattedAbilities
};

module.exports = { ares };
