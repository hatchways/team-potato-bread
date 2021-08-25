const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')
const { uploadAvatar, uploadImages } = require("../controllers/image");

router.route("/avatar").post(upload.single('avatar'), uploadAvatar);

router.route("/upload").post(upload.array('images', 5), uploadImages);

module.exports = router;
