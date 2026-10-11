import type { Post } from "../../types/post";
import PostList from "./PostList";
import PostSkeletonList from "./PostSkeleton";
import { AlertCircle } from "lucide-react";
import Burst from "../shared/Burst";
import "./Posts.css";

type PostsProps = {
  posts: Post[];
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
};

/**
 * Feed de posts (frontend puro).
 * - Recebe tudo via props; busca e paginação voltam com o backend real.
 * - Estados: loading (skeleton), error (retry), lista/vazio (PostList trata).
 */
export default function Posts({ posts, loading = false, error = null, onRetry }: PostsProps) {
  if (loading) {
    return <PostSkeletonList count={posts.length || 2} />;
  }

  if (error) {
    return (
      <div className="posts-feed">
        <div className="posts-error" role="alert">
          <p>
            <AlertCircle size={20} aria-hidden="true" />
            Não foi possível carregar as faíscas: {error}
          </p>
          <button type="button" onClick={onRetry}>
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PostList posts={posts} />
      {posts.length > 0 && (
        <div className="feed-end">
          <Burst size={32} className="feed-end-burst" />
          <p className="feed-end-title">Você viu tudo por hoje</p>
          <p className="feed-end-text">Volte quando quiser, o círculo continua aqui.</p>
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
