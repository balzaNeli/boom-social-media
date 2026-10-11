import { useState } from "react";
import { Flame } from "lucide-react";
import type { Post } from "../../types/post";
import { formatRelativeTime } from "../../utils/formatRelativeTime";
import "./Posts.css";

type PostCardProps = {
  post: Post;
  onLike?: (postId: string) => void;
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PostCard({ post, onLike }: PostCardProps) {
  const [avatarError, setAvatarError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [sent, setSent] = useState(false);

  const timeLabel = formatRelativeTime(post.createdAt);
  const showImage = Boolean(post.imageUrl) && !imageError;

  const sendWarmth = () => {
    setSent(true);
    onLike?.(post.id);
  };

  return (
    <article className="post-card">
      <div className="post-avatar-col">
        {avatarError ? (
          <span className="post-avatar-fallback" aria-hidden="true">
            {initials(post.author.name)}
          </span>
        ) : (
          <img
            src={post.author.avatarUrl}
            alt={`Avatar de ${post.author.name}`}
            className="post-avatar"
            onError={() => setAvatarError(true)}
          />
        )}
      </div>

      <div className="post-body">
        <header className="post-card-header">
          <h3 className="post-author">{post.author.name}</h3>
          <time dateTime={post.createdAt}>{timeLabel}</time>
        </header>

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

        <div className="post-actions">
          <button
            type="button"
            className={sent ? "warmth-btn sent" : "warmth-btn"}
            onClick={sendWarmth}
            aria-label={sent ? "Você enviou calor" : "Enviar calor"}
          >
            <Flame size={20} aria-hidden="true" />
            {sent ? "Você enviou calor" : "Enviar calor"}
          </button>
        </div>
      </div>
    </article>
  );
}
