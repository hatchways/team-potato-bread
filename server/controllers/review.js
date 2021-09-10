const Review = require('../models/Review');
const asyncHandler = require("express-async-handler");

// @route GET /review
// @desc Get all reviews of a user
// @access Public
exports.userReviews = asyncHandler(async (req, res, next) => {
  const { uid } = req.params;

  const reviews = await Review.find({ userId: uid });

  if (!reviews) {
    res.status(404);
    throw new Error('No reviews found for this user.');
  }

  res.status(200).json({ reviews: reviews });
});

// @route POST /review
// @desc Add a review
// @access Public
exports.addReview = asyncHandler(async (req, res, next) => {
  const { rating, text, userId } = req.body;
  const reviewerId = req.user.id;

  const createdReview = await Review.create({
    rating,
    text,
    userId,
    reviewerId
  });

  if (!createdReview) {
    res.status(400);
    throw new Error('Something went wrong.');
  }

  res.status(201).json({
    success: {
      review: createdReview,
    },
  });
});
