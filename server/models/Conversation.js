const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')
const conversationSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    recieverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    lastMessage:String,
  },
  {
    timestamps: true,
  }
);
conversationSchema.plugin(findOrCreate);
module.exports = Conversation = mongoose.model(
  'conversation',
  conversationSchema
);