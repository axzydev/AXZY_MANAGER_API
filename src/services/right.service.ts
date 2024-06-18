import { prismaClient } from "@config/prisma";
import { RightEntity } from "@shared/models/right";

export const addRight = async (
  right: RightEntity
): Promise<RightEntity | null> => {
  try {
    const newRight = await prismaClient.rIGHTS.create({
      data: {
        ...right,
      },
    });
    return newRight;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRight = async (
  rightId: string
): Promise<RightEntity | null> => {
  try {
    const right = await prismaClient.rIGHTS.findUnique({
      where: {
        UUID: rightId,
      },
    });
    return right;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRights = async (): Promise<RightEntity[]> => {
  try {
    const rights = await prismaClient.rIGHTS.findMany();
    return rights;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
