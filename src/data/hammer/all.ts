import { axeHammerAbilities } from "./axe";
import { staffHammerAbilities } from "./staff";
import { torchHammerAbilities } from "./torch";
import { daggersHammerAbilities } from "./daggers";
import { skullHammerAbilities } from "./skull";

const allHammerAbilities = [
  ...axeHammerAbilities,
  ...staffHammerAbilities,
  ...torchHammerAbilities,
  ...daggersHammerAbilities,
  ...skullHammerAbilities,
];

export { allHammerAbilities };
