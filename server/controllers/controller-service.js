import Service from "../models/model-service.js";


// CREATE SERVICE
export const createService = async (req, res, next) => {

    const newService = new Service(req.body);

    try {

        const savedService = await newService.save();
        res.status(200).json(savedService);

    } catch (err) {

        next(err);

    }

}



// UPDATING SERVICE
export const updateService = async (req, res, next) => {

    try {

        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });

        res.status(200).json(updatedService);

    } catch (err) {

        next(err);

    }

}



// DELETING SERVICE
export const deleteService = async (req, res, next) => {

    try {

        await Service.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json("Service has been deleted.");
        
    } catch (err) {

        next(err);

    }

}



// GET SERVICE
export const getService = async (req, res, next) => {

    try {

        const service = await Service.findById(
            req.params.id
        );

        res.status(200).json(service);
        
    } catch (err) {

        next(err);

    }

}



// GET ALL SERVICES
export const getServices = async (req, res, next) => {

    try {

        const services = await Service.find();
        res.status(200).json(services);
        
    } catch (err) {

        next(err);

    }

}