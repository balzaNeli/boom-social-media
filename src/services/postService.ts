import type { CreatePostDTO, PaginatedPosts, Post, PostsQueryParams } from "../types/post";
import { mockPosts } from "../mocks/posts";

// Delay para skeletons (simula rede sem backend)
const MOCK_DELAY_MS = 600;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Busca todos os posts (mock local, sem backend) */
export async function getPosts(params?: PostsQueryParams): Promise<Post[]> {
  await delay(MOCK_DELAY_MS);
  let filtered = [...mockPosts];

  if (params?.circleId) {
    filtered = filtered.filter((p) => p.circleId === params.circleId);
  }
  if (params?.authorId) {
    filtered = filtered.filter((p) => p.author.id === params.authorId);
  }
  filtered.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return filtered;
}

/** Busca paginada local */
export async function getPostsPaginated(
  params: PostsQueryParams = {}
): Promise<PaginatedPosts> {
  const page = params.page ?? 1;
  const limit = params.limit ?? 10;

  await delay(MOCK_DELAY_MS);
  const all = await getPosts(params);
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = all.slice(start, end);
  return {
    data,
    total: all.length,
    page,
    limit,
    hasMore: end < all.length,
  };
}

export async function getPostById(id: string): Promise<Post> {
  await delay(300);
  const post = mockPosts.find((p) => p.id === id);
  if (!post) throw new Error("Post não encontrado");
  return post;
}

export async function createPost(dto: CreatePostDTO): Promise<Post> {
  await delay(400);
  const newPost: Post = {
    id: String(mockPosts.length + 1),
    author: {
      id: "me",
      name: "Você",
      avatarUrl: mockPosts[0].author.avatarUrl,
    },
    content: dto.content,
    imageUrl: dto.imageUrl ?? null,
    likesCount: 0,
    commentsCount: 0,
    createdAt: new Date().toISOString(),
    circleId: dto.circleId ?? null,
  };
  mockPosts.unshift(newPost);
  return newPost;
}
