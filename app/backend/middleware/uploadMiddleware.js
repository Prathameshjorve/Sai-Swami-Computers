const { upload } = require('../config/cloudinary');

// Middleware for handling single image upload
const uploadImage = upload.single('image');

module.exports = { uploadImage };
