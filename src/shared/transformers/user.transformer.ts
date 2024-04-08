import { UserDTO, UserRequestDTO } from "../DTO/user.DTO";
import { UserEntity } from "../models/user";

export const userDTOResponseTransformer = (entity: UserEntity): UserDTO => {
  return {
    uuid: entity.UUID,
    mandt: entity.MANDT,
    username: entity.USRNME,
    status: entity.STATUS,
  };

}

export const userDTOTransformer = (entity: UserEntity): UserRequestDTO => {
  return {
    uuid: entity.UUID,
    mandt: entity.MANDT,
    username: entity.USRNME,
    password: entity.PSWRD,
    email: entity.EMAIL,
    phone: entity.PHONE,
    status: entity.STATUS,
  };
};

export const userEntityTransformer = (dto: UserRequestDTO): UserEntity => {
  return {
    UUID: dto.uuid,
    MANDT: dto.mandt,
    USRNME: dto.username,
    PSWRD: dto.password,
    EMAIL: dto.email,
    PHONE: dto.phone,
    STATUS: dto.status,
  };
};
