import { Request, Response } from "express";

import { responseHandler } from "../utils/responseHandler";
import { RightDTO } from "../shared/DTO/right.DTO";
import {
  rightDTOToEntity,
  rightEntityToDTO,
  rightsEntityToDTO,
} from "../shared/mapper/right.mapper";
import { addRight, getRight, getRights } from "../services/right.service";

export const create = async (req: Request, res: Response) => {
  try {
    const right = req.body as RightDTO;

    const newRight = await addRight(rightDTOToEntity(right));

    if (!newRight) {
      return responseHandler({
        res,
        status: 400,
        message: "rigth already exists",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "rigth created successfully",
      data: rightEntityToDTO(newRight),
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
    const rights = await getRights();

    return responseHandler({
      res,
      status: 200,
      message: "Policies fetched successfully",
      data: rightsEntityToDTO(rights),
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
    const rightId = req.params.id;

    const right = await getRight(rightId);

    if (!right) {
      return responseHandler({
        res,
        status: 404,
        message: "rigth not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "rigth fetched successfully",
      data: rightEntityToDTO(right),
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
