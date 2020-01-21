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

const info = "Demeter, God of the Harvest. His abilities [TODO]";

const attackBase = "50";
const attack = {
  name: "[TODO] Strike",
  type: ATTACK,
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

const specialBase = 80;
const special = {
  name: "[TODO] Flourish",
  type: SPECIAL,
  info: value => `Your Special  [TODO]`,
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
  info: value => `Your Call [TODO]`,
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

const Demeter = {
  ...base,
  ...formattedAbilities
};

module.exports = { Demeter };
