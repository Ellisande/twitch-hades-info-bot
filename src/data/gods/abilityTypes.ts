export type BoonType =
  | typeof ATTACK
  | typeof SPECIAL
  | typeof CAST
  | typeof DASH
  | typeof OTHER;

const ATTACK = "Attack";
const SPECIAL = "Special";
const CAST = "Cast";
const DASH = "Dash";
const OTHER = "Other";

const abilities = [ATTACK, SPECIAL, CAST, DASH, OTHER];
export { ATTACK, SPECIAL, CAST, DASH, OTHER, abilities };
