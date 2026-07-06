const navigationItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tools",
    href: "/tools",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <nav className="site-navigation" aria-label="Primary Navigation">
      <ul className="site-navigation-list">
        {navigationItems.map((item) => (
          <li key={item.href} className="site-navigation-item">
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