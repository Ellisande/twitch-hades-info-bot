const express = require("express");
const axios = require("axios");
const post = axios.post;
const auth = require("../auth.json");
let refreshToken = process.env.REFRESH_TOKEN || auth.identity.refreshToken;
const clientId = process.env.CLIENT_ID || auth.identity.clientId;
const clientSecret = process.env.CLIENT_SECRET || auth.identity.clientSecret;
const app = express();

app.get("/ping", (req, res) => res.send("Pong!"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Running web server for... no reason?")
);

const pingUrl = process.env.NODE_ENV == "http://localhost:3000/ping";
const refreshUrl = "https://id.twitch.tv/oauth2/token";
setInterval(async () => {
  console.log("Refreshing token");
  const response = await post(
    refreshUrl,
    `grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}`,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  const data = response.data;
  console.log("Token refreshed!");
  refreshToken = data.refresh_token;
}, 5 * 60 * 1000); // 5 minutes
