import express from "express";
import {
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/controller-user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
 
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("Hello, User! You are logged in.");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello, User! You are logged in and you can delete your account.");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello, Admin! You are logged in and you can delete all accounts.");
// });

// UPDATE SERVICE
router.put("/:id", verifyUser, updateUser);

// DELETE SERVICE
router.delete("/:id", verifyUser, deleteUser);

// GET SERVICE
router.get("/:id", verifyUser, getUser);

// GET ALL SERVICES
router.get("/", verifyAdmin, getUsers);
 
 

export default router;