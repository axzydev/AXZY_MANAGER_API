import { RoleDTO } from "../../shared/DTO/role.DTO";
import { RoleEntity } from "../../shared/models/role";
import {
  roleDTOTransformer,
  roleEntityTransformer,
} from "../../shared/transformers/role.transformer";

export const roleEntityToDTO = (entity: RoleEntity): RoleDTO =>
  roleDTOTransformer(entity);

export const roleDTOToEntity = (dto: RoleDTO): RoleEntity =>
  roleEntityTransformer(dto);

export const rolesEntityToDTO = (entity: RoleEntity[]): RoleDTO[] =>
  entity.map(roleDTOTransformer);

export const rolesDTOToEntity = (dto: RoleDTO[]): RoleEntity[] =>
  dto.map(roleEntityTransformer);
