const express = require("express");
const router = express.Router();
const { validateNotificationCreation } = require("../validate");
const protect = require('../middleware/auth');
const {
  getAllNotifications,
  getAllUnreadNotification,
  createNotification,
  updateNotificationStatus,
} = require("../controllers/notification");

router.route("/").get(protect, getAllNotifications);

router.route("/unread").get(protect, getAllUnreadNotification);

router.route("/").post(validateNotificationCreation, createNotification);

router.route("/").patch(updateNotificationStatus);

module.exports = router;
