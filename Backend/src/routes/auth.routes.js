import { Router } from "express";
import {
  RegisterController,
  LoginController,
  refreshTokenController,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validation/auth.validation.js"

const router = Router();

router.post("/register", validate(registerSchema), RegisterController);
router.post("/login", validate(loginSchema), LoginController);
router.get("/refresh" , refreshTokenController )

export default router;
