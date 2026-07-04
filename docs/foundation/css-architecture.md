# CSS Architecture

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official CSS architecture for OrkaTool.

It establishes how styles are organized, where new styles should be written, and how the design system is structured.

Every stylesheet in the project must follow these rules.

---

# Objectives

The CSS architecture should be:

- Scalable
- Modular
- Predictable
- Maintainable
- Reusable
- Easy to navigate

---

# Architecture Principles

The styling system follows these principles:

- Design Tokens First
- Component-Based Styling
- Reusability Over Duplication
- Mobile-First
- Utility Only When Necessary
- Consistent Naming
- Low Specificity

---

# Folder Structure

```
styles/

├── tokens/
├── base/
├── patterns/
├── layouts/
├── components/
├── animations/
├── responsive/
└── themes/
```

Each folder has a single responsibility.

---

# Tokens

Purpose:

Store reusable design values.

Contains:

```
colors.css
spacing.css
typography.css
radius.css
shadows.css
motion.css
breakpoints.css
z-index.css
```

Rules:

- No component styles.
- No layout styles.
- Only design variables.

---

# Base

Purpose:

Global browser styles.

Contains:

```
reset.css
base.css
typography.css
utilities.css
```

Responsibilities:

- CSS reset
- Default typography
- HTML elements
- Global helpers

Never place component styles here.

---

# Patterns

Purpose:

Reusable layout patterns.

Contains:

```
grid.css
stack.css
cluster.css
wrapper.css
```

Patterns solve common layout problems.

They should remain generic.

---

# Layouts

Purpose:

Styles for shared layout components.

Contains:

```
container.css
section.css
main.css
header.css
footer.css
```

Only global layout styles belong here.

---

# Components

Purpose:

Reusable UI components.

Examples:

```
button.css
input.css
card.css
table.css
alert.css
badge.css
modal.css
navigation.css
```

Each file should style only one component.

Avoid combining unrelated components.

---

# Animations

Purpose:

Reusable animation system.

Contains:

```
keyframes.css
transitions.css
```

Animations should remain reusable.

Avoid component-specific animations.

---

# Responsive

Purpose:

Responsive utilities.

Examples:

```
responsive.css
visibility.css
```

Only responsive behavior belongs here.

---

# Themes

Purpose:

Theme customization.

Currently:

```
light.css
```

Future:

```
dark.css
```

Only theme values should exist here.

---

# Import Order

Styles must always be imported in the following order:

```
tokens

↓

base

↓

patterns

↓

layouts

↓

components

↓

animations

↓

responsive

↓

themes
```

Never change this order.

---

# Component Responsibility

Every component owns its own styling.

Example:

```
button.tsx

↓

button.css
```

A component should never depend on another component's CSS.

---

# Design Tokens

Every reusable value should come from tokens.

Examples:

Colors

Spacing

Typography

Radius

Shadow

Motion

Breakpoints

Z-index

Never hardcode these values inside components.

---

# CSS Variables

Always use variables.

Correct:

```css
color: var(--color-primary);

padding: var(--space-4);

border-radius: var(--radius-md);
```

Incorrect:

```css
color: blue;

padding: 17px;

border-radius: 9px;
```

---

# Selector Rules

Keep selectors simple.

Preferred:

```css
.button

.card

.input
```

Avoid:

```css
.page .content .wrapper .card .title
```

Deep nesting should be avoided.

---

# Specificity

Specificity should remain low.

Preferred:

Single-class selectors.

Avoid:

- ID selectors
- Inline styles
- !important

---

# Component Isolation

Components should not style other components.

Example:

Button CSS should not contain:

```css
.card button {}
```

Instead:

```css
.button {}
```

Each component manages itself.

---

# Layout Separation

Layout controls:

- Width
- Containers
- Alignment
- Sections

Components control:

- Appearance
- States
- Interactions

Do not mix responsibilities.

---

# Utility Classes

Utilities should remain minimal.

Allowed examples:

```
.hidden

.flex

.text-center

.sr-only
```

Do not build the project entirely with utility classes.

---

# State Classes

State classes should be descriptive.

Examples:

```css
.is-active

.is-loading

.is-disabled

.has-error

.is-open
```

Avoid generic names.

---

# Responsive Rules

Default styles target mobile.

Use media queries only to enhance larger screens.

Never create separate mobile stylesheets.

---

# Animation Rules

Animations should:

- Be reusable.
- Use shared transition tokens.
- Respect reduced-motion preferences.

Do not duplicate keyframes.

---

# Naming

Follow the official naming conventions.

Examples:

```
button.css

site-header

tool-card

--color-primary
```

Never mix naming styles.

---

# Performance

Keep CSS efficient.

Avoid:

- Duplicate rules
- Unused selectors
- Deep nesting
- Large overrides

Remove unused CSS regularly.

---

# File Responsibility

One file.

One purpose.

Examples:

```
button.css

↓

Only button styles
```

```
table.css

↓

Only table styles
```

Never combine unrelated components.

---

# Future Growth

New styles should always fit inside the existing architecture.

If a new folder is required, it must have a clearly defined responsibility and should not overlap with existing folders.

---

# Rules

Always:

- Use design tokens.
- Keep files modular.
- Follow import order.
- Keep selectors simple.
- Separate layouts from components.
- Write reusable CSS.

Never:

- Hardcode design values.
- Duplicate styles.
- Use !important.
- Style unrelated components.
- Break the folder architecture.

---

# Related Documents

- design-tokens.md
- spacing.md
- layout.md
- responsive.md
- naming-conventions.md
- project-architecture.md