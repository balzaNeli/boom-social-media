import { env } from './config/env';
import { openDb, closeDb } from './db';
import { createApp } from './app';

async function main() {
  const db = await openDb();
  const app = createApp(db);

  const server = app.listen(env.PORT, () => {
    console.log(`[server] rodando em http://localhost:${env.PORT}`);
    console.log(`[server] health: http://localhost:${env.PORT}/health`);
    console.log(`[server] posts: http://localhost:${env.PORT}/api/posts?page=1&limit=2`);
  });

  const shutdown = async () => {
    console.log('\n[server] encerrando...');
    server.close(async () => {
      await closeDb();
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

main().catch((err) => {
  console.error('[server] erro fatal', err);
  process.exit(1);
});
