/*
  Warnings:

  - A unique constraint covering the columns `[EMAIL]` on the table `USER` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[PHONE]` on the table `USER` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `USER_EMAIL_key` ON `USER`(`EMAIL`);

-- CreateIndex
CREATE UNIQUE INDEX `USER_PHONE_key` ON `USER`(`PHONE`);
