const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: string,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isSuperAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
