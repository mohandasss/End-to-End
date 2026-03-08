import { errorResponse } from "../utils/response.js";

export const roleMiddleware = (...requiredRole) => {
  return (req, res, next) => {
    console.log("User role:", req.user);
    if (!requiredRole.includes(req.user.role)) {
      return errorResponse(
        res,
        403,
        "Forbidden: You don't have permission to access this resource",
      );
    }
    next();
  };
};
