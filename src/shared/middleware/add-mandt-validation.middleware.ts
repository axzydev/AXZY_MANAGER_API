import { Request, Response, NextFunction } from "express";
import { responseHandler } from "../../utils/responseHandler";
import { getMandtByMANDT } from "../../services/mandt.service";

export const createMandtValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { mandt } = req.body;

    const mandtDb = await getMandtByMANDT(mandt);

    if (mandtDb) {
      return responseHandler({
        res,
        status: 400,
        message: "The mandt does not exist in the database | already exists",
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
