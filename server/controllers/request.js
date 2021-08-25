const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests
// @desc list of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  // const searchString = req.query.search;

  // let users;
  // if (searchString) {
  //   users = await User.find({
  //     username: { $regex: searchString, $options: "i" }
  //   });
  // }

  // if (!users) {
  //   res.status(404);
  //   throw new Error("No users found in search");
  // }

  // res.status(200).json({ users: users });
});


// @route POST /requests
// @desc Create a new request
// @access Private
exports.createRequest = asyncHandler(async (req, res, next) => {

});

// @route UPDATE /requests
// @desc Update request with approved or decline
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {

});
