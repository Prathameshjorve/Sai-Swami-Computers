const express = require('express');
const { getServices, addService, updateService, deleteService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');
const { uploadImage } = require('../middleware/uploadMiddleware');

const router = express.Router();

router.route('/')
    .get(getServices)
    .post(protect, uploadImage, addService);

router.route('/:id')
    .put(protect, uploadImage, updateService)
    .delete(protect, deleteService);

module.exports = router;
