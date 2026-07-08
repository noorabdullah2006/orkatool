import Link from "next/link";

import Logo from "./logo";
import Navigation from "./navigation";
import SearchButton from "./search-button";
import ThemeToggle from "./theme-toggle";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  return (
    <aside
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`mobile-drawer ${
        isOpen ? "mobile-drawer-open" : ""
      }`}
    >
      {/* ======================================================
          Header
      ====================================================== */}

      <div className="mobile-drawer-header">
        <Logo />

        <button
          type="button"
          className="mobile-drawer-close"
          aria-label="Close Menu"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      {/* ======================================================
          Navigation
      ====================================================== */}

      <div
        className="mobile-drawer-navigation"
        onClick={onClose}
      >
        <Navigation />
      </div>

      {/* ======================================================
          Divider
      ====================================================== */}

      <div className="mobile-drawer-divider" />

      {/* ======================================================
          Actions
      ====================================================== */}

      <div className="mobile-drawer-actions">
        <SearchButton />

        <ThemeToggle />
      </div>

      {/* ======================================================
          Footer
      ====================================================== */}

      <div className="mobile-drawer-footer">
        <Link
          href="/about"
          className="mobile-footer-link"
          onClick={onClose}
        >
          About
        </Link>

        <Link
          href="/contact"
          className="mobile-footer-link"
          onClick={onClose}
        >
          Contact
        </Link>
      </div>
    </aside>
  );
}