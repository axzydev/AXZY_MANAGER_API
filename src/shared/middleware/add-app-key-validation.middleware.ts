import { NextFunction, Request, Response } from "express";
import { getApplicationByMANDT } from "../../services/app.service";
import { responseHandler } from "../../utils/responseHandler";

export const addAppKeyValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mandt } = req.body;

    const apps = await getApplicationByMANDT(mandt);
    
    if (apps?.length > 0) {
      return responseHandler({
        res,
        status: 400,
        message: "The app key does not exist in the database | already exists",
        data: null,
      });
    }

    next();
  } catch (err: any) {
    console.log(err);
    return responseHandler({
      res,
      status: 500,
      message: err.message,
      data: err,
    });
  }
};
