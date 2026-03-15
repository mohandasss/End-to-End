import cloudinary from "../src/config/cloudinary.js";
import streamifier from "streamifier";

/**
 * Industry Standard: Uploads a buffer to Cloudinary using Streams.
 * This avoids the 33% Base64 size increase and is memory-efficient.
 */
export const UploadToCloud = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const cld_upload_stream = cloudinary.uploader.upload_stream(
      { folder: "user_uploads" },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      },
    );

    // This "pipes" the buffer into the Cloudinary stream
    streamifier.createReadStream(fileBuffer).pipe(cld_upload_stream);
  });
};
