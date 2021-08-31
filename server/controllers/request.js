const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route GET /requests
// @desc list of requests for logged in user
// @access Private
exports.getRequests = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId;

  const requests = await Request.find({
    $or: [{ userId: userId }, { sitterId: userId }],
  });

  if (!requests) {
    res.status(400);
    throw new Error("No quest found.");
  }

  const makeRequestObj = async (id, request) => {
    let user = await User.findOne({ _id: id });
    let requestObj = {
      id: request._id,
      username: user.username,
      url: "https://robohash.org/mockLoggedInUser3@gmail.com.png",
      date: request.start.toGMTString().slice(5, 16),
      time: `${request.start.getHours()}:${request.start.getMinutes()} - ${request.end.getHours()}:${request.end.getMinutes()} ${request.end
        .toLocaleTimeString()
        .slice(-2)}`,
      timeZone: request.timeZone,
      accepted: request.accepted,
      declined: request.declined,
      paid: request.paid,
      requestDate: request.requestDate,
    };
    return requestObj;
  };

  const getRequestsList = async () => {
    return Promise.all(
      requests.map((request) => {
        if (userId === request.userId) {
          return makeRequestObj(request.sitterId, request);
        } else {
          return makeRequestObj(request.userId, request);
        }
      })
    );
  };

  getRequestsList().then((data) => {
    console.log(data);
    res.status(200).json({ requests: data });
  });
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
