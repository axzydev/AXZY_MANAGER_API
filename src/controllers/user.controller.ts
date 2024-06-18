import { Request, Response } from "express";
import {
  addUser,
  getAllUsers,
  getUserByEmail,
  getUsersByMandt,
} from "../services/user.service";
import { UserRequestDTO } from "../shared/DTO/user.DTO";
import {
  userDTOToEntity,
  userEntityToResponseDTO,
  usersEntityToResponseDTO,
} from "../shared/mapper/user.mapper";
import { responseHandler } from "../utils/responseHandler";
import { comparePassword, generateJWT, hashPassword } from "../utils/security";

export const create = async (req: Request, res: Response) => {
  try {
    const user = req.body as UserRequestDTO;

    const hashedPassword = await hashPassword(user.password);

    const newUser = await addUser(
      userDTOToEntity({
        ...user,
        password: hashedPassword,
      })
    );

    if (!newUser) {
      return responseHandler({
        res,
        status: 400,
        message: "User already exists",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "User created successfully",
      data: userEntityToResponseDTO(newUser),
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
    const users = await getAllUsers();

    if (!users) {
      return responseHandler({
        res,
        status: 404,
        message: "Users not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Users fetched successfully",
      data: usersEntityToResponseDTO(users),
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

export const getByMandt = async (req: Request, res: Response) => {
  try {
    const { mandt } = req.params;

    const users = await getUsersByMandt(mandt);

    if (!users) {
      return responseHandler({
        res,
        status: 404,
        message: "Users not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Users fetched successfully",
      data: usersEntityToResponseDTO(users),
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

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { mandt } = req.params;
    const user = await getUserByEmail(email);
    if (!user) {
      return responseHandler({
        res,
        status: 404,
        message: "User not found",
        data: null,
      });
    }

    if (user.MANDT !== mandt) {
      return responseHandler({
        res,
        status: 401,
        message: "Unauthorized the user does not belong to this mandt",
        data: null,
      });
    }

    if (!(await comparePassword(password, user.PSWRD))) {
      return responseHandler({
        res,
        status: 401,
        message: "Unauthorized the password is incorrect",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Users fetched successfully",
      data: await generateJWT(userEntityToResponseDTO(user)),
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
