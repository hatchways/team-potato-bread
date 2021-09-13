const Notification = require("../models/Notification");
const asyncHandler = require("express-async-handler");

exports.getAllNotifications = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId;
  let notifications;
  if (userId) {
    notifications = await Notification.find({
      recipient: userId,
    })
      .populate({ path: "owner" })
      .populate({ path: "recipient" });
  }

  if (!notifications) {
    res.status(400);
    throw new Error("No notification found.");
  }

  res.status(200).json({ notifications: notifications });
});

exports.getAllunreadNotifications = asyncHandler(async (req, res, next) => {
  const userId = req.body.userId;
  let notifications;
  if (userId) {
    notifications = await Notification.find({
      recipient: userId,
      read: false,
    })
      .populate({ path: "owner" })
      .populate({ path: "recipient" });
  }

  if (!notifications) {
    res.status(400);
    throw new Error("No notification found.");
  }

  res.status(200).json({ notifications: notifications });
});

exports.createNotification = asyncHandler(async (req, res, next) => {
  const { type, ownerId, recipientId, title, description } = req.body;

  if (!type || !ownerId || !recipientId || !title || !description) {
    res.status(400);
    throw new Error("Incomplete required data");
  }

  let anchor;
  if (type === "message") {
    anchor = "message";
  } else {
    anchor = "notification center";
  }

  const notification = await Notification.create({
    type: type,
    anchor: anchor,
    owner: ownerId,
    recipient: recipientId,
    title: title,
    description: description,
  });

  if (notification) {
    res.status(200).json({ notification: notification });
  } else {
    res.status(400);
    throw new Error("Cannot create new notification");
  }
});

exports.updateNotificationStatus = asyncHandler(async (req, res, next) => {
  const { userId, type } = req.body;
  let notification;
  if (userId && type) {
    notification = await Notification.updateMany(
      { recipient: userId, type: type, read: false },
      { $set: { read: true } }
    );
  }

  if (!notification) {
    res.status(400);
    throw new Error("Cannot update read status.");
  }
  res.status(200).json({ notification: notification });
});
