const express = require("express");
const router = express.Router();
const { validateNotificationCreation } = require("../validate");
const {
  getAllNotifications,
  getAllUnreadNotification,
  createNotification,
  updateNotificationStatus,
} = require("../controllers/notification");

router.route("/").get(getAllNotifications);

router.route("/unread").get(getAllUnreadNotification);

router.route("/").post(validateNotificationCreation, createNotification);

router.route("/").patch(updateNotificationStatus);

module.exports = router;
