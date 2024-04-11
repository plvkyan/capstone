import express from "express";
import Service from "../models/model-service.js";
import { createService } from "../controllers/controller-service.js";

const router = express.Router();

// CREATE
router.post("/", createService);

// UPDATE
router.put("/:id", async (req, res) => {
    
    try {

        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true });

        res.status(200).json(updatedService);
        
    } catch (err) {

        res.status(500).json(err);

    }

});

// DELETE
router.delete("/:id", async (req, res) => {
    
    try {

        await Service.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json("Service has been deleted.");
        
    } catch (err) {

        res.status(500).json(err);

    }

});

// GET
router.get("/:id", async (req, res) => {
    
    try {

        const service = await Service.findById(
            req.params.id
        );

        res.status(200).json(service);
        
    } catch (err) {

        res.status(500).json(err);

    }

});

// GET ALL
router.get("/", async (req, res, next) => {
    
    try {

        const services = await Service.find();
        res.status(200).json(services);
        
    } catch (err) {

        next(err);

    }

});
 

export default router;