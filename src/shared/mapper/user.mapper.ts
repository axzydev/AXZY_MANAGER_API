import { UserDTO, UserRequestDTO } from "../DTO/user.DTO";
import { UserEntity } from "../models/user";
import {
  userDTOResponseTransformer,
  userDTOTransformer,
  userEntityTransformer,
} from "../transformers/user.transformer";

export const userDTOToEntity = (dto: UserRequestDTO): UserEntity =>
  userEntityTransformer(dto);

export const userEntityToDTO = (entity: UserEntity): UserRequestDTO =>
  userDTOTransformer(entity);

export const usersEntityToDTO = (entity: UserEntity[]): UserRequestDTO[] =>
  entity.map(userDTOTransformer);

export const usersDTOToEntity = (dto: UserRequestDTO[]): UserEntity[] =>
  dto.map(userEntityTransformer);

export const userEntityToResponseDTO = (entity: UserEntity): UserDTO =>
  userDTOResponseTransformer(entity);

export const usersEntityToResponseDTO = (entity: UserEntity[]): UserDTO[] =>
  entity.map(userDTOResponseTransformer);