const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
    unique: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Image = mongoose.model('image', imageSchema);
