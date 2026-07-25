"use client";

import { useState } from "react";
import { faqData } from "./faq-data";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section faq" role="region" aria-label="Frequently Asked Questions">
      <div className="container">
        
        {/* FAQ Header */}
        <div className="faq-header">
          <span className="faq-badge">F.A.Q</span>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Have questions about OrkaTool? Find answers to the most common queries about our free online utilities.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-list">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${item.id}`}
                  className="faq-answer-wrapper"
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
