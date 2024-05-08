const { hammerFormatter } = require("./formatter");
const weaponNameString = "Daggers";

const formatter = hammerFormatter(weaponNameString);

const spiralKnives = {
  name: "Spiral Knives",
  description:
    "Your Specials deal +40% damage and your [omega] Special fires up to 16 shots around you.",
  exclusives: [],
};

const explosiveAmbush = {
  name: "Explosive Ambush",
  description:
    "Your [omega] Attack hits a wide area and deals +400% damage, but uses +20 [mana]",
  exclusives: [],
};

const dancingKnives = {
  name: "Dancing Knives",
  description:
    "Your Specials deal +15% damage and each bounces towards up to 2 more foes",
  exclusives: [],
};

const concentratedFlurry = {
  name: "Concentrated Flurry",
  description:
    "Your [omega] Special gains +4 power each time it keeps hitting the same foe",
  exclusives: [],
};

const marauderSlice = {
  name: "Marauder Slice",
  description:
    "Hold Attack to slice repeatedly, but you cannot use your [omega] Attack",
  exclusives: [],
};

const boundlessFlurry = {
  name: "Boundless Flurry",
  description:
    "Your [omega] Special uses -66% [mana] and you Channel it much faster",
  exclusives: [],
};

const escalatingAmbush = {
  name: "Escalating Ambush",
  description:
    "In each Encounter, your [omega] Attack gains +5 Power for each foe you slay with it",
  exclusives: [],
};

const finalSlice = {
  name: "Final Slice",
  description:
    "The last strike in your Attack sequence deals +300% damage in a larger area",
  exclusives: [],
};

const sureshotFlurry = {
  name: "Sureshot Flurry",
  description:
    "Your [omega] Special fires each shot straight ahead and your Specials have a +20% range",
  exclusives: [],
};

const hookKnives = {
  name: "Hook Knives",
  description:
    "Your Specials return to you and deal +50% damage striking foes from behind",
  exclusives: [],
};

const daggersHammerAbilities = [
  spiralKnives,
  explosiveAmbush,
  dancingKnives,
  concentratedFlurry,
  marauderSlice,
  boundlessFlurry,
  escalatingAmbush,
  finalSlice,
  sureshotFlurry,
  hookKnives,
].map(formatter);

module.exports = {
  daggersHammerAbilities,
};
