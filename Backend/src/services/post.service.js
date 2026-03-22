import getPrisma from "../config/db.js";
import redisclient from "../config/redisconfig.js";

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
  const cacheKey = `posts_user_${userId}`;
  const cachePosts = await redisclient.get(cacheKey);

  if (cachePosts) {
    console.log("✅ Cache HIT");
    return JSON.parse(cachePosts);
  }

  console.log("❌ Cache MISS");

  const prisma = await getPrisma();
  const posts = await prisma.post.findMany({
    where: {
      isDeleted: false,
      userId: userId,
    },
  });

  await redisclient.set(cacheKey, JSON.stringify(posts), {
    EX: 60, 
  });

  return posts;
};

export const deletePost = async ({ postId, userId }) => {
  const prisma = await getPrisma();

  // Check if the post exists and belongs to the user
  const post = await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      isDeleted: true,
      deletedAt: new Date(),
      deletedBy: userId, // Store the ID of the user who deleted the post
    },
    select: {
      id: true,
      title: true,
      content: true,
      isDeleted: true,
    },
  });

  return post;
};
