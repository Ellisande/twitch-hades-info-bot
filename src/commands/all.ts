import { pingCommand } from "./ping";
import { weaponCommand } from "./weapon";
import { godCommand } from "./god";
import { godListCommand } from "./godList";
import { boonCommand } from "./boon";
import { hammerAbilityCommand } from "./hammerAbility";
import { hammerCommand } from "./hammer";
import { effectCommand } from "./effect";
import { effectListCommand } from "./effectList";
import { elementCommand } from "./element";
import { elementListCommand } from "./elementList";
import { hexCommand } from "./hex";
import { hexListCommand } from "./hexList";
import { infusionCommand } from "./infusion";

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
];
export { allCommands };
