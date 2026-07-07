# Alerts

## Overview

Alerts are used to communicate important information, feedback, warnings, or system status to users.

They help users understand what happened, what is happening, or what action is required.

Alerts should be noticeable without interrupting the user's workflow.

---

# Goals

The Alert component should be:

- Reusable
- Accessible
- Responsive
- Informative
- Consistent
- Easy to dismiss (when appropriate)

---

# Use Cases

Alerts are used for:

- Form Validation
- Success Messages
- Error Messages
- Warning Messages
- Informational Messages
- Tool Notifications
- Copy Success
- Download Complete
- Upload Status
- Maintenance Notices

---

# Folder Structure

```
components/
└── ui/
    └── alert/
        ├── alert.tsx
        ├── alert.types.ts
        └── index.ts
```

---

# Alert Anatomy

A standard alert may contain:

- Icon
- Title
- Description
- Close Button
- Optional Action Button

Example

```
┌─────────────────────────────────────┐

✓ Success

Your file has been downloaded.

                    [Close]

└─────────────────────────────────────┘
```

---

# Variants

## Success

Used when an action completes successfully.

Examples

- File downloaded
- Settings saved
- Tool copied successfully

---

## Error

Used when something fails.

Examples

- Network Error
- Invalid Input
- Upload Failed

---

## Warning

Used when user attention is required.

Examples

- Unsaved Changes
- Beta Feature
- Large File Size

---

## Info

Used for neutral information.

Examples

- New Update
- Tool Tips
- Documentation Notice

---

# Sizes

Supported sizes:

Small

Medium

Large

Medium should be the default.

---

# States

Alerts support:

Visible

Hidden

Dismissed

Loading

Interactive

Static

---

# Icons

Each alert type should have its own icon.

Examples

```
✓ Success

⚠ Warning

✕ Error

ℹ Info
```

Icons should reinforce meaning without replacing text.

---

# Dismissible Alerts

Some alerts should allow users to close them.

Dismiss button should:

- Be keyboard accessible
- Have an accessible label
- Never hide critical information automatically

---

# Auto Dismiss

Optional for temporary notifications.

Recommended duration:

- Success → 3–5 seconds
- Info → 4–6 seconds

Warnings and Errors should not disappear automatically unless appropriate.

---

# Accessibility

Alerts should:

- Use semantic roles
- Provide readable text
- Maintain sufficient color contrast
- Support screen readers
- Avoid relying on color alone

Recommended ARIA roles:

```
role="alert"

role="status"
```

depending on the alert type.

---

# Responsive Behaviour

Alerts should:

- Stretch to available width
- Wrap text correctly
- Stack content vertically on mobile
- Keep icons aligned

---

# Design Tokens

Alerts must use design tokens.

Colors

```
--color-success
--color-success-bg

--color-danger
--color-danger-bg

--color-warning
--color-warning-bg

--color-info
--color-info-bg

--color-border
```

Spacing

```
--space-3
--space-4
--space-6
```

Radius

```
--radius-lg
```

Typography

```
--font-size-sm
--font-size-base
```

Transitions

```
--transition-fast
```

---

# Best Practices

- Keep messages short.
- Explain what happened.
- Explain how to fix errors.
- Use meaningful icons.
- Avoid interrupting users unnecessarily.

---

# Avoid

Do not:

- Show multiple alerts for the same issue.
- Use vague messages.
- Hide critical alerts automatically.
- Depend only on color.
- Overuse warning alerts.

---

# Future Improvements

The Alert component may later support:

- Toast Notifications
- Progress Alerts
- Undo Actions
- Expandable Details
- Animated Entrance
- Notification Queue
- Persistent Alerts
- Action Buttons

---

# Related Components

- Badge
- Modal
- Tooltip
- Button
- Form
- Card

---

# Summary

Alerts provide immediate feedback and important information to users.

A consistent Alert system improves usability, accessibility, and user confidence across every OrkaTool feature.