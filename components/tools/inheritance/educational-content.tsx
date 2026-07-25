"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "what-is-inheritance-calculator", label: "What Is an Islamic Inheritance Calculator?" },
  { id: "rules-of-inheritance", label: "What Are the Islamic Rules of Inheritance?" },
  { id: "who-is-entitled", label: "Who Is Entitled to Inheritance in Islam?" },
  { id: "how-calculation-works", label: "How the Calculation Actually Works" },
  { id: "awl-and-radd", label: "Two Rules That Trip People Up: Awl and Radd" },
  { id: "madhab-differences", label: "Does the School of Thought (Madhab) Change the Result?" },
  { id: "specific-cases", label: "Specific Cases People Often Ask About" },
  { id: "common-mistakes", label: "Common Mistakes People Make" },
  { id: "scope-and-accuracy", label: "A Note on Scope and Accuracy" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const FAQS = [
  {
    id: "faq-what-is",
    question: "What is an Islamic inheritance calculator?",
    answer: "It's a tool that calculates how a deceased Muslim's estate should be divided among surviving heirs, based on the fixed shares and exclusion rules found in Islamic law (Faraid)."
  },
  {
    id: "faq-rules",
    question: "What are the Islamic rules of inheritance?",
    answer: "They're based primarily on Surah An-Nisa in the Quran, which sets fixed shares for specific heirs, defines who is excluded when closer relatives are alive, and limits a will to one-third of the estate."
  },
  {
    id: "faq-who-entitled",
    question: "Who is entitled to inheritance in Islam?",
    answer: "Spouse, children, parents, grandparents, and siblings are all potential heirs, though which of them actually inherit — and how much — depends on who else survived the deceased."
  },
  {
    id: "faq-free-to-use",
    question: "Is this Islamic inheritance calculator free to use?",
    answer: "Yes. It's completely free, requires no signup, and works directly in your browser."
  },
  {
    id: "faq-other-calculators",
    question: "Are there other free online Islamic inheritance calculators available?",
    answer: "Yes, several exist, and each one may apply slightly different assumptions around madhab rules or supported heir categories. It's worth checking that any calculator you use — including this one — clearly explains which school of thought and which cases it supports."
  },
  {
    id: "faq-formula",
    question: "What is the inheritance calculation formula in Islam?",
    answer: "In simple terms: settle funeral costs and debts, apply any valid will up to one-third of what remains, then distribute the net estate using fixed shares (Furud) first, followed by residuary shares (Asaba), adjusting for Awl or Radd if needed."
  }
];

export default function InheritanceCalculatorContent() {
  const [activeSection, setActiveSection] = useState("what-is-inheritance-calculator");
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
    "headline": "Islamic Inheritance FAQ & Faraid Rules Guide",
    "description": "Understand how a deceased Muslim's estate is divided among surviving relatives and legal heirs according to Sunni Faraid jurisprudence.",
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
      "@id": "https://orkatool.com/islamic-tools/inheritance-calculator"
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
      {/* JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .inheritance-article-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: var(--space-8);
          max-width: var(--container-xl);
          margin: 0 auto;
          padding-inline: var(--space-5);
          align-items: start;
        }

        .inheritance-toc-sidebar {
          position: sticky;
          top: 100px;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 1.5rem;
          background: var(--color-surface);
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .inheritance-toc-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-primary);
        }

        .inheritance-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .inheritance-toc-link {
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

        .inheritance-toc-link:hover {
          color: var(--color-primary);
          background: var(--color-bg-primary-subtle, rgba(37, 99, 235, 0.05));
          transform: translateX(4px);
        }

        .inheritance-toc-link.active {
          color: #ffffff;
          background: var(--color-primary);
        }

        .inheritance-toc-num {
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

        .inheritance-toc-link.active .inheritance-toc-num {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        .inheritance-toc-mobile-accordion {
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

        @media (max-width: 1024px) {
          .inheritance-article-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .inheritance-toc-sidebar {
            display: none;
          }

          .inheritance-toc-mobile-accordion {
            display: block;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;
            margin-bottom: 2rem;
          }

          .inheritance-toc-mobile-btn {
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

          .inheritance-toc-mobile-arrow {
            transition: transform 0.2s ease;
          }

          .inheritance-toc-mobile-arrow.open {
            transform: rotate(180deg);
          }

          .inheritance-toc-mobile-content {
            border-top: 1px solid var(--color-border);
            padding: 0.75rem 1rem;
            max-height: 280px;
            overflow-y: auto;
          }
        }
      ` }} />

      <div className="inheritance-article-layout">
        {/* Sticky Sidebar Table of Contents (Desktop) */}
        <aside className="inheritance-toc-sidebar" aria-label="Table of contents">
          <div className="inheritance-toc-header">
            <span>📑</span> Table of Contents
          </div>
          <nav className="inheritance-toc-list">
            {SECTIONS.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleTocClick(e, s.id)}
                className={`inheritance-toc-link ${activeSection === s.id ? "active" : ""}`}
              >
                <span className="inheritance-toc-num">{idx + 1}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article Column */}
        <div className="blog-content" style={{ margin: 0, maxWidth: "100%" }}>
          
          {/* Collapsible Accordion Table of Contents (Mobile/Tablet) */}
          <div className="inheritance-toc-mobile-accordion">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="inheritance-toc-mobile-btn"
              type="button"
              aria-expanded={mobileTocOpen}
            >
              <span>📑 Table of Contents</span>
              <span className={`inheritance-toc-mobile-arrow ${mobileTocOpen ? "open" : ""}`} aria-hidden="true">
                ▼
              </span>
            </button>
            {mobileTocOpen && (
              <div className="inheritance-toc-mobile-content">
                <nav className="inheritance-toc-list">
                  {SECTIONS.map((s, idx) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      onClick={(e) => handleTocClick(e, s.id)}
                      className={`inheritance-toc-link ${activeSection === s.id ? "active" : ""}`}
                      style={{ paddingBlock: "0.5rem" }}
                    >
                      <span className="inheritance-toc-num">{idx + 1}</span>
                      {s.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Section 1: What Is an Islamic Inheritance Calculator? */}
          <section id="what-is-inheritance-calculator">
            <h2>What Is an Islamic Inheritance Calculator?</h2>
            <p>
              An Islamic inheritance calculator, also known as a Faraid calculator, works out how a deceased Muslim's estate should be divided among their surviving family members according to Islamic law. Instead of guessing who gets what, it applies the fixed shares laid out in the Quran, along with the rules that decide which relatives are entitled to inherit in the first place.
            </p>
            <p>
              In Islamic terminology, this whole system is called Faraid or Wirasat/Mirath, depending on the region. If you've searched for a &quot;wirasat calculator&quot; or &quot;virasat calculator,&quot; you're looking for exactly this. Pakistani users often use these Urdu terms interchangeably with &quot;inheritance calculator,&quot; and this tool covers all of them.
            </p>
            <p>
              The goal here isn't just a number. It's showing you why each heir receives what they receive, so the result actually makes sense instead of feeling like a black box.
            </p>
          </section>

          {/* Section 2: Rules of Inheritance */}
          <section id="rules-of-inheritance">
            <h2>What Are the Islamic Rules of Inheritance?</h2>
            <p>
              Islamic inheritance law comes primarily from Surah An-Nisa in the Quran, which lays out specific shares for specific relatives. These rules exist to make sure wealth is distributed fairly, without depending on a will for the core shares — a Muslim can only will away a maximum of one-third of their estate, and even that portion cannot go to someone who is already a legal heir.
            </p>
            <p>
              There are three moving parts that decide the final outcome:
            </p>
            <ol>
              <li><strong>Fixed shares (Furud):</strong> the Quran specifies exact fractions (1/2, 1/4, 1/8, 2/3, 1/3, and 1/6) for certain heirs depending on the family situation.</li>
              <li><strong>Exclusion rules (Hajb):</strong> some heirs are excluded entirely when a closer relative is alive. A son, for instance, excludes grandsons from inheriting.</li>
              <li><strong>Residuary shares (Asaba):</strong> whatever is left after fixed shares are paid out goes to the closest male relatives, often shared with daughters in a 2:1 ratio.</li>
            </ol>
            <p>
              This is what separates a real Faraid calculation from a simple percentage split — the order in which these rules apply actually changes the final numbers.
            </p>
            
            <div className="blog-alert blog-alert-warning">
              <div className="blog-alert-icon">⚠️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Wasiyyah Cap</h3>
                <p>
                  A person can only will away up to one-third of their estate, and never to someone who is already a legal heir.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Who Is Entitled */}
          <section id="who-is-entitled">
            <h2>Who Is Entitled to Inheritance in Islam?</h2>
            <p>
              This calculator covers the heirs that come up in the overwhelming majority of real cases:
            </p>
            <ul>
              <li><strong>Spouse:</strong> husband, or wife/wives</li>
              <li><strong>Children:</strong> sons and daughters</li>
              <li><strong>Grandchildren:</strong> son's sons and son's daughters (relevant when a son has already passed away)</li>
              <li><strong>Parents:</strong> father and mother</li>
              <li><strong>Grandparents:</strong> paternal grandfather, paternal grandmother, maternal grandmother</li>
              <li><strong>Siblings:</strong> full, consanguine (same father), and uterine (same mother) brothers and sisters</li>
            </ul>
            <p>
              Not everyone on this list actually inherits in every case — that's the whole point of the exclusion rules. The calculator applies these exclusions automatically so you don't have to work them out by hand.
            </p>

            <div className="blog-alert blog-alert-info">
              <div className="blog-alert-icon">ℹ️</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Exclusion Rule (Hajb)</h3>
                <p>
                  A surviving father, for example, blocks the paternal grandfather from inheriting anything. A son blocks all grandchildren through the son's line.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How Calculation Works */}
          <section id="how-calculation-works">
            <h2>How the Calculation Actually Works</h2>
            <p>
              Before any inheritance is distributed, a few things need to happen first — and this order matters:
            </p>
            <ol>
              <li>Funeral expenses are paid from the estate.</li>
              <li>Outstanding debts are cleared.</li>
              <li>Wasiyyah (a will), if there is one, is honored — but capped at one-third of what remains after expenses and debts.</li>
              <li>Whatever is left is the net distributable estate, and this is what actually gets divided among the heirs.</li>
            </ol>
            <p>
              Once you have that net figure, the inheritance calculation formula is straightforward in principle:
            </p>
            
            <div className="blog-formula">
              <code>
                Net Distributable Estate → Apply Fixed Shares (Furud) → Distribute Remainder to Residuary Heirs (Asaba) → Adjust if Needed (Awl or Radd)
              </code>
            </div>

            <div className="calculator-example-card">
              <h4>Distribution Calculation Example</h4>
              <p>
                <strong>A simple example.</strong> Imagine a man passes away leaving a wife, one son, and one daughter, with a net estate of PKR 3,000,000.
              </p>
              <ul style={{ marginBlock: "0.5rem", paddingLeft: "1.2rem" }}>
                <li>The wife receives 1/8 (since there are children), which comes to <strong>PKR 375,000</strong>.</li>
                <li>The remaining PKR 2,625,000 is split between the son and daughter in a 2:1 ratio.</li>
                <li>The son receives <strong>PKR 1,750,000</strong> and the daughter receives <strong>PKR 875,000</strong>.</li>
              </ul>
              <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                Real families are rarely this simple, which is exactly why a calculator that walks through every heir category properly is worth using instead of doing rough mental math.
              </p>
            </div>
          </section>

          {/* Section 5: Awl and Radd */}
          <section id="awl-and-radd">
            <h2>Two Rules That Trip People Up: Awl and Radd</h2>
            <p>
              These two situations don't come up in every case, but when they do, they change the outcome significantly:
            </p>
            <ul>
              <li><strong>Awl</strong> happens when the fixed shares add up to more than the total estate. When that occurs, every heir's share is scaled down proportionally so the total comes out to exactly 100%.</li>
              <li><strong>Radd</strong> is the opposite problem — after fixed shares are paid out, there's no residuary (Asaba) heir left to claim the remainder, and money is still sitting undistributed. In that case, it gets returned proportionally to the fixed-share heirs (in most schools of thought, a surviving spouse is not included in this return).</li>
            </ul>
            <p>
              There's also a specific, well-known scenario called <strong>Umariyyatain</strong>, where the only surviving heirs are a spouse, a mother, and a father. In this exact case, the mother doesn't receive one-third of the whole estate — she receives one-third of what remains after the spouse's share is deducted. It's a small distinction, but it's one that a lot of simple calculators get wrong.
            </p>
          </section>

          {/* Section 6: Madhab Differences */}
          <section id="madhab-differences">
            <h2>Does the School of Thought (Madhab) Change the Result?</h2>
            <p>
              For the majority of cases — spouse, children, parents — the four Sunni schools of thought agree. Where they start to differ is in less common situations, particularly when a paternal grandfather and siblings are both alive at the same time:
            </p>
            <ul>
              <li><strong>Hanafi:</strong> the grandfather takes priority and excludes siblings entirely, similar to how a father would.</li>
              <li><strong>Shafi'i, Maliki, and Hanbali:</strong> the grandfather instead shares the remaining estate with siblings (a method known as Muqasamah), rather than excluding them outright.</li>
            </ul>
            <p>
              Since the majority of Muslims in Pakistan follow Hanafi jurisprudence, that's the default here. But you're not locked into it — the Madhab selector lets you switch between Hanafi, Shafi'i, Maliki, and Hanbali, and the calculation adjusts the grandfather/sibling logic automatically based on your choice.
            </p>
          </section>

          {/* Section 7: Specific Cases */}
          <section id="specific-cases">
            <h2>Specific Cases People Often Ask About</h2>
            <ul>
              <li style={{ marginBottom: "1rem" }}>
                <strong>What is the wife's share in her husband's property in Islam?</strong>
                <p style={{ marginTop: "0.25rem" }}>
                  A wife's fixed share depends on whether the deceased had children. If there are children (from any marriage), she receives 1/8 of the estate. If there are no children, her share increases to 1/4. If there are multiple wives, they split this share equally among themselves.
                </p>
              </li>
              <li>
                <strong>How is a mother's share of property distributed in Islam?</strong>
                <p style={{ marginTop: "0.25rem" }}>
                  A mother generally receives 1/6 if the deceased had children, or if there are two or more siblings alive (even if those siblings don't personally inherit anything due to exclusion). If neither condition applies, her share is 1/3 — except in the Umariyyatain case described above, where it becomes 1/3 of the remainder after the spouse's share.
                </p>
              </li>
            </ul>
          </section>

          {/* Section 8: Common Mistakes */}
          <section id="common-mistakes">
            <h2>Common Mistakes People Make With Property Distribution in Islam</h2>
            <div className="blog-alert blog-alert-danger" style={{ marginBlock: "1.5rem" }}>
              <div className="blog-alert-icon">❌</div>
              <div className="blog-alert-content">
                <h3 className="blog-alert-title">Errors to Avoid</h3>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "inherit" }}>
                  <li style={{ color: "inherit" }}><strong>Assuming an equal split among all children:</strong> Islamic inheritance isn't an equal division — sons and daughters typically receive a 2:1 ratio, not a 50/50 one.</li>
                  <li style={{ color: "inherit" }}><strong>Ignoring the exclusion (Hajb) rules:</strong> Listing every relative as an heir without checking who actually gets excluded leads to a wrong distribution from the start.</li>
                  <li style={{ color: "inherit" }}><strong>Treating a will (Wasiyyah) as unlimited:</strong> A person can only will away up to one-third of their estate, and never to someone who is already a legal heir.</li>
                  <li style={{ color: "inherit" }}><strong>Skipping debts and funeral costs:</strong> Inheritance is calculated on the net estate, after these are settled — not on the gross value of everything owned.</li>
                  <li style={{ color: "inherit" }}><strong>Not accounting for Awl or Radd:</strong> Missing these adjustments can make the total either exceed 100% or leave money undistributed.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Scope and Accuracy */}
          <section id="scope-and-accuracy">
            <h2>A Note on Scope and Accuracy</h2>
            <p>
              This calculator is built to handle the heir categories most families actually deal with — spouse, children, grandchildren, parents, grandparents, and siblings. It does not currently cover more distant relatives such as nephews, paternal uncles, or other extended-family cases, which are comparatively rare in real-world scenarios.
            </p>
            <p>
              Every result comes with a step-by-step reasoning trace, so you can see exactly which rule produced each heir's share rather than just a final number. That said, Islamic inheritance can involve genuinely complex situations — mixed family structures, disputed assets, or cross-border estates. For anything beyond a standard case, it's worth confirming the details with a qualified Islamic scholar before finalizing distribution.
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
              <em>This calculator provides a general estimate based on Sunni Faraid principles across the Hanafi, Shafi'i, Maliki, and Hanbali schools of thought, covering the most common heir scenarios. It does not cover distant relatives such as nephews or paternal uncles. For complex family situations, wasiyyah disputes, or estates involving non-Muslim heirs, please consult a qualified Islamic scholar before finalizing any distribution.</em>
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
