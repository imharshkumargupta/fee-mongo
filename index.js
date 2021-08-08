const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to the mongo server");
});

mongoose.connection.on("error", (error) => {
  console.log("Error while connecting to the mongo server", error);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
