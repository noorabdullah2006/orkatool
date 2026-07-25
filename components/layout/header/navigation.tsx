"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "./header-data";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="site-navigation"
      aria-label="Primary Navigation"
    >
      <ul className="site-navigation-list">
        {navigationItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <li
              key={item.href}
              className="site-navigation-item"
            >
              <Link
                href={item.href}
                className={`site-navigation-link ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}