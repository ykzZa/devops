"use strict";

const express = require("express");

const PORT = 80;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello DevOps from Nikita Hryshaienko");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

module.exports = app;
