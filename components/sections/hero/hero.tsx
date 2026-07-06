import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

import HeroPreview from "./hero-preview";

export default function Hero() {
  return (
    <Section className="hero">
      <Container>
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <span className="hero-badge">
              Trusted Free Online Tools
            </span>

            <h1 className="hero-title">
              Fast, Accurate &amp; Free
              <br />
              Online Tools
            </h1>

            <p className="hero-description">
              Discover modern calculators, converters and utilities
              designed to be fast, accurate and easy to use.
              No registration required.
            </p>

            {/* Search Component */}
            <div className="hero-search">
              {/* Search Input will be added here */}
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              {/* Primary Button */}

              {/* Secondary Button */}
            </div>

            {/* Trust Features */}
            <div className="hero-features">
              <span>⚡ Fast</span>
              <span>🎯 Accurate</span>
              <span>📱 Mobile Friendly</span>
              <span>🆓 Free Forever</span>
            </div>
          </div>

          {/* Right Preview */}
          <HeroPreview />
        </div>
      </Container>
    </Section>
  );
}