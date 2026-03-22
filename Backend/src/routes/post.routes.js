import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { getAllPostsController, postController } from "../controllers/post.controller.js";
const router = Router();


router.post("/create", authMiddleware, postController );
router.get("/all-posts", authMiddleware, getAllPostsController );
router.post("/posts-tags", authMiddleware, postController );

export default router;