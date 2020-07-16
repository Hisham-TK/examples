import { NextFunction, Request, Response } from 'express';

export function ErrorHandlerMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.error(err.stack);
  _next({ hi: 'there' });
  res.status(500).send('Something broke!');
}
