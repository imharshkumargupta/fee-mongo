const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentEmail: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  studentImage: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  studentType: {
    type: String,
    enum: ["hostel", "transport"],
  },
  class: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
