import { MANDT_STATUS_ENUM } from "@prisma/client";
import { prismaClient } from "../config/prisma";
import { MandtEntity } from "../shared/models/mandt";

export const addMANDT = async (
  mandt: MandtEntity
): Promise<MandtEntity | null> => {
  try {
    const newMandt = await prismaClient.mANDT.create({
      data: {
        ...mandt,
      },
    });
    return newMandt;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllMandts = async (): Promise<MandtEntity[] | null> => {
  try {
    const mandts = await prismaClient.mANDT.findMany({
      where: {
        delrow: false,
      },
    });
    return mandts;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const getMandtByMANDT = async (
  mandt: string
): Promise<MandtEntity | null> => {
  try {
    const MANDT = await prismaClient.mANDT.findFirst({
      where: {
        delrow: false,
        MANDT: mandt,
      },
    });
    return MANDT;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateMANDTStatus = async (
  mandt: string,
  status: MANDT_STATUS_ENUM
): Promise<MandtEntity | null> => {
  try {
    const MANDT = await prismaClient.mANDT.update({
      where: {
        delrow: false,
        MANDT: mandt,
      },
      data: {
        STATUS: status,
      },
    });
    return MANDT;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const softDeleteMANDT = async (
  mandt: string
): Promise<MandtEntity | null> => {
  try {
    const MANDT = await prismaClient.mANDT.update({
      where: {
        MANDT: mandt,
      },
      data: {
        delrow: true,
        STATUS: MANDT_STATUS_ENUM.DELETED,
      },
    });
    return MANDT;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
