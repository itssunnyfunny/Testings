-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ADD', 'MULT');

-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "type" "Type" NOT NULL,
    "a" INTEGER NOT NULL,
    "b" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);
