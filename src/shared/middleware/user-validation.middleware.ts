import { NextFunction, Request, Response } from "express";
import { getUserByEmail } from "../../services/user.service";
import { responseHandler } from "../../utils/responseHandler";

export const userValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const user = await getUserByEmail(email);

    if (user) {
      return responseHandler({
        res,
        status: 401,
        message: "The email | phone | username already exists",
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
