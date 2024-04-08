import { MANDT_STATUS_ENUM } from "@prisma/client";
import { EntityBase } from "./entity-base.model";

export interface MandtEntity extends EntityBase {
  MANDT: string;
  NAME: string;
  DESCTN: string;
  STATUS: MANDT_STATUS_ENUM;
}
