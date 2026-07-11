import "@/styles/blog/blog.css";

export default function BlogDesignTest() {

  return (

    <article>

      {/* =========================================================
          Hero
      ========================================================= */}

      <header className="blog-hero">

        <div className="blog-hero-container">

          <span className="blog-category">

            UI Testing

          </span>

          <h1 className="blog-title">

            Blog Design System Test

          </h1>

          <p className="blog-description">

            This page is created to test every blog
            component including typography, tables,
            alerts, code blocks, FAQs, responsive
            layouts and more before writing
            production articles.

          </p>

          <div className="blog-meta">

            <span>

              👤 OrkaTool Team

            </span>

            <span>

              📅 July 11, 2026

            </span>

            <span>

              ⏱ 5 min read

            </span>

          </div>

          <img
            src="https://picsum.photos/1200/650"
            alt="Blog Design Test"
            className="blog-hero-image"
          />

        </div>

      </header>

      {/* =========================================================
          TOC
      ========================================================= */}

      <nav className="blog-toc">

        <h2 className="blog-toc-title">

          📑 Table of Contents

        </h2>

        <ul className="blog-toc-list">

          <li>

            <a
              href="#introduction"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                1

              </span>

              Introduction

            </a>

          </li>

          <li>

            <a
              href="#typography"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                2

              </span>

              Typography

            </a>

          </li>

          <li>

            <a
              href="#lists"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                3

              </span>

              Lists

            </a>

          </li>

          <li>

            <a
              href="#images"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                4

              </span>

              Images

            </a>

          </li>

          <li>

            <a
              href="#alerts"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                5

              </span>

              Alerts

            </a>

          </li>

          <li>

            <a
              href="#tables"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                6

              </span>

              Tables

            </a>

          </li>

          <li>

            <a
              href="#comparison"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                7

              </span>

              Comparison

            </a>

          </li>

          <li>

            <a
              href="#steps"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                8

              </span>

              Steps

            </a>

          </li>

          <li>

            <a
              href="#formula"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                9

              </span>

              Formula

            </a>

          </li>

          <li>

            <a
              href="#code"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                10

              </span>

              Code

            </a>

          </li>

          <li>

            <a
              href="#faq"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                11

              </span>

              FAQ

            </a>

          </li>

          <li>

            <a
              href="#cta"
              className="blog-toc-link"
            >

              <span className="blog-toc-number">

                12

              </span>

              CTA

            </a>

          </li>

        </ul>

      </nav>

    </article>

  );

}


{/* =========================================================
    Introduction
========================================================= */}

<section
  id="introduction"
  className="blog-content"
>

  <h2>

    Introduction

  </h2>

  <p>

    Welcome to the <strong>OrkaTool Blog Design Test</strong>.
    This article is intentionally created to verify every
    reusable blog component before publishing real
    production content.

  </p>

  <p>

    Throughout this article you will see headings, lists,
    tables, alerts, images, code blocks, FAQs and CTA
    sections. If every section looks correct on desktop
    and mobile, our blog system is ready.

  </p>

  <blockquote>

    A reusable design system saves hundreds of hours
    when publishing future articles.

  </blockquote>

  <hr />

</section>

{/* =========================================================
    Typography
========================================================= */}

<section
  id="typography"
  className="blog-content"
>

  <h2>

    Typography Test

  </h2>

  <p>

    This paragraph checks the default spacing,
    line-height and text width.

  </p>

  <h3>

    Heading Level Three

  </h3>

  <p>

    Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Nulla facilisi. Sed dignissim sapien sed
    purus feugiat posuere.

  </p>

  <h4>

    Heading Level Four

  </h4>

  <p>

    This sentence contains
    <strong> bold text</strong>,
    <em> italic text</em>,
    <code>inline code</code>
    and an
    <a href="#">
      example link
    </a>.

  </p>

</section>

{/* =========================================================
    Lists
========================================================= */}

<section
  id="lists"
  className="blog-content"
>

  <h2>

    List Styles

  </h2>

  <p>

    Unordered List

  </p>

  <ul>

    <li>Responsive Design</li>

    <li>Reusable Components</li>

    <li>SEO Friendly Structure</li>

    <li>Fast Performance</li>

  </ul>

  <p>

    Ordered List

  </p>

  <ol>

    <li>Create the article</li>

    <li>Add metadata</li>

    <li>Publish</li>

    <li>Share</li>

  </ol>

</section>

{/* =========================================================
    Images
========================================================= */}

<section
  id="images"
  className="blog-content"
>

  <h2>

    Image Test

  </h2>

  <figure>

    <img
      src="https://picsum.photos/1200/700"
      alt="Placeholder"
    />

    <figcaption>

      Example image with caption.

    </figcaption>

  </figure>

  <p>

    The image above should remain responsive,
    maintain rounded corners and never overflow
    on smaller screens.

  </p>

</section>


{/* =========================================================
    Alerts
========================================================= */}

<section
  id="alerts"
  className="blog-content"
