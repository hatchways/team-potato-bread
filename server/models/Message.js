const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({  
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'conversation',
      required: true,
    },
    senderProfileId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'profile',
      required: true,
    },
    content:{type:String, required: true},
    sentTime:{type:Date,default:Date.now()}
});

module.exports =Message= mongoose.model("message", messageSchema);