export type BoonType =
  | typeof ATTACK
  | typeof SPECIAL
  | typeof CAST
  | typeof DASH
  | typeof GAIN
  | typeof OTHER
  | typeof INFUSION;

const ATTACK = "Attack";
const SPECIAL = "Special";
const CAST = "Cast";
const DASH = "Dash";
const GAIN = "Gain";
const OTHER = "Other";
const INFUSION = "Infusion";

const abilities = [ATTACK, SPECIAL, CAST, DASH, GAIN, OTHER, INFUSION];
export { ATTACK, CAST, DASH, GAIN, INFUSION, OTHER, SPECIAL, abilities };
