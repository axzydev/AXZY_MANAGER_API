import { USER_STATUS_ENUM } from "@prisma/client";

export interface UserDTO {
  uuid: string;
  mandt: string;
  username: string;
  status: USER_STATUS_ENUM;
}

export interface UserRequestDTO extends UserDTO {
  password: string;
  email: string;
  phone: string;
}
