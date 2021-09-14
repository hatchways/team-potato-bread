const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    senderProfileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
      required: true,
    },
    recieverProfileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = Conversation = mongoose.model('conversation', conversationSchema);
