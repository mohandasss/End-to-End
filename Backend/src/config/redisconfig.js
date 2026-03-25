import { createClient } from "redis";

let redisClient;

export const connectRedis = async () => {
  redisClient = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
  });

  redisClient.on("connect", () => {
    console.log("✅ Connected to Redis");
  });

  redisClient.on("error", (err) => {
    console.error("❌ Redis Client Error", err);
  });

  await redisClient.connect();
};

export const getRedis = () => {
  if (!redisClient) {
    throw new Error("Redis not initialized");
  }
  return redisClient;
};
