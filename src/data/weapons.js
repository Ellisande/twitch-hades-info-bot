const sword = {
  attack: "Three hit melee combo. 10, 20, 30 damage",
  special: "50 damage in an area around Zagreus. Temporaily stuns Zag on use.",
  info:
    "Stygius, the sword is the starting weapon in Hades. Fast short ranged attacks and player area of effect special. [attack] [special]"
};

const spear = {
  attack: "15 damage. Charged: 50 damage ae damage around Zagreus",
  special:
    "20 damage ranged attack. Flies and out comes back. Does damage both ways.",
  info:
    "Varatha, the spear is the most expensive weapon. Very versatile with ranged attack and large aoe. [attack] [special]"
};

const shield = {
  attack: "20 damage. Charges a dash that does 50 damage",
  special: "15 damage ranged attack that bounces twice",
  info:
    "Aegis, the shield is the 3rd unlocked weapon. It has good defense, but is very difficult. [attack] [special]"
};

module.exports = {
  sword,
  stygius: sword,
  spear,
  varatha: spear,
  shield,
  aegis: shield
};
