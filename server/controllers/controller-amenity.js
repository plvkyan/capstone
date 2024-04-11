import Amenity from "../models/model-amenity.js";
import Service from "../models/model-service.js";

import { createError } from "../utils/error.js";

export const createAmenity = async (req, res, next) => {

    const serviceId = req.params.serviceid;
    const newAmenity = new Amenity(req.body);

    try {

        const savedAmenity = await newAmenity.save();

        try {

            await Service.findByIdAndUpdate(serviceId, {
                $push : { amenities: savedAmenity._id }
            });

        } catch (err) {

            next(err);

        }

        res.status(200).json(savedAmenity);

    } catch (err) {

        next(err);

    }

}



// UPDATING SERVICE
export const updateAmenity = async (req, res, next) => {

    try {

        const updatedAmenity = await Amenity.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });

        res.status(200).json(updatedAmenity);

    } catch (err) {

        next(err);

    }

}



// DELETING SERVICE
export const deleteAmenity = async (req, res, next) => {

    const serviceId = req.params.serviceid;

    try {

        await Amenity.findByIdAndDelete(
            req.params.id
        );

        try {

            await Service.findByIdAndUpdate(serviceId, {
                $pull : { amenities: req.params.id }
            });

        } catch (err) {

            next(err);

        }

        res.status(200).json("Amenity has been deleted.");
        
    } catch (err) {

        next(err);

    }

}



// GET SERVICE
export const getAmenity = async (req, res, next) => {

    try {

        const amenity = await Amenity.findById(
            req.params.id
        );
 
        res.status(200).json(amenity);
        
    } catch (err) {

        next(err);

    }

}



// GET ALL SERVICES
export const getAmenities = async (req, res, next) => {

    try {

        const amenities = await Amenity.find();
        res.status(200).json(amenities);
        
    } catch (err) {

        next(err);

    }

}