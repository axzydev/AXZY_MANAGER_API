import { Request, Response } from "express";
import { MandtDTO } from "../shared/DTO/mandt.DTO";
import {
  addMANDT,
  getAllMandts,
  getMandtByMANDT,
} from "../services/mandt.service";
import {
  mandtDTOToEntity,
  mandtEntityToDTO,
  mandtsEntityToDTO,
} from "../shared/mapper/mandt.mapper";
import { responseHandler } from "../utils/responseHandler";

export const create = async (req: Request, res: Response) => {
  try {
    const mandt = req.body as MandtDTO;

    const newMandt = await addMANDT(mandtDTOToEntity(mandt));

    if (!newMandt) {
      return responseHandler({
        res,
        status: 400,
        message: "Application already exists",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "Application created successfully",
      data: mandtEntityToDTO(newMandt),
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
    const mandts = await getAllMandts();

    if (!mandts) {
      return responseHandler({
        res,
        status: 404,
        message: "Applications not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Applications fetched successfully",
      data: mandtsEntityToDTO(mandts),
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
    const { id } = req.params;

    const mandt = await getMandtByMANDT(id);

    if (!mandt) {
      return responseHandler({
        res,
        status: 404,
        message: "Application not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Application fetched successfully",
      data: mandtEntityToDTO(mandt),
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
