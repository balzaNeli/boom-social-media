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
  createdAt: string;
  circleId?: string | null;
};

export type CreatePostDTO = {
  content: string;
  imageUrl?: string | null;
  circleId?: string | null;
  // authorId é opcional no body; se não vier usa u1 (Linus) para demo
  authorId?: string;
};

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

// Row cru do SQLite (snake_case)
export type PostRow = {
  id: number;
  author_id: string;
  author_name: string;
  author_avatar_url: string | null;
  circle_id: string | null;
  content: string;
  image_url: string | null;
  likes_count: number;
  comments_count: number;
  created_at: string;
};
