import { Response } from 'express';
import { ResponseHandler, ResponseHandlerParams, ResponseHandlerWithData } from '../shared/interfaces/responseHandler';
import { FlexibleType } from '../shared/interfaces/general';

export const responseHandler = ({ status, message, data, currentPage, totalPages, res }: ResponseHandlerParams): Response => {
  const responseObj: ResponseHandler | ResponseHandlerWithData<FlexibleType> = {
    status,
    message: message instanceof Error ? message.message : message,
  };

  if (!!data) (responseObj as ResponseHandlerWithData<FlexibleType>).data = data;
  if (!!currentPage) (responseObj as ResponseHandlerWithData<FlexibleType>).currentPage = currentPage;
  if (!!totalPages) (responseObj as ResponseHandlerWithData<FlexibleType>).totalPages = totalPages;

  return res.status(status).json(responseObj);
};
