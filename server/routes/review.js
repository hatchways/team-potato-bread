const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateAddReview, validateGetUserReviews } = require("../validate");
const {
    userReviews,
    addReview,
} = require('../controllers/review');

router.route("/:uid").get(protect, validateGetUserReviews, userReviews);
router.route("/").post(protect, validateAddReview, addReview);

module.exports = router;
