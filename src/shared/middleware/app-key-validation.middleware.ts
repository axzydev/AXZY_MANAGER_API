import { Request, Response, NextFunction } from "express";
import { getApplicationByKey } from "../../services/app.service";
import { responseHandler } from "../../utils/responseHandler";

export const appKeyValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const appKey = req.headers["axzy_key"] as string;
    const app = await getApplicationByKey(appKey);
    if (!app) {
      return responseHandler({
        res,
        status: 401,
        message: "Unauthorized to access this resource",
        data: null,
      });
    }

    if (appKey !== app.APPKEY) {
      return responseHandler({
        res,
        status: 401,
        message: "Unauthorized the key does not match the app key",
        data: null,
      });
    }

    req.params.mandt = app.MANDT;

    next();
  } catch (err: any) {
    console.log({ err });
    return responseHandler({
      res,
      status: 500,
      message: err.message,
      data: err,
    });
  }
};
