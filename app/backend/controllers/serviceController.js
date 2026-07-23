const Service = require('../models/Service');

const getServices = async (req, res, next) => {
    try {
        const services = await Service.find({});
        res.status(200).json({ success: true, message: 'Services fetched successfully', data: services });
    } catch (error) {
        next(error);
    }
};

const addService = async (req, res, next) => {
    try {
        const serviceData = { ...req.body };
        if (req.file) {
            serviceData.image = req.file.path;
        }
        
        const service = await Service.create(serviceData);
        res.status(201).json({ success: true, message: 'Service Added Successfully', data: service });
    } catch (error) {
        next(error);
    }
};

const updateService = async (req, res, next) => {
    try {
        let service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        const updateData = { ...req.body };
        if (req.file) {
            updateData.image = req.file.path;
        }

        service = await Service.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
        res.status(200).json({ success: true, message: 'Service updated successfully', data: service });
    } catch (error) {
        next(error);
    }
};

const deleteService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }
        await service.deleteOne();
        res.status(200).json({ success: true, message: 'Service deleted successfully', data: {} });
    } catch (error) {
        next(error);
    }
};

module.exports = { getServices, addService, updateService, deleteService };
