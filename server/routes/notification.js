const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getAllNotifications,
  getAllunreadNotifications,
  createNotification,
  updateNotificationStatus,
} = require("../controllers/notification");

router.route("/").get(getAllNotifications);

router.route("/unread").get(getAllunreadNotifications);

router.route("/").post(createNotification);

router.route("/").patch(updateNotificationStatus);

module.exports = router;
