import { Request, Response, NextFunction } from "express";
import { getApplicationByKey } from "../../services/app.service";
import { responseHandler } from "../../utils/responseHandler";

export const addAppKeyValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const appKey = req.headers["axzy_key"] as string;

    const app = await getApplicationByKey(appKey);

    if (app) {
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
