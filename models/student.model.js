const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  personalInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersonalInfo",
  },
  guardianInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GuardianInfo",
  },
  contactDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ContactDetails",
  },
  educationalDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EducationalDetails",
  },
  documents: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Documents",
  },
});

module.exports = mongoose.model("Student", studentSchema);