# Naming Conventions

## Overview

This document defines the official naming conventions used throughout the OrkaTool project.

Following consistent naming rules improves readability, maintainability, collaboration, and long-term scalability.

Every file, folder, component, type, and stylesheet must follow these standards.

---

# Goals

The naming convention aims to:

- Keep the project consistent
- Improve code readability
- Make components easier to locate
- Reduce confusion
- Simplify future maintenance

---

# Folder Naming

All folders must use lowercase letters.

Use hyphens (-) only when multiple words are required.

## ✅ Correct

```
button/
header/
footer/
hero/
tool-card/
search-input/
```

## ❌ Incorrect

```
Button/
Header/
HeroSection/
ToolCard/
searchInput/
```

---

# File Naming

Component files must use lowercase letters.

Use hyphens (-) for multiple words.

## Examples

```
button.tsx
button.types.ts
button.utils.ts
button.test.tsx
button.stories.tsx
index.ts
```

---

# Component Naming

React components always use PascalCase.

## ✅ Correct

```tsx
Button
Header
Footer
Hero
ToolCard
SearchInput
```

## ❌ Incorrect

```tsx
button
header
tool_card
searchinput
```

---

# Props Naming

Props interfaces always end with **Props**.

## Examples

```tsx
ButtonProps
CardProps
HeroProps
InputProps
```

---

# Type Naming

Custom types should use meaningful names.

## Examples

```tsx
ButtonVariant
ButtonSize
NavigationItem
FooterLink
ToolCategory
```

Avoid generic names like:

```
Type
Item
Data
Object
```

---

# Interface Naming

Interfaces should clearly describe the object.

## Examples

```tsx
ButtonProps
NavigationItem
FooterLink
HeroContent
```

---

# CSS Class Naming

CSS classes use **kebab-case**.

## ✅ Correct

```css
.site-header
.site-footer
.button-primary
.hero-title
.footer-links
.search-input
```

## ❌ Incorrect

```css
siteHeader
buttonPrimary
HeroTitle
FooterLinks
```

---

# CSS Variable Naming

Always use semantic design tokens.

## Examples

```css
--color-primary
--color-text-primary
--color-surface
--space-6
--radius-lg
--shadow-md
```

Avoid naming variables by raw color values.

## ❌ Incorrect

```css
--blue
--dark-blue
--gray
--red
```

---

# Import Rules

Always use path aliases.

## ✅ Correct

```tsx
import Button from "@/components/ui/button";
```

## ❌ Incorrect

```tsx
import Button from "../../../button";
```

---

# Export Rules

Every component should export through **index.ts**.

Example

```ts
export { default } from "./button";
export type { ButtonProps } from "./button.types";
```

---

# Icon Naming

Icons use PascalCase and end with **Icon**.

## Examples

```tsx
SearchIcon
CloseIcon
ArrowRightIcon
MenuIcon
MoonIcon
```

---

# Hook Naming

Hooks always start with **use**.

## Examples

```tsx
useTheme
useSearch
useScroll
useModal
```

---

# Constant Naming

Constants use **UPPER_SNAKE_CASE**.

## Examples

```ts
DEFAULT_PAGE_SIZE
MAX_SEARCH_RESULTS
SITE_NAME
API_TIMEOUT
```

---

# Enum Naming

Enums use PascalCase.

## Examples

```ts
ButtonVariant
ThemeMode
ToolCategory
```

Enum values should be uppercase or lowercase consistently throughout the project.

---

# Documentation Naming

Documentation files use lowercase letters and hyphens.

## Examples

```
component-library.md
naming-conventions.md
buttons.md
forms.md
cards.md
navigation.md
```

---

# Git Branch Naming

Use descriptive branch names.

## Examples

```
feature/header
feature/footer
feature/button-component

fix/header-layout
fix/navigation

docs/component-library

refactor/layout
```

---

# Git Commit Naming

Use conventional commit messages.

## Examples

```
feat: add reusable button component

fix: resolve header navigation issue

docs: add component library documentation

refactor: improve footer structure

style: update button spacing
```

---

# General Rules

Always:

- Use descriptive names
- Keep names short but meaningful
- Stay consistent across the project
- Prefer clarity over abbreviations

Avoid:

- Random abbreviations
- Mixed naming styles
- Generic file names
- Duplicate naming patterns

---

# Summary

Consistent naming conventions are essential for maintaining a scalable and professional codebase.

Every new component, file, folder, and document added to the project must follow these standards to ensure long-term consistency across OrkaTool.