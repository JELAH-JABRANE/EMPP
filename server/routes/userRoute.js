// Assuming the folder is correctly named as 'controllers'
import { deleteUser,createUser,updateUser,getAllUsers } from "../controlers/userController.js";
import { Router } from "express";

const router = Router();

// Define routes
router.post("/", createUser);           
router.get("/get", getAllUsers);           
router.put("/update/:id", updateUser);  
router.delete("/delete/:id", deleteUser);

export default router;
