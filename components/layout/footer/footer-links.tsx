const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Tools", href: "/tools" },
      { label: "Categories", href: "/categories" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="footer-links">
      {footerLinks.map((group) => (
        <div key={group.title} className="footer-column">
          <h3>{group.title}</h3>

          <ul>
            {group.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}