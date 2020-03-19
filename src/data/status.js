const weak = {
  name: "Weak",
  description:
    "[status] [Aphoridte] Enemies with weak deal 30% less damage. Lasts 3 seconds."
};

const jolted = {
  name: "Jolted",
  description:
    "[status] [Zeus] The next time the enemy attacks they take damage."
};

const ruptured = {
  name: "Ruptured",
  description: "[status] [Poseidon] Enemies take damage when they move."
};

const exposed = {
  name: "Exposed",
  description: "[status] [Athena] Enemies take increased backstab damage."
};

const doom = {
  name: "Doom",
  description: "[status] [Ares] Enemies take damage after a short delay."
};

const hangover = {
  name: "Hangover",
  description:
    "[status] [Dionysus] Enemies take damage over time. Stacks up to 5 times."
};

const chill = {
  name: "Chill",
  description:
    "[status] [Demeter] Reduces enemies attack and move speed by 4%. Stakcs up to 10 times."
};

const marked = {
  name: "Marked",
  description:
    "[status] [Artemis] Increases the chance to the enemy receiving a crital hit."
};

const statuses = [
  marked,
  chill,
  hangover,
  doom,
  weak,
  ruptured,
  jolted,
  exposed
].map(status => ({
  ...status,
  matcher: status.name.replace(" ", "*")
}));

module.exports.statuses = statuses;
