# Forms

## Overview

Forms are a core part of the OrkaTool user experience.

Nearly every tool on the platform relies on user input, whether it is a calculator, generator, converter, validator, or contact form.

A consistent form system ensures usability, accessibility, responsiveness, and maintainability across the entire application.

---

# Goals

The Form system should be:

- Reusable
- Accessible
- Responsive
- Easy to validate
- Consistent
- Scalable

---

# Use Cases

Forms are used for:

- Calculator Inputs
- Text Tools
- Image Tools
- Developer Tools
- Contact Form
- Newsletter Subscription
- Search
- Login (future)
- Settings (future)

---

# Folder Structure

```
components/
└── ui/
    └── form/
        ├── form.tsx
        ├── form.types.ts
        └── index.ts
```

---

# Supported Components

The Form system includes:

- Input
- Textarea
- Select
- Checkbox
- Radio Button
- Switch
- Range Slider
- File Upload
- Search Field
- Submit Button

Each component should be reusable and independent.

---

# Form Anatomy

A standard form consists of:

- Label
- Input Field
- Helper Text
- Validation Message
- Action Button

Example

```
Label

[ Input Field ]

Helper Text

Error Message

[ Submit ]
```

---

# Input Types

Supported input types include:

- text
- email
- password
- number
- search
- tel
- url
- date
- time
- month
- color
- range
- checkbox
- radio
- file

---

# States

Every form element should support:

Default

Hover

Focus

Active

Disabled

Read Only

Invalid

Loading

Success

---

# Validation

Forms should support validation for:

Required fields

Minimum value

Maximum value

Minimum length

Maximum length

Pattern matching

Custom validation

Real-time validation

Server-side validation (future)

---

# Labels

Every field must include a visible label.

Avoid using placeholders as labels.

Good

```
Email Address

[_______________]
```

Bad

```
[Enter Email]
```

---

# Helper Text

Helper text provides additional guidance.

Example

```
Password must contain at least 8 characters.
```

---

# Error Messages

Validation errors should be:

- Clear
- Short
- Helpful

Example

```
Please enter a valid email address.
```

Avoid vague messages like:

```
Invalid Input
```

---

# Accessibility

Every form must:

- Associate labels with inputs
- Support keyboard navigation
- Show visible focus indicators
- Provide ARIA attributes where needed
- Maintain sufficient color contrast
- Display readable error messages

---

# Responsive Behaviour

Desktop

Fields may appear in multiple columns.

Tablet

Reduce spacing where appropriate.

Mobile

Inputs should stack vertically.

Buttons should expand to full width when necessary.

---

# Design Tokens

Forms should only use design tokens.

Colors

```
--color-surface
--color-border
--color-primary
--color-danger
```

Spacing

```
--space-2
--space-4
--space-6
```

Radius

```
--radius-md
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

- Keep forms short.
- Group related fields.
- Show validation immediately when appropriate.
- Use descriptive labels.
- Minimize required fields.
- Preserve user input after validation errors.

---

# Avoid

Do not:

- Use placeholder-only labels.
- Hide validation messages.
- Use unclear field names.
- Mix multiple unrelated actions in one form.
- Disable keyboard navigation.

---

# Future Improvements

The Form system may later support:

- Multi-step Forms
- Form Wizard
- Auto Save
- Input Masks
- Password Strength Meter
- Character Counter
- Drag-and-Drop Upload
- Autosuggestions
- AI-assisted Input

---

# Related Components

- Button
- Card
- Modal
- Tooltip
- Alert
- Badge

---

# Summary

Forms are one of the most important interaction components in OrkaTool.

Every form should remain accessible, reusable, responsive, and consistent with the overall design system to provide a reliable experience across all tools.