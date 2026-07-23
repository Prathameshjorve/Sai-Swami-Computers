require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const Admin = require('./models/Admin');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB().then(async () => {
    // Check if an admin exists, if not, create a default one
    try {
        const adminCount = await Admin.countDocuments();
        if (adminCount === 0) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin123', salt);
            await Admin.create({
                username: 'admin',
                password: hashedPassword,
                email: 'admin@saiswamicomputers.com'
            });
            console.log('Default Admin created: admin / admin123');
        }
    } catch (error) {
        console.error('Error creating default admin:', error.message);
    }

    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
});
