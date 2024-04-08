/*
  Warnings:

  - A unique constraint covering the columns `[UUID]` on the table `APPKEY` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UUID]` on the table `MANDT` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[UUID]` on the table `USER` will be added. If there are existing duplicate values, this will fail.
  - The required column `UUID` was added to the `APPKEY` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `UUID` was added to the `MANDT` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `UUID` was added to the `USER` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `APPKEY` ADD COLUMN `UUID` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `MANDT` ADD COLUMN `UUID` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `USER` ADD COLUMN `UUID` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `APPKEY_UUID_key` ON `APPKEY`(`UUID`);

-- CreateIndex
CREATE UNIQUE INDEX `MANDT_UUID_key` ON `MANDT`(`UUID`);

-- CreateIndex
CREATE UNIQUE INDEX `USER_UUID_key` ON `USER`(`UUID`);
