import { verifyAccessToken } from "../utils/jwt.js";
export const authMiddleware = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Here you would typically verify the token
  const decoded = verifyAccessToken(accessToken);
  req.user = decoded;
  console.log("Authenticated user:", req.user);
  next();
};
