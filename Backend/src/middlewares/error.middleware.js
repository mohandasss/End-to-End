import { AppError } from "../utils/AppError.js";

export const errorHandler = (err, req, res, next) => {
  // Known app error
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Zod validation error
  if (err.name === "ZodError") {
    return res.status(400).json({
      success: false,
      message: err.errors[0].message,
    });
  }

  // Unknown / system error
  console.error("🔥 Unexpected Error:", err);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};
