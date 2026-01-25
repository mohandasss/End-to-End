import { LoginService, RegisterService } from "../services/auth.service.js"
import { successResponse } from "../utils/response.js";

// Register Controller
export const RegisterController = async (req, res, next) => {
  try {
    const user = await RegisterService(req.body);
    return successResponse(res, 201, "User registered successfully", user);
  } catch (error) {
    next(error);
  }
};

// Login Controller
export const LoginController = async (req, res, next) => {
  const credentials = req.body;
  try {
    const user = await LoginService(credentials.email, credentials.password);
    return successResponse(res, 200, "User logged in successfully", user);
  } catch (error) {
    next(error);
  }
};
