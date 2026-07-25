import Container from "@/components/layout/container";
import FooterBrand from "./footer-brand";
import FooterLinks from "./footer-links";
import FooterSocial from "./footer-social";
import FooterBottom from "./footer-bottom";
import NewsletterForm from "./newsletter-form";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <Container>
        <div className="site-footer-inner">
          <div className="footer-top">
            <div className="footer-brand-wrapper">
              <FooterBrand />

              <NewsletterForm />

              <FooterSocial />
            </div>

            <FooterLinks />
          </div>

          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}