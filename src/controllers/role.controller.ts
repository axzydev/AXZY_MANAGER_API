import { Request, Response } from "express";

import { responseHandler } from "../utils/responseHandler";
import { addRole, getRole, getRoles } from "../services/role.service";
import { RoleDTO } from "../shared/DTO/role.DTO";
import {
  roleDTOToEntity,
  roleEntityToDTO,
  rolesEntityToDTO,
} from "../shared/mapper/role.mapper";

export const create = async (req: Request, res: Response) => {
  try {
    const role = req.body as RoleDTO;

    const newRole = await addRole(roleDTOToEntity(role));

    if (!newRole) {
      return responseHandler({
        res,
        status: 400,
        message: "role already exists",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "role created successfully",
      data: roleEntityToDTO(newRole),
    });
  } catch (error: any) {
    return responseHandler({
      res,
      status: 500,
      message: error.message,
      data: error,
    });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const roles = await getRoles();

    return responseHandler({
      res,
      status: 200,
      message: "Policies fetched successfully",
      data: rolesEntityToDTO(roles),
    });
  } catch (error: any) {
    return responseHandler({
      res,
      status: 500,
      message: error.message,
      data: error,
    });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const roleId = req.params.id;

    const role = await getRole(roleId);

    if (!role) {
      return responseHandler({
        res,
        status: 404,
        message: "role not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "role fetched successfully",
      data: roleEntityToDTO(role),
    });
  } catch (error: any) {
    return responseHandler({
      res,
      status: 500,
      message: error.message,
      data: error,
    });
  }
};
