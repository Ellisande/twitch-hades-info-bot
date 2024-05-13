import { Command } from "./command";

const pingCommand = new Command({
  command: /^ping$/i,
  name: "Ping",
  test: true,
  example: "ping",
  handler: async ({ bot, channelId }) => {
    bot.say(channelId, "Pong");
  },
});

export { pingCommand };
