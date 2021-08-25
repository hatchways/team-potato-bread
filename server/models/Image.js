const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
    unique: true
  },
  imageType: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    required: true,
    unique: true
  },
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  upload_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model("image", imageSchema);
