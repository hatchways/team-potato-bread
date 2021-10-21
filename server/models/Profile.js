const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true,
  },
});

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  sitter: {
    type: Boolean,
    required: true,
    default: false,
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
  },
  ratePerHour: {
    type: Number,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  avgRating: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  paymentCard: {
    type: String,
  },
  availability: [availabilitySchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
