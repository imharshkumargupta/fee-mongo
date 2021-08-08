const mongoose = require("mongoose");

const particularSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
});

mongoose.model("Particular", particularSchema);
