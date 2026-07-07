export default function MobileMenu() {
  return (
    <button
      type="button"
      className="mobile-menu-button"
      aria-label="Open Menu"
    >
      <span className="mobile-menu-icon">
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
      </span>
    </button>
  );
}