# Buttons

## Overview

Buttons are one of the most frequently used UI components in OrkaTool.

They allow users to perform actions, submit forms, navigate between pages, trigger dialogs, and interact with tools.

Every button across the application must follow the same design system to ensure a consistent user experience.

---

# Goals

The Button component should be:

- Reusable
- Accessible
- Responsive
- Type-safe
- Consistent
- Easy to maintain

---

# Use Cases

Buttons may be used for:

- Primary actions
- Secondary actions
- Form submission
- Navigation
- Opening modals
- Closing dialogs
- Download actions
- Copy actions
- Search actions
- Tool interactions

---

# Folder Structure

```
components/
└── ui/
    └── button/
        ├── button.tsx
        ├── button.types.ts
        └── index.ts
```

---

# Variants

The button component supports multiple visual styles.

## Primary

Used for the main action on a page.

Examples:

- Calculate
- Generate
- Download
- Save

---

## Secondary

Used for less important actions.

Examples:

- Cancel
- Back
- View More

---

## Outline

Outlined button with transparent background.

Used where visual emphasis should be lower.

---

## Ghost

Transparent background.

Used in toolbars, navigation, and icon groups.

---

## Link

Looks like a text link.

Used inside cards or content sections.

---

## Danger

Used for destructive actions.

Examples:

- Delete
- Remove
- Reset

---

# Sizes

Buttons support multiple sizes.

## Small

Compact UI.

Examples:

Toolbar

Cards

Tables

---

## Medium

Default size.

Most buttons use this size.

---

## Large

Used for Hero sections and primary CTAs.

---

# Width

Buttons may support:

- Auto width
- Full width

---

# States

Every button must support the following states.

## Default

Normal appearance.

---

## Hover

Visible hover feedback.

---

## Active

Pressed state.

---

## Focus

Visible keyboard focus indicator.

---

## Disabled

Cannot be interacted with.

Should have reduced opacity.

Cursor should indicate disabled state.

---

## Loading

Shows a spinner.

Prevents multiple clicks.

---

# Icons

Buttons may contain icons.

Supported layouts:

Icon Only

```
🔍
```

Leading Icon

```
🔍 Search
```

Trailing Icon

```
Next →
```

Both Icons

```
← Back →
```

Icons should remain aligned vertically.

---

# Accessibility

Buttons must:

- Use semantic `<button>`
- Support keyboard navigation
- Show visible focus state
- Have sufficient color contrast
- Include accessible labels where needed
- Support screen readers

Never use a `<div>` as a button.

---

# Responsive Behaviour

Buttons should adapt to different screen sizes.

Desktop

- Auto width

Tablet

- Auto width

Mobile

- Full width where appropriate

---

# Design Tokens

Buttons must never use hardcoded values.

Use design tokens instead.

Examples:

Colors

```
--color-primary
--color-surface
```

Spacing

```
--space-3
--space-5
```

Radius

```
--radius-lg
```

Typography

```
--font-size-sm
```

Transitions

```
--transition-fast
```

---

# Best Practices

- Keep labels short.
- Use clear action verbs.
- Use only one primary button per section.
- Use loading state for async actions.
- Keep button sizes consistent.

---

# Avoid

Do not:

- Nest buttons inside buttons.
- Use links for actions.
- Use buttons for navigation when a link is more appropriate.
- Remove focus styles.
- Hardcode colors or spacing.

---

# Future Improvements

The Button component may later support:

- Loading spinner
- Icon animation
- Ripple effect
- Split button
- Dropdown button
- Button group
- Permission-based visibility

---

# Related Components

- Icon Button
- Link
- Badge
- Input
- Modal
- Form
- Card
- Hero
- Navigation

---

# Summary

The Button component is one of the core building blocks of the OrkaTool design system.

Every button should remain reusable, accessible, responsive, and consistent across the entire application.