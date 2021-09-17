const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateSearch } = require('../validate');
const { searchUsers, getUserInfo } = require("../controllers/user");

router.route("/").get(protect, validateSearch, searchUsers);

router.route("/find").get(protect, getUserInfo);

module.exports = router;
