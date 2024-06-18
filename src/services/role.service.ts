import { prismaClient } from "../config/prisma";
import { RoleEntity } from "../shared/models/role";

export const addRole = async (role: RoleEntity): Promise<RoleEntity | null> => {
  try {
    const newRole = await prismaClient.rOLES.create({
      data: {
        ...role,
      },
    });
    return newRole;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRole = async (roleId: string): Promise<RoleEntity | null> => {
  try {
    const role = await prismaClient.rOLES.findUnique({
      where: {
        UUID: roleId,
      },
    });
    return role;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getRoles = async (): Promise<RoleEntity[]> => {
  try {
    const roles = await prismaClient.rOLES.findMany();
    return roles;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
