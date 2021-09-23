const mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate')
const contentSchema = new mongoose.Schema({
      senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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
messageSchema.plugin(findOrCreate);
module.exports = Message = mongoose.model(
  'message',
  messageSchema
);