const Conversation = require('../models/Conversation');
const users = [];
const addUser = async ({ id, userId ,conversationId}) => {

  const conversation = await Conversation.findById( conversationId );

  if (
    conversation.recieverId.equals(userId) ||
    conversation.senderId.equals(userId)
  ) {
    const user = { id, userId, conversationId };

    users.push(user);

    return { user };
  }

  return { error: 'Wrong userId' };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index > -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (conversationId) =>
  users.filter((user) => user.conversationId === conversationId);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };const Conversation = require('../models/Conversation');
const users = [];
const addUser = async ({ id, userId, conversationId }) => {
  const conversation = await Conversation.findById({ _id: conversationId });

  if (
    conversation.recieverId.equals(userId) ||
    conversation.senderId.equals(userId)
  ) {
    const user = { id, userId, conversationId };

    users.push(user);

    return { user };
  }
  return { error: 'Wrong userProfileId' };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  
  if (index > -1) return users.splice(index, 1)[0];

};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (conversationId) =>
  users.filter((user) => user.conversationId === conversationId);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };