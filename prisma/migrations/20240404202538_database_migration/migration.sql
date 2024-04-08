/*
  Warnings:

  - A unique constraint covering the columns `[APPKEY]` on the table `APPKEY` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `APPKEY_APPKEY_key` ON `APPKEY`(`APPKEY`);
