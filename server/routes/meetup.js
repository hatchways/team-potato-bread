const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateSearch, validateMeetupCreation } = require("../validate");
const {
  searchMeetups,
  meetupList,
  getOneMeetup,
  getMeetupsByOrganizer,
  meetupCreate,
  meetupUpdate,
  meetupRegister,
} = require("../controllers/meetup");

router.route("/").get(validateSearch, searchMeetups);

router.route("/all").get(meetupList);

router.route("/find").get(getOneMeetup);

router.route("/organizer").get(getMeetupsByOrganizer);

router.route("/create").post(protect, validateMeetupCreation, meetupCreate);

router.route("/update").post(protect, meetupUpdate);

router.route("/register").post(protect, meetupRegister);

module.exports = router;
