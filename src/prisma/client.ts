import { PrismaClient } from "@prisma/client";

/*
Single Prisma Client for entire app
Prevents Connection explosion
 */
const prisma= new PrismaClient();

export default prisma;

/* 
What it does:
  opens DB connection
  one shared instance 
*/