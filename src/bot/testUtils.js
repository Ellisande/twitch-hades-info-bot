const testUserId = "ellisandepoet";
const testChannelId = "#ellisandepoet";
const isTestChannel = channel => channel == testChannelId;
const isTestUser = user => user == testUserId;

module.exports = {
  isTestChannel,
  isTestUser,
  testUserId,
  testChannelId
};
