const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const morgan = require('morgan');

const { errorHandler } = require('./middleware/errorMiddleware');

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

// Security Middleware
app.use(helmet());

// CORS configuration (only allow frontend URL)
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Compression
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Routes
app.use('/admin', authRoutes);
app.use('/products', productRoutes);
app.use('/services', serviceRoutes);
app.use('/company', companyRoutes);

// Health Check
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Sai Swami Computers Backend Running Successfully'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Error handling middleware
app.use(errorHandler);

module.exports = app;
