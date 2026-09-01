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

export type CreatePostDTO = {
  content: string;
  imageUrl?: string | null;
  circleId?: string | null;
};

export type UpdatePostDTO = Partial<CreatePostDTO>;

export type PaginatedPosts = {
  data: Post[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
};

export type PostsQueryParams = {
  page?: number;
  limit?: number;
  circleId?: string;
  authorId?: string;
};
