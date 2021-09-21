const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: 'i' },
    });
  }

  if (!users) {
    res.status(404);
    throw new Error('No users found in search');
  }

  res.status(200).json({ users: users });
});

// @route GET /users/find
// @desc Find your user info
exports.getUserInfo = asyncHandler(async (req, res, next) => {
  const id = req.query._id;

  const user = await User.findById(id)
    .populate('images')
    .populate('profile')
    .exec();
  if (!user) {
    res.status(404);
    throw new Error('No matching profile found.');
  }
  res.status(200).json(user);
});

// @route post /users/update payment
// @desc add payment card
exports.addPayment = asyncHandler(async (req, res, next) => {
  const {id} = req.user;
  const { payment } = req.body;

  const user = await User.findByIdAndUpdate(
    { _id: id },
    { $push: { payment: payment } },
    { new: true }
  );
  if (!user) {
    res.status(404);
    throw new Error('The user does not exist.');
  }

  res.status(200).json({
    success: {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        payment: user.payment,
      },
    },
  });
});
