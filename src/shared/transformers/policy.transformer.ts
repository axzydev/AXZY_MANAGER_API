import { PolicyDTO } from "../../shared/DTO/policy.DTO";
import { PolicyEntity } from "../../shared/models/policy";

export const policyDTOTransformer = (entity: PolicyEntity): PolicyDTO => {
  return {
    uuid: entity.UUID,
    policy: entity.POLICY,
    description: entity.DESCTN,
    mandt: entity.MANDT,
  };
};

export const policyEntityTransformer = (dto: PolicyDTO): PolicyEntity => {
  return {
    UUID: dto.uuid,
    POLICY: dto.policy,
    DESCTN: dto.description,
    MANDT: dto.mandt,
  };
};
