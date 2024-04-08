import { MandtDTO } from "../DTO/mandt.DTO";
import { MandtEntity } from "../models/mandt";
import {
  mandtDTOTransformer,
  mandtEntityTransformer,
} from "../transformers/mandt.transformer";

export const mandtEntityToDTO = (entity: MandtEntity): MandtDTO =>
  mandtDTOTransformer(entity);

export const mandtDTOToEntity = (dto: MandtDTO): MandtEntity =>
  mandtEntityTransformer(dto);

export const mandtsEntityToDTO = (entity: MandtEntity[]): MandtDTO[] =>
  entity.map(mandtDTOTransformer);

export const mandtsDTOToEntity = (dto: MandtDTO[]): MandtEntity[] =>
  dto.map(mandtEntityTransformer);
