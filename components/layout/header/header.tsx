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

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

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
      document.body.classList.add(
        "body-scroll-lock"
      );
    } else {
      document.body.classList.remove(
        "body-scroll-lock"
      );
    }

    return () => {
      document.body.classList.remove(
        "body-scroll-lock"
      );
    };
  }, [isMobileMenuOpen]);

  /* ======================================================
     ESC Close
  ====================================================== */

  useEffect(() => {
    function handleEscape(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    }

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <Container>
          <div className="site-header-inner">
            <Logo />

            <Navigation />

            <div className="site-header-actions">
              <SearchButton />

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
      />
    </>
  );
}