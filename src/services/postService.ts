import type { PaginatedPosts, Post, PostsQueryParams } from "../types/post";
import { mockPosts } from "../mocks/posts";

// Configuração da API - troca automática mock -> SQLite
// Defina VITE_API_URL no .env para apontar para seu backend SQLite
// Ex: VITE_API_URL=http://localhost:3000/api
const API_URL = import.meta.env.VITE_API_URL as string | undefined;
const USE_MOCK = !API_URL || import.meta.env.VITE_USE_MOCK === "true";

// Simula delay de rede para testar skeletons
const MOCK_DELAY_MS = 600;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Busca todos os posts (mock ou API real).
 * Quando SQLite estiver pronto, basta setar VITE_API_URL.
 */
export async function getPosts(params?: PostsQueryParams): Promise<Post[]> {
  if (USE_MOCK) {
    await delay(MOCK_DELAY_MS);
    let filtered = [...mockPosts];

    if (params?.circleId) {
      filtered = filtered.filter((p) => p.circleId === params.circleId);
    }
    if (params?.authorId) {
      filtered = filtered.filter((p) => p.author.id === params.authorId);
    }
    // Ordena por mais recente (SQLite: ORDER BY created_at DESC)
    filtered.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return filtered;
  }

  // --- API real (SQLite via REST) ---
  const url = new URL(`${API_URL}/posts`);
  if (params?.page) url.searchParams.set("page", String(params.page));
  if (params?.limit) url.searchParams.set("limit", String(params.limit));
  if (params?.circleId) url.searchParams.set("circleId", params.circleId);
  if (params?.authorId) url.searchParams.set("authorId", params.authorId);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Erro ao buscar posts: ${res.statusText}`);
  const data = (await res.json()) as Post[] | PaginatedPosts;
  // Suporta ambos formatos: Post[] ou { data: Post[] }
  return Array.isArray(data) ? data : data.data;
}

/**
 * Busca paginada - ideal para feed com "Carregar mais" ou infinite scroll.
 * Mock faz slice local; API real delega ao SQLite (LIMIT/OFFSET).
 */
export async function getPostsPaginated(
  params: PostsQueryParams = {}
): Promise<PaginatedPosts> {
  const page = params.page ?? 1;
  const limit = params.limit ?? 10;

  if (USE_MOCK) {
    await delay(MOCK_DELAY_MS);
    const all = await getPosts(params);
    // getPosts já filtrou, agora pagina
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

  const url = new URL(`${API_URL}/posts`);
  url.searchParams.set("page", String(page));
  url.searchParams.set("limit", String(limit));
  if (params.circleId) url.searchParams.set("circleId", params.circleId);
  if (params.authorId) url.searchParams.set("authorId", params.authorId);

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Erro ao buscar posts paginados: ${res.statusText}`);
  return (await res.json()) as PaginatedPosts;
}

export async function getPostById(id: string): Promise<Post> {
  if (USE_MOCK) {
    await delay(300);
    const post = mockPosts.find((p) => p.id === id);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }

  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) throw new Error(`Erro ao buscar post ${id}: ${res.statusText}`);
  return (await res.json()) as Post;
}

export async function createPost(
  dto: import("../types/post").CreatePostDTO
): Promise<Post> {
  if (USE_MOCK) {
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

  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dto),
  });
  if (!res.ok) throw new Error(`Erro ao criar post: ${res.statusText}`);
  return (await res.json()) as Post;
}
