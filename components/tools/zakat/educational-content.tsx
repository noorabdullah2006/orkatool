"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "what-is-zakat", label: "What Is Zakat" },
  { id: "understanding-nisab", label: "Understanding Nisab" },
  { id: "zakatable-wealth", label: "Zakatable Wealth" },
  { id: "madhab-differences", label: "Madhab Differences" },
  { id: "formula", label: "Formula" },
  { id: "deductible-liabilities", label: "Deductible Liabilities" },
  { id: "payment-time", label: "Payment Time" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "pakistan-users", label: "Pakistan Users" },
  { id: "faq", label: "FAQ" },
];

const FAQS = [
  {
    id: "faq-zakat-calculated",
    question: "How is Zakat calculated?",
    answer: "Add up your zakatable assets — cash, gold, silver, investments, business inventory — then subtract any short-term liabilities. If what's left meets or exceeds Nisab, multiply it by 2.5% to get your Zakat due."
  },
  {
    id: "faq-zakat-gold",
    question: "How do I calculate Zakat on gold?",
    answer: "Value your gold at today's market rate, not what you originally paid. Add that value to your other zakatable assets, then apply 2.5% if your total is above Nisab."
  },
  {
    id: "faq-zakat-salary",
    question: "How do I calculate Zakat on salary?",
    answer: "There's no direct Zakat on salary as income. What matters is how much of it remains as savings by your Zakat date, combined with everything else you own."
  },
  {
    id: "faq-zakat-stocks",
    question: "How do I calculate Zakat on stocks?",
    answer: "Most scholars base it on the current market value of shares, though the exact approach can shift depending on whether they're held for trading or long-term investment. Complex portfolios are worth double-checking with a knowledgeable source."
  },
  {
    id: "faq-zakat-formula",
    question: "What's the Zakat calculation formula?",
    answer: "(Total Zakatable Assets − Liabilities) × 2.5%, as long as the result is at or above Nisab."
  },
  {
    id: "faq-zakat-every-year",
    question: "Do I pay Zakat every year?",
    answer: "Yes — once per completed lunar year (Hawl), based on your own personal Zakat date rather than a shared calendar date."
  }
];

