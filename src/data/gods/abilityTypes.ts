export type StandardBoonType =
  | typeof ATTACK
  | typeof SPECIAL
  | typeof CAST
  | typeof DASH
  | typeof GAIN
  | typeof OTHER;

export type InfusionBoonType = typeof INFUSION;

const ATTACK = "Attack";
const SPECIAL = "Special";
const CAST = "Cast";
const DASH = "Dash";
const GAIN = "Gain";
const OTHER = "Other";
const INFUSION = "Infusion";

const abilities = [ATTACK, SPECIAL, CAST, DASH, GAIN, OTHER, INFUSION];
export { ATTACK, CAST, DASH, GAIN, INFUSION, OTHER, SPECIAL, abilities };
