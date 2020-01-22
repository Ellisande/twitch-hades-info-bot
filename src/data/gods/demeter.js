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
      1: 56
    },
    [EPIC]: {
      1: 79
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
      1: 111
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const cast = {
  name: "Crystal Beam",
  type: CAST,
  info: value =>
    `Your Cast drops a crystal that fires a beam stright ahead for ${value} damage every 0.2s for 5s.`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 10
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const dashMin = 17;
const dashMax = 19;
const dash = {
  name: "[TODO] Dash",
  type: DASH,
  info: value =>
    `Your Dash shoots a gust ahead for ${value} damage that inflicts Chill`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 20
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
      1: 10
    },
    [RARE]: {
      1: 11
    },
    [EPIC]: {
      1: 12
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const arcticBlast = {
  name: "Arctic Blast",
  type: OTHER,
  info: value =>
    `Applying 10 stacks of Chill causes a blast for ${value} damage, clearing the effect.`,
  values: {
    [COMMON]: {
      1: 50
    },
    [RARE]: {
      1: 75
    },
    [EPIC]: {
      1: 100
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const nourishedSoul = {
  name: "Nourished Soul",
  type: OTHER,
  info: value =>
    `Any Healing effects are ${value}% more potent. Restore 13% health now.`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 32
    },
    [EPIC]: {
      1: 35
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const snowBurst = {
  name: "Snow Burst",
  type: OTHER,
  info: value =>
    `Whenver you Cast, damage nearby foes for ${value} and inflict Chill.`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 50
    },
    [EPIC]: {
      1: 0
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const rareCrop = {
  name: "Rare Crop",
  type: OTHER,
  info: value =>
    `${value} of your boons randomly become common, then gain rarity every 3 encounters.`,
  values: {
    [COMMON]: {
      1: 0
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 3
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const ravenousWill = {
  name: "Ravenous Will",
  type: OTHER,
  info: value =>
    `While you have no Casts, take 10% less damage and do ${value}% more damage.`,
  values: {
    [COMMON]: {
      1: 10
    },
    [RARE]: {
      1: 0
    },
    [EPIC]: {
      1: 3
    },
    [HEROIC]: {
      1: 0
    }
  }
};

const winterHarvest = {
  name: "Winter Harvest",
  type: OTHER,
  info: value =>
    `Chill-afflicted foes shatter at 10% health for ${value} area damage, inflicting Chill nearby.`,
  values: {
    [LEGENDARY]: {
      1: 50
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
  arcticBlast,
  nourishedSoul,
  rareCrop,
  snowBurst,
  winterHarvest,
  ravenousWill
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
