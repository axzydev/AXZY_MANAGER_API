import { Request, Response } from "express";
import { addPolicy, getPolicies, getPolicy } from "../services/policy.service";
import { PolicyDTO } from "../shared/DTO/policy.DTO";
import {
  policiesEntityToDTO,
  policyDTOToEntity,
  policyEntityToDTO,
} from "../shared/mapper/policy.mapper";
import { responseHandler } from "../utils/responseHandler";

export const create = async (req: Request, res: Response) => {
  try {
    const policy = req.body as PolicyDTO;

    const newPolicy = await addPolicy(policyDTOToEntity(policy));

    if (!newPolicy) {
      return responseHandler({
        res,
        status: 400,
        message: "Policy already exists",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 201,
      message: "Policy created successfully",
      data: policyEntityToDTO(newPolicy),
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
    const policies = await getPolicies();

    return responseHandler({
      res,
      status: 200,
      message: "Policies fetched successfully",
      data: policiesEntityToDTO(policies),
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
    const policyId = req.params.id;

    const policy = await getPolicy(policyId);

    if (!policy) {
      return responseHandler({
        res,
        status: 404,
        message: "Policy not found",
        data: null,
      });
    }

    return responseHandler({
      res,
      status: 200,
      message: "Policy fetched successfully",
      data: policyEntityToDTO(policy),
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
