const { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO } = require("./rarities");
const { abilityFormatter } = require("./formatters");
const {
  ATTACK,
  SPECIAL,
  CAST,
  DASH,
  REVENGE,
  OTHER,
  AID
} = require("./abilityTypes");
const {
  calculatePercentage,
  calculateRange
} = require("../../utils/calculateUtils");
const { mapValues, toArray } = require("lodash");

const info = "Demeter, Goddess of Seasons. Her abilities slows enemies.";

const attackBase = "50";
const attack = {
  name: "Frost Strike",
  type: ATTACK,
  info: value => `Your Attack is ${value}% stronger and inflicts Chill`,
  values: {
    [COMMON]: {
      1: 40
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const specialBase = 80;
const special = {
  name: "Frost Flourish",
  type: SPECIAL,
  info: value => `Your Special is ${value} stronger and inflicts Chill`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 82
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const cast = {
  name: "[TODO] Shot",
  type: CAST,
  info: value => `Your Cast [TODO]`,
  values: {
    [COMMON]: {
      1: 90
    },
    [RARE]: {
      1: 108
    },
    [EPIC]: {
      1: 126
    },
    [HEROIC]: {
      1: 144
    }
  }
};

const dashMin = 17;
const dashMax = 19;
const dash = {
  name: "[TODO] Dash",
  type: DASH,
  info: value => `Your Dash [TODO]`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const revengeMin = 20;
const revengeMax = 25;
const revenge = {
  name: "[TODO] Revenge",
  type: REVENGE,
  info: value => `After you take damage, [TODO]`,
  values: {
    [COMMON]: {
      1: `${revengeMin}-${revengeMax}`
    },
    [RARE]: { 1: `${revengeMin * 1.3}-${revengeMax * 1.5}` },
    [EPIC]: { 1: `${revengeMin * 2}-${(revengeMax * 2.2).toFixed(0)}` }
  },
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const aidBase = 2500;
const aid = {
  name: "Demeter's Aid",
  type: AID,
  info: value =>
    `Your Call creates a winter vortex for 5s, inflicting ${value} every 0.25s and Chill. Max gauge increases duration to 15 seconds.`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 11
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const otherTodo = {
  name: "[TODO]",
  type: OTHER,
  info: value => `[TODO]`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const todoDuo = {
  name: "[TODO] Duo",
  type: OTHER,
  info: value => `[TODO]`,
  values: {
    [DUO]: { 1: 1 }
  }
};

const abilities = {
  attack,
  special,
  dash,
  revenge,
  cast,
  aid,
  todoDuo,
  otherTodo
};

const base = {
  name: "Demeter",
  info,
  abilities,
  other: toArray(abilities).filter(ability => ability.type === OTHER)
};

const formattedAbilities = mapValues(abilities, abilityFormatter(base.name));

const demeter = {
  ...base,
  ...formattedAbilities
};

module.exports = { demeter };
