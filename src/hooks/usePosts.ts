/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import type { PaginatedPosts, Post, PostsQueryParams } from "../types/post";
import { getPosts, getPostsPaginated } from "../services/postService";

type UsePostsReturn = {
  posts: Post[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
};

/**
 * Hook simples: busca todos os posts.
 * Ideal quando não precisa de paginação.
 */
export function usePosts(params?: PostsQueryParams): UsePostsReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try { 
      setLoading(true);
      setError(null);
      const data = await getPosts(params);
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido ao carregar posts");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.circleId, params?.authorId, params?.page, params?.limit]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { posts, loading, error, refetch: fetchPosts };
}

type UsePaginatedPostsReturn = {
  posts: Post[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  hasMore: boolean;
  total: number;
  loadMore: () => Promise<void>;
  refetch: () => Promise<void>;
};

/**
 * Hook paginado: suporta "Carregar mais" e infinite scroll futuro.
 * Mantém lista acumulada e controla hasMore via PaginatedPosts.
 */
export function usePaginatedPosts(
  initialParams: PostsQueryParams & { limit?: number } = { limit: 2 }
): UsePaginatedPostsReturn {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginatedPosts | null>(null);
  const [page, setPage] = useState(initialParams.page ?? 1);

  const limit = initialParams.limit ?? 2;

  const fetchPage = useCallback(
    async (pageToFetch: number, append: boolean) => {
      try {
        if (append) setLoadingMore(true);
        else setLoading(true);
        setError(null);

        const result = await getPostsPaginated({
          ...initialParams,
          page: pageToFetch,
          limit,
        });

        setPagination(result);
        setPosts((prev) => (append ? [...prev, ...result.data] : result.data));
        setPage(pageToFetch);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro ao carregar posts");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialParams.circleId, initialParams.authorId, limit]
  );

  useEffect(() => {
    fetchPage(1, false);
  }, [fetchPage]);

  const loadMore = useCallback(async () => {
    if (!pagination?.hasMore || loadingMore || loading) return;
    await fetchPage(page + 1, true);
  }, [pagination?.hasMore, loadingMore, loading, page, fetchPage]);

  const refetch = useCallback(async () => {
    await fetchPage(1, false);
  }, [fetchPage]);

  return {
    posts,
    loading,
    loadingMore,
    error,
    hasMore: pagination?.hasMore ?? false,
    total: pagination?.total ?? 0,
    loadMore,
    refetch,
  };
}
