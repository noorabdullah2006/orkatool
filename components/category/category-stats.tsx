type Props = {
  totalTools: number;
};

export default function CategoryStats({
  totalTools,
}: Props) {
  return (
    <section className="category-stats">

      <div className="category-stat">

        <span className="category-stat-icon">
          🧰
        </span>

        <span className="category-stat-number">
          {totalTools}
        </span>

        <span className="category-stat-label">
          Available Tools
        </span>

      </div>

      <div className="category-stat">

        <span className="category-stat-icon">
          💯
        </span>

        <span className="category-stat-number">
          100%
        </span>

        <span className="category-stat-label">
          Free to Use
        </span>

      </div>

      <div className="category-stat">

        <span className="category-stat-icon">
          ⚡
        </span>

        <span className="category-stat-number">
          Fast
        </span>

        <span className="category-stat-label">
          Instant Results
        </span>

      </div>

      <div className="category-stat">

        <span className="category-stat-icon">
          🔒
        </span>

        <span className="category-stat-number">
          Secure
        </span>

        <span className="category-stat-label">
          No Signup Required
        </span>

      </div>

    </section>
  );
}