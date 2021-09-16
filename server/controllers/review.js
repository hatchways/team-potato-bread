const Review = require('../models/Review');
const asyncHandler = require("express-async-handler");

// @route GET /review
// @desc Get all reviews of a user
// @access Private
exports.userReviews = asyncHandler(async (req, res, next) => {
  const { uid } = req.params;
  const reviews = await Review.find({ userId: uid }).populate('reviewer').exec();

  if (!reviews) {
    res.status(200).json({ message: 'No reviews found for this user.' });
  }

  res.status(200).json({ reviews: reviews });
});

// @route POST /review
// @desc Add a review
// @access Private
exports.addReview = asyncHandler(async (req, res, next) => {
  const { rating, text, userId } = req.body;
  const reviewer = req.user.id;

  const createdReview = await Review.create({
    rating,
    text,
    userId,
    reviewer
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
