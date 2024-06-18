import { PolicyDTO } from "@shared/DTO/policy.DTO";
import { PolicyEntity } from "@shared/models/policy";
import {
  policyDTOTransformer,
  policyEntityTransformer,
} from "@shared/transformers/policy.transformer";

export const policyEntityToDTO = (entity: PolicyEntity): PolicyDTO =>
  policyDTOTransformer(entity);

export const policyDTOToEntity = (dto: PolicyDTO): PolicyEntity =>
  policyEntityTransformer(dto);

export const policiesEntityToDTO = (entity: PolicyEntity[]): PolicyDTO[] =>
  entity.map(policyDTOTransformer);

export const policiesDTOToEntity = (dto: PolicyDTO[]): PolicyEntity[] =>
  dto.map(policyEntityTransformer);
