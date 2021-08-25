const mongoose = require("mongoose");

const reuqestSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  sitter_id: {
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
  request_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Request = mongoose.model("request", reuqestSchema);
