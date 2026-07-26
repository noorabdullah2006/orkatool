"use client";

import Container from "@/components/layout/container/container";
import { MousePointerClick, UploadCloud, CheckCircle } from "lucide-react";
import { getAllTools } from "@/content/tools";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Choose Tool",
      description: `Search or browse our category lists to select from ${getAllTools().filter(t => t.published).length} free utilities.`,
      icon: MousePointerClick,
      color: "blue"
    },
    {
      step: "02",
      title: "Upload or Enter Data",
      description: "Paste text, configuration logs, or drag and drop any file directly.",
      icon: UploadCloud,
      color: "purple"
    },
    {
      step: "03",
      title: "Get Instant Results",
      description: "Process in milliseconds. Download outputs or copy answers instantly.",
      icon: CheckCircle,
      color: "emerald"
    }
  ];

  return (
    <section className="section how-it-works" role="region" aria-label="How OrkaTool works">
      <Container>
        <div className="how-it-works-inner">
          
          <div className="why-header">
            <h2 className="why-title">How It Works</h2>
            <p className="why-description">
              Get raw results in three simple, frictionless steps. No limits, no credit cards required.
            </p>
          </div>

          <div className="how-grid">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="how-step-card">
                  <div className="how-icon-wrapper" data-color={item.color}>
                    <Icon size={32} strokeWidth={2} />
                    <span className="how-badge-number">{item.step}</span>
                  </div>

                  <h3 className="how-step-title">{item.title}</h3>
                  <p className="how-step-description">{item.description}</p>

                  {index < steps.length - 1 && (
                    <div className="how-connector" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}
