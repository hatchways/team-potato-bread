const Image = require("../models/Image");
const asyncHandler = require("express-async-handler");
const cloudinary = require("../cloudinary");

// @route POST /image/avatar
// @desc Upload avatar image
// @access Public
exports.uploadAvatar = asyncHandler(async (req, res, next) => {
    try {
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
    } catch(err) {
        res.status(500)
        throw new Error('Something went wrong')
        }
});

// @route POST /image/upload
// @desc Upload images
// @access Public
exports.uploadImages = asyncHandler(async (req, res, next) => {
    let images = req.files;
    try {
        await images.forEach(image => {
            // upload image to cloudinary
            const result = cloudinary.uploader.upload(req.file.path);
            // create new image
            const newImage = Image.create({
                imageUrl: result.secure_url,
                imageType: "gallery",
                cloudinaryId: result.public_id
            });
            res.status(201);
            res.json(newImage.imageUrl);
        })
    } catch(err) {
        res.status(500)
        throw new Error('Something went wrong')
        }
});
