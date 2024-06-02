const staff = {
  attack:
    "Three hit melee combo. 20, 25, 30 damage. Omega: Line attack that deals 120 damage, uses 20 magick",
  special:
    "Shoots a projectile that slowly tracks, deals 10 damage. Omega: Shoots a ball of energy that deals 80 damage, uses 10 magick",
  info: "Amongst the Nocturnal Arms, Descura was first to wake when you approached. She is yours. HOw does it feel to wield her, something which should have never been used? FOrged in Chaos as a last resort, to bring her brother-arms to hell if need arose. [attack] [special]",
};

const daggers = {
  attack:
    "Four hit melee combo. 20, 20, 50, 80 damage. Omega: Dash to the target dealing 100 damage, uses 10 magick",
  special:
    "Throw a fast dagger which deals 25 damage. Omega: Throw 5 daggers in an arc, each dealing 25 damage, uses 15 magick",
  info: "The sister blades Lim and Oros were created for you; for us. We reap what we sow. Remember when you put them to use. [attack] [special]",
};

const axe = {
  attack:
    "Slow three hit melee combo. 40, 80, 160 damage. Omega: Spin hitting multiple times for 50 damage per hit. Uses up to 20 magick. Disorients you temporarily on completion.",
  special:
    "Spin your axe creating a shield and dealing 10 damage to enemies. Omega: Send waves forward in wide areas dealing 140 damage, uses 25 magick",
  info: "Zorephet was to be a labrys so broad as could conceal the Moon herself. [attack] [special]",
};

const torch = {
  attack:
    "Deal 15 damage with piercing projectiles. Omega: Holding fire eventually ramps to doing 50 damage per projectile at 5 magick per hit",
  special:
    "Create a flame that spiral's out from you dealing 25 damage to anything it hits. Omega: Created two flames that orbit around you dealing 40 damage to enemies hit",
  info: "The Flames of Ygnium burn with an extraordinary light that does not pierce the dark. [attack] [special]",
};

const skull = {
  attack:
    "Lob a skull that deals 50 damage. Collect the skulls to reload ammo, 3 shots. Omega: Fire a seeking skull that does damage in a wide area deals 90 damage and uses 10 [magick]",
  special:
    "Dash forward dealing 25 damage to enemies along your pash. Omega: Dash forward hitting enemies in a wide area for 100 damage, uses 20 [magick]",
  info: "The argent skull [attack] [special]",
};

const weapons = { staff, daggers, axe, torch, skull };
export { staff, daggers, axe, torch, skull, weapons };
