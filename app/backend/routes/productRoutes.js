const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const { uploadImage } = require('../middleware/uploadMiddleware');

const router = express.Router();

router.route('/')
    .get(getProducts)
    .post(protect, uploadImage, addProduct);

router.route('/:id')
    .get(getProductById)
    .put(protect, uploadImage, updateProduct)
    .delete(protect, deleteProduct);

module.exports = router;
