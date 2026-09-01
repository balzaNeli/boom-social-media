import "./Posts.css";

type PostSkeletonProps = {
  count?: number;
};

export function PostSkeleton() {
  return (
    <article className="post-card skeleton" aria-hidden="true">
      <header className="post-card-header">
        <div className="skeleton-avatar skeleton-pulse" />
        <div className="skeleton-meta">
          <div className="skeleton-line skeleton-line--short skeleton-pulse" />
          <div className="skeleton-line skeleton-line--tiny skeleton-pulse" />
        </div>
      </header>
      <div className="post-card-content">
        <div className="skeleton-line skeleton-pulse" />
        <div className="skeleton-line skeleton-line--medium skeleton-pulse" />
        <div className="skeleton-image skeleton-pulse" />
      </div>
      <footer className="post-footer">
        <div className="post-actions">
          <span className="skeleton-action skeleton-pulse" />
          <span className="skeleton-action skeleton-pulse" />
          <span className="skeleton-action skeleton-pulse" />
        </div>
        <div className="skeleton-line skeleton-line--tiny skeleton-pulse" />
      </footer>
    </article>
  );
}

export default function PostSkeletonList({ count = 3 }: PostSkeletonProps) {
  return (
    <div className="posts-feed">
      {Array.from({ length: count }).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </div>
  );
}
