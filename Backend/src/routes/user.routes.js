import { Router } from "express";
import {
  createUser,
  getprofile,
  getUsers,
  updateProfile,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/add", createUser);
router.get("/all", authMiddleware, getUsers);
router.get("/profile", authMiddleware, getprofile);
router.patch("/update", authMiddleware, updateProfile);

export default router;
