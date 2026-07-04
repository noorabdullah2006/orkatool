# Typography

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

Typography defines how text is presented throughout OrkaTool.

A well-designed typography system improves readability, creates visual hierarchy, strengthens brand identity, and increases user trust.

Typography is one of the most important aspects of user experience because every page primarily communicates information through text.

---

# Typography Principles

The typography system should always be:

- Clear
- Readable
- Consistent
- Accessible
- Professional
- Calm
- Scalable
- Responsive

Typography should guide users naturally through content without drawing unnecessary attention.

---

# Design Philosophy

Text exists to communicate information—not decoration.

Typography should:

- Help users scan content quickly.
- Reduce reading fatigue.
- Improve comprehension.
- Create clear hierarchy.
- Support accessibility.

---

# Font Family

## Primary Font

Inter

Used for:

- UI
- Navigation
- Buttons
- Forms
- Cards
- Tables
- Tool Interfaces

---

## Fallback Fonts

```css
font-family:
Inter,
system-ui,
-apple-system,
BlinkMacSystemFont,
"Segoe UI",
Roboto,
Helvetica,
Arial,
sans-serif;
```

The fallback stack ensures consistent rendering across all platforms.

---

# Font Philosophy

The font should feel:

- Modern
- Professional
- Neutral
- Highly readable

Avoid decorative fonts for interface elements.

---

# Font Weight Scale

| Weight | Usage |
|---------|-------|
| 400 | Body text |
| 500 | Labels |
| 600 | Buttons |
| 700 | Headings |
| 800 | Hero headings |

Avoid unnecessary use of very bold weights.

---

# Font Size Scale

| Token | Size |
|--------|------|
| xs | 12px |
| sm | 14px |
| base | 16px |
| lg | 18px |
| xl | 20px |
| 2xl | 24px |
| 3xl | 30px |
| 4xl | 36px |
| 5xl | 48px |
| 6xl | 60px |

The base font size for the application is **16px**.

---

# Heading Hierarchy

Only one `<h1>` should exist on each page.

| Element | Usage |
|----------|-------|
| H1 | Page Title |
| H2 | Main Sections |
| H3 | Subsections |
| H4 | Component Sections |
| H5 | Small Titles |
| H6 | Minor Headings |

Heading levels should never be skipped.

---

# Line Height

| Usage | Value |
|--------|-------|
| Headings | 1.2 |
| Body | 1.6 |
| Long Content | 1.8 |
| Buttons | 1.2 |
| Inputs | 1.4 |

Comfortable line height improves reading speed and reduces eye strain.

---

# Letter Spacing

| Usage | Value |
|--------|-------|
| Display | -0.02em |
| Headings | -0.01em |
| Body | 0 |
| Buttons | 0.01em |
| Captions | 0.02em |

Letter spacing should remain subtle.

---

# Text Hierarchy

Typography should clearly communicate importance.

Hierarchy:

1. Display
2. H1
3. H2
4. H3
5. H4
6. Body
7. Small Text
8. Caption

Users should understand page structure without relying on color.

---

# Paragraph Rules

Paragraphs should remain concise.

Guidelines:

- Prefer short paragraphs.
- Avoid large blocks of text.
- Separate ideas into different paragraphs.
- Use headings frequently.

---

# Text Alignment

Default alignment:

Left

Center alignment should only be used for:

- Hero sections
- Empty states
- Success pages

Justified text should never be used.

---

# Maximum Reading Width

Long text should not span the full screen.

Recommended maximum width:

65–75 characters per line.

This improves reading comfort.

---

# Lists

Lists should be used when presenting:

- Features
- Steps
- Requirements
- Benefits
- Options

Avoid excessively long bullet lists.

---

# Links

Links should:

- Be distinguishable from normal text.
- Use the primary brand color.
- Include hover feedback.
- Maintain accessibility contrast.

Links should not rely solely on color.

---

# Buttons

Button text should be:

- Clear
- Short
- Action-oriented

Examples:

- Calculate
- Download
- Continue
- Copy
- Save

Avoid vague labels such as:

- Click Here
- Submit Form
- OK

---

# Forms

Labels should always appear above inputs.

Placeholder text should never replace labels.

Helper text should remain concise.

Error messages should explain how to fix the issue.

---

# Tables

Headers:

- Medium weight
- Clear contrast

Body:

- Regular weight

Numeric values should align consistently.

---

# Accessibility

Typography must comply with WCAG 2.2 AA.

Requirements:

- Minimum body font size: 16px
- Adequate line spacing
- Sufficient color contrast
- Zoom support up to 200%
- Readable on all screen sizes

---

# Responsive Typography

Typography should scale naturally.

Mobile should prioritize readability over density.

Large display headings should reduce proportionally on smaller devices.

---

# Typography Rules

Always:

- Use semantic headings.
- Maintain hierarchy.
- Use consistent spacing.
- Follow token values.
- Prefer readability over visual impact.

Never:

- Use multiple font families.
- Use decorative fonts.
- Center long paragraphs.
- Skip heading levels.
- Use text purely for decoration.

---

# Related Documents

- design-philosophy.md
- design-tokens.md
- colors.md
- spacing.md
- responsive.md
- accessibility.md