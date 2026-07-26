"use client";

import Link from "next/link";
import Container from "@/components/layout/container/container";
import { ArrowRight } from "lucide-react";
import { getAllTools } from "@/content/tools";

export default function FinalCTA() {
  return (
    <section className="section final-cta" role="region" aria-label="Explore tools CTA CTA banner">
      <Container>
        <div className="final-cta-banner">
          {/* Subtle background glow bubbles inside card */}
          <div className="final-cta-glow-1" aria-hidden="true" />
          <div className="final-cta-glow-2" aria-hidden="true" />

          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Ready to Explore {getAllTools().filter(t => t.published).length} Free Online Tools?
            </h2>
            <p className="final-cta-subtitle">
              Start using OrkaTool today to speed up your workflow. Fast, secure, and always free to use.
            </p>
            
            <div className="final-cta-actions">
              <Link href="/tools" className="final-cta-button final-cta-button-primary">
                Browse All Tools 
                <ArrowRight size={18} strokeWidth={2} className="cta-arrow-icon" />
              </Link>
              <Link href="/categories" className="final-cta-button final-cta-button-secondary">
                View Categories
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
