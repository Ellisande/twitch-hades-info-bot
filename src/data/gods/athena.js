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

const info = "Athena, Goddess of Wisdom. Her powers deflect attacks.";

const attack = {
  name: "Divine Strike",
  type: ATTACK,
  info: value => `Attacks can deflect and deals ${value} increased damage`,
  values: {
    [RARE]: {
      1: "53%"
    }
  }
};

const special = {
  name: "Divine Flourish",
  type: SPECIAL,
  info: value => `Special deflects and deals ${value} increased damage`,
  values: {
    [COMMON]: {
      1: "60%"
    },
    [RARE]: {
      1: "83%-88%"
    },
    [EPIC]: {
      1: "128%"
    }
  }
};

const dash = {
  name: "Titan Toppler",
  type: DASH,
  info: value => `Your dash is now slower but deals ${value} and deflects`,
  values: {
    [EPIC]: {
      1: 30
    }
  }
};

const cast = {
  name: "Unknown",
  type: CAST,
  info: () => "Unknown"
};

const revenge = {
  name: "Brilliant Riposte",
  type: REVENGE,
  info: value =>
    `Taking damage causes you to deflect and deal ${value} damage to nearby enemies`,
  values: {
    [COMMON]: { 1: 20 },
    [RARE]: { 1: 27 }
  }
};

const sureFooting = {
  name: "Sure Footing",
  type: OTHER,
  info: value => `You take ${value} less damage from traps`,
  values: {
    [EPIC]: { 1: "53%" }
  }
};

const bronzeSkin = {
  name: "Bronze Skin",
  type: OTHER,
  info: value => `Reduce damage you take by ${value}`,
  values: {
    [RARE]: {
      1: "10%"
    }
  }
};

const base = {
  name: "Athena",
  info,
  other: [sureFooting, bronzeSkin]
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  "sure footing": sureFooting,
  "bronze skin": bronzeSkin
};

const formattedAbilities = mapValues(abilities, abilityFormatter);

const athena = {
  ...base,
  ...formattedAbilities
};

module.exports = { athena };
