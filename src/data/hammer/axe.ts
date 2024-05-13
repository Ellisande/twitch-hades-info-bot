import { hammerFormatter } from "./formatter";
const weaponNameString = "Axe";

const advancingWhirlwind = {
  name: "Advancing Whirlwind",
  description: "Your [omega] Attack fires ahead of you and deals +80% damage",
  exclusives: [],
};

const empoweringGuard = {
  name: "Empowering Guard",
  description:
    "After blocking a foe with your Special, deal +50% damage for 15 seconds",
  exclusives: [],
};

const gigaCleaver = {
  name: "Giga Cleaver",
  description:
    "You can Channel +15 [mana] into your [omega] Special to fire 2 times ahead of you",
  exclusives: [],
};

const meltingShedder = {
  name: "Melting Shredder",
  description: "Your Special destroys 35% of any Armor (based on the total)",
  exclusives: [],
};

const marauderSlash = {
  name: "Marauder Slash",
  description:
    "Hold Attack to strike 30% faster, but you can not use your [omega] attack",
  exclusives: [],
};

const suddenCleaver = {
  name: "Sudden Cleaver",
  description: "Your Channel your [omega] Special 50% faster",
  exclusives: [],
};

const psychicWhirlwind = {
  name: "Psychic Whirlwind",
  description:
    "During your [omega] Attack, you are free to use your Attacks and Specials",
  exclusives: [],
};

const unyieldingSlash = {
  name: "Unyielding Slash",
  description:
    "Your Attacks have +10 Power and you take -20% damage while using them",
  exclusives: [],
};

const hellSplitter = {
  name: "Hell Splitter",
  description: "Your Attack becomes a big chop with 300 power",
  exclusives: [],
};

const formatter = hammerFormatter(weaponNameString);

const axeHammerAbilities = [
  advancingWhirlwind,
  empoweringGuard,
  gigaCleaver,
  meltingShedder,
  marauderSlash,
  suddenCleaver,
  psychicWhirlwind,
  hellSplitter,
  unyieldingSlash,
].map(formatter);

export { axeHammerAbilities };
