const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const protect = require("../middleware/auth");
const { validateSearch, validateMeetupCreation } = require("../validate");
const {
  searchMeetups,
  meetupList,
  getOneMeetup,
  getMeetupsByUserId,
  meetupCreate,
  meetupUpdate,
  uploadImage,
  meetupRegister,
} = require("../controllers/meetup");

router.route("/").get(validateSearch, searchMeetups);

router.route("/all").get(meetupList);

router.route("/find").get(getOneMeetup);

router.route("/mymeetups").get(getMeetupsByUserId);

router.route("/create").post(protect, validateMeetupCreation, meetupCreate);

router.route("/update").put(protect, meetupUpdate);

router.route("/image").post(upload.single("image"), protect, uploadImage);

router.route("/register").put(protect, meetupRegister);

module.exports = router;
