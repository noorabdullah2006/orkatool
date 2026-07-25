import Link from "next/link";
import { footerSections } from "./footer-data";
import { tools } from "@/content/tools/tool.data";

export default function FooterLinks() {
  // Query popular and published tools dynamically from tool.data.ts
  const popularToolsLinks = tools
    .filter((t) => t.published && t.popular)
    .map((t) => ({
      label: t.title,
      href: `/tools/${t.slug}`,
    }));

  const dynamicSections = footerSections.map((section) => {
    if (section.title === "Popular Tools") {
      return {
        ...section,
        links: popularToolsLinks,
      };
    }
    return section;
  });

  return (
    <nav aria-label="Footer navigation">
      <div className="footer-links">
        {dynamicSections.map((section) => (
          <div
            key={section.title}
            className="footer-links-group"
          >
            <h3 className="footer-links-title">
              {section.title}
            </h3>

            <ul className="footer-links-list">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}