import { toArray } from "lodash";
import { StandardBoonType, InfusionBoonType, INFUSION, DuoBoonType } from "./abilityTypes";
import { BoonElement, COSMIC } from "./elements";
import { BoonRarity } from "./rarities";
import { notNullOrUndefined } from "../../utils/arrayUtils";

export type BoonValues = Partial<
  Record<BoonRarity, { [level: number]: string | number }>
>;

export type Boon = StandardBoon | InfusionBoon | DuoBoon;

type StandardBoon = {
  name: string;
  type: StandardBoonType;
  element?: BoonElement;
  info: (value: string) => string;
  values: BoonValues;
  prerequisites?: Boon[][];
};

export const isInfusion =
  (boon: Boon): boon is InfusionBoon => boon.type === INFUSION

export type InfusionBoon = Omit<StandardBoon, "type" | "element?" | "prerequisites?"> & {
  type: InfusionBoonType;
  requiredElements: BoonElement[];
};

// TODO(sneakyteak): DuoBoon values should always be [DUO] rarity.
export type DuoBoon = Omit<StandardBoon, "type" | "element?" | "prerequisites?"> & {
  gods: [God, God];
  type: DuoBoonType;
  element: typeof COSMIC;
  prerequisites: Boon[][];
}

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
