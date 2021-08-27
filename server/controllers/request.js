const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

// @route GET /requests
// @desc list of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const user = req.body.userId;

  let requests;
  if (user) {
    requests = await Request.find({
      $or: [{ userId: user }, { sitterId: user }],
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
  const { userId, sitterId, start, end, timeZone } = req.body;

  if (!userId || !sitterId || !start || !end || !timeZone) {
    res.status(404);
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
    res.status(200).end("success");
  } else {
    res.status(400);
    throw new Error("Invalid request data");
  }
});

// @route UPDATE /requests
// @desc Update request with approved or decline
// @access Private
exports.updateRequest = asyncHandler(async (req, res, next) => {
  const { _id } = req.body;
  const request = await Request.findByIdAndUpdate(
    _id,
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
