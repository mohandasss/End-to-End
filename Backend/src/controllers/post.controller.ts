import { asyncHandler } from "../utils/asyncHandler.js";
import { createPost } from "../services/post.service.js";
export const postController = asyncHandler(async (req, res) => {
  const response = await createPost(req, res);
  return response;
});
