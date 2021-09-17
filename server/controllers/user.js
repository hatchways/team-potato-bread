const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" }
    });
  }

  if (!users) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});

// @route GET /users/find
// @desc Find your user info
exports.getUserInfo = asyncHandler(async (req, res, next) => {
  const id = req.query._id;

  const user = await User.findById(id).populate('images').populate('profile').exec();
  if(!user) {
      res.status(404);
      throw new Error('No matching profile found.');
  }
  res.status(200).json(user);
});
