import getPrisma from "../config/db.js";
import { paginateResponse } from "../../utils/paginationResponse.js";
import { snowflake } from "../utils/snowflake.js";
export const createUserService = async (data) => {
  console.log("Service - createUserService called with:", data);
  const addeduser = {
    id: snowflake.generate().toString(),
    name: data.name,
    email: data.email,
    password: data.password,
  };
  try {
    const prisma = await getPrisma();
    const user = await prisma.user.create({ data: addeduser });
    return user;
  } catch (err) {
    throw err;
  }
};

export const getAllUsersService = async (page, limit, search, skip, sort) => {
  console.log("Service - getAllUsersService called with:", skip);
  try {
    const prisma = await getPrisma();
    const users = await prisma.user.findMany({
      skip: skip,
      take: limit,
      where: {
        name: {
          contains: search,
        },
      },
      orderBy: {
        [sort]: "desc",
      },
    });

    //total count
    const total = await prisma.user.count({
      where: {
        name: {
          contains: search,
        },
      },
    });

    return paginateResponse({
      data: users,
      total,
      page,
      limit,
    });
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
