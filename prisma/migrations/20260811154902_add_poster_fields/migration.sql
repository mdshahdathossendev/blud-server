/*
  Warnings:

  - You are about to drop the column `contactEmail` on the `BludePost` table. All the data in the column will be lost.
  - You are about to drop the column `contactName` on the `BludePost` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `BludePost` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BludePost" DROP COLUMN "contactEmail",
DROP COLUMN "contactName",
DROP COLUMN "contactPhone",
ADD COLUMN     "posterAddress" TEXT,
ADD COLUMN     "posterAge" INTEGER,
ADD COLUMN     "posterEmail" TEXT,
ADD COLUMN     "posterGender" TEXT,
ADD COLUMN     "posterName" TEXT,
ADD COLUMN     "posterPhone" TEXT,
ADD COLUMN     "posterProfession" TEXT;
