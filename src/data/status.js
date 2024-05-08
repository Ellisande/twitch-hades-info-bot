const weak = {
  name: "Weak",
  description:
    "[status] [Aphoridte] Enemies with weak deal less damage. Lasts 3 seconds.",
};

const blitz = {
  name: "Blitz",
  description:
    "[status] [Zeus] When the enemy has taken a total of the blitz amount of damage, deal damage.",
};

const freeze = {
  name: "Freeze",
  description:
    "[status] [Demeter] Freezes enemies, can only be applied to each enemy once per 10 seconds",
};

const marked = {
  name: "Marked",
  description:
    "[status] [Artemis] Increases the chance to the enemy receiving a critical hit.",
};

const hitch = {
  name: "Hitch",
  description:
    "[status] [Hera] Hitched enemies take 30% of damage dealt to other hitched enemies",
};

const slip = {
  name: "Slip",
  description:
    "[status] [Poseidon] Afflicted foes take more damage and are knocked farther away. Lasts 3 seconds",
};

const statuses = [marked, freeze, weak, blitz, hitch, slip].map((status) => ({
  ...status,
  matcher: status.name.replace(" ", "*"),
}));

module.exports.statuses = statuses;
