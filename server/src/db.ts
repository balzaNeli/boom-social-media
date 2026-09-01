import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import type { Database } from 'sqlite';
import path from 'node:path';

export type Db = Database<sqlite3.Database, sqlite3.Statement>;

let cachedDb: Db | null = null;

export async function openDb(): Promise<Db> {
  if (cachedDb) return cachedDb;

  // Default consistente: server/database.sqlite independente de cwd
  // Permite override via DB_PATH (absoluto ou relativo ao cwd)
  const rawPath = process.env.DB_PATH;
  const dbPath = rawPath
    ? path.isAbsolute(rawPath)
      ? rawPath
      : path.resolve(process.cwd(), rawPath)
    : path.resolve(__dirname, '../database.sqlite');

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });

  // Performance + integridade (WAL é ideal para leituras concorrentes do feed)
  await db.exec(`PRAGMA journal_mode = WAL;`);
  await db.exec(`PRAGMA foreign_keys = ON;`);
  await db.exec(`PRAGMA synchronous = NORMAL;`);

  // ——— Opção B: normalizado (users + circles + posts) ———
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      avatar_url TEXT,
      created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
    );

    CREATE TABLE IF NOT EXISTS circles (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
    );

    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      author_id TEXT NOT NULL,
      circle_id TEXT,
      content TEXT NOT NULL CHECK(length(content) > 0),
      image_url TEXT,
      likes_count INTEGER NOT NULL DEFAULT 0 CHECK(likes_count >= 0),
      comments_count INTEGER NOT NULL DEFAULT 0 CHECK(comments_count >= 0),
      created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
      FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      FOREIGN KEY (circle_id) REFERENCES circles(id) ON DELETE SET NULL ON UPDATE CASCADE
    );

    CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id);
    CREATE INDEX IF NOT EXISTS idx_posts_circle_id ON posts(circle_id);
  `);

  await seedIfEmpty(db);

  cachedDb = db;
  return db;
}

export async function closeDb(): Promise<void> {
  if (cachedDb) {
    await cachedDb.close();
    cachedDb = null;
  }
}

async function seedIfEmpty(db: Db) {
  const { count } = await db.get<{ count: number }>(`SELECT COUNT(*) as count FROM posts`) ?? { count: 0 };
  if (count > 0) return;

  // Seed idempotente com INSERT OR IGNORE (permite re-rodar sem duplicar)
  await db.exec(`BEGIN TRANSACTION;`);

  try {
    // Usuários baseados em src/mocks/posts.ts
    await db.run(
      `INSERT OR IGNORE INTO users (id, name, avatar_url) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)`,
      [
        'u1', 'Linus Tux', '/src/assets/tux.png',
        'u2', 'Maya Grove', '/src/assets/tux.png',
        'u3', 'Alex Silva', '/src/assets/tux.png',
        'u4', 'Sofia Calma', '/src/assets/tux.png',
      ]
    );

    await db.run(
      `INSERT OR IGNORE INTO circles (id, name, description) VALUES (?, ?, ?), (?, ?, ?)`,
      [
        'c1', 'Fogueira Geral', 'Círculo principal da Boom',
        'c2', 'Design Calmo', 'Fogueira do círculo Design Calmo',
      ]
    );

    // Posts: mesmos 4 variados do mock, com timestamps relativos para demonstrar paginação/ordenação
    const now = Date.now();
    const iso = (offsetMs: number) => new Date(now - offsetMs).toISOString();

    const seedPosts: Array<[string, string | null, string, string | null, number, number, string]> = [
      // author_id, circle_id, content, image_url, likes_count, comments_count, created_at
      [
        'u1',
        'c1',
        'Caraca eu adoro usar linux quando estou comendo cheetos e sujando meu teclado todinho! 🤤 #linux #cheetos #teclado sujo',
        '/src/assets/image.jpg',
        67,
        12,
        iso(69 * 60 * 60 * 1000),
      ],
      [
        'u2',
        'c1',
        'Manhã de domingo na fogueira: café coado, caderno aberto e três páginas sem filtro. Alguém mais escreve à mão ainda? ✍️ #slowmorning #fogueira',
        null,
        23,
        8,
        iso(5 * 60 * 60 * 1000),
      ],
      [
        'u3',
        'c2',
        'Primeira colheita da horta do círculo! Tomatinhos ainda pequenos mas cheios de orgulho 🌱 Quem quer trocar mudas no próximo encontro?',
        '/src/assets/image.jpg',
        41,
        15,
        iso(30 * 60 * 1000),
      ],
      [
        'u4',
        'c2',
        'Compartilhei uma mensagem de voz de 2min sobre como lidar com a ansiedade antes de apresentar um projeto. Está na Fogueira do Círculo Design Calmo — respostas em voz são bem-vindas. 🎙️✨ Texto longo para testar quebra de linha, overflow-wrap e clamp de conteúdo dentro do card.',
        null,
        9,
        3,
        iso(2 * 24 * 60 * 60 * 1000),
      ],
    ];

    for (const [author_id, circle_id, content, image_url, likes_count, comments_count, created_at] of seedPosts) {
      await db.run(
        `INSERT INTO posts (author_id, circle_id, content, image_url, likes_count, comments_count, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [author_id, circle_id, content, image_url, likes_count, comments_count, created_at]
      );
    }

    await db.exec(`COMMIT;`);
    console.log('[db] seed: 4 usuários, 2 círculos e 4 posts inseridos');
  } catch (e) {
    await db.exec(`ROLLBACK;`);
    throw e;
  }
}
