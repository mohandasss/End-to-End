import { Router } from "express";
import {
  RegisterController,
  LoginController,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";

const router = Router();

router.post("/register", validate(registerSchema), RegisterController);
router.post("/login", validate(loginSchema), LoginController);

export default router;
