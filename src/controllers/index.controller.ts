import { Request, Response } from "express";
import { responseHandler } from "../utils/responseHandler";

export const helloWorld = (req: Request, res: Response) => {
  return responseHandler({
    res,
    status: 200,
    message: "Hello World!",
    data: {
      apiInfo: {
        version: "1.0.1",
        author: {
          name: "maag070208",
          email: "maag070208@gmail.com"
        },
      }
    },
  });
};
