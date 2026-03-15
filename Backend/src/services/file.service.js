import { UploadToCloud } from "../../utils/UploadToCloud.js";
import getPrisma from "../config/db.js";
import { successResponse } from "../utils/response.js";

export const UploadToCloudService = async (fileBuffer, userId) => {
  try {
    const { secure_url } = await UploadToCloud(fileBuffer);

    if (!secure_url || !userId) {
      throw new Error("Failed to upload image");
    }

    const prisma = await getPrisma();

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        profileImage: secure_url,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }

    return secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload image");
  }
};
