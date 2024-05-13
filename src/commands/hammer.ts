import { capitalize } from "lodash";
import { Command } from "./command";
import { staffHammerAbilities } from "../data/hammer/staff";
import { axeHammerAbilities } from "../data/hammer/axe";
import { daggersHammerAbilities } from "../data/hammer/daggers";
import { torchHammerAbilities } from "../data/hammer/torch";
const weaponAbilities = {
  staff: staffHammerAbilities,
  axe: axeHammerAbilities,
  daggers: daggersHammerAbilities,
  torch: torchHammerAbilities,
};

const baseDescription =
  "Daedalus Hammer modifies the core mechanics of each weapon in unique ways. A maximum of 2 hammers can be found per run. Learn more with !hammer [staff] [axe] [daggers] [torch] [bow] [fists].";

const hammerCommand = new Command({
  command:
    /^(hammer|daedalus|daedalus hammer)(?: *)(staff|axe|daggers|torch|skull?)?$/i,
  name: "Hammer Command",
  test: false,
  example: "hammer",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const secondCommand = commandMatches[2];
    if (!secondCommand) {
      bot.say(channelId, baseDescription);
      return;
    }
    const abilities = getAbilitiesForCommand(secondCommand.toLowerCase());
    if (!abilities) {
      bot.say(channelId, baseDescription);

      return;
    }

    const message = `${capitalize(secondCommand)} hammer upgrades: ${abilities
      .map(({ name }) => `[${name}]`)
      .join(" ")}`;
    bot.say(channelId, message);
  },
});

const getAbilitiesForCommand = (
  command: string
):
  | {
      name: string;
      matcher: string;
      description: string;
    }[]
  | undefined => {
  if (command in weaponAbilities) {
    return (weaponAbilities as any)[command];
  }
  return undefined;
};

export { hammerCommand };