export default function ZakatCalculatorContent() {
  const [activeSection, setActiveSection] = useState("what-is-zakat");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Setup observer to track active section in scroll
    const options = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // triggers when section is in middle viewport
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
      const offset = 80; // offset header height
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

  // Structured schemas
  const articlesSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Professional Zakat Calculator Guide & Islamic Rules",
    "description": "Calculate your annual Zakat instantly using live gold and silver Nisab rates, and understand what wealth counts under Hanafi, Maliki, Hanbali, and Shafi'i schools.",
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
      "@id": "https://orkatool.com/calculator-tools/zakat-calculator"
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://orkatool.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Tools",
        "item": "https://orkatool.com/tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Zakat Calculator",
        "item": "https://orkatool.com/calculator-tools/zakat-calculator"
      }
    ]
  };

  return (
    <section className="blog-section" style={{ borderTop: "1px solid var(--color-border)", paddingBlock: "5rem" }}>
      {/* JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .zakat-article-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          max-width: var(--container-xl);
          margin: 0 auto;
          padding-inline: var(--space-5);
          align-items: start;
        }

        .zakat-toc-sidebar {
          position: sticky;
          top: 100px;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 1.5rem;
          background: var(--color-surface);
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .zakat-toc-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-primary);
        }

        .zakat-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .zakat-toc-link {
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

        .zakat-toc-link:hover {
          color: var(--color-primary);
          background: var(--color-bg-primary-subtle, rgba(37, 99, 235, 0.05));
          transform: translateX(4px);
        }

        .zakat-toc-link.active {
          color: #ffffff;
          background: var(--color-primary);
        }

        .zakat-toc-num {
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

        .zakat-toc-link.active .zakat-toc-num {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .zakat-toc-mobile-accordion {
          display: none;
        }

        .calculator-example-card {
          border: 1px solid var(--color-border);
          border-radius: 20px;
          background: var(--color-surface);
          padding: 1.5rem;
          margin-block: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }
        
        .calculator-example-card h4 {
          margin-top: 0;
          color: var(--color-text-primary);
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .calculator-example-card code {
          background: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.95em;
        }

        .related-islamic-tools {
          margin-top: 5rem;
          padding-top: 3rem;
          border-top: 1px solid var(--color-border);
        }

        .related-islamic-tools-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .zakat-article-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .zakat-toc-sidebar {
            display: none;
          }

          .zakat-toc-mobile-accordion {
            display: block;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;
            margin-bottom: 2rem;
          }

          .zakat-toc-mobile-btn {
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

          .zakat-toc-mobile-arrow {
            transition: transform 0.2s ease;
          }

          .zakat-toc-mobile-arrow.open {
            transform: rotate(180deg);
          }

          .zakat-toc-mobile-content {
            border-top: 1px solid var(--color-border);
            padding: 0.75rem 1rem;
            max-height: 280px;
            overflow-y: auto;
          }
        }
      ` }} />

      <div className="zakat-article-layout">
        {/* Sticky Sidebar Table of Contents (Desktop) */}
        <aside className="zakat-toc-sidebar" aria-label="Table of contents">
          <div className="zakat-toc-header">
            <span>📑</span> Table of Contents
          </div>
          <nav className="zakat-toc-list">
            {SECTIONS.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleTocClick(e, s.id)}
                className={`zakat-toc-link ${activeSection === s.id ? "active" : ""}`}
              >
                <span className="zakat-toc-num">{idx + 1}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article Column */}
        <div className="blog-content" style={{ margin: 0, maxWidth: "100%" }}>
          
          {/* Collapsible Accordion Table of Contents (Mobile/Tablet) */}
          <div className="zakat-toc-mobile-accordion">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="zakat-toc-mobile-btn"
              type="button"
              aria-expanded={mobileTocOpen}
            >
              <span>📑 Table of Contents</span>
              <span className={`zakat-toc-mobile-arrow ${mobileTocOpen ? "open" : ""}`} aria-hidden="true">
                ▼
              </span>
            </button>
            {mobileTocOpen && (
              <div className="zakat-toc-mobile-content">
                <nav className="zakat-toc-list">
                  {SECTIONS.map((s, idx) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleTocClick(e, s.id)}
                      className={`zakat-toc-link ${activeSection === s.id ? "active" : ""}`}
                      style={{ paddingBlock: "0.5rem" }}
                    >
                      <span className="zakat-toc-num">{idx + 1}</span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Section 1: What Is Zakat, Really? */}
          <section id="what-is-zakat">
            <h2>What Is Zakat, Really?</h2>
            <p>
              Most people already know Zakat is one of the Five Pillars of Islam. What trips people up isn't the definition — it's figuring out whether they actually owe it this year, and if so, how much.
            </p>
            <p>
              Here's the short version: Zakat is a mandatory portion of your wealth, given to those eligible to receive it. It's not the same as Sadaqah. You can give Sadaqah any day, in any amount, for any reason. Zakat works differently — it only becomes due once your wealth crosses a specific threshold and stays there for a full lunar year.
            </p>
            <p>
              So two things need to be true before you owe anything:
            </p>
            <ol>
              <li>Your net wealth is at or above the Nisab threshold</li>
              <li>That wealth has stayed above Nisab for one full lunar year (called the Hawl)</li>
            </ol>
            <p>
              If either one isn't true yet, you're not obligated to pay — at least not this cycle.
            </p>
          </section>

          {/* Section 2: Understanding Nisab */}
          <section id="understanding-nisab">
            <h2>Understanding Nisab (And Why the Calculator Uses Silver)</h2>
            <p>
              Nisab is the line in the sand. Below it, no Zakat is due. Above it, Zakat becomes obligatory. But here's the part that confuses a lot of first-time calculators: Nisab isn't a fixed rupee amount. It's based on a weight of gold or silver, converted into today's price.
            </p>
            <p>
              Two standards exist:
            </p>
            <ul>
              <li><strong>Gold Nisab</strong> — 87.48 grams of gold</li>
              <li><strong>Silver Nisab</strong> — 612.36 grams of silver</li>
            </ul>
            <p>
              Because silver trades for much less than gold per gram, the Silver Nisab ends up being a smaller amount in rupees. Practically, that means more people end up qualifying under the silver standard than the gold one. This is exactly why many scholars lean toward silver as the more cautious choice — it brings more people into the fold of giving, which benefits more recipients. That's also why this calculator defaults to Silver Nisab, though you can switch to Gold Nisab if that's what your local guidance follows.
            </p>
            <div className="blog-alert blog-alert-tip">
              <div className="blog-alert-icon">💡</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Scholar note</h3>
                <p>
                  This is exactly why many scholars lean toward silver as the more cautious choice — it brings more people into the fold of giving, which benefits more recipients. That's also why this calculator defaults to Silver Nisab, though you can switch to Gold Nisab if that's what your local guidance follows.
                </p>
              </div>
            </div>
            <p>
              One more thing worth knowing: since Nisab depends on market prices, it moves every single day. A number you saw last month could already be outdated. That's why the rates above are pulled live rather than hardcoded.
            </p>
          </section>

          {/* Section 3: Zakatable Wealth */}
          <section id="zakatable-wealth">
            <h2>What Counts as Zakatable Wealth?</h2>
            <p>
              Before you start entering numbers, it helps to do a mental walk-through of what you actually own. Calculators rarely get things wrong — people forget things instead. A second bank account here, some gold sitting at a parent's house there.
            </p>
            <p>
              Assets that typically count:
            </p>
            <ul>
              <li>Cash — at home, in your wallet, in any bank account (local or foreign)</li>
              <li>Gold and silver — coins, bars, and jewelry (jewelry rules vary slightly by school of thought, more on that below)</li>
              <li>Business inventory held for sale</li>
              <li>Investments such as stocks or funds</li>
              <li>Money owed to you that you realistically expect to get back</li>
            </ul>
            <p>
              And what usually doesn't count:
            </p>
            <ul>
              <li>The house you live in</li>
              <li>Your personal car</li>
              <li>Everyday belongings — clothes, furniture, your phone — unless you're holding them as trade stock</li>
            </ul>
            <div className="blog-alert blog-alert-warning">
              <div className="blog-alert-icon">⚠️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Common Oversight</h3>
                <p>
                  A mistake we see constantly: people assume Zakat is only about salary and savings, then completely skip the gold jewelry sitting in a drawer or the small side business they run out of their home. Both are very much zakatable.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Madhab Differences */}
          <section id="madhab-differences">
            <h2>Does Your Madhab Change the Calculation?</h2>
            <p>
              For the most part, no — the core mechanics stay the same across the four major Sunni schools. Where things diverge slightly is jewelry you actually wear day to day.
            </p>
            <div className="blog-alert blog-alert-info">
              <div className="blog-alert-icon">ℹ️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Jurisprudence differences</h3>
                <p>
                  Under <strong>Hanafi</strong> rulings, jewelry you wear regularly is still zakatable. Under <strong>Shafi'i, Maliki, and Hanbali</strong> rulings, jewelry worn for personal use is generally exempt — though anything stored purely as an investment stays zakatable regardless of school.
                </p>
              </div>
            </div>
            <p>
              Since the majority of Muslims in Pakistan follow Hanafi jurisprudence, that's the default here — but the Madhab selector above lets you switch to Shafi'i, Maliki, or Hanbali, and the jewelry calculation adjusts on its own.
            </p>
          </section>

          {/* Section 5: Formula */}
          <section id="formula">
            <h2>The Actual Formula (So You Can Double-Check the Result)</h2>
            <p>
              Even if you trust the calculator completely, it's worth knowing what's happening behind the scenes. It's not complicated:
            </p>
            <div className="blog-formula">
              <code>
                Net Zakatable Wealth = Total Zakatable Assets − Deductible Liabilities
                <br /><br />
                If Net Zakatable Wealth ≥ Nisab:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Zakat Due = Net Zakatable Wealth × 2.5%
              </code>
            </div>
            
            <div className="calculator-example-card">
              <h4>Calculation Example</h4>
              <p>
                <strong>A quick example.</strong> Say you have PKR 500,000 sitting in savings, plus 5 tola of gold — roughly 58.3 grams. At a live rate of PKR 36,338 per gram, that gold alone is worth around PKR 2,118,506. Add it to your cash and your total zakatable assets come to about PKR 2,618,506.
              </p>
              <p>
                Assuming no liabilities to subtract, your net wealth stays at that figure. Since it's well above the Silver Nisab of PKR 323,326, Zakat is due:
              </p>
              <pre style={{ background: "rgba(0,0,0,0.02)", color: "inherit", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", fontFamily: "monospace", fontSize: "0.95rem" }}>
                PKR 2,618,506 × 2.5% ≈ PKR 65,463
              </pre>
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                That's the entire calculation the tool above runs for you automatically — but now you know exactly how it got there.
              </p>
            </div>
          </section>

          {/* Section 6: Deductible Liabilities */}
          <section id="deductible-liabilities">
            <h3>What You're Allowed to Subtract</h3>
            <p>
              Zakat applies to <em>net</em> wealth, not gross, so some liabilities can be deducted first. Generally fine to subtract:
            </p>
            <ul>
              <li>Short-term debts due now or very soon</li>
              <li>Bills or payments coming due around your Zakat date</li>
              <li>Business payables — supplier invoices, wages owed, that kind of thing</li>
            </ul>
            <p>
              What most scholars won't let you deduct in full:
            </p>
            <ul>
              <li>Long-term loans (usually only the near-term installment counts)</li>
              <li>Expenses you're planning but haven't actually incurred yet</li>
              <li>Anything discretionary you intend to spend later</li>
            </ul>
            <div className="blog-alert blog-alert-info">
              <div className="blog-alert-icon">ℹ️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Scholar note</h3>
                <p>
                  If your finances involve business partnerships, mixed international assets, or complicated debt structures, this is one of those moments where a quick question to a knowledgeable scholar saves a lot of second-guessing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Payment Time */}
          <section id="payment-time">
            <h2>When Exactly Should You Pay?</h2>
            <p>
              Your Zakat becomes due once your wealth has stayed above Nisab for a full lunar year — and that date is personal to you, not shared across everyone. A lot of people choose to pay during Ramadan simply because it's easier to remember and carries extra spiritual weight, but nothing in the ruling requires it to be paid then.
            </p>
            <p>
              What actually matters is picking one date and sticking to it every lunar year. Once you have that anchor date, next year's calculation becomes a lot less of a guessing game.
            </p>
          </section>

          {/* Section 8: Common Mistakes */}
          <section id="common-mistakes">
            <h2>Mistakes That Quietly Throw Off the Number</h2>
            <div className="blog-alert blog-alert-danger">
              <div className="blog-alert-icon">❌</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Watch Out for These Errors</h3>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "inherit" }}>
                  <li style={{ color: "inherit" }}><strong>Using what you paid for gold, not what it's worth today.</strong> Zakat runs on current market value, full stop.</li>
                  <li style={{ color: "inherit" }}><strong>Mixing up grams and tola.</strong> A unit slip here can throw the entire number off.</li>
                  <li style={{ color: "inherit" }}><strong>Forgetting gold kept somewhere else</strong> — a locker, a relative's house, jewelry you rarely wear. Still counts.</li>
                  <li style={{ color: "inherit" }}><strong>Ignoring jewelry and business assets</strong> because they don't feel like "savings."</li>
                  <li style={{ color: "inherit" }}><strong>Deducting long-term debt in full</strong> instead of just the near-term portion.</li>
                  <li style={{ color: "inherit" }}><strong>Skipping the Hawl check entirely</strong> — if your wealth only just crossed Nisab recently, it might not have completed a full lunar year yet.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Pakistan Users */}
          <section id="pakistan-users">
            <h2>A Quick Note for Pakistani Users</h2>
            <p>
              If you're calculating Zakat from Pakistan, working in PKR just makes more sense than converting from a foreign currency — so that's the default here. The gold and silver rates feeding into the Nisab calculation are pulled live and refreshed regularly, so you're comparing against today's actual market, not last month's number.
            </p>
            <p>
              Once you know the amount, how you distribute it is entirely up to you — directly to someone eligible, through a mosque, or via a registered organization. This tool's only job is getting you an accurate number to work with.
            </p>
          </section>

          {/* Section 10: FAQ */}
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

            <p style={{ marginTop: "2rem", borderTop: "1px dashed var(--color-border)", paddingTop: "1.5rem" }}>
              <em>This calculator offers a general estimate based on the Gold and Silver Nisab standards along with commonly followed Hanafi, Shafi'i, Maliki, and Hanbali rulings. For business partnerships, cross-border assets, or unusual debt situations, it's worth checking with a qualified Islamic scholar.</em>
            </p>
          </section>

          {/* Related Islamic Tools Section */}
          <div className="related-islamic-tools">
            <h2 className="related-islamic-tools-title">Related Islamic Tools</h2>
            <div className="related-tools-grid">
              
              <Link href="/calculator-tools/inheritance-calculator" className="related-tool-card">
                <div className="related-tool-icon">⚖️</div>
                <div className="related-tool-content">
                  <h4 className="related-tool-title-card">Islamic Inheritance Calculator</h4>
                  <p className="related-tool-description">Calculate Islamic Estate &amp; Inheritance shares distribution according to Faraid Fiqh.</p>
                </div>
                <span className="related-tool-arrow">→</span>
              </Link>

              <Link href="/tools/age-calculator" className="related-tool-card">
                <div className="related-tool-icon">⏱</div>
                <div className="related-tool-content">
                  <h4 className="related-tool-title-card">Age Calculator</h4>
                  <p className="related-tool-description">Calculate your exact age in years, months, weeks, days, hours, and minutes instantly.</p>
                </div>
                <span className="related-tool-arrow">→</span>
              </Link>

              <Link href="/tools/percentage-calculator" className="related-tool-card">
                <div className="related-tool-icon">📊</div>
                <div className="related-tool-content">
                  <h4 className="related-tool-title-card">Percentage Calculator</h4>
                  <p className="related-tool-description">Calculate percentage increases, decreases, differences, or proportions quickly.</p>
                </div>
                <span className="related-tool-arrow">→</span>
              </Link>

              <Link href="/tools/discount-calculator" className="related-tool-card">
                <div className="related-tool-icon">🏷</div>
                <div className="related-tool-content">
                  <h4 className="related-tool-title-card">Discount Calculator</h4>
                  <p className="related-tool-description">Calculate discounted prices, tax amounts, currency conversions, and savings immediately.</p>
                </div>
                <span className="related-tool-arrow">→</span>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
