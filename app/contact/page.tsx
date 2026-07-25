import Container from "@/components/layout/container/container";
import ContactForm from "@/components/contact/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OrkaTool",
  description:
    "Get in touch with the OrkaTool team for support, feature suggestions, partnership opportunities, or feedback on our free online calculators and tools.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@orkatool.com",
      "areaServed": "Global",
    }
  };

  return (
    <main className="content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        {/* Header */}
        <div className="content-page-header">
          <span className="category-badge content-page-badge">
            Get In Touch
          </span>
          <h1 className="content-page-title">
            Contact Our Team
          </h1>
          <p className="content-page-subtitle content-page-subtitle--narrow">
            Have a suggestion, bug report, or want to request a new tool? Shoot us a message, and we&apos;ll reply as soon as possible.
          </p>
        </div>

        <ContactForm />

        {/* Contact FAQ */}
        <div className="content-page-section" style={{ marginTop: "6rem" }}>
          <h2 className="content-page-section-heading">
            Frequently Asked Questions
          </h2>
          <div className="content-page-faq-grid">
            <div>
              <h4 className="content-page-faq-title">How fast do you respond?</h4>
              <p className="content-page-faq-text">
                We typically reply to all messages within 12 to 24 hours.
              </p>
            </div>
            <div>
              <h4 className="content-page-faq-title">Can I request a custom tool?</h4>
              <p className="content-page-faq-text">
                Absolutely! We prioritize adding free tools requested by our community.
              </p>
            </div>
            <div>
              <h4 className="content-page-faq-title">Is my contact information secure?</h4>
              <p className="content-page-faq-text">
                Yes. We never compile, sell, or rent your email address or personal messages to third parties.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
