export type BoonType =
  | typeof ATTACK
  | typeof SPECIAL
  | typeof CAST
  | typeof DASH
  | typeof GAIN
  | typeof OTHER;

const ATTACK = "Attack";
const SPECIAL = "Special";
const CAST = "Cast";
const DASH = "Dash";
const GAIN = "Gain";
const OTHER = "Other";

const abilities = [ATTACK, SPECIAL, CAST, DASH, GAIN, OTHER];
export { ATTACK, SPECIAL, CAST, DASH, OTHER, GAIN, abilities };
