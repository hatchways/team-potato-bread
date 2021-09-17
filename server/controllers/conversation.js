const asyncHandler = require('express-async-handler');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

// @route POST /conversation/create
// @desc create a new conversation
// @access Private
exports.createConversation = asyncHandler(async (req, res, next) => {
  const senderProfileId = req.body.senderProfileId;
  const recieverProfileId = req.body.recieverProfileId;
  if (!senderProfileId || !recieverProfileId) {
    res.status(400);
    throw new Error('Missing sender profileId or reciever profileId !');
  }
  const existingConversation = await Conversation.findOne({
    senderProfileId,
    recieverProfileId,
  });
  if (existingConversation) {
    res.status(400);
    throw new Error('The conversation exists');
  }

  const conversation = await Conversation.create({
    senderProfileId,
    recieverProfileId,
  });
  if (!conversation) {
    res.status(400);
    throw new Error('The conversation creation failed');
  }
  //create the new Message with conversationId to store all text messages
  const message = await Message.create({ conversationId: conversation._id });
  if (!message) {
    res.status(400);
    throw new Error('The message creation failed');
  }
  res.status(200).json({
    success: {
      conversation,
      message,
    },
  });
});
// @route POST /conversation/sendMessage
// @desc send a messsage
// @access Private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  const { conversationId, senderProfileId, text } = req.body;

  if (!conversationId || !senderProfileId || !text) {
    res.status(400);
    throw new Error('Incomplete required data');
  }

  const message = await Message.findOneAndUpdate(
    { conversationId },
    { $push: { content: { senderProfileId, text } } },
    { new: true }
  );
  if (!message) {
    res.status(400);
    throw new Error('The message update failed!');
  }
  res.status(200).json({
    success: {
      message,
    },
  });
});

// @route GET /conversation/:userProfileId/all
// @desc list of conversations for logged in user
// @access Private
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  const { userProfileId } = req.params;

  const conversations = await Conversation.find({
    $or: [
      { senderProfileId: userProfileId },
      { recieverProfileId: userProfileId },
    ],
  })
    .populate({ path: 'senderProfileId' })
    .populate({ path: 'recieverProfileId' });
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
  const message = await Message.findOne({ conversationId: id })
    .populate('content.senderProfileId', 'firstName')
    .exec();
  if (!message) {
    res.status(400);
    throw new Error('Invalid message Id !');
  }
  res.status(200).json({
    success: {
      message,
    },
  });
});