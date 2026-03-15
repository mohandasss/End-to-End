import { Router } from "express";
import {
  RegisterController,
  LoginController,
  refreshTokenController,
  LogoutController,
  ResetPasswordController,
} from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validation/auth.validation.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", validate(registerSchema), RegisterController);
router.post("/login", validate(loginSchema), LoginController);
router.get("/refresh", authMiddleware ,  refreshTokenController);
router.post("/logout", authMiddleware, LogoutController);
router.post("/forget-password", ResetPasswordController);

export default router;
