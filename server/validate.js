const { check, validationResult } = require("express-validator");

exports.validateRegister = [
  check("username", "Please enter a username").not().isEmpty(),
  check("email", "Please enter a valid email address")
    .isEmail()
    .normalizeEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateProfileCreation = [
  check("firstName", "Please enter a First Name").not().isEmpty(),
  check("lastName", "Please enter a Last Name").not().isEmpty(),
  check("email", "Please enter a valid email address")
    .isEmail()
    .normalizeEmail(),
  check("location", "Please enter your location").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateMeetupCreation = [
  check("location", "Please enter a location Name").not().isEmpty(),
  check(
    "locationAddress",
    "Please enter a valid street address for your location"
  )
    .not()
    .isEmpty(),
  check(
    "locationCityStateZip",
    "Please enter a valid city/state/zip for your location"
  )
    .not()
    .isEmpty(),
  check("name", "Please name your event").not().isEmpty(),
  check("date", "Please enter a date for your event").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateSearch = [
  check("search", "Please enter a city/state/country to search")
    .not()
    .isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateNotificationCreation = [
  check("type").not().isEmpty(),
  check("ownerId").not().isEmpty(),
  check("recipientId").not().isEmpty(),
  check("title").not().isEmpty(),
  check("description").not().isEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
