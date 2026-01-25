import getPrisma from "../config/db.js";
import bcrypt from "bcrypt";
import { snowflake } from "../utils/snowflake.js";
import { AppError } from "../utils/AppError.js";
import { generateToken } from "../utils/jwt.js";

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

 export const LoginService = async (email, password) => {
  const prisma = await getPrisma();
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  // 1️⃣ Check if user exists
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }
  // Further login logic goes here

  const passwordMatch = await bcrypt.compare(password, user.password);
  // 2️⃣ Verify password
  if (!passwordMatch) {
    throw new AppError("wrong password", 401);
  }

  // jwt
  const token = generateToken({
    id: user.id,
    email: user.email,
    name: user.name,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
};
