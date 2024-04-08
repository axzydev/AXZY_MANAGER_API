import { EntityBase } from "./entity-base.model";

export interface AppKeyEntity extends EntityBase {
  APPKEY: string;
  MANDT: string;
}
