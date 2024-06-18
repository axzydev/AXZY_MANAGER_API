import { USER_STATUS_ENUM } from "@prisma/client";
import { EntityBase } from "./entity-base.model";

export interface UserEntity extends EntityBase {
  USRNME: string;
  PSWRD: string;
  EMAIL: string;
  PHONE: string;
  STATUS: USER_STATUS_ENUM;
}
