# Navigation

## Overview

Navigation is one of the most critical components of the OrkaTool design system.

It allows users to move efficiently between pages, tool categories, documentation, and future application sections.

Every navigation component should follow a consistent design language to ensure usability, accessibility, and responsiveness.

---

# Goals

The Navigation system should be:

- Consistent
- Reusable
- Accessible
- Responsive
- Keyboard Friendly
- Easy to Maintain
- Scalable

---

# Navigation Types

The design system supports multiple navigation patterns.

## Primary Navigation

Located inside the Header.

Contains:

- Home
- Categories
- All Tools
- About
- Contact

---

## Footer Navigation

Contains grouped links.

Example:

Company

Resources

Legal

Social

---

## Mobile Navigation

Displayed below tablet breakpoint.

Opened using a Hamburger Menu.

Should cover:

- Main Links
- Categories
- Search
- Theme Toggle

---

## Breadcrumb Navigation

Used on internal pages.

Example

```
Home

>

Calculators

>

BMI Calculator
```

---

## Pagination Navigation

Used for:

- Blog
- Categories
- Search Results

Example

```
Previous

1

2

3

Next
```

---

# Folder Structure

```
components/
└── ui/
    └── navigation/
        ├── navigation.tsx
        ├── navigation.types.ts
        ├── navigation-item.tsx
        ├── mobile-navigation.tsx
        ├── breadcrumb.tsx
        ├── pagination.tsx
        └── index.ts
```

---

# Navigation Anatomy

Desktop Header

```
Logo

Home

Categories

All Tools

About

Contact

Search

Theme
```

---

Footer Navigation

```
Company

About

Contact

Privacy

Terms

Resources

Blog

Guides

Categories

Calculators

Converters

Developer Tools
```

---

# Navigation Items

Each navigation item contains:

- Label
- URL
- Optional Icon
- Optional Badge
- Active State

Example

```
Home

Categories

New Tools

Blog
```

---

# States

Navigation items support:

Default

Hover

Focus

Active

Disabled

Current Page

---

# Active State

The current page should always be visually highlighted.

Do not rely only on color.

Recommended indicators:

- Underline
- Font Weight
- Primary Color
- Background Highlight

---

# Hover State

Hover should indicate interactivity.

Recommended changes:

- Text Color
- Underline Animation
- Background (optional)

Animations should remain subtle.

---

# Mobile Navigation

Below the desktop breakpoint:

Desktop navigation disappears.

Hamburger button becomes visible.

Navigation slides from:

- Left
- Right

depending on future implementation.

The mobile menu should support:

- Close Button
- Scroll Lock
- Keyboard Navigation

---

# Accessibility

Navigation must:

- Support keyboard navigation.
- Use semantic HTML.
- Include aria-label where necessary.
- Clearly indicate current page.
- Maintain sufficient contrast.
- Have visible focus indicators.

Recommended HTML

```
<nav>

<ul>

<li>

<a>

```

---

# Responsive Behaviour

Desktop

Horizontal navigation.

Tablet

Hide primary links.

Show hamburger.

Mobile

Full-screen navigation drawer.

Stack links vertically.

---

# Design Tokens

Navigation must use design tokens.

Colors

```
--color-text-primary

--color-text-secondary

--color-primary

--color-border

--color-surface
```

Spacing

```
--space-2

--space-3

--space-4

--space-6
```

Typography

```
--font-size-sm

--font-size-base

--font-weight-medium

--font-weight-semibold
```

Radius

```
--radius-md

--radius-lg
```

Transitions

```
--transition-fast
```

---

# Best Practices

- Keep labels short.
- Maintain consistent order.
- Avoid deep nesting.
- Highlight current page.
- Keep navigation predictable.

---

# Avoid

Do not:

- Overcrowd the header.
- Hide important pages.
- Use inconsistent labels.
- Mix multiple navigation styles.
- Depend only on color for active states.

---

# Future Improvements

Navigation may later support:

- Mega Menu
- Sticky Categories
- Tool Search Integration
- Keyboard Shortcuts
- Recently Viewed Tools
- User Dashboard Navigation
- Multi-level Dropdowns
- Command Palette

---

# Related Components

- Header
- Footer
- Button
- Badge
- Modal
- Search
- Breadcrumb
- Pagination

---

# Summary

Navigation provides the primary way users explore OrkaTool.

A unified Navigation system ensures consistency, usability, and scalability across every page while supporting future expansion of the platform.