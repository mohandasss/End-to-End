import { asyncHandler } from "../utils/asyncHandler.js";
import { errorResponse, successResponse } from "../utils/response.js";
import cloudinary from "../config/cloudinary.js";
import { UploadToCloud } from "../../utils/UploadToCloud.js";
import { UploadToCloudService } from "../services/file.service.js";

console.log(cloudinary.config());
export const UploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return errorResponse(res, 400, "No file uploaded");
  }

  const userId = req.user.id
  const response = await UploadToCloudService(req.file.buffer , userId);

  return successResponse(res, 200, "Image uploaded successfully", {
    url: response,
  });
});
