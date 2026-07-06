export default function SearchButton() {
  return (
    <button
      type="button"
      className="search-button"
      aria-label="Search tools"
      title="Search"
    >
      <svg
        className="search-button-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <span className="search-button-text">
        Search
      </span>

      <kbd className="search-shortcut">
        Ctrl K
      </kbd>
    </button>
  );
}