import { Router } from "express";
import { RegisterController } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", RegisterController);
// router.post("/login", loginUser);

export default router;
