# Color System

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

The Color System defines the complete visual language of OrkaTool.

It ensures consistency, accessibility, maintainability, and scalability across the entire product.

Every color used anywhere in the project must originate from this document and be implemented through Design Tokens.

No component, page, or utility should introduce arbitrary colors.

---

# Objectives

The color system has five primary goals:

- Build user trust.
- Improve readability.
- Create a calm interface.
- Guide user attention naturally.
- Maintain visual consistency.

Colors exist to improve usability—not decoration.

---

# Design Principles

The OrkaTool color system follows these principles.

- Professional over flashy.
- Calm over vibrant.
- Readability over decoration.
- Consistency over creativity.
- Accessibility over aesthetics.
- Function before appearance.

---

# Color Psychology

The interface should immediately communicate:

- Trust
- Stability
- Simplicity
- Accuracy
- Professionalism

Users should feel comfortable spending long periods reading or using tools.

Avoid colors that create unnecessary excitement or visual fatigue.

The majority of the interface should remain neutral.

Accent colors should guide attention rather than dominate the design.

---

# Brand Identity

The visual identity of OrkaTool is based on three ideas:

## Trust

Users should feel confident that the tools are accurate and reliable.

---

## Clarity

Information should always remain easy to understand.

The interface should never become visually noisy.

---

## Focus

The tool itself should always receive the highest visual priority.

Everything else should support the primary task.

---

# Color Philosophy

Approximately:

- 80% Neutral Colors
- 15% Brand Colors
- 5% Semantic Colors

This creates a balanced interface without overwhelming the user.

Brand colors are reserved for actions and emphasis.

Semantic colors communicate status.

Neutral colors build the overall interface.

---

# Brand Palette

The primary brand color represents trust and interaction.

| Token | Value | Usage |
|--------|---------|----------------------------|
| Primary | #2563EB | Primary buttons, links |
| Primary Hover | #1D4ED8 | Hover state |
| Primary Active | #1E40AF | Active state |
| Primary Soft | #EFF6FF | Selected backgrounds |
| Primary Border | #BFDBFE | Borders |

Primary should never dominate entire pages.

It should highlight actions rather than decorate layouts.

---

# Neutral Palette

Neutral colors form the foundation of the interface.

| Token | Value |
|--------|---------|
| Slate 950 | #020617 |
| Slate 900 | #0F172A |
| Slate 800 | #1E293B |
| Slate 700 | #334155 |
| Slate 600 | #475569 |
| Slate 500 | #64748B |
| Slate 400 | #94A3B8 |
| Slate 300 | #CBD5E1 |
| Slate 200 | #E2E8F0 |
| Slate 100 | #F1F5F9 |
| Slate 50 | #F8FAFC |
| White | #FFFFFF |

Neutral colors should be used for:

- Layouts
- Cards
- Tables
- Forms
- Typography
- Dividers
- Surfaces

---

# Semantic Colors

Semantic colors communicate meaning.

They must never be used purely for decoration.

---

## Success

| Token | Value |
|--------|---------|
| Text | #166534 |
| Background | #DCFCE7 |
| Border | #86EFAC |
| Icon | #15803D |

Usage:

- Success messages
- Completed actions
- Positive feedback

---

## Warning

| Token | Value |
|--------|---------|
| Text | #B45309 |
| Background | #FEF3C7 |
| Border | #FCD34D |
| Icon | #D97706 |

Usage:

- Warnings
- Validation notices
- Important reminders

---

## Danger

| Token | Value |
|--------|---------|
| Text | #B91C1C |
| Background | #FEE2E2 |
| Border | #FCA5A5 |
| Icon | #DC2626 |

Usage:

- Errors
- Failed actions
- Destructive operations

---

## Info

| Token | Value |
|--------|---------|
| Text | #0369A1 |
| Background | #E0F2FE |
| Border | #7DD3FC |
| Icon | #0284C7 |

Usage:

- Information
- Tips
- Notifications
- Guidance

---

# Surface Colors

Surfaces should remain clean and comfortable.

| Element | Color |
|------------|------------|
| Page Background | Slate 50 |
| Card Background | White |
| Modal Background | White |
| Dropdown Background | White |
| Tooltip Background | White |
| Sidebar Background | White |
| Header Background | White |
| Footer Background | White |

Large colored backgrounds should be avoided.

White and soft neutral surfaces create better readability.

---

# Text Colors

Typography follows a strict hierarchy.

| Usage | Color |
|---------|-----------|
| Display | Slate 950 |
| Heading | Slate 900 |
| Title | Slate 800 |
| Body | Slate 700 |
| Secondary | Slate 600 |
| Caption | Slate 500 |
| Placeholder | Slate 400 |
| Disabled | Slate 400 |
| Inverse | White |

Text should never use pure black.

