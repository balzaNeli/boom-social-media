import type { Request, Response } from 'express';
import type { Db } from '../db';
import { parsePagination } from '../utils/pagination';
import * as postsService from '../services/posts.service';

function getDb(req: Request): Db {
  return (req as unknown as { db: Db }).db;
}

export async function listPosts(req: Request, res: Response) {
  const db = getDb(req);
  const { page, limit, offset } = parsePagination(req.query as Record<string, unknown>);
  const circleId = typeof req.query.circleId === 'string' ? req.query.circleId : undefined;
  const authorId = typeof req.query.authorId === 'string' ? req.query.authorId : undefined;

  const result = await postsService.listPosts(db, { page, limit, offset, circleId, authorId });
  res.json(result);
}

export async function getPostById(req: Request, res: Response) {
  const db = getDb(req);
  const id = String(req.params.id);
  const post = await postsService.getPostById(db, id);
  if (!post) {
    res.status(404).json({ error: 'Post não encontrado' });
    return;
  }
  res.json(post);
}

export async function createPost(req: Request, res: Response) {
  const db = getDb(req);
  const { content, imageUrl, circleId, authorId } = req.body as {
    content?: string;
    imageUrl?: string | null;
    circleId?: string | null;
    authorId?: string;
  };

  const post = await postsService.createPost(db, {
    content: content ?? '',
    imageUrl: imageUrl ?? null,
    circleId: circleId ?? null,
    authorId,
  });

  res.status(201).json(post);
}

export async function deletePost(req: Request, res: Response) {
  const db = getDb(req);
  const id = String(req.params.id);
  const ok = await postsService.deletePost(db, id);
  if (!ok) {
    res.status(404).json({ error: 'Post não encontrado' });
    return;
  }
  res.status(204).send();
}
