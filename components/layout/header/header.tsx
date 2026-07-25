"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/container";

import Logo from "./logo";
import Navigation from "./navigation";
import SearchButton from "./search-button";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";
import MobileDrawer from "./mobile-drawer";
import MobileOverlay from "./mobile-overlay";
import GlobalSearch from "./global-search";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen((previous) => !previous);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  /* ======================================================
     Lock Body Scroll
  ====================================================== */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("body-scroll-lock");
    } else {
      document.body.classList.remove("body-scroll-lock");
    }

    return () => {
      document.body.classList.remove("body-scroll-lock");
    };
  }, [isMobileMenuOpen]);

  /* ======================================================
     Scroll Detection
  ====================================================== */
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ======================================================
     ESC & Key Shortcuts
  ====================================================== */
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
      // Ctrl+K or Cmd+K
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header-scrolled" : ""}`}>
        <Container>
          <div className="site-header-inner">
            <Logo />

            <Navigation />

            <div className="site-header-actions">
              <SearchButton onClick={() => setIsSearchOpen(true)} />

              <ThemeToggle />

              <MobileMenu
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              />
            </div>
          </div>
        </Container>
      </header>

      <MobileOverlay
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}