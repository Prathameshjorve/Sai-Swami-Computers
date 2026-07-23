const Company = require('../models/Company');

const getCompany = async (req, res, next) => {
    try {
        let company = await Company.findOne({});
        // Return empty object if company details not setup yet
        if (!company) {
            return res.status(200).json({ success: true, message: 'Company not found', data: {} });
        }
        res.status(200).json({ success: true, message: 'Company details fetched successfully', data: company });
    } catch (error) {
        next(error);
    }
};

const updateCompany = async (req, res, next) => {
    try {
        let company = await Company.findOne({});
        const updateData = { ...req.body };
        
        // Use single file upload logic if logo or banner is passed in req.files (need specific setup if both upload at same time, but assuming separate updates for simplicity or using req.file)
        if (req.file) {
            if (req.body.uploadType === 'banner') {
                updateData.banner = req.file.path;
            } else {
                updateData.logo = req.file.path;
            }
        }

        if (!company) {
            // Create initial company record
            company = await Company.create(updateData);
            return res.status(201).json({ success: true, message: 'Company details created successfully', data: company });
        }

        company = await Company.findByIdAndUpdate(company._id, updateData, { new: true, runValidators: true });
        res.status(200).json({ success: true, message: 'Company details updated successfully', data: company });
    } catch (error) {
        next(error);
    }
};

module.exports = { getCompany, updateCompany };
