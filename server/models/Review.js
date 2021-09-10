const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
    unique: false,
  },
  text: {
    type: String,
    required: true,
    unique: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

module.exports = Review = mongoose.model("review", reviewSchema);
