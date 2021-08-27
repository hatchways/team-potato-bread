const express = require("express");
const router = express.Router();
const {
  getRequests,
  createRequest,
  updateRequest,
} = require("../controllers/request");

router.route("/").get(getRequests);

router.route("/").post(createRequest);

router.route("/").put(updateRequest);

module.exports = router;
