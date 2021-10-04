const Meetup = require("../models/Meetup");
const Image = require("../models/Image");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route GET /meetup
// @desc Search for meetups by city
// @access Public
exports.searchMeetups = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let meetups;
  if (searchString) {
    meetups = await Meetup.find({
      $or: [
        { location: { $regex: searchString, $options: "i" } },
        { locationAddress: { $regex: searchString, $options: "i" } },
        { locationCityStateZip: { $regex: searchString, $options: "i" } },
      ],
    })
      .populate("organizer")
      .exec();
  }

  if (!meetups) {
    res.status(404);
    throw new Error("No pet meetups found in search");
  }

  res.status(200).json(meetups);
});

// @route GET /meetup/all
// @desc Get a list of all meetups
exports.meetupList = asyncHandler(async (req, res, next) => {
  const listOfMeetups = await Meetup.find().populate("organizer").exec();
  if (!listOfMeetups) {
    res.status(404);
    throw new Error("No pet meetups found");
  }
  res.status(200).json(listOfMeetups);
});

// @route GET /meetup/find
// @desc Find one meetup by ID
exports.getOneMeetup = asyncHandler(async (req, res, next) => {
  const id = req.query._id;

  const meetup = await Meetup.findById(id).populate("attendees").exec();
  const organizer = await User.findOne({ _id: meetup.organizer._id });
  if (!meetup) {
    res.status(404);
    throw new Error("No matching pet meetup found.");
  }
  res.status(200).json({ meetup, organizer });
});

// @route GET /meetup/organizer
// @desc Find meetups by organizer
exports.getMeetupsByOrganizer = asyncHandler(async (req, res, next) => {
  const userId = req.query._id;

  const meetup = await Meetup.find({ organizer: userId })
    .populate("attendees")
    .exec();
  if (!meetup) {
    res.status(404);
    throw new Error("No matching pet meetup found.");
  }
  res.status(200).json(meetup);
});

// @route POST /meetup/create
// @desc Create a new meetup
exports.meetupCreate = asyncHandler(async (req, res, next) => {
  const {
    location,
    locationAddress,
    locationCityStateZip,
    organizer,
    name,
    date,
    timeStart,
    timeEnd,
    description,
  } = req.body;

  const meetup = await Meetup.create({
    location,
    locationAddress,
    locationCityStateZip,
    organizer,
    name,
    date,
    timeStart,
    timeEnd,
    description,
  });
  if (meetup) {
    res.status(201).json({
      success: { meetup },
    });
  } else {
    res.status(422);
    throw new Error("Could not create pet meetup.");
  }
});

// @route POST /meetup/update
// @desc Update a meetup event
exports.meetupUpdate = asyncHandler(async (req, res, next) => {
  const { newData, meetupId, organizerId } = req.body;

  let update = await Meetup.findOneAndUpdate(
    {
      $and: [{ _id: meetupId }, { organizer: organizerId }],
    },
    { newData },
    { new: true }
  );
  if (!update) {
    res.status(422);
    throw new Error("Something went wrong.");
  }
  res.status(200).json({ success: "pet meetup successfully updated" });
});

// @route POST /meetup/register
// @desc Update a meetup event
exports.meetupRegister = asyncHandler(async (req, res, next) => {
  const { userId, meetupId } = req.body;

  let meetup = await Meetup.findOne({ _id: meetupId });

  let attendeesList = meetup.attendees;
  if (!attendeesList.includes(userId)) {
    attendeesList.push(userId);
    let update = await Meetup.findOneAndUpdate(
      { _id: meetupId },
      { attendees: attendeesList },
      { new: true }
    )
      .populate("attendees")
      .exec();
    if (!update) {
      res.status(400);
      throw new Error("Something went wrong.");
    }
    res.status(200).json(update);
  } else {
    res.status(400);
    throw new Error("You are already registered for this pet meetup.");
  }
});
