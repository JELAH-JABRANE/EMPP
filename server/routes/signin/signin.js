import { signin } from "../../controlers/signin/signin.js";
import { Router } from "express";

const router = Router();

router.post("/", signin);

export default router;
