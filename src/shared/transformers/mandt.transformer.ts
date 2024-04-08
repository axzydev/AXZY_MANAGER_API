import { MandtDTO } from "../DTO/mandt.DTO";
import { MandtEntity } from "../models/mandt";

export const mandtDTOTransformer = (entity: MandtEntity): MandtDTO => {
  return {
    uuid: entity.UUID,
    mandt: entity.MANDT,
    name: entity.NAME,
    description: entity.DESCTN,
    status: entity.STATUS,
  };
};

export const mandtEntityTransformer = (dto: MandtDTO): MandtEntity => {
  return {
    UUID: dto.uuid,
    MANDT: dto.mandt,
    NAME: dto.name,
    DESCTN: dto.description,
    STATUS: dto.status,
  };
};
