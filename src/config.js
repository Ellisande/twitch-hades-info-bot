const auth = require("../auth.json");
const identity = auth?.identity;
const actualUsername = process.env.BOT_USERNAME || identity.username;
const actualPassword = process.env.BOT_OAUTH_TOKEN || identity.password;

if (!actualUsername) {
  process.exit(
    1,
    "The bot must have a username specified in auth.json or in the BOT_USERNAME environment variable"
  );
}

if (!actualPassword) {
  process.exit(
    1,
    "The bot must have an oauth token specified in auth.json or in the BOT_OAUTH_TOKEN environment variable"
  );
}
module.exports = {
  username: actualUsername,
  password: actualPassword,
};
