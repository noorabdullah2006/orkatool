# Badges

## Overview

Badges are small visual indicators used to communicate status, category, labels, or metadata.

They help users quickly identify important information without taking up significant space.

Badges should be simple, consistent, and immediately recognizable across the OrkaTool interface.

---

# Goals

The Badge component should be:

- Reusable
- Lightweight
- Accessible
- Responsive
- Consistent
- Easy to customize

---

# Use Cases

Badges are used for:

- New Tools
- Popular Tools
- Featured Tools
- Updated Content
- Beta Features
- Free Tools
- Premium Features (future)
- Categories
- Status Indicators
- Notifications
- Tags

---

# Folder Structure

```
components/
└── ui/
    └── badge/
        ├── badge.tsx
        ├── badge.types.ts
        └── index.ts
```

---

# Variants

## Primary

Used for primary labels.

Examples

- Featured
- Recommended

---

## Secondary

Used for neutral information.

Examples

- Utility
- Tool

---

## Success

Indicates successful or positive status.

Examples

- Available
- Completed

---

## Warning

Indicates caution.

Examples

- Beta
- Experimental

---

## Danger

Indicates important warnings.

Examples

- Deprecated
- Removed Soon

---

## Info

Used for informational labels.

Examples

- Updated
- Documentation

---

## Outline

Transparent background with colored border.

Used when lower visual emphasis is preferred.

---

# Sizes

Supported sizes:

Small

Medium

Large

The default size should be Medium.

---

# Shapes

Supported shapes:

Rounded

Pill

Square

Rounded (default) should be used throughout the application.

---

# Content

A badge may contain:

- Text
- Icon
- Text + Icon

Examples

```
New

Popular

★ Featured

✓ Verified

🔥 Trending
```

---

# States

Badges support:

Default

Hover (optional)

Focus (if interactive)

Disabled

---

# Accessibility

Badges should:

- Have sufficient color contrast.
- Remain readable.
- Use semantic HTML.
- Include accessible labels when icons are used without text.

Decorative badges should not receive keyboard focus.

---

# Responsive Behaviour

Badges should:

- Keep their size proportional.
- Prevent text wrapping.
- Scale appropriately on smaller screens.
- Maintain consistent spacing.

---

# Design Tokens

Badges must use design tokens.

Colors

```
--color-primary
--color-success
--color-warning
--color-danger
--color-info
--color-surface
--color-border
```

Spacing

```
--space-1
--space-2
--space-3
```

Radius

```
--radius-sm
--radius-full
```

Typography

```
--font-size-xs
--font-size-sm
```

Transitions

```
--transition-fast
```

---

# Best Practices

- Keep badge text short.
- Use meaningful colors.
- Avoid excessive badge usage.
- Keep visual hierarchy clear.
- Use icons only when they improve recognition.

---

# Avoid

Do not:

- Place long sentences inside badges.
- Use too many badge colors together.
- Use badges as buttons unless intentionally interactive.
- Hardcode colors or spacing.
- Use badges for primary actions.

---

# Future Improvements

The Badge component may later support:

- Removable Tags
- Notification Count
- Dot Indicators
- Animated Status
- Clickable Filter Badges
- Dynamic Color Themes

---

# Related Components

- Card
- Button
- Alert
- Tooltip
- Navigation
- Table

---

# Summary

Badges provide quick visual context without overwhelming the interface.

A standardized Badge component helps maintain consistency while improving information hierarchy throughout the OrkaTool design system.