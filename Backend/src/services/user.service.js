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

export const getProfileService = async (profileid) => {
  try {
    const prisma = await getPrisma();
    const user = await prisma.user.findUnique({
      where: {
        id: profileid,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateProfileService = async (profileid, name, email) => {
  try {
    const prisma = await getPrisma();

    const user = await prisma.user.update({
      where: {
        id: profileid,
      },
      data: {
        name: name,
        email: email,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};
