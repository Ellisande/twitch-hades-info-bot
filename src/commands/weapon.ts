import { Command } from "./command";
import { weapons } from "../data/weapons";
const weaponNames = Object.keys(weapons);

const weaponCommand = new Command({
  command: /^(staff|daggers|axe|torch|skull) ?(special|attack|info)?$/i,
  name: "Weapon",
  test: false,
  example: "staff",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    logger.debug("Command matches: " + JSON.stringify(commandMatches));
    const weapon = commandMatches[1];
    logger.debug("Weapon to find " + weapon);
    if (!isWeaponName(weapon)) {
      logger.debug("Weapon not found");
      return;
    }
    const weaponInfo = weapons[weapon as keyof typeof weapons];
    logger.debug("Weapon info found ", weaponInfo);
    const variant = commandMatches[2];
    logger.debug("Variant to use " + variant);
    const message =
      variant && isVariant(variant) ? weaponInfo[variant] : weaponInfo.info;
    logger.debug("Weapon message " + message);
    bot.say(channelId, message);
  },
});

const isWeaponName = (name: string): name is keyof typeof weapons =>
  Boolean(weapons[name as keyof typeof weapons]);

const isVariant = (
  variant: string
): variant is "special" | "attack" | "info" => {
  return ["special", "attack", "info"].includes(variant);
};

export { weaponCommand };
