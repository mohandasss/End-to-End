import { PrismaClient } from '@prisma/client';

let prisma;

async function getPrisma() {
  if (!prisma) {
    console.log('[DB] Initializing Prisma Client...');
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
    
    // Test connection
    await prisma.$connect();
    console.log('[DB] Database connected successfully!');
  }
  return prisma;
}

export default getPrisma;