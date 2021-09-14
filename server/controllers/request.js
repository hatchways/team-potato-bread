const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const mongoose = require("mongoose");
// @route GET /requests
// @desc list of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  let user = await User.findOne({ _id: userId });

  const requests = await Request.find({
    $or: [{ userId: user._id }, { sitterId: user._id }],
  })
    .populate({ path: "userId" })
    .populate({ path: "sitterId" });

  if (!requests) {
    res.status(400);
    throw new Error("No request found.");
  }

  res.status(200).json({ requests: requests });
});

// @route POST /requests
// @desc Create a new request
// @access Private
exports.createRequest = asyncHandler(async (req, res, next) => {
  const { userId, sitterId, start, end, timeZone } = req.body;

  if (!userId || !sitterId || !start || !end || !timeZone) {
    res.status(400);
    throw new Error("Incomplete required data");
  }

  const request = await Request.create({
    userId,
    sitterId,
    start,
    end,
    timeZone,
  });

  if (request) {
    res.status(200).json({ request: request });
  } else {
    res.status(400);
    throw new Error("Invalid request data");
  }
});

// @route UPDATE /requests
// @desc Update request with approved or decline
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
  const { _id, action } = req.body;
  let request;
  if (action === "accepted") {
    request = await Request.findByIdAndUpdate(
      _id,
      { $set: { accepted: true, declined: false } },
      { new: true }
    );
  } else if (action === "declined") {
    request = await Request.findByIdAndUpdate(
      _id,
      { $set: { accepted: false, declined: true } },
      { new: true }
    );
  }

  if (request) {
    res.status(200).json({ request: request });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});
