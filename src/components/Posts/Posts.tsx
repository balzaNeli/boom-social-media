import { usePaginatedPosts } from "../../hooks/usePosts";
import PostList from "./PostList";
import PostSkeletonList from "./PostSkeleton";
import "./Posts.css";

type PostsProps = {
  limit?: number;
  circleId?: string;
};

/**
 * Feed de posts (mock local).
 * - Usa paginação (limit padrão 2 para demonstrar "Carregar mais" com 4 mocks)
 * - Estados: loading (skeleton), error (retry), empty (PostList trata), hasMore (botão)
 */
export default function Posts({ limit = 2, circleId }: PostsProps) {
  const { posts, loading, loadingMore, error, hasMore, total, loadMore, refetch } =
    usePaginatedPosts({ limit, circleId });

  if (loading) {
    return <PostSkeletonList count={limit} />;
  }

  if (error) {
    return (
      <div className="posts-feed">
        <div className="posts-error" role="alert">
          <p>Não foi possível carregar as faíscas: {error}</p>
          <button type="button" onClick={refetch}>
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PostList posts={posts} />

      {(hasMore || total > 0) && (
        <div className="posts-feed-footer">
          <span className="posts-total">
            {posts.length} de {total} faísca{total !== 1 ? "s" : ""}
          </span>

          {hasMore ? (
            <button
              type="button"
              className="load-more-btn"
              onClick={loadMore}
              disabled={loadingMore}
              aria-busy={loadingMore}
            >
              {loadingMore ? "Carregando..." : "Carregar mais"}
            </button>
          ) : (
            <span className="posts-total">Fim.</span>
          )}

          {loadingMore && (
            <div style={{ width: "100%", maxWidth: "680px" }}>
              <PostSkeletonList count={1} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

// Re-exports para uso granular
export { default as PostCard } from "./PostCard";
export { default as PostList } from "./PostList";
export { default as PostSkeletonList } from "./PostSkeleton";
export { PostSkeleton } from "./PostSkeleton";
