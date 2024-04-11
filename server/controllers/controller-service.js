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