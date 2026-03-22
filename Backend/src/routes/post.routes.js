import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { deleteController, getAllPostsController, postController } from "../controllers/post.controller.js";
const router = Router();


router.post("/create", authMiddleware, postController );
router.get("/all-posts", authMiddleware, getAllPostsController );
// router.post("/posts-tags", authMiddleware, postController );
router.delete("/delete/:id", authMiddleware, deleteController );

export default router;