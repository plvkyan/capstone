import express from "express";
import Service from "../models/model-service.js";
import {
    createService,
    deleteService,
    getService,
    getServices,
    updateService,
} from "../controllers/controller-service.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();



// CREATE SERVICE
router.post("/", verifyAdmin, createService);

// UPDATE SERVICE
router.put("/:id", verifyAdmin, updateService);

// DELETE SERVICE
router.delete("/:id", verifyAdmin, deleteService);

// GET SERVICE
router.get("/:id", getService);

// GET ALL SERVICES
router.get("/", getServices);




 


export default router;