const Image = require('../models/Image');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../cloudinary');

// @route POST /image/avatar
// @desc Upload avatar image
// @access Public
exports.uploadAvatar = asyncHandler(async (req, res, next) => {
  // upload image to cloudinary
  const result = await cloudinary.uploader.upload(req.file.path);
  // create new avatar image
  const newImage = await Image.create({
    imageUrl: result.secure_url,
    cloudinaryId: result.public_id,
  });
  // update avatar for current user
  const updateUser = await User.findOneAndUpdate(
    { email: req.body.email },
    { avatar: newImage.imageUrl },
    { new: true },
  );
  res.send('Successfully updated avatar');
});

// @route POST /image/upload
// @desc Upload images
// @access Public
exports.uploadImages = asyncHandler(async (req, res, next) => {
  let images = req.files;
  // loop through array and upload each image
  images.forEach(async (image) => {
    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(image.path);
    // create new image
    const newImage = await Image.create({
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id,
    });
  });
  res.send('Successfully uploaded images');
});
