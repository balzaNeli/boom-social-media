import type { Db } from '../db';
import type { PaginatedPosts, Post, PostRow } from '../types/post';
import { hasMore } from '../utils/pagination';

function rowToPost(row: PostRow): Post {
  return {
    id: String(row.id),
    author: {
      id: row.author_id,
      name: row.author_name,
      avatarUrl: row.author_avatar_url ?? '/src/assets/tux.png',
    },
    content: row.content,
    imageUrl: row.image_url,
    likesCount: row.likes_count,
    commentsCount: row.comments_count,
    createdAt: row.created_at,
    circleId: row.circle_id,
  };
}

type ListParams = {
  page: number;
  limit: number;
  offset: number;
  circleId?: string;
  authorId?: string;
};

export async function listPosts(db: Db, params: ListParams): Promise<PaginatedPosts> {
  const where: string[] = [];
  const values: unknown[] = [];

  if (params.circleId) {
    where.push('p.circle_id = ?');
    values.push(params.circleId);
  }
  if (params.authorId) {
    where.push('p.author_id = ?');
    values.push(params.authorId);
  }

  const whereSql = where.length ? `WHERE ${where.join(' AND ')}` : '';

  // Total para paginação
  const countRow = await db.get<{ total: number }>(
    `SELECT COUNT(*) as total FROM posts p ${whereSql}`,
    values
  );
  const total = countRow?.total ?? 0;

  // Dados paginados com JOIN users
  const rows = await db.all<PostRow[]>(
    `SELECT
       p.id, p.author_id, p.circle_id, p.content, p.image_url, p.likes_count, p.comments_count, p.created_at,
       u.name as author_name, u.avatar_url as author_avatar_url
     FROM posts p
     JOIN users u ON u.id = p.author_id
     ${whereSql}
     ORDER BY p.created_at DESC
     LIMIT ? OFFSET ?`,
    [...values, params.limit, params.offset]
  );

  const data = rows.map(rowToPost);

  return {
    data,
    total,
    page: params.page,
    limit: params.limit,
    hasMore: hasMore(total, params.page, params.limit),
  };
}

export async function getPostById(db: Db, id: string): Promise<Post | null> {
  const row = await db.get<PostRow>(
    `SELECT
       p.id, p.author_id, p.circle_id, p.content, p.image_url, p.likes_count, p.comments_count, p.created_at,
       u.name as author_name, u.avatar_url as author_avatar_url
     FROM posts p
     JOIN users u ON u.id = p.author_id
     WHERE p.id = ?`,
    [id]
  );
  return row ? rowToPost(row) : null;
}

export async function createPost(
  db: Db,
  dto: { content: string; imageUrl?: string | null; circleId?: string | null; authorId?: string }
): Promise<Post> {
  const content = dto.content?.trim();
  if (!content) {
    const err = new Error('Conteúdo é obrigatório');
    (err as { status?: number }).status = 400;
    throw err;
  }

  // Valida autor existe, fallback para u1 (Linus) para demo sem auth
  const authorId = dto.authorId?.trim() || 'u1';
  const authorExists = await db.get(`SELECT id FROM users WHERE id = ?`, [authorId]);
  if (!authorExists) {
    const err = new Error(`Autor não encontrado: ${authorId}`);
    (err as { status?: number }).status = 400;
    throw err;
  }

  // Valida circle se informado
  if (dto.circleId) {
    const circleExists = await db.get(`SELECT id FROM circles WHERE id = ?`, [dto.circleId]);
    if (!circleExists) {
      const err = new Error(`Círculo não encontrado: ${dto.circleId}`);
      (err as { status?: number }).status = 400;
      throw err;
    }
  }

  const result = await db.run(
    `INSERT INTO posts (author_id, circle_id, content, image_url, likes_count, comments_count)
     VALUES (?, ?, ?, ?, 0, 0)`,
    [authorId, dto.circleId ?? null, content, dto.imageUrl ?? null]
  );

  const id = String(result.lastID);
  const created = await getPostById(db, id);
  if (!created) throw new Error('Falha ao criar post');
  return created;
}

export async function deletePost(db: Db, id: string): Promise<boolean> {
  const result = await db.run(`DELETE FROM posts WHERE id = ?`, [id]);
  return (result.changes ?? 0) > 0;
}
