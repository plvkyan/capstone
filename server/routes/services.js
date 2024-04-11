import express from "express";
import Service from "../models/model-service.js";
import {
    createService,
    deleteService,
    getService,
    getServices,
    updateService,
} from "../controllers/controller-service.js";

const router = express.Router();


// CREATE SERVICE
router.post("/", createService);

// UPDATE SERVICE
router.put("/:id", updateService);

// DELETE SERVICE
router.delete("/:id", deleteService);

// GET SERVICE
router.get("/:id", getService);

// GET ALL SERVICES
router.get("/", getServices);
 

export default router;