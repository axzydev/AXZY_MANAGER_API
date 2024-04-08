import { AppKeyDTO } from "../DTO/app-key.DTO";
import { AppKeyEntity } from "../models/app-key";

export const appKeyDTOTransformer = (entity: AppKeyEntity): AppKeyDTO => {
    return {
      uuid: entity.UUID,
      appKey: entity.APPKEY,
      mandt: entity.MANDT,
    };
  }
  export const appKeyEntityTransformer = (dto: AppKeyDTO): AppKeyEntity => {
    return {
      UUID: dto.uuid,
      APPKEY: dto.appKey,
      MANDT: dto.mandt,
    };
  }