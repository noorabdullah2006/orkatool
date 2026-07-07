import Container from "@/components/layout/container";

import FooterBrand from "./footer-brand";
import FooterLinks from "./footer-links";
import FooterSocial from "./footer-social";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer-inner">
          <div className="footer-top">
            <div className="footer-brand-wrapper">
              <FooterBrand />
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