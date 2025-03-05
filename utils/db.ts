import { PrismaClient } from '@prisma/client';
// prismaclient is used to interact with the database
const prismaClientSingleton = () => {
  return new PrismaClient();
};
// this function creates a new prismaclient instance and returns it

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;
// this type extracts return type of prismaClientSingleton which is prismaclient
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};
// In a Node.js application, the globalThis object persists across module imports.
// Here, we are defining globalForPrisma as a global variable that stores the Prisma client
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();
// If globalForPrisma.prisma already exists, it reuses the existing instance.
// If not, it creates a new PrismaClient instance using prismaClientSingleton().
export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
// In development mode, we store the prisma instance in globalForPrisma.prisma.
// This prevents Prisma from creating multiple database connections during hot reloads in development.

// this is the default code provided by prisma itself