import {
  createUserService,
  getAllUsersService,
} from "../services/user.service.js";
import { validateCreateUser } from "../validation/user.validation.js";





export const createUser = async (req, res) => {
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
};




export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};











