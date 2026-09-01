import { useState } from "react";
import type { Post } from "../../types/post";
import { formatRelativeTime } from "../../utils/formatRelativeTime";
import tuxFallback from "../../assets/tux.png";
import "./Posts.css";

type PostCardProps = {
  post: Post;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
};

export default function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  const [avatarError, setAvatarError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const timeLabel = formatRelativeTime(post.createdAt);
  const showImage = Boolean(post.imageUrl) && !imageError;

  return (
    <article className="post-card">
      <header className="post-card-header">
        <img
          src={avatarError ? tuxFallback : post.author.avatarUrl}
          alt={`Avatar de ${post.author.name}`}
          className="post-card-image"
          onError={() => setAvatarError(true)}
        />
        <div className="post-meta">
          <h3 className="post-author">{post.author.name}</h3>
          <time dateTime={post.createdAt}>{timeLabel}</time>
        </div>
      </header>

      <div className="post-card-content">
        <p className="post-text">{post.content}</p>
        {showImage && (
          <img
            src={post.imageUrl as string}
            alt="Imagem do post"
            className="post-image"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        )}
      </div>

      <footer className="post-footer">
        <div className="post-actions">
          <button type="button" aria-label="Curtir postagem" onClick={() => onLike?.(post.id)}>
            ❤️
          </button>
          <button type="button" aria-label="Comentar postagem" onClick={() => onComment?.(post.id)}>
            💬
          </button>
          <button type="button" aria-label="Compartilhar postagem" onClick={() => onShare?.(post.id)}>
            🔄
          </button>
        </div>
        <div className="post-stats">
          <span>
            {post.likesCount} {post.likesCount === 1 ? "curtida" : "curtidas"}
          </span>
          {typeof post.commentsCount === "number" && (
            <span className="post-stats-separator">·</span>
          )}
          {typeof post.commentsCount === "number" && (
            <span>
              {post.commentsCount} {post.commentsCount === 1 ? "comentário" : "comentários"}
            </span>
          )}
        </div>
      </footer>
    </article>
  );
}