Dark slate provides better readability and reduces eye strain.

---

# Border Colors

Borders should remain subtle.

| Usage | Color |
|------------|-----------|
| Default | Slate 200 |
| Strong | Slate 300 |
| Hover | Slate 300 |
| Divider | Slate 100 |
| Focus | Primary |
| Disabled | Slate 100 |

Borders exist to separate content—not attract attention.


---

# Interactive Colors

Interactive elements should clearly communicate their current state without relying solely on color.

## Default

| Element | Color |
|----------|--------|
| Primary Action | Primary |
| Secondary Action | White |
| Text Link | Primary |

---

## Hover

Hover states should provide subtle feedback.

| Element | Color |
|----------|--------|
| Primary | Primary Hover |
| Secondary | Slate 50 |
| Ghost | Slate 100 |
| Link | Primary Hover |

---

## Active

| Element | Color |
|----------|--------|
| Primary | Primary Active |
| Secondary | Slate 100 |
| Ghost | Slate 200 |

---

## Focus

Focus should always remain visible.

| Element | Color |
|----------|--------|
| Outline | Primary |
| Ring Background | Primary Soft |

Focus indicators must never be removed.

---

# Button Colors

Buttons follow a consistent hierarchy.

## Primary Button

| Property | Color |
|----------|--------|
| Background | Primary |
| Text | White |
| Hover | Primary Hover |
| Active | Primary Active |
| Border | Primary |

Purpose:

- Main call-to-action
- Submit
- Continue
- Save

---

## Secondary Button

| Property | Color |
|----------|--------|
| Background | White |
| Text | Slate 900 |
| Border | Slate 300 |
| Hover | Slate 50 |

Purpose:

Secondary actions.

---

## Outline Button

| Property | Color |
|----------|--------|
| Background | Transparent |
| Border | Primary |
| Text | Primary |
| Hover | Primary Soft |

---

## Ghost Button

| Property | Color |
|----------|--------|
| Background | Transparent |
| Text | Slate 700 |
| Hover | Slate 100 |

---

## Danger Button

| Property | Color |
|----------|--------|
| Background | Danger |
| Text | White |
| Hover | #991B1B |

Used only for destructive actions.

---

# Form Colors

Forms should remain clean and distraction-free.

## Input

| Property | Color |
|----------|--------|
| Background | White |
| Border | Slate 300 |
| Text | Slate 800 |
| Placeholder | Slate 400 |

---

## Input Hover

Border:

Slate 400

---

## Input Focus

Border:

Primary

Background:

White

Focus Ring:

Primary Soft

---

## Disabled Input

Background:

Slate 100

Border:

Slate 200

Text:

Slate 400

---

## Labels

| Element | Color |
|----------|--------|
| Label | Slate 700 |
| Required Mark | Danger |
| Helper Text | Slate 500 |
| Error Text | Danger |

---

# Card Colors

Cards should visually separate content without appearing heavy.

| Property | Color |
|----------|--------|
| Background | White |
| Border | Slate 200 |
| Hover Border | Slate 300 |
| Title | Slate 900 |
| Body | Slate 700 |

Avoid colored cards unless communicating semantic meaning.

---

# Table Colors

Tables should prioritize readability.

## Header

Background:

Slate 100

Text:

Slate 800

---

## Body

Background:

White

Text:

Slate 700

---

## Hover

Background:

Slate 50

---

## Borders

Slate 200

---

## Zebra Rows (Optional)

Alternate rows:

White

Slate 50

---

# Navigation Colors

Navigation should remain subtle.

## Header

Background:

White

Border:

Slate 200

---

## Navigation Link

Normal:

Slate 700

Hover:

Primary

Active:

Primary

---

## Mobile Navigation

Background:

White

Border:

Slate 200

Overlay:

Overlay Color

---

# Alert Colors

Alerts use semantic colors only.

## Success

Background:

Success Background

Border:

Success Border

Text:

Success Text

---

## Warning

Background:

Warning Background

Border:

Warning Border

Text:

Warning Text

---

## Danger

Background:

Danger Background

Border:

Danger Border

Text:

Danger Text

---

## Info

Background:

Info Background

Border:

Info Border

Text:

Info Text

---

# Badge Colors

Badges should remain compact and readable.

| Type | Background | Text |
|------|------------|------|
| Primary | Primary Soft | Primary |
| Success | Success Background | Success Text |
| Warning | Warning Background | Warning Text |
| Danger | Danger Background | Danger Text |
| Neutral | Slate 100 | Slate 700 |

---

# Focus Ring

Keyboard accessibility is mandatory.

Standard Focus Ring:

- Outline: Primary
- Ring: Primary Soft

Focus indicators must:

- Be visible
- Meet WCAG requirements
- Never be removed

---

# Disabled Colors

