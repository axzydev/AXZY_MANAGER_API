import { prismaClient } from "@config/prisma";
import { PolicyEntity } from "@shared/models/policy";

export const addPolicy = async (
  policy: PolicyEntity
): Promise<PolicyEntity | null> => {
  try {
    const newPolicy = await prismaClient.pOLICIES.create({
      data: {
        ...policy,
      },
    });
    return newPolicy;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPolicy = async (
  policyId: string
): Promise<PolicyEntity | null> => {
  try {
    const policy = await prismaClient.pOLICIES.findUnique({
      where: {
        UUID: policyId,
      },
    });
    return policy;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getPolicies = async (): Promise<PolicyEntity[]> => {
  try {
    const policies = await prismaClient.pOLICIES.findMany();
    return policies;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
