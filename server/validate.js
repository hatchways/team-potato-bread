const { check, validationResult } = require("express-validator");

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