# Spacing System

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

The spacing system defines every margin, padding, gap, and whitespace used throughout OrkaTool.

A consistent spacing system creates visual rhythm, improves readability, strengthens hierarchy, and makes interfaces easier to maintain.

Every component, layout, and page must use spacing tokens instead of arbitrary values.

---

# Design Principles

The spacing system should be:

- Consistent
- Predictable
- Scalable
- Responsive
- Maintainable
- Easy to understand

Spacing should create structure—not empty space.

---

# Philosophy

Whitespace is an essential design element.

Proper spacing helps users:

- Scan content faster
- Understand hierarchy
- Reduce visual clutter
- Improve reading comfort
- Focus on important actions

More spacing is usually better than cramped layouts.

---

# Base Unit

The entire design system is based on an **8px spacing scale**.

Benefits:

- Consistent layouts
- Easier alignment
- Predictable spacing
- Better responsive behavior

---

# Spacing Scale

| Token | Value |
|--------|---------|
| 0 | 0px |
| 1 | 4px |
| 2 | 8px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |
| 16 | 64px |
| 20 | 80px |
| 24 | 96px |
| 32 | 128px |

These values should cover nearly all spacing requirements.

---

# Margin Rules

Margins create separation between components.

Use margins for:

- Sections
- Cards
- Lists
- Content groups

Avoid excessive nested margins.

---

# Padding Rules

Padding creates internal breathing space.

Padding should always be consistent across similar components.

Examples:

- Buttons
- Cards
- Inputs
- Tables
- Alerts

---

# Gap Rules

Gap should be preferred over margins for:

- Flex layouts
- Grid layouts
- Button groups
- Card grids

Using `gap` keeps layouts simpler and easier to maintain.

---

# Section Spacing

Major sections should have generous spacing.

Recommended values:

Desktop:

80–120px

Tablet:

64–80px

Mobile:

48–64px

---

# Component Spacing

Components should follow consistent internal spacing.

### Buttons

Horizontal:

16–24px

Vertical:

10–14px

---

### Cards

Padding:

24px

Gap:

16px

---

### Forms

Field Gap:

16–24px

Label Gap:

8px

Section Gap:

32px

---

### Tables

Cell Padding:

16px

Header Padding:

16px

Row Gap:

0

---

### Alerts

Padding:

16px

Icon Gap:

12px

---

### Badges

Horizontal:

10px

Vertical:

4px

---

# Content Spacing

Recommended spacing between:

Heading → Paragraph

16px

Paragraph → Paragraph

16–24px

Heading → List

16px

List Item

8px

Image → Caption

8px

Section → Section

80px

---

# Layout Rhythm

Every page should follow a predictable vertical rhythm.

Content should flow naturally from one section to another.

Avoid inconsistent spacing between similar sections.

---

# Container Spacing

Recommended horizontal padding.

Mobile:

16px

Tablet:

24px

Desktop:

32px

Large Desktop:

40px

---

# Grid Gap

Recommended values.

Small Grid

16px

Medium Grid

24px

Large Grid

32px

---

# Responsive Spacing

Spacing should decrease gradually on smaller screens.

Never reduce spacing so much that the interface feels crowded.

Whitespace is especially important on mobile devices.

---

# Radius Scale

Border radius should also follow a token system.

| Token | Value |
|--------|--------|
| None | 0px |
| XS | 2px |
| SM | 4px |
| MD | 8px |
| LG | 12px |
| XL | 16px |
| 2XL | 24px |
| Full | 9999px |

Use the smallest radius that achieves the desired appearance.

---

# Shadow Scale

Shadows indicate elevation.

| Token | Usage |
|--------|-------|
| None | Flat elements |
| SM | Inputs |
| MD | Cards |
| LG | Dropdowns |
| XL | Modals |

Shadows should remain soft and subtle.

Avoid heavy or blurry shadows.

---

# Spacing Rules

Always:

- Use spacing tokens.
- Maintain consistent rhythm.
- Prefer gap over margin in layouts.
- Keep component spacing predictable.

Never:

- Use random pixel values.
- Mix spacing systems.
- Remove whitespace to fit more content.
- Hardcode spacing values in components.

---

# CSS Variable Examples

```css
--space-0: 0px;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;

--radius-none: 0;
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

# Related Documents

- design-philosophy.md
- design-tokens.md
- colors.md
- typography.md
- layout.md
- responsive.md
- css-architecture.md