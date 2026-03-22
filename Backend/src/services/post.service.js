import getPrisma from "../config/db.js";

export const createPost = async ({ title, content, tags, userId }) => {
  console.log("Creating post with data:", { title, content, tags, userId });
  const prisma = await getPrisma();

  const response = await prisma.post.create({
    data: {
      title,
      content,
      tags: {
        connectOrCreate: tags.map((tags) => ({
          where: {
            name: tags,
          },
          create: {
            name: tags,
          },
        })),
      },
      user: {
        connect: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
      title: true,
      content: true,
      tags: true,
    },
  });

  return response;
};

export const getAllPosts = async ({ userId }) => {
  const prisma = await getPrisma();
  const posts = await prisma.post.findMany({
    where: {
      userId: userId,
    },
  });
  return posts;
};
