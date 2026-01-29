import {
  createUserService,
  getAllUsersService,
  getProfileService,
  updateProfileService,
} from "../services/user.service.js";
import { validateCreateUser } from "../validation/user.validation.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { successResponse } from "../utils/response.js";

export const createUser = asyncHandler(async (req, res) => {
  try {
    const error = validateCreateUser(req.body);
    if (error) {
      console.log("[Controller] Validation error:", error);
      return res.status(400).json({ message: error });
    }
    const user = await createUserService(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await getAllUsersService();
    return successResponse(res, 200, "Users fetched successfully", users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export const getprofile = asyncHandler(async (req, res) => {
  const profileid = req.user.id;

  const profile = await getProfileService(profileid);
  return successResponse(res, 200, "Profile fetched successfully", profile);
});


// Update Profile Controller
export const updateProfile = asyncHandler(async (req, res) => {
  const profileid = req.user.id;
  const { name, email } = req.body;
  console.log(profileid, name, email);
  const updatedProfile = await updateProfileService(profileid, name, email);
  return successResponse(
    res,
    200,
    "Profile updated successfully",
    updatedProfile,
  );
});
