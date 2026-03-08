import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),

  email: z.string().email("Invalid email format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain one uppercase letter")
    .regex(/[0-9]/, "Must contain one number")
    .regex(/[^A-Za-z0-9]/, "Must contain one special character"),
  // role may be provided in any case; convert to uppercase before enum check
  role: z.preprocess(
    (val) => (typeof val === "string" ? val.toUpperCase() : val),
    z.enum(["USER", "ADMIN"], {
      errorMap: () => ({ message: "Role must be either 'USER' or 'ADMIN'" }),
    }),
  ),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
