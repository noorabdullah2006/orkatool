"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "what-is-text-repeater", label: "What Is a Text Repeater?" },
  { id: "how-to-use", label: "How to Use a Text Repeater" },
  { id: "step-by-step-100", label: "How to Repeat a Text Message 100 Times" },
  { id: "repeat-10000", label: "Can I Repeat Text 10,000 Times?" },
  { id: "social-media-whatsapp", label: "How to Make Text Repeat for Social Media" },
  { id: "other-uses", label: "Other Ways People Use a Text Repeater" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    id: "faq-what-is",
    question: "What is a text repeater?",
    answer: "A text repeater is a free online tool that duplicates any text, word, or emoji a chosen number of times, separated by spaces, new lines, or a custom character of your choice."
  },
  {
    id: "faq-repeat-100",
    question: "How do I repeat a text message 100 times?",
    answer: "Type your message into the tool, select the '100' preset (or enter it manually), choose your separator, and generate. Copy the result and paste it wherever you need it including directly to WhatsApp."
  },
  {
    id: "faq-how-use",
    question: "How do I use a text repeater?",
    answer: "Enter your text, choose a repeat count using the presets or a custom number, pick a separator style, and click repeat. The output is ready to copy or download immediately."
  },
  {
    id: "faq-make-repeat",
    question: "How do I make text repeat?",
    answer: "Any text a single word, a phrase, or an emoji can be repeated by entering it into the tool and selecting how many times you want it duplicated."
  },
  {
    id: "faq-how-many",
    question: "How many times can I repeat text with this tool?",
    answer: "As many as you need, including a dedicated 10,000-repeat preset for larger use cases like bulk testing or long-form spam messages. Very large repeat counts may take a brief moment to generate."
  },
  {
    id: "faq-whatsapp",
    question: "Can I generate a message repeated many times to send on WhatsApp?",
    answer: "Yes. Generate your repeated text here, then copy and paste it directly into WhatsApp. For very long outputs, keep WhatsApp's own message length limit in mind."
  }
];

