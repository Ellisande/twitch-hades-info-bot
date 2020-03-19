const { range, sum } = require("lodash");
const shadowPresence = {
  name: "Shadow Presence",
  description:
    "Each rank makes you deal 10% more damage when you strike foes from behind. 50% maximum.",
  ranks: 5,
  costPerRank: [10, 15, 20, 25, 30],
  alternate: "fiery presence"
};

const fieryPresence = {
  name: "Fiery Presence",
  description:
    "Each rank makes you deal 10% more damage when you strike undamaged foes. 50% maximum.",
  ranks: 5,
  costPerRank: [10, 15, 20, 25, 30],
  alternate: "shadow presence"
};

const darkRegeneration = {
  name: "Dark Regeneration",
  description:
    "Each rank makes 40% of any darkness you collect restore your health by that much. Maximum 80% of darkness.",
  ranks: 2,
  costPerRank: [30, 60],
  alternate: "cthonic vitality"
};

const cthonicVitality = {
  name: "Cthonic Vitality",
  description:
    "Each rank restores 1 health when you enter each chamber. Maximum 3 health per room.",
  ranks: 3,
  costPerRank: [10, 20, 40],
  alternate: "dark regeneration"
};

const deathDefiance = {
  name: "Death Defiance",
  description:
    "Each rank restores you up to 50% health 1 time when your life total reaches 0. Maximum 3 lives.",
  ranks: 3,
  costPerRank: [30, 500, 1000],
  alternate: "stubborn defiance"
};

const stubbornDefiance = {
  name: "Stubborn Defiance",
  description:
    "This restores you to 30% health 1 time per room when your life total reaches 0.",
  ranks: 1,
  costPerRank: [600],
  alternate: "death defiance"
};

const greaterReflex = {
  name: "Greater Reflex",
  description: "You can perform 1 additional dash in quick succession.",
  ranks: 1,
  costPerRank: [50],
  alternate: "ruthless reflex"
};

const ruthlessReflex = {
  name: "Ruthless Reflex",
  description:
    "If you dash just before getting hit, gain 50% increased damage and dodge chance for 2 seconds.",
  ranks: 1,
  costPerRank: [75],
  alternate: "greater reflex"
};

const boilingBlood = {
  name: "Boiling Blood",
  description:
    "Each rank gives you 10% Attack and Special damage to foes with a cast stuck in them. 50% increase maximum.",
  ranks: 5,
  costPerRank: [10, 30, 50, 70, 90],
  alternate: "abyssal blood"
};

const abyssalBlood = {
  name: "Abyssal Blood",
  description:
    "Each rank reduces foes' speed and damage by 5% while they have a cast stuck in them. 25% slow and weak maximum.",
  ranks: 5,
  costPerRank: [20, 40, 60, 80, 100],
  alternate: "boiling blood"
};

const stygianSoul = {
  name: "Stygian Soul",
  description:
    "Your cast regenerates, but no longer drops. Each rank makes it regenerate 1 second faster. 3 faster maximum.",
  ranks: 2,
  costPerRank: [60, 120],
  alternate: "infernal soul"
};

const infernalSoul = {
  name: "Infernal Soul",
  description:
    "Each rank gives you 1 additional cast capacity. 3 casts maximum.",
  ranks: 2,
  costPerRank: [20, 80],
  alternate: "stygian soul"
};

const goldenTouch = {
  name: "Golden Touch",
  description:
    "each rank gives you 5% of your total money each time you clear an act. 15% interest maximum.",
  ranks: 3,
  costPerRank: [70, 90, 110],
  alternate: "deep pockets"
};

const deepPockets = {
  name: "Deep Pockets",
  description:
    "Each ranks gives you 10 money at the start of each escape from the House of Hades. 100 money maximum.",
  ranks: 2,
  costPerRank: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
  alternate: "golden touch"
};

const highConfidence = {
  name: "High Confidence",
  description:
    "Each rank gives you 5% more damage while you have 80% or more of you maximum health. Maximum 25% more damage.",
  ranks: 5,
  costPerRank: [50, 100, 150, 200, 250],
  alternate: "thick skin"
};

const thickSkin = {
  name: "Thick Skin",
  description:
    "Each rank adds 5 to your maximum life. 50 life increase maximum.",
  ranks: 2,
  costPerRank: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
  alternate: "high confidence"
};

const familyFavorite = {
  name: "Family Favorite",
  description:
    "Each rank gives you 3% increased damage for each different Olympian whose boons you have. 6% damage per Olympian maximum.",
  ranks: 2,
  costPerRank: [50, 150],
  alternate: "privileged status"
};

const privilegedStatus = {
  name: "Privileged Status",
  description:
    "Each rank gives you 20% increased damage vs. foes afflicted by at least two status effects. 40% damage increase maximum.",
  ranks: 2,
  costPerRank: [50, 100],
  alternate: "family favorite"
};

const olympianFavor = {
  name: "Olympian Favor",
  description:
    "Each rank gives you 1% greater chance for a boon to be rare. 40% increase maximum.",
  ranks: 40,
  costPerRank: range(40).map(() => 50),
  alternate: "olympian legacy"
};

const olympianLegacy = {
  name: "Olympian Legacy",
  description:
    "Each rank gives you 1% greater chance for a boon to be legendary or a duo (if possible).",
  ranks: 15,
  costPerRank: range(15).map(() => 150),
  alternate: "olympian favor"
};

const godsChosen = {
  name: "God's Chosen",
  description:
    "Each rank gives you 1% greater chance for tier 2 room rewards (boons, hammers, and poms). 10% increased tier 2 chance maximum.",
  ranks: 10,
  costPerRank: range(10).map(() => 250),
  alternate: "gods pride"
};

const godsPride = {
  name: "God's Pride",
  description:
    "Each rank gives you 1% greater chance for a boon to be epic. 20% increased chance maximum.",
  ranks: 20,
  costPerRank: range(20).map(() => 100),
  alternate: "gods chosen"
};

const fatedAuthority = {
  name: "Fated Authority",
  description:
    "Each rank gives you 1 choice, used to randomly alter the reward for the next room. 10 choices maximum.",
  ranks: 10,
  costPerRank: [500, 1000, 2000, 3000, 4000, 5000, 10000, 20000, 30000, 40000],
  alternate: "fated persuasion"
};

const fatedPersuasion = {
  name: "Fated Persuasion",
  description:
    "Each rank gives you 1 choice, used to randomly alter boon and well of charon choices. 4 choices maximum.",
  ranks: 4,
  costPerRank: [1000, 5000, 10000, 25000],
  alternate: "fated authority"
};

const mirrorFormatter = talent => ({
  name: talent.name,
  matcher: talent.name.replace(" ", " *").replace("'", "'?"),
  description: `${talent.name} (mirror talent) - ${talent.description} ${
    talent.ranks
  } ranks. ${sum(talent.costPerRank)} darkness to max. Alternate talent [${
    talent.alternate
  }].`
});

const mirrorTalents = [
  shadowPresence,
  fieryPresence,
  darkRegeneration,
  cthonicVitality,
  deathDefiance,
  stubbornDefiance,
  greaterReflex,
  ruthlessReflex,
  boilingBlood,
  abyssalBlood,
  stygianSoul,
  infernalSoul,
  goldenTouch,
  deepPockets,
  highConfidence,
  thickSkin,
  familyFavorite,
  privilegedStatus,
  olympianFavor,
  olympianLegacy,
  godsChosen,
  godsPride,
  fatedAuthority,
  fatedPersuasion
].map(mirrorFormatter);

module.exports = { mirrorTalents };
