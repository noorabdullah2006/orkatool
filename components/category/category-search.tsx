type Props = {
  value: string;

  onChange: (
    value: string,
  ) => void;
};

export default function CategorySearch({
  value,
  onChange,
}: Props) {
  return (
    <section className="category-search">

      <div className="category-search-container">

        <input
          type="search"
          value={value}
          placeholder="Search tools..."
          className="category-search-input"
          onChange={(event) =>
            onChange(
              event.target.value,
            )
          }
        />

      </div>

    </section>
  );
}