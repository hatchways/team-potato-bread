const express = require('express');
const protect = require('../middleware/auth');
const router = express.Router();
const {
  createPet,
  updatePet,
  deleteOnePet,
  postPetStatus,
  findPetById,
  findUseAllPets,
} = require('../controllers/pet');

router.route('/:id').get(protect, findPetById).delete(protect, deleteOnePet);

router.route('/:profileId/all').get(protect, findUseAllPets);

router.route('/update').put(protect, updatePet);

router.route('/create').post(protect, createPet);

router.route('/postStatus').post(protect, postPetStatus);

module.exports = router;