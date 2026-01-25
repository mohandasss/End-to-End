import getPrisma from "../config/db.js";

export const createUserService = async (data) => {
  try {
    const prisma = await getPrisma();
    const user = await prisma.user.create({ data });
    return user;
  } catch (err) {
    throw err;
  }
};

export const getAllUsersService = async () => {
  try {
    const prisma = await getPrisma();
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    throw err;
  }
};
