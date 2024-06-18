import { RightDTO } from "../../shared/DTO/right.DTO";
import { RightEntity } from "../../shared/models/right";

export const rightDTOTransformer = (entity: RightEntity): RightDTO => {
  return {
    uuid: entity.UUID,
    right: entity.RIGHT,
    description: entity.DESCTN,
    mandt: entity.MANDT,
  };
};

export const rightEntityTransformer = (dto: RightDTO): RightEntity => {
  return {
    UUID: dto.uuid,
    RIGHT: dto.right,
    DESCTN: dto.description,
    MANDT: dto.mandt,
  };
};
