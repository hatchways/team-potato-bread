const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { getRequests, createRequest, updateRequest,payRequest } = require('../controllers/request');

router.route('/').get(protect, getRequests);

router.route('/').post(protect, createRequest);

router.route('/').patch(protect, updateRequest);

router.route('/:requestId/pay').post(protect, payRequest);

module.exports = router;
