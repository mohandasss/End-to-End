import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { postController } from "../controllers/post.controller.js";
const router = Router();


router.post("/create", authMiddleware, postController );
export default router;