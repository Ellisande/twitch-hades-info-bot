import { bonusCommand } from "./actBonus";
import { boonCommand } from "./boon";
import { chaosCommand } from "./chaosBoons";
import { effectCommand } from "./effect";
import { effectListCommand } from "./effectList";
import { elementCommand } from "./element";
import { elementListCommand } from "./elementList";
import { godCommand } from "./god";
import { godListCommand } from "./godList";
import { hammerCommand } from "./hammer";
import { hammerAbilityCommand } from "./hammerAbility";
import { hexCommand } from "./hex";
import { hexListCommand } from "./hexList";
import { infusionCommand } from "./infusion";
import { pingCommand } from "./ping";
import { weaponCommand } from "./weapon";

const allCommands = [
  pingCommand,
  weaponCommand,
  godCommand,
  godListCommand,
  boonCommand,
  hammerAbilityCommand,
  hammerCommand,
  effectCommand,
  effectListCommand,
  elementCommand,
  elementListCommand,
  hexCommand,
  hexListCommand,
  infusionCommand,
  chaosCommand,
  bonusCommand,
];
export { allCommands };
