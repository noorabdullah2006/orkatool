import Container from "@/components/layout/container";

import Logo from "./logo";
import Navigation from "./navigation";
import SearchButton from "./search-button";
import ThemeToggle from "./theme-toggle";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header-inner">
          <Logo />

          <Navigation />

          <div className="site-header-actions">
            <SearchButton />
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}