Disabled elements should remain readable while clearly inactive.

| Element | Color |
|----------|--------|
| Background | Slate 100 |
| Border | Slate 200 |
| Text | Slate 400 |
| Icon | Slate 400 |

Do not reduce opacity below accessibility requirements.

---

# Overlay Colors

Used for:

- Modal
- Drawer
- Mobile Navigation

Overlay:

rgba(15, 23, 42, 0.45)

Background content should remain visible but de-emphasized.

---

# Selection Colors

Text selection improves usability.

| Property | Color |
|----------|--------|
| Background | Primary Soft |
| Text | Slate 900 |

Selection should never reduce readability.

# Scrollbar Colors

Scrollbars should remain subtle and consistent with the overall interface.

## Track

Color:

Slate 100

## Thumb

Color:

Slate 300

## Thumb Hover

Color:

Slate 400

Guidelines:

- Keep scrollbars unobtrusive.
- Never use bright accent colors.
- Ensure sufficient contrast for visibility.

---

# Code Block Colors

Code snippets should prioritize readability.

| Element | Color |
|----------|--------|
| Background | Slate 900 |
| Text | Slate 100 |
| Border | Slate 700 |
| Inline Code Background | Slate 100 |
| Inline Code Text | Slate 900 |

Syntax highlighting (future implementation) should use a restrained palette and avoid excessive saturation.

---

# Data Visualization Colors

Charts and graphs should remain simple, readable, and color-blind friendly.

## Primary Series

Primary

## Secondary Series

Info

## Success Series

Success

## Warning Series

Warning

## Danger Series

Danger

## Grid Lines

Slate 200

## Labels

Slate 700

Guidelines:

- Never rely only on color to distinguish data.
- Use labels, patterns, or markers where necessary.

---

# Accessibility Rules

Accessibility takes priority over aesthetics.

Every color combination must satisfy WCAG 2.2 AA.

Requirements:

- Normal text: minimum 4.5:1 contrast ratio.
- Large text: minimum 3:1 contrast ratio.
- Interactive elements: minimum 3:1 contrast ratio.
- Focus indicators must always remain visible.

Never communicate information using color alone.

Always combine color with:

- Icons
- Labels
- Text
- Patterns

---

# Color Usage Rules

## Brand Colors

Use brand colors only for:

- Primary buttons
- Active navigation
- Links
- Focus states
- Interactive controls

Do not use brand colors for large backgrounds.

---

## Neutral Colors

Neutral colors should make up approximately 80% of the interface.

Use them for:

- Backgrounds
- Containers
- Typography
- Borders
- Layouts

---

## Semantic Colors

Semantic colors are reserved exclusively for communicating status.

Do not use:

- Success green as decoration.
- Danger red for emphasis.
- Warning yellow for branding.

---

# CSS Variable Rules

Every color must exist as a CSS variable.

Correct:

```css
color: var(--color-primary);
background: var(--surface-primary);
border-color: var(--border-default);
```

Incorrect:

```css
color: #2563EB;
background: white;
border-color: #E2E8F0;
```

Components must never contain raw HEX values.

---

# Naming Convention

Color variables should use semantic names.

Examples:

```text
--color-primary
--color-primary-hover

--text-primary
--text-secondary

--surface-primary
--surface-secondary

--border-default
--border-hover

--success-bg
--success-text

--danger-bg
--danger-text
```

Avoid implementation-based names.

Incorrect examples:

```text
--blue
--green
--gray1
--redDark
```

---

# Do's

✔ Use semantic color tokens.

✔ Keep interfaces calm.

✔ Maintain strong contrast.

✔ Prioritize readability.

✔ Use brand color sparingly.

✔ Use semantic colors only for status.

✔ Follow the neutral-first philosophy.

✔ Test every new component for accessibility.

---

# Don'ts

✘ Hardcode HEX values.

✘ Introduce random colors.

✘ Use gradients without approval.

✘ Use bright neon colors.

✘ Depend only on color for communication.

✘ Create duplicate color tokens.

✘ Mix multiple color systems.

✘ Change brand colors without updating the Design System.

---

# Future Theme Support

Current Version:

- Light Theme

Planned Future Versions:

- Dark Theme
- High Contrast Theme

Theme implementation must modify token values only.

Components must never contain theme-specific color definitions.

This allows future themes to be introduced without changing component code.

---

# Maintenance Rules

Any new color added to the project must:

- Have a documented purpose.
- Be added to the Design Tokens.
- Be reviewed for accessibility.
- Avoid duplicating existing colors.
- Follow the established naming convention.

Unused colors should be removed during maintenance.

---

# Related Documents

- design-philosophy.md
- design-tokens.md
- typography.md
- spacing.md
- layout.md
- responsive.md
- accessibility.md
- motion.md
- css-architecture.md
