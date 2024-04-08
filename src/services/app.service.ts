import { prismaClient } from "../config/prisma";
import { AppKeyEntity } from "../shared/models/app-key";

export const addApllication = async (
  data: AppKeyEntity
): Promise<AppKeyEntity | null> => {
  try {
    const newApp = await prismaClient.aPPKEY.create({
      data: {
        ...data,
      },
    });
    return newApp;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllApplications = async (): Promise<AppKeyEntity[] | null> => {
  try {
    const apps = await prismaClient.aPPKEY.findMany({
      where: {
        delrow: false,
      },
    });
    return apps;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getApplicationByKey = async (
  appKey: string
): Promise<AppKeyEntity | null> => {
  try {
    const app = await prismaClient.aPPKEY.findFirst({
      where: {
        delrow: false,
        APPKEY: appKey,
      },
    });
    return app;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getApplicationByMANDT = async (
  mandt: string
): Promise<AppKeyEntity[] | null> => {
  try {
    const apps = await prismaClient.aPPKEY.findMany({
      where: {
        delrow: false,
        MANDT: mandt,
      },
    });
    return apps;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const softDeleteApplication = async (
  appKey: string
): Promise<AppKeyEntity | null> => {
  try {
    const app = await prismaClient.aPPKEY.update({
      where: {
        UUID: appKey,
      },
      data: {
        delrow: true,
      },
    });
    return app;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
