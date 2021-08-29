const Image = require("../models/Image");
const asyncHandler = require("express-async-handler");
const cloudinary = require("../cloudinary");

// @route POST /image/avatar
// @desc Upload avatar image
// @access Public
exports.uploadAvatar = asyncHandler(async (req, res, next) => {
    // upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // create new avatar image
    const newAvatar = await Image.create({
        imageUrl: result.secure_url,
        imageType: "avatar",
        cloudinaryId: result.public_id,
    });
    res.status(201);
    res.json(newAvatar.imageUrl);
});

// @route POST /image/upload
// @desc Upload images
// @access Public
exports.uploadImages = asyncHandler(async (req, res, next) => {
    let images = req.files;
    // loop through array and upload each image
    images.forEach(async image => {
        // upload image to cloudinary
        const result = await cloudinary.uploader.upload(image.path);
        // create new image
        const newImage = await Image.create({
            imageUrl: result.secure_url,
            imageType: "gallery",
            cloudinaryId: result.public_id
        });
    });
    res.send('Successfully uploaded images');
});
