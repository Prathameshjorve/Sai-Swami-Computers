const express = require('express');
const { getCompany, updateCompany } = require('../controllers/companyController');
const { protect } = require('../middleware/authMiddleware');
const { uploadImage } = require('../middleware/uploadMiddleware');

const router = express.Router();

router.route('/')
    .get(getCompany)
    .put(protect, uploadImage, updateCompany);

module.exports = router;
