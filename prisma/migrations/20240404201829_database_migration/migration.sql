/*
  Warnings:

  - A unique constraint covering the columns `[MANDT]` on the table `MANDT` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MANDT_MANDT_key` ON `MANDT`(`MANDT`);
