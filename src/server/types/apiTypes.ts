import { NextApiRequest, NextApiResponse } from 'next';

interface IResponseMessage {
  message: string;
}
interface IResponseError {
  error: IResponseMessage | unknown;
}

export type TResponse<T = any> = NextApiResponse<T | IResponseError>;

type TRequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

interface ICustomRequest<T> extends NextApiRequest {
  body: T;
  method: TRequestMethod;
}

export type TRequest<T = any> = ICustomRequest<T>;

export interface IMiddlewareProps {
  req: TRequest;
  res: TResponse;
}

export type THandler = (req: TRequest, res: TResponse) => Promise<void> | void;
