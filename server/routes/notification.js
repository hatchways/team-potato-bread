const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getAllNotifications,
  getAllUnreadNotification,
  createNotification,
  updateNotificationStatus,
} = require("../controllers/notification");

router.route("/").get(getAllNotifications);

router.route("/unread").get(getAllUnreadNotification);

router.route("/").post(createNotification);

router.route("/").patch(updateNotificationStatus);

module.exports = router;
