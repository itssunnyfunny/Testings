import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export async function resetDb() {
    await prisma.$transaction([
        prisma.request.deleteMany(),
    ])
}