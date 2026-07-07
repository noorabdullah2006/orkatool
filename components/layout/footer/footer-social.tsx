import { socialLinks } from "./footer-data";

export default function FooterSocial() {
  return (
    <div className="footer-social">

      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="footer-social-link"
          aria-label={item.label}
        >
          {item.label}
        </a>
      ))}

    </div>
  );
}