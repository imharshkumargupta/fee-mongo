const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:passwordpassword@cluster0.bm6he.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to the mongo server");
});

mongoose.connection.on("error", (error) => {
  console.log("Error while connecting to the mongo server", error);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
