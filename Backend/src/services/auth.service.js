import getPrisma from "../config/db.js";
import bcrypt from "bcrypt";
import { snowflake } from "../utils/snowflake.js";
import { AppError } from "../utils/AppError.js";

export const RegisterService = async (data) => {
  const { name, email, password } = data;

  const prisma = await getPrisma();
  // 1️⃣ Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new AppError("User with this email already exists", 409);

  }

  // 2️⃣ Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3️⃣ Create user
  const newUser = await prisma.user.create({
    data: {
      id: snowflake.generate().toString(),
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return newUser;
};