export default function TextRepeaterCalculatorContent() {
  const [activeSection, setActiveSection] = useState("what-is-text-repeater");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Online Text Repeater Guide & FAQ",
    "description": "Learn how to use a text repeater to multiply text, words, and emojis instantly for testing, placeholder data, or social messaging.",
    "publisher": {
      "@type": "Organization",
      "name": "OrkaTool",
      "logo": {
        "@type": "ImageObject",
        "url": "https://orkatool.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://orkatool.com/text-tools/text-repeater"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="blog-section" style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "5rem" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .repeater-article-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          max-width: var(--container-xl);
          margin: 0 auto;
          padding-inline: var(--space-5);
          align-items: start;
        }

        .repeater-toc-sidebar {
          position: sticky;
          top: 100px;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 1.5rem;
          background: var(--color-surface);
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .repeater-toc-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-primary);
        }

        .repeater-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .repeater-toc-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          color: var(--color-text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .repeater-toc-link:hover {
          color: var(--color-primary);
          background: var(--color-bg-primary-subtle, rgba(37, 99, 235, 0.05));
          transform: translateX(4px);
        }

        .repeater-toc-link.active {
          color: #ffffff;
          background: var(--color-primary);
        }

        .repeater-toc-num {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 0.72rem;
          font-weight: 700;
          background: var(--color-bg-primary-subtle, rgba(37, 99, 235, 0.08));
          color: var(--color-primary);
        }

        .repeater-toc-link.active .repeater-toc-num {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .repeater-toc-mobile-accordion {
          display: none;
        }

        @media (max-width: 1024px) {
          .repeater-article-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .repeater-toc-sidebar {
            display: none;
          }

          .repeater-toc-mobile-accordion {
            display: block;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;
            margin-bottom: 2rem;
          }

          .repeater-toc-mobile-btn {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 1.25rem;
            background: none;
            border: none;
            color: var(--color-text-primary);
            font-weight: 700;
            font-size: 0.95rem;
            text-align: left;
            cursor: pointer;
          }

          .repeater-toc-mobile-arrow {
            transition: transform 0.2s ease;
          }

          .repeater-toc-mobile-arrow.open {
            transform: rotate(180deg);
          }

          .repeater-toc-mobile-content {
            border-top: 1px solid var(--color-border);
            padding: 0.75rem 1rem;
            max-height: 280px;
            overflow-y: auto;
          }
        }
      ` }} />

      <div className="repeater-article-layout">
        {/* TOC Sidebar */}
        <aside className="repeater-toc-sidebar" aria-label="Table of contents">
          <div className="repeater-toc-header">
            <span>📑</span> Table of Contents
          </div>
          <nav className="repeater-toc-list">
            {SECTIONS.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleTocClick(e, s.id)}
                className={`repeater-toc-link ${activeSection === s.id ? "active" : ""}`}
              >
                <span className="repeater-toc-num">{idx + 1}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article content */}
        <div className="blog-content" style={{ margin: 0, maxWidth: "100%" }}>
          
          {/* Mobile TOC */}
          <div className="repeater-toc-mobile-accordion">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="repeater-toc-mobile-btn"
              type="button"
              aria-expanded={mobileTocOpen}
            >
              <span>📑 Table of Contents</span>
              <span className={`repeater-toc-mobile-arrow ${mobileTocOpen ? "open" : ""}`} aria-hidden="true">
                ▼
              </span>
            </button>
            {mobileTocOpen && (
              <div className="repeater-toc-mobile-content">
                <nav className="repeater-toc-list">
                  {SECTIONS.map((s, idx) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleTocClick(e, s.id)}
                      className={`repeater-toc-link ${activeSection === s.id ? "active" : ""}`}
                      style={{ paddingBlock: "0.5rem" }}
                    >
                      <span className="repeater-toc-num">{idx + 1}</span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          <section id="what-is-text-repeater">
            <h2>What Is a Text Repeater?</h2>
            <p>
              A text repeater is a simple tool that takes any word, sentence, or emoji you type in and duplicates it as many times as you need—instantly. Instead of copying and pasting the same line over and over by hand, you type it once, pick a number, and the tool handles the rest.
            </p>
            <p>
              People use it for all kinds of reasons. Some want to send a playful WhatsApp message with a word repeated a dozen times for emphasis. Others need bulk placeholder text for testing a form or app. And some just want to spam a chat with a string of the same emoji because, honestly, it's fun. Whatever the reason, the mechanics stay the same—repeat, multiply, duplicate, loop—different words for the same basic action.
            </p>
          </section>

          <section id="how-to-use">
            <h2>How to Use a Text Repeater</h2>
            <p>
              Using this tool takes about ten seconds, but here's the breakdown anyway:
            </p>
            <ol>
              <li><strong>Type or paste your text:</strong> It can be a single word, a full sentence, an emoji, or a symbol.</li>
              <li><strong>Choose how many times to repeat it:</strong> Use one of the quick preset buttons (10, 50, 100, 500, 1,000, or even 10,000), or type in a custom number if you need something specific.</li>
              <li><strong>Pick a separator:</strong> Want each repetition on its own line? A space between each one? A comma? You control that.</li>
              <li><strong>Hit repeat, then copy or download:</strong> Your result appears instantly, ready to copy with one click or download as a text file.</li>
            </ol>
            <p>
              That's really all there is to it. No signup, no waiting, no ads interrupting the process.
            </p>
          </section>

          <section id="step-by-step-100">
            <h2>How to Repeat a Text Message 100 Times (Step by Step)</h2>
            <p>
              This is one of the most common reasons people land on a text repeater, so it's worth walking through directly.
            </p>
            <p>
              Say you want to send &quot;Happy Birthday!&quot; 100 times as a fun WhatsApp message. Type the phrase into the input box, select the &quot;100&quot; preset (no need to type it manually), choose &quot;New Line&quot; or &quot;Space&quot; as your separator depending on how you want it to look, and generate. From there, copy the result and paste it straight into WhatsApp, Instagram, or wherever you're sending it.
            </p>

            <div className="blog-alert blog-alert-warning">
              <div className="blog-alert-icon">⚠️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">WhatsApp Length Cap</h3>
                <p>
                  WhatsApp has message length limits. If WhatsApp's message length limit becomes an issue for very large repeats, the tool will let you know so you're not left wondering why a message didn't send.
                </p>
              </div>
            </div>
          </section>

          <section id="repeat-10000">
            <h2>Can I Repeat Text 10,000 Times?</h2>
            <p>
              Yes, this is a bigger ask than it sounds, and it's more common than you'd think. Whether it's for stress-testing a form field, generating dummy content for a project, or just going all-in on a joke message, the tool supports large repeat counts—including a dedicated 10,000 preset.
            </p>

            <div className="blog-alert blog-alert-info">
              <div className="blog-alert-icon">ℹ️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Large Limit Rendering</h3>
                <p>
                  One thing worth knowing: generating extremely large amounts of repeated text can take the browser a brief moment to process. If you're repeating something 10,000 times or more, you might see a short delay before the output appears—that's expected, not a bug.
                </p>
              </div>
            </div>
          </section>

          <section id="social-media-whatsapp">
            <h2>How to Make Text Repeat for Social Media and WhatsApp</h2>
            <p>
              A huge share of text repeater use comes down to messaging apps and social captions. A few common patterns:
            </p>
            <ul>
              <li><strong>WhatsApp spam messages:</strong> repeating a word or emoji for comedic effect in group chats</li>
              <li><strong>Instagram captions:</strong> using repeated emojis or short phrases as a stylistic choice</li>
              <li><strong>Reaction spam:</strong> sending the same short reaction multiple times in a row for emphasis</li>
            </ul>

            <div className="blog-alert blog-alert-success">
              <div className="blog-alert-icon">💡</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Separator Selection</h3>
                <p>
                  Separator choice changes how messages appear. A comma-separated repeat looks completely different from a new-line repeat once it's pasted into a chat window, so it's worth trying both and seeing which fits what you're posting.
                </p>
              </div>
            </div>
          </section>

          <section id="other-uses">
            <h2>Other Ways People Use a Text Repeater</h2>
            <p>
              Beyond social messaging, a text repeater shows up in a few practical, less flashy situations too:
            </p>
            <ul>
              <li><strong>Software testing (QA):</strong> developers often need a large block of repeated dummy text to check how a form, database field, or UI element handles bulk input</li>
              <li><strong>Data placeholders:</strong> quickly generating filler content for mockups or documents</li>
              <li><strong>Word repetition for memorization or emphasis:</strong> some people repeat a phrase multiple times as a study or memory technique</li>
            </ul>
          </section>

          <section id="faq" className="blog-faq" style={{ borderTop: "none", marginTop: "3rem" }}>
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-accordion-list" style={{ marginTop: "1.5rem" }}>
              {FAQS.map((faq) => (
                <details
                  key={faq.id}
                  className="blog-faq-item"
                  style={{ marginBottom: "1rem" }}
                >
                  <summary className="blog-faq-question">
                    <span>{faq.question}</span>
                    <span className="blog-faq-icon">+</span>
                  </summary>
                  <div className="blog-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </div>
    </section>
  );
}
