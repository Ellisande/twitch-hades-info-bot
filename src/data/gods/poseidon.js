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

const info = "Poseidon, God of the Sea. His powers knock enemies away.";

const attack = {
  name: "Tempest Strike",
  type: ATTACK,
  info: value =>
    `Attacks knock back enemies and deal and additional ${value} damage`,
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
  name: "Tempest Flourish",
  type: SPECIAL,
  info: value =>
    `Special knocks back enemies and deals and additional ${value} damage`,
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
  name: "Tidal Dash",
  type: DASH,
  info: value => `Dash knocks away nearby enemies and deals ${value} damage`,
  values: {
    [RARE]: {
      1: 32
    }
  }
};

const cast = {
  name: "Storm Shot",
  type: CAST,
  info: value =>
    `Cast deals ${value} damage in an area and knocks enemies back`,
  values: {
    [RARE]: {
      1: "77-79"
    }
  }
};

const revenge = {
  name: "Unknown",
  type: REVENGE,
  info: value => `Unknown`,
  values: {
    [EPIC]: { 1: "151-173", 2: "206" }
  }
};

const typhoonsFury = {
  name: "Typhoon's Fury",
  type: OTHER,
  info: value => `Wall slam damage increased by ${value} damage`,
  values: {
    [RARE]: { 1: "75%", 2: "100%" }
  }
};

const sunkenTreasure = {
  name: "Sunken Treasure",
  type: OTHER,
  info: () => `Gain money, darkness, and health`
};

const base = {
  name: "Poseidon",
  info,
  other: [typhoonsFury, sunkenTreasure]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "typhoons fury": typhoonsFury,
  "sunken treasure": sunkenTreasure
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const poseidon = {
  ...base,
  ...formattedAbilities
};

module.exports = { poseidon };
