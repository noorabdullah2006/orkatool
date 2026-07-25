import Container from "@/components/layout/container/container";
import Link from "next/link";

import { getAllTools } from "@/content/tools";
import { getAllCategories } from "@/content/categories";
import { getPublishedBlogs } from "@/content/blogs/blog.utils";
import type { Metadata } from "next";
import { Zap, Shield, Smartphone, Award, Lock, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | OrkaTool",
  description:
    "Learn more about OrkaTool's mission to provide fast, free, secure, and accurate web utilities for developers, designers, and everyday users.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | OrkaTool",
    description:
      "Learn more about OrkaTool's mission to provide fast, free, secure, and accurate web utilities.",
    type: "website",
    url: "https://orkatool.com/about",
  },
};

export default function AboutPage() {
  const toolsCount = getAllTools().filter((t) => t.published).length;
  const categoriesCount = getAllCategories().length;
  const articlesCount = getPublishedBlogs().length;
  const lastUpdated = "2026-07-16";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "OrkaTool",
      "url": "https://orkatool.com",
      "description": "Fast, free, and secure online utilities and calculators in one place.",
    }
  };

  return (
    <main className="content-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        {/* Hero Section */}
        <div className="content-page-header">
          <span className="category-badge content-page-badge">
            About OrkaTool
          </span>
          <h1 className="content-page-title">
            The Web&apos;s Premium Utility Box
          </h1>
          <p className="content-page-subtitle">
            OrkaTool is built with a simple mission: to deliver blazingly fast, privacy-focused, and completely free online tools. No accounts, no paywalls, no limits.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="content-page-section">
          <div className="content-page-grid">
            <div className="content-page-card">
              <h2 className="content-page-card-title">
                Our Mission
              </h2>
              <p className="content-page-card-text">
                To democratize access to everyday digital tools by stripping away the bloated advertisements, tracking cookies, and artificial limits common on legacy tool repositories.
              </p>
            </div>

            <div className="content-page-card">
              <h2 className="content-page-card-title">
                Our Vision
              </h2>
              <p className="content-page-card-text">
                To become the default open-source companion for builders, developers, students, and professionals by providing accurate mathematical calculations and data transformations instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Core Value Pillars */}
        <div className="content-page-section">
          <h2 className="content-page-section-heading">
            Why OrkaTool Exists
          </h2>
          <div className="content-page-grid--narrow content-page-grid">
            <div className="content-page-value">
              <div className="content-page-value-icon">
                <Zap size={24} />
              </div>
              <h3 className="content-page-value-title">Blazingly Fast</h3>
              <p className="content-page-value-text">
                Every calculation and processing happens client-side or on optimized servers, delivering results under milliseconds.
              </p>
            </div>

            <div className="content-page-value">
              <div className="content-page-value-icon">
                <CheckCircle size={24} />
              </div>
              <h3 className="content-page-value-title">100% Free</h3>
              <p className="content-page-value-text">
                No subscriptions, hidden plans, registration blocks, or usage credits. Just direct access to utilities.
              </p>
            </div>

            <div className="content-page-value">
              <div className="content-page-value-icon">
                <Shield size={24} />
              </div>
              <h3 className="content-page-value-title">Enterprise Security</h3>
              <p className="content-page-value-text">
                We support end-to-end SSL encryption. Your calculations never sit in unsafe temporary database structures.
              </p>
            </div>

            <div className="content-page-value">
              <div className="content-page-value-icon">
                <Smartphone size={24} />
              </div>
              <h3 className="content-page-value-title">Mobile Optimized</h3>
              <p className="content-page-value-text">
                A highly fluid layout styled natively for touchscreens, mobile viewports, tablets, and desktop devices.
              </p>
            </div>

            <div className="content-page-value">
              <div className="content-page-value-icon">
                <Award size={24} />
              </div>
              <h3 className="content-page-value-title">Accurate Results</h3>
              <p className="content-page-value-text">
                Formula engines verified by testing groups, ensuring top decimal correctness for tax and technical calculators.
              </p>
            </div>

            <div className="content-page-value">
              <div className="content-page-value-icon">
                <Lock size={24} />
              </div>
              <h3 className="content-page-value-title">Zero Log Privacy</h3>
              <p className="content-page-value-text">
                We believe your data is yours. Most calculations compile directly inside your local browser memory storage.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="content-page-section">
          <div className="content-page-stats">
            <div>
              <h4 className="content-page-stat-number">
                {toolsCount}+
              </h4>
              <span className="content-page-stat-label">
                Interactive Tools
              </span>
            </div>
            <div>
              <h4 className="content-page-stat-number">
                {categoriesCount}
              </h4>
              <span className="content-page-stat-label">
                Categories
              </span>
            </div>
            <div>
              <h4 className="content-page-stat-number">
                {articlesCount}
              </h4>
              <span className="content-page-stat-label">
                Guides & Articles
              </span>
            </div>
            <div>
              <h4 className="content-page-stat-number content-page-stat-number--sm">
                {lastUpdated}
              </h4>
              <span className="content-page-stat-label">
                Last Updated
              </span>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="content-page-section">
          <h2 className="content-page-section-heading">
            Future Growth Roadmap
          </h2>
          <div className="content-page-roadmap">
            <div className="content-page-roadmap-item">
              <div className="content-page-roadmap-number">01</div>
              <div>
                <h4 className="content-page-roadmap-title">Expansion of Developer Utilities</h4>
                <p className="content-page-roadmap-text">Adding offline encoders, regex parsers, and custom formatter configurations.</p>
              </div>
            </div>
            <div className="content-page-roadmap-item">
              <div className="content-page-roadmap-number">02</div>
              <div>
                <h4 className="content-page-roadmap-title">Global Nisab Index Integrations</h4>
                <p className="content-page-roadmap-text">Connecting finance utilities, gold price trackers, and auto gold value indices.</p>
              </div>
            </div>
            <div className="content-page-roadmap-item">
              <div className="content-page-roadmap-number">03</div>
              <div>
                <h4 className="content-page-roadmap-title">International localization support</h4>
                <p className="content-page-roadmap-text">Ensuring translations for calculator details in Arabic, Urdu, and Spanish.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="content-page-cta">
          <h2 className="content-page-cta-title">
            Ready to compute?
          </h2>
          <p className="content-page-cta-text">
            Browse our complete tools index directory or get in contact with our support group for query additions.
          </p>
          <div className="content-page-cta-actions">
            <Link
              href="/tools"
              className="button button--primary"
            >
              Browse Tools <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="button button--secondary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
