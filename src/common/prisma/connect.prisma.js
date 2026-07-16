import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/index.js";
import { DATABASE_URL } from "../constant/app.constant.js";

const url = new URL(DATABASE_URL);

const adapter = new PrismaMariaDb({
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.substring(1),
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter, omit:{nguoi_dung:{mat_khau: true}} });

try {
  await prisma.$queryRaw`SELECT 1+1 AS result`;
  console.log("[PRISMA] Connection has been established successfully.");
} catch (error) {
  console.error("[PRISMA] Unable to connect to the database:", error);
}

export { prisma };