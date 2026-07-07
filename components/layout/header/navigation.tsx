import { navigationItems } from "./header-data";

export default function Navigation() {
  return (
    <nav
      className="site-navigation"
      aria-label="Primary Navigation"
    >
      <ul className="site-navigation-list">
        {navigationItems.map((item) => (
          <li
            key={item.href}
            className="site-navigation-item"
          >
            <a
              href={item.href}
              className="site-navigation-link"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}