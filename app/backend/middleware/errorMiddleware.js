const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode);

    res.json({
        success: false,
        message: err.message,
        // Hide stack trace in production
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    });
};

module.exports = { errorHandler };
