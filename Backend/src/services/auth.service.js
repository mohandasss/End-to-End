import getPrisma from "../config/db.js";
import bcrypt from "bcrypt";
import { snowflake } from "../utils/snowflake.js";
import { AppError } from "../utils/AppError.js";
import { generateAccessToken } from "../utils/jwt.js";

export const RegisterService = async (data) => {
  const { name, email, password, role } = data;
  console.log("sdasdas", data);
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
      role: role ? role.toUpperCase() : undefined, // ensure case matches enum
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
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

  // access token (include role so middleware can use it)
  const AccessToken = generateAccessToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,          // <-- added
  });

  // refresh token
  const refreshToken = crypto.randomUUID();
  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
  });

  return {
    AccessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role, // include role in the returned user object
    },
  };
};

export const RefreshTokenService = async (refreshToken) => {
  const prisma = await getPrisma();
  // 1️⃣ Validate refresh token
  const validToken = await prisma.refreshToken.findUnique({
    where: {
      token: refreshToken,
    },
  });

  if (!validToken || validToken.expiresAt < new Date()) {
    throw new AppError("Invalid refresh token", 401);
  }
  // 2️⃣ Generate new tokens
  await prisma.refreshToken.delete({
    where: {
      token: validToken.token,
    },
  });

  // Generate new access token
  const newRefreshToken = crypto.randomUUID();
  await prisma.refreshToken.create({
    data: {
      token: newRefreshToken,
      userId: validToken.userId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  const user = await prisma.user.findUnique({
    where: {
      id: validToken.userId,
    },
  });

  const AccessToken = generateAccessToken({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role, // include role when refreshing
  });

  return {
    AccessToken,
    refreshToken: newRefreshToken,
  };
};

export const LogoutService = async (refreshToken) => {
  const prisma = await getPrisma();

  await prisma.refreshToken.deleteMany({
    where: {
      token: refreshToken,
    },
  });

  return;
};



