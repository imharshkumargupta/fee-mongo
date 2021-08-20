const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");
const particularRoutes = require("./routes/particular");
const transactionRoutes = require("./routes/transaction");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(adminRoutes);
app.use(studentRoutes);
app.use(particularRoutes);
app.use(transactionRoutes);

//error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
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
