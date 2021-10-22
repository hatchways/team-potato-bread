const Image = require('../models/Image');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const cloudinary = require('../cloudinary');

// @route POST /image/avatar
// @desc Upload avatar image
// @access Public
exports.uploadAvatar = asyncHandler(async (req, res, next) => {
  const result = await cloudinary.uploader.upload(req.file.path);

  const newImage = await Image.create({
    imageUrl: result.secure_url,
    cloudinaryId: result.public_id,
  });

  const updateUser = await User.findOneAndUpdate(
    { email: req.body.email },
    { avatar: newImage.imageUrl },
    { new: true }
  );
  res.json(newImage);
});

// @route POST /image/upload
// @desc Upload images
// @access Public
exports.uploadImages = asyncHandler(async (req, res, next) => {
  let images = req.files;

  images.forEach(async (image) => {
    const result = await cloudinary.uploader.upload(image.path);

    const newImage = await Image.create({
      imageUrl: result.secure_url,
      cloudinaryId: result.public_id,
    });
  });
  res.send('Successfully uploaded images');
});
