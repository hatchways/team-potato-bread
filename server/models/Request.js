const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  sitterId: {
    type: Number,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  declined: {
    type: Boolean,
    default: false,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  timeZone: {
    type: String,
    require: true
  }
});

module.exports = Request = mongoose.model("request", requestSchema);
