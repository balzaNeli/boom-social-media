import express from 'express';
import cors from 'cors';
import type { Db } from './db';
import { env } from './config/env';
import postsRouter from './routes/posts.routes';
import { errorHandler } from './middleware/errorHandler';

export function createApp(db: Db) {
  const app = express();

  app.use(
    cors({
      origin: env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(express.json({ limit: '1mb' }));

  // Injeta db em req para controllers (evita import circular)
  app.use((req, _res, next) => {
    (req as unknown as { db: Db }).db = db;
    next();
  });

  app.get('/health', (_req, res) => {
    res.json({ status: 'ok', db: 'connected' });
  });

  // Prefixo /api para alinhar com VITE_API_URL=http://localhost:3001/api
  app.use('/api/posts', postsRouter);
  // Compat: também expõe /posts sem /api para retrocompatibilidade
  app.use('/posts', postsRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
  });

  app.use(errorHandler);

  return app;
}
