import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";

const router = Router();

router.post("/add", createUser);
router.get("/", getUsers);

export default router;
 