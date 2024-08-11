import { PrismaClient } from "@prisma/client";

const globalPrsma = globalThis as unknown as {prisma:PrismaClient}

export const prisma = globalPrsma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalPrsma.prisma = prisma