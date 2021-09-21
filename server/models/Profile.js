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
  subtitle: {
    type: String,
  },
  gender: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  phone: {
    type: String,
  },
  location: {
    type: String,
    required: true
  },
  ratePerHour: {
    type: Number,
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  avgRating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  paymentCard:String,
  availability: [availabilitySchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
});

module.exports = Profile = mongoose.model("profile", profileSchema);
