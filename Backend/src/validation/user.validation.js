import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export const validateCreateUser = (data) => {
  try {
    createUserSchema.parse(data);
    return null;
  } catch (err) {
    if (err?.errors) {
      // Join zod error messages into a single string
      return err.errors.map((e) => e.message).join(", ");
    }
    return err.message || "Invalid data";
  }
};
