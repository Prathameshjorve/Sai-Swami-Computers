const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a service name']
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String, // Cloudinary URL
        default: 'no-photo.jpg'
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean,
        default: true // true = active, false = disabled
    }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
