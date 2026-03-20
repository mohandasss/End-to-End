import getPrisma from "../config/db.js";
import { successResponse } from "../utils/response.js";



export const createPost = async (req , res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  const prisma = await getPrisma();
  const response = await prisma.post.create({
    data: {
      title,
      content,
      user :{
        connect :{
          id : userId
        }
      }
    },
    select: {
      id: true,
      title: true,
      content: true,
    },
  });

  return successResponse(res, 200, "Post created successfully", response);
};
