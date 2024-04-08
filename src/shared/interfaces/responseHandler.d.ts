import { Response } from "express";

export interface ResponseHandler {
  status: number;
  message: Error | string;
}

export interface ResponseHandlerWithData<FlexibleType> extends ResponseHandler {
  data?: FlexibleType;
  currentPage?: number;
  totalPages?: number;
}

export interface ResponseHandlerParams
  extends ResponseHandlerWithData<FlexibleType> {
  res: Response;
}
