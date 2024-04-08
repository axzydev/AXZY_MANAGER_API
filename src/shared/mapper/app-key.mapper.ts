import { AppKeyDTO } from "../DTO/app-key.DTO";
import { AppKeyEntity } from "../models/app-key";
import {
  appKeyDTOTransformer,
  appKeyEntityTransformer,
} from "../transformers/app-key.transformer";

export const appKeyDTOToEntity = (dto: AppKeyDTO): AppKeyEntity =>
  appKeyEntityTransformer(dto);

export const appKeyEntityToDTO = (entity: AppKeyEntity): AppKeyDTO =>
  appKeyDTOTransformer(entity);

export const appsKeyEntityToDTO = (entity: AppKeyEntity[]): AppKeyDTO[] =>
  entity.map(appKeyDTOTransformer);

export const appsKeyDTOToEntity = (dto: AppKeyDTO[]): AppKeyEntity[] =>
  dto.map(appKeyEntityTransformer);
