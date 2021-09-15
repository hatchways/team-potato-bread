const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema({
      senderProfileId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile',
        required: true,
      },
      text:{type:String, required: true},
      sentTime:{type:Date,default:Date.now()}
});
const messageSchema = new mongoose.Schema({
  conversationId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'conversation',
    required: true,
  },
  content:[contentSchema] 
});

module.exports = Message = mongoose.model(
  'message',
  messageSchema
);