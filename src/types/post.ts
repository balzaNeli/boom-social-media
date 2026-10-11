export type PostAuthor = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type Post = {
  id: string;
  author: PostAuthor;
  content: string;
  imageUrl?: string | null;
  likesCount: number;
  commentsCount?: number;
  createdAt: string; // ISO 8601 - SQLite armazena como TEXT
  circleId?: string | null;
};
