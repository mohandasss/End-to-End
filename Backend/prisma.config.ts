// prisma.config.ts (at project root)
import "dotenv/config"; // required to load environment variables
import { defineConfig, env } from "@prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations", // optional: define where migrations are stored
  },
  datasource: {
    provider: "mysql",
    url: env("DATABASE_URL"), // connection URL moved here
  },
});
