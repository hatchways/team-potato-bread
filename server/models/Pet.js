const mongoose = require('mongoose');

const petSchema = new mongoose.Schema(
  {
    name: String,
    breed: String,
    age: Number,
    weight: Number,
    status: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'status',
      },
    ],
    petPhoto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'image',
    },
    description: String,
    sex: String,
    spayedOrNeutered: Boolean,
    feedingSchedule: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
    },
    photoGallery: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'image',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = Pet = mongoose.model('pet', petSchema);