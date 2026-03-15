import {
  LoginService,
  RefreshTokenService,
  RegisterService,
  LogoutService,
  ResetPasswordService,
} from "../services/auth.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorResponse, successResponse } from "../utils/response.js";

export const RegisterController = asyncHandler(async (req, res, next) => {
  const user = await RegisterService(req.body);
  return successResponse(res, 201, "User registered successfully", user);
});

// Login Controller
export const LoginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { AccessToken, refreshToken, user } = await LoginService(
    email,
    password,
  );

  res.cookie("accessToken", AccessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return successResponse(res, 200, "User logged in successfully", user);
});

export const refreshTokenController = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  console.log("Refresh Token:", refreshToken);

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const { AccessToken, refreshToken: newRefreshToken } =
    await RefreshTokenService(refreshToken);

  res.cookie("accessToken", AccessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return successResponse(res, 200, "tokens refreshed successfully", {});
});

// Logout Controller
export const LogoutController = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  await LogoutService(refreshToken);

  return successResponse(res, 200, "Logged out successfully", {});
});

export const ResetPasswordController = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return errorResponse(res, 400, "Email is required");
  }

  const response = await ResetPasswordService(email);
  console.log("Reset Password Response:", response);
  if (!response) {
    return errorResponse(res, 500, "Failed to send reset password email");
  }

  return successResponse(
    res,
    200,
    "Reset password email sent successfully",
    {},
  );
});
