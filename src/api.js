const express = require("express");
const axios = require("axios");

const app = express();

app.get("/ping", (req, res) => res.send("Pong!"));

app.listen(process.env.PORT || 3000, () =>
  console.log("Running web server for... no reason?")
);

const pingUrl = process.env.NODE_ENV == "http://localhost:3000/ping";
