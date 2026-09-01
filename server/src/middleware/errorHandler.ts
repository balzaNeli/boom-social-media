import type { Request, Response, NextFunction } from 'express';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error('[error]', err);
  const message = err instanceof Error ? err.message : 'Erro interno';
  const status = (err as { status?: number })?.status ?? 500;
  res.status(status).json({ error: message });
}
