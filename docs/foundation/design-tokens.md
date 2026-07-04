# Design Tokens

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

Design Tokens are the single source of truth for every reusable design value used throughout OrkaTool.

They separate design decisions from implementation, ensuring consistency, maintainability, scalability, and future theme support.

No component should contain hardcoded visual values when an appropriate design token exists.

---

# What Are Design Tokens?

Design Tokens are reusable variables that define the visual language of the product.

Examples include:

- Colors
- Typography
- Spacing
- Border Radius
- Shadows
- Motion
- Layout
- Breakpoints
- Z-Index

Every UI component must consume these tokens instead of defining its own values.

---

# Design Principles

Design Tokens should be:

- Consistent
- Reusable
- Semantic
- Scalable
- Theme-ready
- Easy to maintain

---

# Token Categories

The project uses the following token groups.

## Color Tokens

Define:

- Brand colors
- Neutral palette
- Semantic colors
- Backgrounds
- Text colors
- Borders

Reference:

`colors.md`

---

## Typography Tokens

Define:

- Font families
- Font sizes
- Font weights
- Line heights
- Letter spacing

Reference:

`typography.md`

---

## Spacing Tokens

Define:

- Margin
- Padding
- Gap
- Section spacing

Reference:

`spacing.md`

---

## Radius Tokens

Define:

- Buttons
- Inputs
- Cards
- Images
- Badges
- Modals

Reference:

`spacing.md`

---

## Shadow Tokens

Define elevation levels for:

- Cards
- Dropdowns
- Modals
- Tooltips
- Sticky elements

Reference:

`spacing.md`

---

## Motion Tokens

Define:

- Durations
- Timing functions
- Transitions

Reference:

`motion.md`

---

## Layout Tokens

Define:

- Containers
- Content widths
- Grid gaps
- Section widths

Reference:

`layout.md`

---

## Breakpoint Tokens

Define responsive breakpoints for:

- Mobile
- Tablet
- Laptop
- Desktop

Reference:

`responsive.md`

---

## Z-Index Tokens

Define stacking layers for:

- Dropdowns
- Sticky Header
- Sidebar
- Modal
- Toast
- Tooltip

Reference:

`layout.md`

---

# Token Hierarchy

Tokens follow a three-level hierarchy.

```
Primitive Tokens
        ↓
Semantic Tokens
        ↓
Component Tokens
```

Example:

```
Primitive

--blue-600

↓

Semantic

--color-primary

↓

Component

--button-background
```

Components should consume semantic or component tokens rather than primitive values directly.

---

# CSS Variable Rules

All design tokens must be declared inside the global token files.

Example:

```css
:root {
    --color-primary: #2563EB;
    --space-4: 16px;
    --radius-md: 12px;
}
```

Components must reference variables instead of hardcoded values.

Correct:

```css
padding: var(--space-4);
```

Incorrect:

```css
padding: 16px;
```

---

# Naming Convention

Use descriptive semantic names.

Good examples:

```
--color-primary
--color-success
--font-size-h1
--space-6
--radius-md
--shadow-sm
--duration-normal
```

Avoid:

```
--blue
--red
--margin1
--radius12
--shadow2
```

---

# Reusability Rules

Before creating a new token:

1. Check whether an existing token already satisfies the requirement.
2. Prefer reuse over duplication.
3. Create a new token only when no suitable token exists.

---

# Theme Support

All visual values must be token-driven.

Themes should override token values only.

Components must never contain theme-specific styles.

This approach allows future support for:

- Light Theme
- Dark Theme
- High Contrast Theme

without rewriting component CSS.

---

# Performance Guidelines

Design Tokens should:

- Reduce duplicated values
- Improve maintainability
- Minimize CSS changes
- Keep styles predictable

Avoid unnecessary token duplication.

---

# Token Governance

New tokens should only be added when:

- No existing token satisfies the requirement.
- The new value has long-term reuse potential.
- The naming follows the project conventions.

Existing tokens should never be renamed without updating all dependent components and documentation.

Deprecated tokens should remain available until they are safely removed in a future major version.

---

# Implementation Rules

Every component must:

- Use design tokens.
- Avoid hardcoded visual values.
- Follow the established token hierarchy.
- Remain compatible with future themes.

---

# Scope

This document defines how design tokens are organized and used.

Individual token values are documented in:

- colors.md
- typography.md
- spacing.md
- layout.md
- motion.md
- responsive.md