import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { postController } from "../controllers/post.controller";
const router = Router();


router.post("/create", authMiddleware, postController )
export default router;