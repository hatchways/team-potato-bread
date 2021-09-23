const express = require('express');
const protect = require('../middleware/auth');
const router = express.Router();
const {
  getAllConversations,
  sendMessage,
  createConversation,
  getMessages,
} = require('../controllers/conversation');

router.route('/:id/messages').get(protect, getMessages);

router.route('/create').post(protect, createConversation);

router.route('/sendMessage').post(protect, sendMessage);

router.route('/all').get(protect, getAllConversations);

module.exports = router;