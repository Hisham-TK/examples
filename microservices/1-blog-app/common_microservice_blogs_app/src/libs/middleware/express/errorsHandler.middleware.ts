import { NextFunction, Request, Response } from 'express';

export function ErrorHandlerMiddleware(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  // next({ hi: 'there' });
  console.error(err.stack);
  res.status(500).send('Something broke!');
}
