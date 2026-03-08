import { asyncHandler } from "../utils/asyncHandler";
import { errorResponse } from "../utils/response.js";
export const UploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return errorResponse(res, 400, "No file uploaded");
  }
});
