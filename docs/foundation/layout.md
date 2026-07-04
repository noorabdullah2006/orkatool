# Layout System

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

The Layout System defines how every page in OrkaTool is structured.

It establishes consistent rules for containers, sections, grids, alignment, spacing, and page composition.

A predictable layout system improves usability, readability, scalability, and maintainability.

Every page must follow this document.

---

# Design Philosophy

Layouts should feel:

- Clean
- Spacious
- Structured
- Predictable
- Professional

The layout should never compete with the content.

Instead, it should help users focus on completing their task.

---

# Layout Principles

Every layout should be:

- Responsive
- Consistent
- Accessible
- Flexible
- Reusable
- Content-first

---

# Page Structure

Every page follows the same overall structure.

```
<html>

Header

Main

Footer

</html>
```

Inside `<main>`:

```
Page

├── Hero (Optional)
├── Tool Section
├── Content Sections
├── FAQ
├── Related Tools
└── CTA (Optional)
```

This structure should remain consistent across all tool pages.

---

# Header

The header should remain simple and lightweight.

Contains:

- Logo
- Navigation
- Search (future)
- Theme Toggle (future)

Requirements:

- Sticky
- Responsive
- Accessible

Height:

72px (Desktop)

64px (Mobile)

---

# Main

The `<main>` element contains all primary page content.

Requirements:

- Only one `<main>` per page.
- Use semantic sections.
- Maintain consistent vertical spacing.

---

# Footer

The footer appears on every page.

Contains:

- Navigation
- Company Links
- Legal Links
- Copyright
- Social Links (future)

The footer should remain visually lighter than the main content.

---

# Container

Containers control maximum content width.

Containers should:

- Center content.
- Prevent overly long reading lines.
- Maintain consistent horizontal padding.

---

## Maximum Widths

| Size | Width |
|-------|-------|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| XL | 1280px |
| Full | 1440px |

Most content should use the **XL container**.

---

# Horizontal Padding

Container padding:

Mobile

16px

Tablet

24px

Desktop

32px

Large Desktop

40px

---

# Sections

Each logical part of a page should be wrapped inside a `<section>`.

Examples:

- Hero
- Calculator
- FAQ
- Features
- Related Tools

Avoid unnecessary nested sections.

---

# Section Width

Content should never stretch edge-to-edge.

Every section should use the shared container component.

---

# Vertical Rhythm

Spacing between major sections:

Desktop

80–120px

Tablet

64–80px

Mobile

48–64px

---

# Grid System

Use CSS Grid for multi-column layouts.

Recommended columns:

Mobile

1 Column

Tablet

2 Columns

Desktop

12 Columns

---

# Grid Gap

Small

16px

Medium

24px

Large

32px

---

# Flex Layout

Use Flexbox for:

- Navigation
- Button Groups
- Toolbars
- Cards
- Small Layouts

Use Grid for page layouts.

---

# Content Width

Long-form content should remain readable.

Recommended width:

65–75 characters per line.

Avoid full-width paragraphs.

---

# Sidebar

Future support.

Desktop:

Optional.

Mobile:

Always collapsible.

The sidebar should never push primary content off-screen.

---

# Cards

Cards should:

- Align consistently.
- Use equal padding.
- Maintain equal spacing.
- Avoid inconsistent heights where possible.

---

# Images

Images should:

- Scale responsively.
- Never overflow containers.
- Maintain aspect ratio.

Large decorative images should be minimized.

---

# Tables

Tables should:

- Scroll horizontally on mobile.
- Never overflow the viewport.
- Maintain readable spacing.

---

# Empty States

Empty states should contain:

- Illustration (optional)
- Title
- Description
- Primary Action

Keep empty states simple.

---

# Loading States

Use skeleton loaders instead of layout shifts whenever possible.

Loading states should preserve the final layout.

---

# Error States

Error layouts should contain:

- Title
- Description
- Recovery Action

Errors should help users recover quickly.

---

# Alignment

Default alignment:

Left

Center alignment is reserved for:

- Hero
- Empty States
- Success Pages

Avoid unnecessary centered layouts.

---

# Responsive Behavior

Layouts should adapt naturally.

Do not:

- Hide important content.
- Break reading order.
- Change navigation logic.

Responsive behavior should simplify the interface rather than remove functionality.

---

# Semantic HTML

Preferred elements:

- header
- nav
- main
- section
- article
- aside
- footer

Avoid replacing semantic elements with generic containers.

---

# Accessibility

Layouts must support:

- Keyboard navigation
- Logical focus order
- Screen readers
- Zoom up to 200%
- Reduced motion preferences

---

# Performance

Layouts should:

- Minimize nested wrappers.
- Reduce unnecessary DOM depth.
- Avoid layout shifts.
- Use reusable layout components.

---

# Layout Components

The project uses reusable layout components.

Core components include:

- Container
- Section
- Main
- Header
- Footer
- Wrapper (if required)

These components define the overall page structure and should be reused throughout the project.

---

# Rules

Always:

- Use the shared Container component.
- Use semantic HTML.
- Maintain consistent spacing.
- Follow the grid system.
- Keep layouts predictable.

Never:

- Create custom page layouts without justification.
- Hardcode widths.
- Stretch content edge-to-edge.
- Introduce inconsistent spacing.
- Duplicate layout components.

---

# Related Documents

- design-philosophy.md
- design-tokens.md
- spacing.md
- responsive.md
- css-architecture.md
- project-architecture.md