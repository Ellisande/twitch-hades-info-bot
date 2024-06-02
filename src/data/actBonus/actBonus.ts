import { COMMON } from "../gods/rarities";
export type BonusBoonType = "Bonus";
export type BonusBoonValues = {
  [COMMON]: string | number;
};

export enum ActLocation {
  EREBUS = "Erebus",
  OCEANUS = "Oceanus",
  FIELDS_OF_MOURNING = "Fields of Mourning",
  TARTARUS = "Tartarus",
  EPHYRA = "Ephyra",
  RIFT_OF_THESSALY = "Rift of Thessaly",
}

export type ActNumber = 1 | 2 | 3 | 4;
export enum ActDirection {
  SURFACE = "Up",
  UNDERWORLD = "Down",
}

export const actDirectionLookup: Record<
  ActLocation,
  { number: ActNumber; direction: ActDirection }
> = {
  [ActLocation.EREBUS]: {
    number: 1,
    direction: ActDirection.UNDERWORLD,
  },
  [ActLocation.OCEANUS]: {
    number: 2,
    direction: ActDirection.UNDERWORLD,
  },
  [ActLocation.FIELDS_OF_MOURNING]: {
    number: 3,
    direction: ActDirection.UNDERWORLD,
  },
  [ActLocation.TARTARUS]: {
    number: 4,
    direction: ActDirection.UNDERWORLD,
  },
  [ActLocation.EPHYRA]: {
    number: 1,
    direction: ActDirection.SURFACE,
  },
  [ActLocation.RIFT_OF_THESSALY]: {
    number: 2,
    direction: ActDirection.SURFACE,
  },
};

export const actLocationLookup = (
  actNumber: ActNumber,
  actDirection: ActDirection
) => {
  if (actDirection === ActDirection.SURFACE && actNumber > 2) {
    return undefined;
  }
  return Object.entries(actDirectionLookup).find(
    ([_, { number, direction }]) =>
      number === actNumber && direction === actDirection
  )?.[0] as ActLocation;
};

export type BonusBoon = {
  name: string;
  type: BonusBoonType;
  info: (value: string) => string;
  values: BonusBoonValues;
};

export type ActBonus = {
  name: string;
  info: string;
  location: ActLocation;
  abilities: { [key: string]: BonusBoon };
};
