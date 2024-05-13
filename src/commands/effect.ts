import { statuses } from "../data/status";
import { Command } from "./command";
const allEffects = [...statuses]; //TODO: Add arcana, keepsakes
const effectCommandBase = allEffects.map((effect) => effect.matcher);
const effectCommandExp = RegExp(`^(${effectCommandBase.join("|")})$`, "i");

const effectCommand = new Command({
  command: effectCommandExp,
  name: "Effects",
  test: false,
  example: "weak",
  handler: async ({ bot, channelId, commandMatches, logger }) => {
    const abilityName = commandMatches[1];
    const currentAbility = allEffects.find((ability) => {
      const matches = RegExp(ability.matcher, "i").test(abilityName);
      return matches;
    });
    if (!currentAbility) {
      return;
    }
    const message = bot.say(channelId, currentAbility.description);
  },
});

export { effectCommand };
