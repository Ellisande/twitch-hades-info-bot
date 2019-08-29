const { COMMON, RARE, EPIC, HEROIC } = require("../data/gods/rarities");

const calculatePercentage = (base, hasHeroic) => {
  const standardValues = {
    [COMMON]: {
      1: `${base}%`
    },
    [RARE]: {
      1: `${base * 1.3}%-${base * 1.5}%`
    },
    [EPIC]: {
      1: `${base * 1.8}%-${base * 2.0}%`
    }
  };
  return hasHeroic
    ? { ...standardValues, [HEROIC]: { 1: `${base * 2.3}%-${base * 2.5}` } }
    : standardValues;
};

const calculateRange = (min, max, hasHeroic) => {
  const standardValues = {
    [COMMON]: {
      1: `${min}-${max}`
    },
    [RARE]: {
      1: `${min * 1.3}-${max * 1.5}`
    },
    [EPIC]: {
      1: `${min * 1.8}-${max * 2.0}`
    }
  };
  return hasHeroic
    ? {
        ...standardValues,
        [HEROIC]: {
          1: `${min * 2.3}-${max * 2.5}`
        }
      }
    : standardValues;
};

module.exports = {
  calculatePercentage,
  calculateRange
};
