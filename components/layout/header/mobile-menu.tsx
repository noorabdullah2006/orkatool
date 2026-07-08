interface MobileMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MobileMenu({
  isOpen,
  onClick,
}: MobileMenuProps) {
  return (
    <button
      type="button"
      className={`mobile-menu-button ${
        isOpen ? "mobile-menu-open" : ""
      }`}
      aria-label={
        isOpen
          ? "Close Menu"
          : "Open Menu"
      }
      aria-expanded={isOpen}
      aria-controls="mobile-drawer"
      onClick={onClick}
    >
      <span className="mobile-menu-icon">
        <span className="mobile-menu-line"></span>

        <span className="mobile-menu-line"></span>

        <span className="mobile-menu-line"></span>
      </span>
    </button>
  );
}