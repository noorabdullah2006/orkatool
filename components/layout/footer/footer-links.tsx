import { footerSections } from "./footer-data";

export default function FooterLinks() {
  return (
    <div className="footer-links">

      {footerSections.map((section) => (
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
                <a
                  href={link.href}
                  className="footer-link"
                >
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