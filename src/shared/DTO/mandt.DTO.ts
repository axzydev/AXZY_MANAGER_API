import { MANDT_STATUS_ENUM } from "@prisma/client";

export interface MandtDTO {
  uuid:string;
  mandt: string;
  name: string;
  description: string;
  status: MANDT_STATUS_ENUM;
}
