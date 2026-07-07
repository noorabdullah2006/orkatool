# Cards

## Overview

Cards are one of the core building blocks of the OrkaTool interface.

They group related information into a visually distinct container, making content easier to scan, understand, and interact with.

Cards are used throughout the application for tools, categories, blog posts, statistics, features, and dashboard elements.

Every card should follow the same design system to maintain a consistent user experience.

---

# Goals

The Card component should be:

- Reusable
- Responsive
- Accessible
- Flexible
- Consistent
- Easy to extend

---

# Use Cases

Cards are used for:

- Tool Cards
- Category Cards
- Featured Tool Cards
- Blog Cards
- Feature Cards
- Statistic Cards
- Pricing Cards
- Profile Cards
- Information Cards
- Dashboard Widgets

---

# Folder Structure

```
components/
└── ui/
    └── card/
        ├── card.tsx
        ├── card.types.ts
        └── index.ts
```

---

# Card Anatomy

A standard card may contain:

- Header
- Icon or Image
- Title
- Description
- Content
- Footer
- Action Button

Example

```
+------------------------------+

 Icon

 Title

 Description

 Button

+------------------------------+
```

---

# Variants

## Default

Standard card used across the application.

---

## Elevated

Uses a larger shadow to create emphasis.

---

## Outlined

Uses only a border with minimal shadow.

---

## Interactive

Clickable card used for navigation.

---

## Feature

Highlights important content.

---

## Statistic

Displays numerical information.

---

## Tool

Displays a single tool with icon, title, description and action.

---

## Blog

Displays article preview with image and metadata.

---

# Sizes

Supported sizes:

Small

Medium

Large

Auto Height

---

# Card Content

Cards may include:

- Icon
- Image
- Badge
- Heading
- Description
- Metadata
- CTA Button
- Footer

Each section should be optional.

---

# States

Cards support:

Default

Hover

Focus

Active

Disabled (if applicable)

Loading

Selected

---

# Hover Behaviour

Interactive cards should provide visual feedback.

Examples:

- Border color change
- Shadow increase
- Slight upward movement
- Background transition

Hover effects should remain subtle.

---

# Accessibility

Cards must:

- Use semantic HTML
- Provide visible focus styles
- Support keyboard navigation when interactive
- Include descriptive text
- Maintain sufficient color contrast

Interactive cards should not rely on hover alone.

---

# Responsive Behaviour

Desktop

Multiple cards in a grid.

Tablet

Reduced columns.

Mobile

Single-column layout with full width.

Cards should never overflow the viewport.

---

# Design Tokens

Cards must use design tokens.

Examples

Colors

```
--color-surface
--color-border
--color-text-primary
```

Spacing

```
--space-4
--space-6
```

Radius

```
--radius-lg
```

Shadows

```
--shadow-sm
--shadow-md
```

Transitions

```
--transition-base
```

---

# Best Practices

- Keep content concise.
- Maintain consistent spacing.
- Use descriptive titles.
- Include clear call-to-action buttons.
- Keep icons aligned.
- Maintain equal heights where possible.

---

# Avoid

Do not:

- Overload cards with excessive content.
- Use inconsistent spacing.
- Hardcode colors.
- Place multiple primary actions inside one card.
- Mix unrelated content.

---

# Future Improvements

Future enhancements may include:

- Expandable Cards
- Collapsible Cards
- Skeleton Loading
- Drag-and-Drop Support
- Card Groups
- Animated Entry Effects
- Bookmark Support
- Favorite Actions

---

# Related Components

- Button
- Badge
- Icon
- Avatar
- Tooltip
- Modal
- Section
- Hero
- Grid

---

# Summary

Cards are the foundation of the OrkaTool content layout.

A well-designed card system improves readability, consistency, scalability, and user engagement while supporting a wide variety of content across the application.