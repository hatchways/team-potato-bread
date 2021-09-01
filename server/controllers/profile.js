const Profile = require('../models/Profile');
const asyncHandler = require("express-async-handler");

// @route GET /profile/all
// @desc Find a list of profiles by a filter
exports.profileList = asyncHandler(async (req, res, next) => {
    const filter = {};
    const listOfProfiles = await Profile.find(filter);
    if(!listOfProfiles) {
        res.status(404);
    }
    res.status(200).json({listOfProfiles});
});

// @route GET /profile/find
// @desc Fine one profile
exports.profileSearch = asyncHandler(async (req, res, next) => {
    const { _id } = req.body;
    const profile = await Profile.findById(_id);
    if(!profile) {
        res.status(404);
        throw new Error('No matching profile found.');
    }
    res.status(200).json(profile);
});

// @route POST /profile/create
// @desc Create a profile
exports.profileCreate = asyncHandler(async (req, res, next) => {
    const { 
        firstName,
        lastName,
        gender,
        birthDate,
        email,
        phone,
        location,
        description,
        availability
    } = req.body;

    const profile = await Profile.create({
        firstName,
        lastName,
        gender,
        birthDate,
        email,
        phone,
        location,
        description,
        availability
    });
    if(profile) {
        res.status(201).json(profile);
    } else {
        res.status(400);
        throw new Error('Something went wrong.');
    }
});

// @route POST /profile/update
// @desc Update a profile
exports.profileUpdate = asyncHandler(async (req, res, next) => {
    const { newData, _id } = req.body;

    let update = await Profile.findOneAndUpdate(_id, newData);
    if(!update){
        res.status(400);
        throw new Error('Something went wrong.');
    }
    res.status(200).json({success: "profile updated"});
});
