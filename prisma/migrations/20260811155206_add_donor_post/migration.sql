-- CreateTable
CREATE TABLE "DonorPost" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "donorName" TEXT,
    "donorPhone" TEXT,
    "donorEmail" TEXT,
    "bloodGroup" TEXT,
    "location" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonorPost_pkey" PRIMARY KEY ("id")
);
