import type { Post } from "../../types/post";
import PostCard from "./PostCard";
import Burst from "../shared/Burst";
import "./Posts.css";

type PostListProps = {
  posts: Post[];
  onLike?: (postId: string) => void;
};

export default function PostList({ posts, onLike }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="posts-empty">
        <Burst size={32} className="posts-empty-burst" />
        <p className="posts-empty-title">A fogueira está acesa e esperando</p>
        <p className="posts-empty-subtitle">
          Compartilhe a primeira faísca do círculo.
        </p>
      </div>
    );
  }

  return (
    <div className="posts-feed">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLike={onLike} />
      ))}
    </div>
  );
}
