const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        default: 'Sai Swami Computers'
    },
    ownerName: {
        type: String,
        required: true,
        default: 'Santosh Gursal'
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    logo: {
        type: String // Cloudinary URL
    },
    banner: {
        type: String // Cloudinary URL
    },
    businessHours: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
