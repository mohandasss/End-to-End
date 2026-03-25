import "dotenv/config";
import express from "express";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import { errorHandler } from "./src/middlewares/error.middleware.js";
import getPrisma from "./src/config/db.js";
import cookieParser from "cookie-parser";
import fileuploads from "./src/routes/file.routes.js";
import postRoutes from "./src/routes/post.routes.js";
import { connectRedis } from "./config/redis.js";


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", fileuploads); // Add this line to handle /api/profile routes
app.use("/api/posts", postRoutes); // Add this line to handle /api/posts routes

app.use(errorHandler);

(async () => {
  try {
    await getPrisma();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("DB Init Error:", err);
    process.exit(1);
  }
})();

await connectRedis();