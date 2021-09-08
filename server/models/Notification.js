const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  type: {
    type: [String],
    enum: {
      values: ["message", "booking"],
      message: "{VALUE} is not supported",
    },
  },
  anchor: {
    type: [String],
    enum: {
      values: ["message", "notification center"],
      message: "{VALUE} is not supported",
    },
  },
  source: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Notification = mongoose.model(
  "notification",
  notificationSchema
);

