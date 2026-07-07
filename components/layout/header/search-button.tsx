export default function SearchButton() {
  return (
    <button
      type="button"
      className="search-button"
      aria-label="Search"
    >
      <span className="search-button-icon">
        🔍
      </span>

      <span className="search-button-text">
        Search
      </span>

      <kbd className="search-shortcut">
        Ctrl K
      </kbd>
    </button>
  );
}