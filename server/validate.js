const { check, validationResult } = require("express-validator");
var mongodb = require("mongodb");

const objectIdValidator = (errorMessage, value) => {
  if (!mongodb.ObjectID.isValid(value)) {
    throw new Error(errorMessage)
  }
  return true;
}

exports.validateRegister = [
  check("username", "Please enter a username").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail().normalizeEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({
    min: 6
  }),
  (req, res, next) => {
    const errors = validationResult(req);

    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateLogin = [
  check("email", "Please enter a valid email address").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateProfileCreation = [
  check("firstName", "Please enter a First Name").not().isEmpty(),
  check("lastName", "Please enter a Last Name").not().isEmpty(),
  check("email", "Please enter a valid email address").isEmail().normalizeEmail(),
  check("location", "Please enter your location").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateAddReview = [
  check("rating", "Rating is required and must be between 1-5").notEmpty().isInt({ min: 1, max: 5 }),
  check("text", "Review cannot be longer than 200 characters.").isLength({ max: 200 }),
  // make sure it's a valid mongoDB id
  check("userId").custom((value, { req }) => objectIdValidator("Please provide a valid id for userId", value)),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];

exports.validateGetUserReviews = [
  // make sure it's a valid mongoDB id
  check("uid").custom((value, { req }) => objectIdValidator("uid is required and must be a valid id", value)),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  }
];