export default function MobileMenu() {
  return (
    <button
      type="button"
      className="mobile-menu-button"
      aria-label="Open navigation menu"
      aria-expanded="false"
      aria-controls="mobile-navigation"
      title="Menu"
    >
      <span className="mobile-menu-icon" aria-hidden="true">
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
      </span>
    </button>
  );
}