import { Given, When, Then } from "@cucumber/cucumber";
import * as chai from "chai";
import { sanitizeChannel } from "./testUtils";
import { CustomWorld } from "./world";

const { expect } = chai;

Given(/a channel {(.*)}/, function (this: CustomWorld, channelId: string) {
  this.setGiven((oldState) => ({
    ...oldState,
    channelId: "#channelId",
  }));
});

Given(/a user {(.*)}/, function (this: CustomWorld, userId: string) {
  this.setGiven((oldState) => ({
    ...oldState,
    userId,
  }));
});

Given(/a test user/, function (this: CustomWorld) {
  const { testUserId } = require("../../src/bot/testUtils");
  this.setGiven((oldState) => ({
    ...oldState,
    userId: testUserId,
  }));
});

Given(/^PENDING/, function () {
  return "pending";
});

When(
  /the user says to the bot {(.*)}/,
  async function (this: CustomWorld, userMessage: string) {
    const { handleMessage } = require("../../src/bot/messageHandler");
    const fullMessage = `${userMessage}`;
    return await handleMessage({
      channelId: this.given.channelId,
      originalMessage: fullMessage,
      bot: this.mocks.bot,
      self: false,
    });
  }
);

Then(
  /the bot responds with {(.*)}/,
  function (this: CustomWorld, expectedMessage: string) {
    const { bot } = this.mocks;
    const calledWith = bot.say.getCall(0).args;
    const actualResponseChannel = sanitizeChannel(calledWith[0]);
    const actualResponseMessage = calledWith[1];
    const expectedResponseChannel = sanitizeChannel(this.given.channelId);
    expect(actualResponseChannel).to.equal(expectedResponseChannel);
    expect(actualResponseMessage).to.include(expectedMessage);
  }
);

Then(
  "the bot responds with {int} abilities",
  function (this: CustomWorld, expectedCount: number) {
    const { bot } = this.mocks;
    const calledWith = bot.say.getCall(0).args;
    const actualResponseChannel = sanitizeChannel(calledWith[0]);
    const actualResponseMessage = calledWith[1];
    const expectedResponseChannel = sanitizeChannel(this.given.channelId);
    expect(actualResponseChannel).to.equal(expectedResponseChannel);
    const abilitiesInResponse = actualResponseMessage.match(/\[[^\[\]]*\]/g);
    const actualCount = abilitiesInResponse?.length;
    expect(actualCount).to.equal(expectedCount);
  }
);

Then(
  /the bot does not respond with {(.*)}/,
  function (this: CustomWorld, expectedMessage: string) {
    const { bot } = this.mocks;
    const calledWith = bot.say.lastArg;
    const actualResponseChannel = sanitizeChannel(calledWith[0]);
    const expectedResponseChannel = sanitizeChannel(this.given.channelId);
    const actualResponseMessage = calledWith[1];
    expect(actualResponseChannel).to.equal(expectedResponseChannel);
    expect(actualResponseMessage).not.to.include(expectedMessage);
  }
);

Then(/^the bot does not respond$/, function (this: CustomWorld) {
  const { bot } = this.mocks;
  const calledWith = bot.say.lastArg;
  expect(calledWith).not.to.exist;
});
