const express = require("express");
const router = express.Router();
const protect = require('../middleware/auth');
const {
  getRequests,
  createRequest,
  updateRequest,
} = require("../controllers/request");

router.route("/").get(protect, getRequests);

router.route("/").post(protect, createRequest);

router.route("/").put(protect, updateRequest);

module.exports = router;
