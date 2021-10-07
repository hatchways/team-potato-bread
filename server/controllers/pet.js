const Pet = require('../models/Pet');
const Status = require('../models/Status');
const Image = require('../models/Image');
const asyncHandler = require('express-async-handler');

// @route POST /pet/create
// @desc create a new pet
// @access Private
exports.createPet = asyncHandler(async (req, res, next) => {
  const {
    name,
    breed,
    age,
    weight,
    description,
    sex,
    spayedOrNeutered,
    FeedingSchedule,
    profileId,
  } = req.body;
  const newPet = await Pet.create({
    name,
    breed,
    age,
    weight,
    description,
    sex,
    spayedOrNeutered,
    FeedingSchedule,
    owner: profileId,
  });
  if (newPet) {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      const petPhoto = await Image.create({
        imageUrl: result.secure_url,
        cloudinaryId: result.public_id,
      });
      newPet.petPhoto = petPhoto._id;
      await newPet.save();
    }
    if (req.files) {
      let images = req.files;

      images.forEach(async (image) => {
        const result = await cloudinary.uploader.upload(image.path);

        const newImage = await Image.create({
          imageUrl: result.secure_url,
          cloudinaryId: result.public_id,
        });
        newPet.photoGallery.push(newImage._id);
      });
      await newPet.save();
    }
    res.status(201).json({
      success: {
        pet: newPet,
      },
    });
  }
});

// @route PUT /pet/update
// @desc update a new pet
// @access Private
exports.updatePet = asyncHandler(async (req, res, next) => {
  const {
    petId,
    name,
    breed,
    age,
    weight,
    description,
    sex,
    spayedOrNeutered,
    FeedingSchedule,
  } = req.body;
  const updatedPet = await Pet.findByIdAndUpdate(
    petId,
    {
      $set: {
        name,
        breed,
        age,
        weight,
        description,
        sex,
        spayedOrNeutered,
        FeedingSchedule,
      },
    },
    { new: true }
  );
  if (!updatedPet) {
    res.status(400);
    throw new Error('The pet update pet failed!');
  }
  res.status(200).json({
    seccuess: {
      pet: updatedPet,
    },
  });
});

// @route DELETE /PET/:id
// @desc post a new status
// @access Private
exports.deleteOnePet = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedPet = await Pet.findByIdAndDelete(id);
  if (!deletedPet) {
    res.status(400);
    throw new Error('Can not find the pet or delete failed!');
  }
  res.status(200).json({
    seccuess: {
      message: 'The pet has been deleted!',
    },
  });
});

// @route GET /PET/:profileId/ALL
// @desc find all user's pets
// @access Private
exports.findUseAllPets = asyncHandler(async (req, res, next) => {
  const { profileId } = req.params;
  const pets = await Pet.find({ owner: profileId })
    .populate('petPhoto')
    .populate('photoGallery')
    .populate('status');
  res.status(200).json({
    seccuess: {
      pets,
    },
  });
});

// @route GET /PET/:id
// @desc find one pet
// @access Private
exports.findPetById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  if (!pet) {
    res.status(400);
    throw new Error('Can not find the pet');
  }
  res.status(200).json({
    seccuess: {
      pet,
    },
  });
});
// @route POST /PET/postStatus
// @desc post a new status
// @access Private
exports.postPetStatus = asyncHandler(async (req, res, next) => {
  const { petId, description } = req.body;

  const newStatus = await Status.create({
    description,
  });

  const updatedPet = await Pet.findByIdAndUpdate(
    petId,
    { $push: { status: newStatus._d } },
    { new: true }
  );
  if (!updatedPet) {
    res.status(400);
    throw new Error('The pet update failed!');
  }
  res.status(200).json({
    success: {
      pet: updatedPet,
    },
  });
});
