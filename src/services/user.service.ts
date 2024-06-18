import { USER_STATUS_ENUM } from "@prisma/client";
import { prismaClient } from "../config/prisma";
import { UserEntity } from "../shared/models/user";

export const addUser = async (data: UserEntity): Promise<UserEntity | null> => {
  try {
    const newUser = await prismaClient.uSER.create({
      data: {
        ...data,
      },
    });
    return newUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUserByUsername = async (
  username: string,
  mandt: string = "00000"
): Promise<UserEntity | null> => {
  try {
    const user = await prismaClient.uSER.findFirst({
      where: {
        delrow: false,
        USRNME: username,
        MANDT: mandt,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUserByEmail = async (
  email: string,
  mandt: string = "00000"
): Promise<UserEntity | null> => {
  try {
    const user = await prismaClient.uSER.findFirst({
      where: {
        delrow: false,
        EMAIL: email,
        MANDT: mandt,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getAllUsers = async (
  mandt: string = "00000"
): Promise<UserEntity[] | null> => {
  try {
    const users = await prismaClient.uSER.findMany({
      where: {
        delrow: false,
        MANDT: mandt,
      },
    });
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getUsersByMandt = async (
  mandt: string
): Promise<UserEntity[] | null> => {
  try {
    const users = await prismaClient.uSER.findMany({
      where: {
        delrow: false,
        MANDT: mandt,
      },
    });
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const updateUserStatus = async (
  id: number,
  status: USER_STATUS_ENUM,
  mandt: string = "00000"
): Promise<UserEntity | null> => {
  try {
    const user = await prismaClient.uSER.update({
      where: {
        delrow: false,
        Id: id,
        MANDT: mandt,
      },
      data: {
        STATUS: status,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const softDeleteUser = async (
  id: number,
  mandt: string = "00000"
): Promise<UserEntity | null> => {
  try {
    const user = await prismaClient.uSER.update({
      where: {
        Id: id,
        MANDT: mandt,
      },
      data: {
        delrow: true,
      },
    });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
