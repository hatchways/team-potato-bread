const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers, getUserInfo } = require("../controllers/user");

router.route("/").get(protect, searchUsers);

router.route("/find").get(protect, getUserInfo);

module.exports = router;
