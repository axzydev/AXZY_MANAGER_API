import { RightDTO } from "@shared/DTO/right.DTO";
import { RightEntity } from "@shared/models/right";
import {
  rightDTOTransformer,
  rightEntityTransformer,
} from "@shared/transformers/right.transformer";

export const rightEntityToDTO = (entity: RightEntity): RightDTO =>
  rightDTOTransformer(entity);

export const rightDTOToEntity = (dto: RightDTO): RightEntity =>
  rightEntityTransformer(dto);

export const rightsEntityToDTO = (entity: RightEntity[]): RightDTO[] =>
  entity.map(rightDTOTransformer);

export const rightsDTOToEntity = (dto: RightDTO[]): RightEntity[] =>
  dto.map(rightEntityTransformer);
