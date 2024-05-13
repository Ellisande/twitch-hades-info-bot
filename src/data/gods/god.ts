import { BoonType } from "./abilityTypes";
import { BoonElement } from "./elements";
import { BoonRarity } from "./rarities";

export type BoonValues = Partial<
  Record<BoonRarity, { [level: number]: string | number }>
>;

export type Boon = {
  name: string;
  type: BoonType;
  element?: BoonElement;
  info: (value: string) => string;
  values: BoonValues;
};

export type God = {
  name: string;
  info: string;
  abilities: { [key: string]: Boon };
  other: Boon[];
  elements?: BoonElement[];
};
