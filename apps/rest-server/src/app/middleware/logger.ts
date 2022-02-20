import { Request, Response, NextFunction } from 'express';

export const loggerMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Request to Rest Server at ' + req.hostname + ' from ' + req.ip);

  next();
};

export default loggerMiddleWare;
