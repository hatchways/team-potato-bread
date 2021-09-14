const Conversation = require('../models/Conversation');
const users = [];
const addUser = async ({ id, userProfileId, conversationId }) => {
  const conversation = await Conversation.findById({ _id: conversationId });

  if (userProfileId !== conversation.senderProfileId || userProfileId !== conversation.recieverProfileId)
    return { error: 'Wrong userProfileId' };

  const user = { id, userProfileId, conversationId };

  users.push(user);

  return user;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index >-1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (conversationId) => users.filter((user) => user.conversationId === conversationId);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
