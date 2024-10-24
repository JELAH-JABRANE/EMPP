import { Router } from "express";
import { Signup } from "../../controlers/signup/signupController.js";
import { createUser } from "../../controlers/userController.js";


const router = Router();

router.post("/",createUser)

export default router
