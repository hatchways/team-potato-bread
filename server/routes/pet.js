const express = require('express');
const protect = require('../middleware/auth');
const router = express.Router();
const upload = require('../middleware/multer');
const {
  createPet,
  updatePet,
  deleteOnePet,
  postPetStatus,
  findPetById,
  findUseAllPets,
  addPetPhotoGallery,
} = require('../controllers/pet');

router.route('/:id').get(protect, findPetById).delete(protect, deleteOnePet);

router.route('/:profileId/all').get(protect, findUseAllPets);

router.route('/update').put(protect, updatePet);

router.route('/create').post(upload.single('petPhoto'), createPet);

router
  .route('/uploadGallery')
  .put(upload.array('photoGallery', 5), addPetPhotoGallery);

router.route('/postStatus').post(protect, postPetStatus);

module.exports = router;