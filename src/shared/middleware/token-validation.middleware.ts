import { NextFunction, Request, Response } from "express";
import { responseHandler } from "../../utils/responseHandler";
import { verifyJWT } from "../../utils/security";

export const tokenValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.path);
    if (req.path === "/api/v1/user/login") {
      return next();
    }

    const token = req.headers.authorization;

    if (!token) {
      return responseHandler({
        res,
        status: 401,
        message: "Token is required",
      });
    }

    const tokenParts = token.split(" ");

    if (tokenParts.length !== 2) {
      return responseHandler({
        res,
        status: 401,
        message: "Invalid token",
      });
    }

    const [bearer, tokenValue] = tokenParts;

    if (bearer !== "Bearer") {
      return responseHandler({
        res,
        status: 401,
        message: "Invalid token",
      });
    }

    const verify = await verifyJWT(tokenValue);

    if (!verify) {
      return responseHandler({
        res,
        status: 401,
        message: "Invalid token",
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
