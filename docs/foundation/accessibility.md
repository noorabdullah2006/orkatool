# Accessibility

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

Accessibility ensures that OrkaTool can be used by as many people as possible, including users with disabilities.

Accessibility is a core product requirement, not an optional feature.

Every page, component, interaction, and tool must follow the accessibility standards defined in this document.

---

# Goals

The accessibility system aims to:

- Improve usability for everyone.
- Support assistive technologies.
- Meet international accessibility standards.
- Create inclusive user experiences.
- Maintain consistency across the product.

---

# Standards

OrkaTool follows:

- WCAG 2.2 AA
- Semantic HTML
- Keyboard Accessibility
- ARIA Best Practices (only when necessary)

---

# Accessibility Principles

Every interface should be:

- Perceivable
- Operable
- Understandable
- Robust

These four principles form the foundation of accessible design.

---

# Semantic HTML

Always use semantic HTML elements whenever possible.

Preferred elements include:

- header
- nav
- main
- section
- article
- aside
- footer
- button
- form
- label
- input
- table
- caption

Avoid replacing semantic elements with generic `<div>` elements.

---

# Keyboard Accessibility

Every interactive element must be usable using only the keyboard.

Users should be able to:

- Navigate
- Open menus
- Close dialogs
- Submit forms
- Activate buttons

without using a mouse.

---

# Focus Management

Every interactive element must receive a visible focus state.

Requirements:

- Focus should never be hidden.
- Focus order should follow the visual layout.
- Focus should remain inside open dialogs until closed.

---

# Focus Ring

Every interactive component should display a visible focus indicator.

The focus ring should:

- Be clearly visible.
- Meet WCAG contrast requirements.
- Remain consistent across the project.

---

# Color Contrast

Minimum contrast ratios:

| Element | Ratio |
|----------|-------|
| Normal Text | 4.5:1 |
| Large Text | 3:1 |
| UI Components | 3:1 |
| Focus Indicators | 3:1 |

Color contrast should always be verified before introducing new colors.

---

# Text

Body text should never be smaller than:

16px

Long-form content should:

- Use sufficient line height.
- Maintain readable line lengths.
- Avoid dense paragraphs.

---

# Images

Every informative image must include meaningful alternative text.

Decorative images should use empty alt attributes.

Example:

```html
<img src="logo.svg" alt="OrkaTool Logo">
```

Decorative image:

```html
<img src="divider.svg" alt="">
```

---

# Icons

Icons must never communicate meaning alone.

Whenever possible:

- Include labels.
- Include tooltips.
- Include visible text.

---

# Forms

Every input must include:

- Label
- Validation message
- Error message
- Helper text (when required)

Placeholders must never replace labels.

---

# Error Messages

Error messages should:

- Clearly explain the problem.
- Explain how to fix it.
- Remain visible until corrected.

Avoid vague messages like:

"Something went wrong."

Prefer:

"Please enter a valid email address."

---

# Required Fields

Required fields should use:

- Visible label
- Required indicator
- Accessible description

Do not rely only on color.

---

# Buttons

Buttons should:

- Have descriptive labels.
- Be keyboard accessible.
- Include disabled states.
- Maintain minimum touch size.

Avoid labels like:

- OK
- Go
- Click

Prefer:

- Calculate
- Download
- Save Changes
- Generate Report

---

# Links

Links should:

- Clearly indicate their purpose.
- Be distinguishable from normal text.
- Include hover and focus states.

Avoid:

"Click Here"

Prefer:

"Read Accessibility Guide"

---

# Tables

Tables should include:

- Table caption
- Column headers
- Row headers (where applicable)

Avoid using tables for page layout.

---

# Headings

Every page should contain only one H1.

Heading levels should never be skipped.

Correct:

H1

↓

H2

↓

H3

Incorrect:

H1

↓

H3

---

# Navigation

Navigation should support:

- Keyboard navigation
- Screen readers
- Visible focus
- Logical order

Navigation landmarks should use semantic elements.

---

# Modals

Dialogs should:

- Trap keyboard focus.
- Close using Escape.
- Restore focus after closing.
- Include descriptive titles.

---

# Notifications

Toast messages should:

- Remain readable.
- Not disappear too quickly.
- Be announced to assistive technologies when necessary.

---

# Motion Accessibility

Animations should never make content unusable.

Users who prefer reduced motion should receive simplified animations.

Respect:

prefers-reduced-motion

---

# Responsive Accessibility

Accessibility must remain consistent across all screen sizes.

Zooming to 200% should not:

- Break layouts.
- Hide content.
- Prevent interaction.

---

# Screen Readers

Screen readers should correctly identify:

- Navigation
- Forms
- Buttons
- Dialogs
- Tables
- Alerts

Use ARIA only when semantic HTML cannot provide the required information.

---

# Touch Targets

Minimum touch target:

44 × 44 pixels

Applies to:

- Buttons
- Links
- Icons
- Form controls
- Navigation items

---

# Accessibility Testing

Every component should be tested for:

- Keyboard navigation
- Screen reader compatibility
- Color contrast
- Focus visibility
- Responsive behavior
- Zoom support

Accessibility testing should be part of every development cycle.

---

# Rules

Always:

- Use semantic HTML.
- Maintain keyboard accessibility.
- Provide visible focus states.
- Include meaningful labels.
- Verify color contrast.
- Support screen readers.

Never:

- Remove focus outlines.
- Depend only on color.
- Skip heading levels.
- Replace labels with placeholders.
- Use inaccessible custom controls.

---

# Related Documents

- design-philosophy.md
- colors.md
- typography.md
- responsive.md
- motion.md
- component-library.md