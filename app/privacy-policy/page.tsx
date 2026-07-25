import Container from "@/components/layout/container/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | OrkaTool",
  description:
    "Review OrkaTool's Privacy Policy to see how we collect, protect, cookies, analytics, and process your data when you use our free online calculations.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "2026-07-16";

  return (
    <main className="content-page">
      <Container>
        <div className="content-page-body">
          <h1 className="content-page-title" style={{ textAlign: "left", marginBottom: "0.5rem" }}>Privacy Policy</h1>
          <p className="content-page-last-updated">
            Last Updated: {lastUpdated}
          </p>

          <div className="content-page-sections">
            <section>
              <h2 className="content-page-section-title">
                1. Introduction
              </h2>
              <p>
                Welcome to OrkaTool. We value your privacy. This Privacy Policy details how we handle the information you input when interacting with our free online calculations, conversions, and resources.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                2. Information Collection & Usage
              </h2>
              <p>
                OrkaTool is designed to run almost entirely inside your client browser. We <strong>do not request, store, or log</strong> the private values, financial parameters, or personal data you enter into our calculators (e.g., Zakat calculations, unit indices). All processing is executed client-side.
              </p>
              <p>
                If you use our Contact Form, we collect your name, email address, and message contents solely to communicate with you and address your technical support requests.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                3. Cookies & Local Storage
              </h2>
              <p>
                We may use browser local storage or session cookies to store your preferred preferences (such as light/dark mode theme choices). These values persist locally in your browser memory structures and can be cleared by purging your browser cookie history container.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                4. Analytics Configuration
              </h2>
              <p>
                We inspect anonymous traffic data patterns using simple server analytics scripts. These platforms do not track your specific identities, IP locations, or calculation parameters. The metrics collected represent total page impressions, referral URLs, and duration limits.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                5. Third-party Disclosures
              </h2>
              <p>
                We do not sell, trade, or distribute your email correspondence or form details to outside companies. We may employ third-party cloud engines to compile our website bundles; these systems only handle generic HTML responses.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                6. Data Security
              </h2>
              <p>
                We implement industry standard Secure Socket Layer (SSL) encryption rules, safeguarding data packaging between your client browsers and our hosting facilities.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                7. Your Data Rights
              </h2>
              <p>
                You may request that we review or purge any support emails or newsletter subscriptions we hold. You can do this at any time by contacting us directly at our support email address.
              </p>
            </section>

            <section>
              <h2 className="content-page-section-title">
                8. Contact
              </h2>
              <p>
                If you have questions regarding this Privacy Policy document, contact us by email: <strong>support@orkatool.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
