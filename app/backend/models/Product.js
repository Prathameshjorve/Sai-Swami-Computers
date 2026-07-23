const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a product name']
    },
    category: {
        type: String,
        required: [true, 'Please add a category']
    },
    brand: {
        type: String,
        required: [true, 'Please add a brand']
    },
    processor: {
        type: String
    },
    ram: {
        type: String
    },
    storage: {
        type: String
    },
    condition: {
        type: String,
        enum: ['New', 'Refurbished', 'Used'],
        default: 'New'
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    image: {
        type: String, // Cloudinary URL
        default: 'no-photo.jpg'
    },
    availability: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
