/*
  Warnings:

  - A unique constraint covering the columns `[MANDT]` on the table `APPKEY` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `APPKEY_MANDT_key` ON `APPKEY`(`MANDT`);
