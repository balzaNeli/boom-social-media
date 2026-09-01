import type { Post } from "../../types/post";
import PostCard from "./PostCard";
import "./Posts.css";

type PostListProps = {
  posts: Post[];
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
};

export default function PostList({ posts, onLike, onComment, onShare }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="posts-empty">
        <p className="posts-empty-title">Nenhuma faísca por aqui ainda</p>
        <p className="posts-empty-subtitle">
          Seu círculo está esperando. Seja o primeiro a deixar um bilhete junto à fogueira.
        </p>
      </div>
    );
  }

  return (
    <div className="posts-feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
        />
      ))}
    </div>
  );
}
