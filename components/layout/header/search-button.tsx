interface SearchButtonProps {
  onClick?: () => void;
}

export default function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      type="button"
      className="search-button"
      aria-label="Search"
      onClick={onClick}
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