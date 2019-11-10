const { Given, When, Then } = require("cucumber");
const chaiAsPromised = require("chai-as-promised");
const chai = require("chai");

chai.use(chaiAsPromised);
const { expect } = chai;

Given(/a channel {(.*)}/, function(channelId) {
  this.setGiven(oldState => ({
    ...oldState,
    channelId: "#channelId"
  }));
});

Given(/a user {(.*)}/, function(userId) {
  this.setGiven(oldState => ({
    ...oldState,
    userId
  }));
});

Given(/a test user/, function() {
  const { testUserId } = require("../../src/bot/testUtils");
  this.setGiven(oldState => ({
    ...oldState,
    userId: testUserId
  }));
});

Given(/^PENDING/, function() {
  return "pending";
});

When(/the user says to the bot {(.*)}/, function(userMessage) {
  const { handleMessage } = require("../../src/bot/messageHandler");
  const fullMessage = `${userMessage}`;
  return handleMessage({
    channelId: this.given.channelId,
    originalMessage: fullMessage,
    bot: this.mocks.bot,
    self: false
  });
});

Then(/the bot responds with {(.*)}/, function(expectedMessage) {
  const { bot } = this.mocks;
  const calledWith = bot.say.getCall(0).args;
  const actualResponseChannel = calledWith[0];
  const actualResponseMessage = calledWith[1];
  expect(actualResponseChannel).to.equal(this.given.channelId);
  expect(actualResponseMessage).to.include(expectedMessage);
});

Then(/the bot does not respond with {(.*)}/, function(expectedMessage) {
  const { bot } = this.mocks;
  const calledWith = bot.say.lastArg;
  const actualResponseChannel = calledWith[0];
  const actualResponseMessage = calledWith[1];
  expect(actualResponseChannel).to.equal(this.given.channelId);
  expect(actualResponseMessage).not.to.include(expectedMessage);
});

Then(/^the bot does not respond$/, function() {
  const { bot } = this.mocks;
  const calledWith = bot.say.lastArg;
  expect(calledWith).not.to.exist;
});

Then(/no error occurs/, function() {
  expect(this.when.result).to.be.fulfilled;
});
