import { Router } from "express";
import multer from "multer";
import { UploadImage } from "../controllers/file.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const upload = multer({ storage: multer.memoryStorage() }); // stored in local devices Ram
const router = Router();

router.post("/image", authMiddleware, upload.single("file"), UploadImage);

export default router;