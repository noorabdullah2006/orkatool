import { toolFilters } from "./popular-tools-data";

export default function PopularToolsFilter() {
  return (
    <div className="popular-tools-filter">

      {toolFilters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`popular-tools-filter-button ${
            filter.value === "all"
              ? "is-active"
              : ""
          }`}
        >
          {filter.label}
        </button>
      ))}

    </div>
  );
}