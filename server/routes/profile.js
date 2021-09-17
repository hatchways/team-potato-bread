const express = require('express');
const protect = require("../middleware/auth");
const { validateProfileCreation, validateSearch } = require('../validate');
const router = express.Router();
const { 
    searchSitters,
    profileList, 
    profileCreate, 
    profileUpdate, 
    profileSearch 
} = require('../controllers/profile');

router.route("/").get(validateSearch, searchSitters);

router.route("/all").get(profileList);

router.route('/create').post(validateProfileCreation, profileCreate);

router.route('/update').post(protect, profileUpdate);

router.route('/find').get(profileSearch);

module.exports = router;