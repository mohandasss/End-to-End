import { asyncHandler } from "../utils/asyncHandler.js";
import { createPost, getAllPosts } from "../services/post.service.js";
import { successResponse } from "../utils/response.js";
export const postController = asyncHandler(async (req, res) => {
  const { title, content , tags } = req.body;
  const userId = req.user.id; // Assuming authMiddleware adds user info to req.user
  const response = await createPost({ title, content, tags, userId });
  return successResponse(res, 201, "Post created successfully", response);
});

export const getAllPostsController = asyncHandler(async (req, res) => {
  const userId = req.user.id; // Assuming authMiddleware adds user info to req.user
  const response = await getAllPosts({ userId });
  return successResponse(res, 200, "Posts fetched successfully", response);
});






