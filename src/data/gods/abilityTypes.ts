export type StandardBoonType =
  | typeof ATTACK
  | typeof SPECIAL
  | typeof CAST
  | typeof DASH
  | typeof GAIN
  | typeof OTHER;

export type InfusionBoonType = typeof INFUSION;
export type DuoBoonType = typeof DUO;

const ATTACK = "Attack";
const SPECIAL = "Special";
const CAST = "Cast";
const DASH = "Dash";
const GAIN = "Gain";
const OTHER = "Other";
const INFUSION = "Infusion";
const DUO = "Duo";

const abilities = [ ATTACK, SPECIAL, CAST, DASH, GAIN, OTHER, INFUSION, DUO, ];
export { ATTACK, CAST, DASH, GAIN, INFUSION, OTHER, SPECIAL, DUO, abilities };
