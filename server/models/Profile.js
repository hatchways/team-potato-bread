const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  timeStart: {
    type: String,
    required: true
  },
  timeEnd: {
    type: String,
    required: true
  }
});

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
  },
  availability: [availabilitySchema]
});

module.exports = Profile = mongoose.model("profile", profileSchema);
