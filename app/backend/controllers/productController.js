const Product = require('../models/Product');

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, message: 'Products fetched successfully', data: products });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, message: 'Product fetched successfully', data: product });
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const productData = { ...req.body };
        if (req.file) {
            productData.image = req.file.path; // Cloudinary URL
        }
        
        const product = await Product.create(productData);
        res.status(201).json({ success: true, message: 'Product Added Successfully', data: product });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }

        product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
        res.status(200).json({ success: true, message: 'Product updated successfully', data: product });
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        await product.deleteOne();
        res.status(200).json({ success: true, message: 'Product deleted successfully', data: {} });
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct };
