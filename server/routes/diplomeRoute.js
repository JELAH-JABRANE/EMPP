import { Router } from "express";
import { createDiplome } from "../controlers/diplome.js";


const router = Router();

router.post("/",createDiplome);


export default router;


