const Profile = require('../models/Profile')
const asyncHandler = require("express-async-handler");


exports.profileList = asyncHandler(async (req, res, next) => {
   const listOfProfiles = await Profile.find({})
   if(!listOfProfiles){
       res.status(404)
   }
    res.status(200).json({profiles:listOfProfiles})
})

exports.profileSearch = asyncHandler(async (req, res, next) => {
   const profileId = req.params.id
   const profile = await Profile.findOne({profileId})
   if(!profile){
       res.status(400)
   }
   res.status(200).json({success:{
       profile:{
           firstName:profile.firstName,
           lastName:profile.lastName,
           description:profile.description,
           availability:profile.description
       }
   }})
})

exports.profileCreate=asyncHandler(async (req, res, next) => {
    const {firstName,lastName,description,availability} = req.body
    const profile = await Profile.create({
        firstName,
        lastName,
        description,
        availability
    })
    if(profile){
        res.status(201).json({
            success:{
                profile:{
                    firstName:profile.firstName,
                    lastName:profile.lastName,
                    description:profile.description,
                    availability:profile.availability
                }
            }
        })
    }else{
        res.status(401)
        throw new Error('invalid profile data')
    }
})

exports.profileUpdate=asyncHandler(async (req, res, next) => {
    const {newData} = req.body
    const profileId = req.params.id
    let update = await Profile.findOneAndUpdate(profileId,newData)
    if(!update){
        res.status(401)
        throw new Error('could not update with given data')
    }
    res.status(200).json({success:"profile updated"})
})
