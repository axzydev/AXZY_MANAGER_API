import { Request, Response } from "express";
import { responseHandler } from "../utils/responseHandler";
import { AppKeyDTO } from "../shared/DTO/app-key.DTO";
import {
  addApllication,
  enableAppKeyApplication,
  getAllApplications,
  getApplicationByKey,
  removeApplication,
  softDeleteApplication,
} from "../services/app.service";
import {
  appKeyDTOToEntity,
  appKeyEntityToDTO,
  appsKeyEntityToDTO,
} from "../shared/mapper/app-key.mapper";

export const create = async (req: Request, res: Response) => {
  try {
    const app = req.body as AppKeyDTO;

    const newApp = await addApllication(appKeyDTOToEntity(app));

    if (!newApp) {
      return responseHandler({
        res,
        status: 400,
        message: "Application not created",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "Application created successfully",
      data: appKeyEntityToDTO(newApp),
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
    const apps = await getAllApplications();

    if (!apps) {
      return responseHandler({
        res,
        status: 404,
        message: "No applications found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Applications fetched successfully",
      data: appsKeyEntityToDTO(apps),
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

export const remove = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;

    const app = await removeApplication(uuid);

    if (!app) {
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
      message: "Application removed successfully",
      data: true,
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
    const { uuid } = req.params;

    const app = await getApplicationByKey(uuid);

    if (!app) {
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
      data: appKeyEntityToDTO(app),
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

export const update = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;

    const app = await enableAppKeyApplication(uuid);

    if (!app) {
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
      message: "Application removed successfully",
      data: true,
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

export const disable = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;

    const app = await softDeleteApplication(uuid);

    if (!app) {
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
      message: "Application removed successfully",
      data: true,
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