import { NextFunction, Request, Response } from "express";
import { getUserByEmail } from "../../services/user.service";
import { responseHandler } from "../../utils/responseHandler";
import { getMandtByMANDT } from "@services/mandt.service";

export const userValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, mandt } = req.body;

    const user = await getUserByEmail(email, mandt);

    if (user) {
      return responseHandler({
        res,
        status: 401,
        message: "The email | phone | username already exists",
        data: null,
      });
    }

    const mandtDB = await getMandtByMANDT(mandt);
    if (!mandtDB || mandtDB.STATUS !== "ACTIVE") {
      return responseHandler({
        res,
        status: 401,
        message: "The mandt is not valid",
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
