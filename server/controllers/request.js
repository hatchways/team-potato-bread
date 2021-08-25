const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests
// @desc list of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const user = req.body.user_id;

  let requests;
  if (user) {
    requests = await Request.find({
      $or: [{ user_id: user }, (sitter_id: user)],
    });
  }

  if (!user) {
    res.status(404);
    throw new Error("No quest found.");
  }

  res.status(200).json({ requests: requests });
});

// @route POST /requests
// @desc Create a new request
// @access Private
exports.createRequest = asyncHandler(async (req, res, next) => {
  const { user_id, sitter_id, start, end } = req.body;

  if (!user_id || !sitter_id || !start || end) {
    res.status(404);
    throw new Error("Incomplete required data");
  }
  const request = await Request.create({
    user_id,
    sitter_id,
    start,
    end,
  });

  if (request) {
    res.status(200);
  } else {
    res.status(400);
    throw new Error("Invalid request data");
  }
});

// @route UPDATE /requests
// @desc Update request with approved or decline
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  const request = await Request.findByIdAndUpdate(
    id,
    { $set: { accepted: true } },
    { new: true }
  );

  if (request) {
    res.status(200).json({ request: request });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});
