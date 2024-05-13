import { invert } from "lodash";

const COMMON = "Common";
const RARE = "Rare";
const EPIC = "Epic";
const LEGENDARY = "Legendary";
const HEROIC = "Heroic";
const DUO = "Duo";

export type BoonRarity =
  | typeof COMMON
  | typeof RARE
  | typeof EPIC
  | typeof LEGENDARY
  | typeof HEROIC
  | typeof DUO;

const abbreviationLookup = {
  [COMMON]: "c",
  [RARE]: "r",
  [EPIC]: "e",
  [LEGENDARY]: "l",
  [HEROIC]: "h",
  [DUO]: "d",
};

const abbreviate = (rarity: BoonRarity) => abbreviationLookup[rarity];
const expand = (abbreviation: keyof typeof abbreviationLookup) =>
  invert(abbreviationLookup)[abbreviation];

export { COMMON, RARE, EPIC, LEGENDARY, HEROIC, DUO, abbreviate, expand };
