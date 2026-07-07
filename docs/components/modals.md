# Modals

## Overview

Modals are overlay components used to display focused content, user actions, or important information without navigating away from the current page.

A modal temporarily interrupts the user's workflow to request attention or input.

The Modal component should remain lightweight, reusable, accessible, and consistent throughout the OrkaTool design system.

---

# Goals

The Modal system should be:

- Reusable
- Accessible
- Responsive
- Keyboard Friendly
- Easy to Maintain
- Scalable

---

# Use Cases

Modals are used for:

- Search Dialog
- Confirmation Dialog
- Delete Confirmation
- Image Preview
- Video Preview
- Share Dialog
- Login (future)
- Register (future)
- Settings
- Cookie Consent
- Tool Information
- Keyboard Shortcuts

---

# Folder Structure

```
components/
└── ui/
    └── modal/
        ├── modal.tsx
        ├── modal-header.tsx
        ├── modal-body.tsx
        ├── modal-footer.tsx
        ├── modal.types.ts
        └── index.ts
```

---

# Modal Anatomy

A standard modal contains:

- Overlay
- Container
- Header
- Title
- Close Button
- Body
- Footer
- Primary Action
- Secondary Action

Example

```
┌────────────────────────────────────┐

 Modal Title                 ✕

──────────────────────────────────────

Modal content...

──────────────────────────────────────

Cancel              Confirm

└────────────────────────────────────┘
```

---

# Modal Types

## Default Modal

Used for general content.

---

## Confirmation Modal

Requests user confirmation before continuing.

Examples

- Delete File
- Reset Calculator
- Clear History

---

## Form Modal

Contains forms.

Examples

- Contact Form
- Feedback Form
- Settings

---

## Fullscreen Modal

Occupies nearly the full viewport.

Used for:

- Search
- Documentation
- Image Viewer

---

## Image Modal

Displays large images.

Supports:

- Zoom
- Next
- Previous

(Future)

---

# States

The Modal component supports:

Closed

Opening

Open

Closing

Loading

Disabled Actions

---

# Opening Behaviour

A modal may open from:

- Button
- Link
- Keyboard Shortcut
- Automatic Trigger
- JavaScript Event

---

# Closing Behaviour

Users should be able to close a modal by:

- Close Button
- Escape Key
- Clicking Overlay (optional)
- Action Button

Critical confirmation dialogs may disable overlay closing.

---

# Overlay

Every modal should include an overlay.

The overlay:

- Dims background content.
- Prevents interaction with the page.
- Helps users focus.

---

# Focus Management

When a modal opens:

- Focus moves inside the modal.
- Keyboard focus remains trapped.
- Escape closes the modal.
- Focus returns to the previously focused element after closing.

---

# Accessibility

Every modal must:

- Use semantic HTML.
- Support screen readers.
- Support keyboard navigation.
- Trap keyboard focus.
- Include accessible labels.
- Have visible focus indicators.

Recommended attributes

```
role="dialog"

aria-modal="true"

aria-labelledby

aria-describedby
```

---

# Responsive Behaviour

Desktop

Centered modal.

Tablet

Slightly wider.

Mobile

Nearly full width.

Large modals may become fullscreen on small devices.

---

# Animations

Opening

- Fade In
- Scale Up

Closing

- Fade Out
- Scale Down

Animations should remain subtle.

---

# Design Tokens

The Modal component must use design tokens.

Colors

```
--color-surface

--color-background-secondary

--color-border

--color-primary

--color-text-primary
```

Spacing

```
--space-4

--space-6

--space-8
```

Radius

```
--radius-xl
```

Shadow

```
--shadow-xl
```

Transitions

```
--transition-base
```

Z-index

```
--z-modal
```

---

# Best Practices

- Keep modal content concise.
- Always provide a close action.
- Use descriptive titles.
- Limit scrolling where possible.
- Focus the primary action.
- Avoid unnecessary modals.

---

# Avoid

Do not:

- Nest modals.
- Open multiple modals simultaneously.
- Trap users without an exit.
- Hide important actions.
- Use modals for long documents.

---

# Future Improvements

The Modal component may later support:

- Drawer Modal
- Side Panel
- Bottom Sheet
- Multi-step Wizard
- Image Gallery
- Animation Presets
- Command Palette
- AI Assistant Panel

---

# Related Components

- Button
- Card
- Alert
- Form
- Navigation
- Tooltip
- Search

---

# Summary

The Modal component provides a focused interface for user interaction without leaving the current page.

A standardized modal system improves usability, accessibility, and consistency while supporting future expansion across the OrkaTool platform.