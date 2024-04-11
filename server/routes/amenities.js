import express from "express";

import { verifyAdmin } from "../utils/verifyToken.js";

import {
    createAmenity,
    deleteAmenity,
    getAmenity,
    getAmenities,
    updateAmenity
} from "../controllers/controller-amenity.js"


const router = express.Router();



// CREATE AMENITY
router.post("/:serviceid", verifyAdmin, createAmenity);

// UPDATE AMENITY
router.put("/:id", verifyAdmin, updateAmenity);

// DELETE AMENITY
router.delete("/:id/:serviceid", verifyAdmin, deleteAmenity);

// GET AMENITY
router.get("/:id", getAmenity);

// GET ALL AMENITIES
router.get("/", getAmenities);

 

export default router;