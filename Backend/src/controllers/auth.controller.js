import { RegisterService } from "../services/auth.service.js";
import { registerSchema } from "../validation/auth.validation.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const RegisterController = async (req, res, next) => {
  const Registerpayload = req.body;
  console.log("Registerpayload:", Registerpayload);
  try {
    const validatedData = registerSchema.parse(Registerpayload); //validate data
    const user = await RegisterService(validatedData);
    return successResponse(res, 201, "User registered successfully", user);
  } catch (error) {
    next(error);
  }
};
