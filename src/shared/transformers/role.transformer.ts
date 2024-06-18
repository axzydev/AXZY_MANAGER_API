import { RoleDTO } from "../../shared/DTO/role.DTO";
import { RoleEntity } from "../../shared/models/role";

export const roleDTOTransformer = (entity: RoleEntity): RoleDTO => {
  return {
    uuid: entity.UUID,
    role: entity.ROLE,
    description: entity.DESCTN,
    mandt: entity.MANDT,
  };
};

export const roleEntityTransformer = (dto: RoleDTO): RoleEntity => {
  return {
    UUID: dto.uuid,
    ROLE: dto.role,
    DESCTN: dto.description,
    MANDT: dto.mandt,
  };
};
