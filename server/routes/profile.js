const express = require('express');
const protect = require("../middleware/auth");
const { validateProfileCreation } = require('../validate');
const router = express.Router();
const { 
    profileList, 
    profileCreate, 
    profileUpdate, 
    profileSearch 
} = require('../controllers/profile');

router.route("/all").get(profileList);

router.route('/create').post(validateProfileCreation, profileCreate);

router.route('/update').post(protect, profileUpdate);

router.route('/find').get(profileSearch);

module.exports = router;