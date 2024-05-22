import { toArray } from "lodash";
import { StandardBoonType, InfusionBoonType, INFUSION } from "./abilityTypes";
import { BoonElement } from "./elements";
import { BoonRarity } from "./rarities";
import { notNullOrUndefined } from "../../utils/arrayUtils";

export type BoonValues = Partial<
  Record<BoonRarity, { [level: number]: string | number }>
>;

export type Boon = StandardBoon | InfusionBoon;

type StandardBoon = {
  name: string;
  type: StandardBoonType;
  element?: BoonElement;
  info: (value: string) => string;
  values: BoonValues;
  prerequisites?: Array<Array<Boon>>;
};

export const isInfusion =
  (boon: Boon): boon is InfusionBoon => boon.type === INFUSION

export type InfusionBoon = Omit<StandardBoon, "type" | "element?" | "prerequisites?"> & {
  type: InfusionBoonType;
  requiredElements: Array<BoonElement>;
};

export type God = {
  name: string;
  info: string;
  abilities: { [key: string]: Boon };
  elements: BoonElement[];
};

export function listElements(abilities: { [key: string]: Boon }): BoonElement[] {
  return [
    ...new Set(
      toArray(abilities)
        .map((ability) => ability.element)
        .filter(notNullOrUndefined)
    ),
  ];
};
