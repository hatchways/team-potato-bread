const express = require('express')
const router = express.Router()


//Profile Controller

const profile_controller = require('../controllers/profile')

//Profile Routes
router.route("/all").get(profile_controller.profileList)
//POST request for creating profile
router.route('/create').post(profile_controller.profileCreate)

//POST request to update profile
router.route('/update').post(profile_controller.profileUpdate)

//GET request for one profile
router.route('/find').get(profile_controller.profileSearch)

//GET request for list of profiles


module.exports = router;