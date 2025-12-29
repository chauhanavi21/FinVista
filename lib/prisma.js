import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = globalThis;

const pool =
  globalForPrisma.__pgPool ??
  new Pool({
    connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.__pgPool = pool;

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter: new PrismaPg(pool),
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
