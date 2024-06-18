import {
  MANDT_STATUS_ENUM,
  PrismaClient,
  USER_STATUS_ENUM,
} from "@prisma/client";

import { getConfig } from "../../src/utils/config";
import { hashPassword } from "../../src/utils/security";

export const applicationSeed = async (prisma: PrismaClient) => {
  await mandtSeed(prisma);
  await appKeySeed(prisma);
  await userSeed(prisma);
};

export const mandtSeed = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    prisma.mANDT.upsert({
      where: { MANDT: getConfig("AXZY_MANAGER_MANDT") },
      update: {},
      create: {
        UUID: getConfig("AXZY_MANAGER_MANDT_UUID"),
        NAME: getConfig("AXZY_MANAGER_MANDT_NAME"),
        DESCTN: getConfig("AXZY_MANAGER_MANDT_DESCTN"),
        MANDT: getConfig("AXZY_MANAGER_MANDT"),
        STATUS: MANDT_STATUS_ENUM.ACTIVE,
      },
    }),
  ]);
};

export const appKeySeed = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    prisma.aPPKEY.upsert({
      where: { APPKEY: getConfig("AXZY_MANAGER_APPKEY") },
      update: {
        delrow: false,
      },
      create: {
        UUID: getConfig("AXZY_MANAGER_APPKEY_UUID"),
        APPKEY: getConfig("AXZY_MANAGER_APPKEY"),
        MANDT: getConfig("AXZY_MANAGER_MANDT"),
      },
    }),
  ]);
};

export const userSeed = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    prisma.uSER.upsert({
      where: { UUID: getConfig("AXZY_MANAGER_USER_UUID") },
      update: {
        PSWRD: await hashPassword(getConfig("AXZY_MANAGER_USER_USER_PSWRD")),
      },
      create: {
        UUID: getConfig("AXZY_MANAGER_USER_UUID"),
        MANDT: getConfig("AXZY_MANAGER_MANDT"),
        USRNME: getConfig("AXZY_MANAGER_USER_USRNME"),
        PSWRD: await hashPassword(getConfig("AXZY_MANAGER_USER_USER_PSWRD")),
        EMAIL: getConfig("AXZY_MANAGER_USER_EMAIL"),
        PHONE: getConfig("AXZY_MANAGER_USER_PHONE"),
        STATUS: USER_STATUS_ENUM.ACTIVE,
      },
    }),
  ]);
};
