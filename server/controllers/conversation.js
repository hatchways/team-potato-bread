const asyncHandler = require('express-async-handler');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const { addUser, removeUser, getUserByUserId } = require('../utils/users');
// @route POST /conversation/create
// @desc create a new conversation
// @access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const { senderId, recieverId } = req.body;
  if (!senderId || !recieverId) {
    res.status(400);
    throw new Error('Missing sender profileId or reciever profileId !');
  }
  const conversation = await Conversation.findOne({
    senderId,
    recieverId,
  })
    .populate('senderId', 'username avatar')
    .populate('recieverId', 'username avatar');
  if (conversation) {
    const message = await Message.findOne({
      conversationId: conversation._id,
    });
    return res.status(200).json({
      success: {
        conversation: conversation,
        message: message,
      },
    });
  } else {
    const conversation = await Conversation.create({
      senderId,
      recieverId,
    });
    conversation
      .populate('senderId', 'username avatar')
      .populate('recieverId', 'username avatar');
    const message = await Message.create({
      conversationId: conversation._id,
    });
    return res.status(200).json({
      success: {
        conversation: conversation,
        message: message,
      },
    });
  }
});
// @route POST /conversation/sendMessage
// @desc send a messsage
// @access Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { conversationId, senderId, text } = req.body;
  const io = req.app.get('socketio');
  if (!conversationId || !senderId || !text) {
    res.status(400);
    throw new Error('Incomplete required data');
  }

  const message = await Message.findOneAndUpdate(
    { conversationId },
    { $push: { content: { senderId, text } } },
    { new: true }
  );
  const conversation = await Conversation.findByIdAndUpdate(
    { _id: conversationId },{$set: { lastMessage: text },},
    { new: true }
  )
    .populate('senderId', '_id username avatar')
    .populate('recieverId', '_id username avatar');
  if (conversation) {
    io.emit('updateCoversation', conversation,senderId);
  }
  if (message) {
    io.to(conversationId).emit(
      'message',
      message.content[message.content.length - 1],
      conversation
    );
  }

  res.status(200).json({
    success: {
      message,
      conversation,
    },
  });
});

// @route GET /conversation/:userId/all
// @desc list of conversations for logged in user
// @access Private
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const conversations = await Conversation.find({
    $or: [{ senderId: id }, { recieverId: id }],
  })
    .populate('senderId', 'username avatar')
    .populate('recieverId', 'username avatar');

  res.status(200).json({
    success: {
      conversations,
    },
  });
});

// @route GET /conversation/:id/messages
// @params id =>  conversationId
// @desc all messages for a specific conversation
// @access Private
exports.getMessages = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findOne({ conversationId: id });
  if (!message) {
    res.status(400);
    throw new Error('Can not find the message ');
  }
  res.status(200).json({
    success: {
      messages: message.content,
    },
  });
});
