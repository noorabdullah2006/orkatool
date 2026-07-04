# Naming Conventions

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official naming conventions used throughout the OrkaTool project.

Consistent naming improves readability, maintainability, collaboration, and reduces bugs caused by inconsistent file names or imports.

Every file, folder, component, variable, CSS class, and asset must follow these rules.

---

# Core Principles

Naming should always be:

- Consistent
- Predictable
- Descriptive
- Concise
- Scalable

Avoid abbreviations unless they are industry standard.

---

# General Rules

Names should:

- Describe their purpose.
- Use real words.
- Be easy to search.
- Remain consistent across the project.

Avoid:

- Random abbreviations
- Version numbers
- Temporary names
- Generic names

Examples:

Correct

```
button
tool-card
calculator-result
```

Incorrect

```
btn2
newButton
abc
temp
component1
```

---

# Folder Naming

All folder names must use:

**lowercase + kebab-case**

Examples:

```
components
styles
tool-card
user-profile
age-calculator
```

Never use:

```
Components
ToolCard
toolCard
tool_card
```

---

# File Naming

**All project files must use lowercase names.**

File names should use:

**lowercase + kebab-case**

Examples:

```
button.tsx
input.tsx
tool-card.tsx
button.css
navigation.css
design-philosophy.md
hero-image.webp
logo.svg
```

Never use:

```
Button.tsx
Input.tsx
ToolCard.tsx
buttonCSS.css
Logo.svg
```

This rule applies to every file in the project.

---

# React Components

React component names use:

**PascalCase**

Example:

```tsx
export default function Button() {
    return (
        <button>Button</button>
    );
}
```

Another example:

```tsx
export default function ToolCard() {
    return (
        <article />
    );
}
```

Only the component name is PascalCase.

The file name remains lowercase.

---

# Component Structure

Each component should have its own folder.

Example:

```
components/

button/
    button.tsx
    button.css

input/
    input.tsx
    input.css

tool-card/
    tool-card.tsx
    tool-card.css
```

Rules:

- Folder → lowercase
- File → lowercase
- Component → PascalCase

---

# Import Rules

Imports must exactly match the file name.

Correct:

```tsx
import Button from "@/components/ui/button/button";
```

Incorrect:

```tsx
import Button from "@/components/ui/Button/Button";
```

Incorrect casing may work on Windows but fail on Linux and Vercel.

Always match the actual file name.

---

# CSS Class Naming

CSS classes use:

**lowercase + kebab-case**

Examples:

```css
.primary-button

.site-header

.tool-card

.input-group

.form-label
```

Never use:

```css
primaryButton

tool_card

ToolCard

myClass
```

---

# CSS Variables

CSS variables use:

```
--category-name
```

Examples:

```css
--color-primary

--color-success

--space-4

--radius-lg

--shadow-md
```

Variables should describe purpose, not appearance.

---

# JavaScript / TypeScript Variables

Use camelCase.

Examples:

```ts
userName

toolResults

searchQuery

pageTitle
```

Avoid:

```ts
User_Name

tool_results

ABC

temp
```

---

# Constants

Constants use:

UPPER_SNAKE_CASE

Examples:

```ts
MAX_FILE_SIZE

API_BASE_URL

DEFAULT_TIMEOUT
```

---

# Functions

Functions use camelCase.

Function names should start with a verb.

Examples:

```ts
calculateAge()

copyResult()

validateInput()

generateReport()

formatDate()
```

---

# Boolean Variables

Boolean variables should start with:

- is
- has
- can
- should

Examples:

```ts
isLoading

hasError

canSubmit

shouldAnimate
```

---

# Interfaces

Use PascalCase.

Examples:

```ts
ButtonProps

InputProps

ToolResult

CalculatorData
```

---

# Type Aliases

Use PascalCase.

Examples:

```ts
Theme

Tool

CalculationResult
```

---

# Enums

Enum names:

PascalCase

Members:

UPPER_SNAKE_CASE

Example:

```ts
enum ToolStatus {
    ACTIVE,
    DRAFT,
    ARCHIVED
}
```

---

# Routes

Routes use:

lowercase + kebab-case

Examples:

```
/

tools

bmi-calculator

age-calculator

currency-converter
```

Never use:

```
BMICalculator

AgeCalculator

ToolPage
```

---

# Asset Naming

Assets always use lowercase.

Examples:

```
logo.svg

hero-image.webp

calculator-icon.svg

empty-state.svg
```

---

# Git Branch Naming

Recommended:

```
feature/button

feature/navigation

fix/container-import

docs/colors

refactor/layout
```

---

# Commit Messages

Use Conventional Commits.

Examples:

```
feat: add button component

fix: resolve import casing

docs: complete spacing documentation

refactor: simplify layout
```

Avoid:

```
update

done

changes

final

new
```

---

# Reserved Names

Never use:

```
temp

new

final

copy

backup

old

abc

xyz
```

---

# Project Naming Rules

These rules are mandatory across the entire project.

| Item | Convention |
|--------|------------|
| Folder | lowercase |
| File | lowercase |
| React Component | PascalCase |
| CSS Class | lowercase kebab-case |
| CSS Variable | --kebab-case |
| Route | lowercase kebab-case |
| Asset | lowercase kebab-case |
| Function | camelCase |
| Variable | camelCase |
| Constant | UPPER_SNAKE_CASE |
| Interface | PascalCase |
| Type | PascalCase |
| Enum | PascalCase |

---

# Rules

Always:

- Use lowercase file names.
- Use lowercase folder names.
- Match imports exactly.
- Keep naming descriptive.
- Keep naming consistent.

Never:

- Mix uppercase and lowercase file names.
- Depend on Windows case-insensitive behavior.
- Create duplicate names with different casing.
- Use temporary names.
- Rename files without updating imports.

---

# Related Documents

- css-architecture.md
- coding-standards.md
- project-architecture.md
- component-library.md