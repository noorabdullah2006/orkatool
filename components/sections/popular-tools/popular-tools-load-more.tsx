import Link from "next/link";

export default function PopularToolsLoadMore() {
  return (
    <div className="popular-tools-load-more">

      <Link
        href="/tools"
        className="popular-tools-load-more-button"
      >
        View All Tools
      </Link>

    </div>
  );
}