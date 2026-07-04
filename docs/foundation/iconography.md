# Iconography

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the icon system used throughout OrkaTool.

Icons should improve usability by helping users recognize actions, understand interfaces, and navigate the application more efficiently.

Icons should support content—not replace it.

---

# Design Philosophy

Icons should feel:

- Simple
- Professional
- Consistent
- Recognizable
- Minimal
- Functional

The icon system should match the clean and modern visual identity of OrkaTool.

---

# Objectives

The icon system should:

- Improve usability
- Reduce cognitive load
- Increase scanability
- Support accessibility
- Maintain consistency

Icons should never distract users from their primary task.

---

# Icon Library

Official icon library:

**Lucide React**

Reason:

- Open Source
- Lightweight
- Consistent style
- Excellent React support
- Tree-shakeable
- Regularly maintained

No other icon library should be introduced without project approval.

---

# Icon Style

All icons should use the same visual style.

Preferred characteristics:

- Outline style
- Rounded corners
- Simple geometry
- Minimal detail

Avoid mixing outline and filled icons.

---

# Icon Size Scale

| Token | Size | Usage |
|--------|------|---------------------------|
| xs | 12px | Tiny indicators |
| sm | 16px | Inline icons |
| md | 20px | Buttons |
| lg | 24px | Navigation |
| xl | 32px | Empty states |
| 2xl | 48px | Hero illustrations |
| 3xl | 64px | Large graphics |

Components should always use the predefined size tokens.

---

# Stroke Width

Default stroke:

```
2
```

Do not mix multiple stroke widths within the same interface.

---

# Icon Color

Icons should inherit the current text color whenever possible.

Example:

```css
color: currentColor;
```

Avoid assigning fixed colors directly to icons.

---

# Icon Alignment

Icons should align consistently with surrounding text.

Rules:

- Vertically center icons.
- Maintain equal spacing.
- Use consistent icon-to-text gaps.

---

# Icon Spacing

Recommended spacing:

| Placement | Gap |
|------------|-----|
| Icon + Text | 8px |
| Icon + Button Edge | 12px |
| Icon Group | 16px |

Avoid inconsistent spacing.

---

# Navigation Icons

Navigation icons should:

- Clearly represent the destination.
- Remain visually consistent.
- Use the standard size.

Recommended size:

24px

---

# Button Icons

Buttons may contain:

- Leading icon
- Trailing icon

Avoid using both unless necessary.

Examples:

```
✓ Download

📄 Export PDF

➜ Continue
```

Icons should not replace button text.

---

# Form Icons

Forms may use icons for:

- Email
- Password
- Search
- Visibility Toggle
- Success
- Error

Icons should improve understanding—not decoration.

---

# Status Icons

Semantic icons should match semantic colors.

| Status | Icon |
|---------|------|
| Success | Check |
| Warning | Triangle Alert |
| Error | Circle X |
| Info | Info |

Always pair icons with text.

---

# File Icons

Common file types should have recognizable icons.

Examples:

- PDF
- CSV
- DOCX
- XLSX
- ZIP

Avoid custom illustrations for common file types.

---

# Action Icons

Common actions should remain consistent.

| Action | Suggested Icon |
|----------|----------------|
| Search | Search |
| Copy | Copy |
| Share | Share |
| Download | Download |
| Upload | Upload |
| Delete | Trash |
| Edit | Pencil |
| Save | Save |
| Settings | Settings |
| Menu | Menu |
| Close | X |
| Back | Arrow Left |
| Forward | Arrow Right |
| Refresh | Refresh Cw |

The same action should always use the same icon throughout the application.

---

# Decorative Icons

Decorative icons should be used sparingly.

Examples:

- Hero sections
- Empty states
- Marketing content

Decorative icons must never interfere with usability.

---

# Accessibility

Icons must support accessibility.

Rules:

- Decorative icons should use `aria-hidden="true"`.
- Interactive icons must include accessible labels.
- Icons must not communicate meaning by themselves.

Example:

```html
<button aria-label="Download Report">
    <Download />
</button>
```

---

# Performance

Only import the icons that are actually used.

Correct:

```tsx
import { Search } from "lucide-react";
```

Incorrect:

```tsx
import * as Icons from "lucide-react";
```

Tree-shaking should remain effective.

---

# Do's

✔ Use one icon library.

✔ Keep icon sizes consistent.

✔ Use semantic icons.

✔ Align icons properly.

✔ Support accessibility.

✔ Import only required icons.

---

# Don'ts

✘ Mix icon libraries.

✘ Mix outline and filled icons.

✘ Hardcode icon colors.

✘ Replace text with icons.

✘ Stretch or distort icons.

✘ Rotate icons without purpose.

---

# Future Considerations

Future versions may include:

- Animated icons
- Custom OrkaTool icon set
- Tool-specific icon collection

Any additions must remain compatible with the existing icon system.

---

# Related Documents

- design-philosophy.md
- colors.md
- typography.md
- accessibility.md
- component-library.md