>

  <h2>

    Alert Components

  </h2>

  <p>

    These reusable alert boxes can be used throughout
    OrkaTool blogs for tips, warnings and important
    information.

  </p>

  <div className="blog-alert blog-alert-info">

    <div className="blog-alert-icon">
      ℹ️
    </div>

    <div className="blog-alert-content">

      <h3 className="blog-alert-title">

        Information

      </h3>

      <p>

        This is an informational alert used for
        helpful explanations.

      </p>

    </div>

  </div>

  <div className="blog-alert blog-alert-success">

    <div className="blog-alert-icon">
      ✅
    </div>

    <div className="blog-alert-content">

      <h3 className="blog-alert-title">

        Success

      </h3>

      <p>

        This alert highlights successful actions
        or recommended practices.

      </p>

    </div>

  </div>

  <div className="blog-alert blog-alert-warning">

    <div className="blog-alert-icon">
      ⚠️
    </div>

    <div className="blog-alert-content">

      <h3 className="blog-alert-title">

        Warning

      </h3>

      <p>

        This warning reminds users to double-check
        important information.

      </p>

    </div>

  </div>

  <div className="blog-alert blog-alert-danger">

    <div className="blog-alert-icon">
      ❌
    </div>

    <div className="blog-alert-content">

      <h3 className="blog-alert-title">

        Danger

      </h3>

      <p>

        Use this style for critical warnings or
        mistakes users should avoid.

      </p>

    </div>

  </div>

  <div className="blog-alert blog-alert-tip">

    <div className="blog-alert-icon">
      💡
    </div>

    <div className="blog-alert-content">

      <h3 className="blog-alert-title">

        Pro Tip

      </h3>

      <p>

        Great for SEO tips, productivity advice
        or best practices.

      </p>

    </div>

  </div>

</section>

{/* =========================================================
    Tables
========================================================= */}

<section
  id="tables"
  className="blog-content"
>

  <h2>

    Responsive Table

  </h2>

  <p>

    This table verifies scrolling behaviour,
    borders and spacing.

  </p>

  <div className="blog-table-wrapper">

    <table className="blog-table">

      <thead>

        <tr>

          <th>Feature</th>

          <th>Manual Method</th>

          <th>OrkaTool</th>

        </tr>

      </thead>

      <tbody>

        <tr>

          <td>Speed</td>

          <td>Slow</td>

          <td>Instant</td>

        </tr>

        <tr>

          <td>Accuracy</td>

          <td>Medium</td>

          <td>Excellent</td>

        </tr>

        <tr>

          <td>Ease of Use</td>

          <td>Average</td>

          <td>Very Easy</td>

        </tr>

        <tr>

          <td>Mobile Friendly</td>

          <td>No</td>

          <td>Yes</td>

        </tr>

      </tbody>

    </table>

  </div>

</section>

{/* =========================================================
    Comparison
========================================================= */}

<section
  id="comparison"
>

  <div className="blog-comparison">

    <article className="blog-comparison-card">

      <div className="blog-comparison-header">

        <div className="blog-comparison-icon">

          📝

        </div>

        <h3 className="blog-comparison-title">

          Manual Method

        </h3>

      </div>

      <ul className="blog-comparison-list blog-comparison-negative">

        <li>

          Takes more time

        </li>

        <li>

          Human errors possible

        </li>

        <li>

          Requires calculations

        </li>

        <li>

          Difficult on mobile

        </li>

      </ul>

    </article>

    <article className="blog-comparison-card">

      <div className="blog-comparison-header">

        <div className="blog-comparison-icon">

          🚀

        </div>

        <h3 className="blog-comparison-title">

          OrkaTool

        </h3>

      </div>

      <ul className="blog-comparison-list">

        <li>

          Instant calculation

        </li>

        <li>

          Accurate results

        </li>

        <li>

          Beginner friendly

        </li>

        <li>

          Works on every device

        </li>

      </ul>

      <div className="blog-comparison-footer">

        <span className="blog-comparison-badge">

          Recommended

        </span>

      </div>

    </article>

  </div>

</section>


{/* =========================================================
    FAQ
========================================================= */}

<section
  id="faq"
  className="blog-faq"
>

  <h2>

    Frequently Asked Questions

  </h2>

  <details
    className="blog-faq-item"
    open
  >

    <summary className="blog-faq-question">

      Is this a real blog article?

      <span className="blog-faq-icon">

        +

      </span>

    </summary>

    <div className="blog-faq-answer">

      <p>

        No. This article is only created to test
        the complete OrkaTool Blog Design System.

      </p>

    </div>

  </details>

  <details
    className="blog-faq-item"
  >

    <summary className="blog-faq-question">

      Does this page test every component?

      <span className="blog-faq-icon">

        +

      </span>

    </summary>

    <div className="blog-faq-answer">

      <p>

        Yes. Typography, images, alerts, tables,
        comparison cards, steps, code blocks,
        FAQ and CTA are all included.

      </p>

    </div>

  </details>

  <details
    className="blog-faq-item"
  >

    <summary className="blog-faq-question">

      Can this page be removed later?

      <span className="blog-faq-icon">

        +

      </span>

    </summary>

    <div className="blog-faq-answer">

      <p>

        Absolutely. It exists only for development
        and design verification.

      </p>

    </div>

  </details>

</section>

{/* =========================================================
    CTA
========================================================= */}

<footer
  id="cta"
  className="blog-cta"
>

  <div className="blog-cta-content">

    <h2 className="blog-cta-title">

      Ready to Explore OrkaTool?

    </h2>

    <p className="blog-cta-description">

      This Call-to-Action section verifies layout,
      spacing, buttons and responsiveness before
      publishing production blog articles.

    </p>

    <div className="blog-cta-actions">

      <Link
        href="/tools"
        className="blog-cta-button"
      >

        Explore Tools

      </Link>

      <Link
        href="/blog"
        className="blog-cta-button-outline"
      >

        Browse Articles

      </Link>

    </div>

  </div>

</footer>