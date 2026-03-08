import { Router } from "express";
import {
  createUser,
  getprofile,
  getUsers,
  updateProfile,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.post("/add", authMiddleware, roleMiddleware("ADMIN"), createUser);
router.get("/all", authMiddleware, getUsers);
router.get("/profile", authMiddleware, getprofile);
router.patch("/update", authMiddleware, updateProfile);

export default router;
