# Coding Standards

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official coding standards for the OrkaTool project.

Every line of code should follow these standards to ensure consistency, readability, maintainability, and long-term scalability.

These standards apply to all project files unless explicitly documented otherwise.

---

# Development Philosophy

Code should be:

- Simple
- Readable
- Predictable
- Reusable
- Maintainable
- Well documented

Always prioritize clarity over cleverness.

---

# General Principles

Follow these principles:

- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- KISS (Keep It Simple)
- Separation of Concerns
- Composition over Duplication

---

# Project Language

The entire codebase must use:

- TypeScript
- React
- Next.js App Router

Do not introduce JavaScript files unless absolutely required.

---

# File Naming

All project files must use:

- lowercase
- kebab-case

Examples:

```
button.tsx
tool-card.tsx
button.css
tool-card.css
```

---

# Folder Naming

All folders must use:

- lowercase
- kebab-case

Examples:

```
components
tool-card
user-profile
```

---

# React Components

Component names use:

PascalCase

Example:

```tsx
export default function Button() {
    return <button />;
}
```

File name:

```
button.tsx
```

---

# Variables

Variables use:

camelCase

Example:

```tsx
const searchQuery = "";
const totalPrice = 0;
```

---

# Constants

Constants use:

UPPER_SNAKE_CASE

Example:

```tsx
const MAX_FILE_SIZE = 5;
```

---

# Functions

Function names should:

- use camelCase
- begin with a verb

Examples:

```tsx
calculateAge()
formatDate()
validateInput()
copyResult()
```

---

# Boolean Variables

Boolean names should begin with:

- is
- has
- can
- should

Examples:

```tsx
isLoading
hasError
canSubmit
shouldAnimate
```

---

# Component Structure

Each component should have one responsibility.

Recommended structure:

```
button/

button.tsx
button.css
```

Avoid placing multiple unrelated components in the same file.

---

# Component Size

As a guideline:

- Small components: under 100 lines
- Medium components: under 250 lines
- Large components should be split into smaller components

Readability is more important than line count.

---

# Props

Props should:

- Be typed
- Be descriptive
- Only include what the component needs

Avoid passing unnecessary props.

---

# State Management

Prefer:

1. Props
2. Local State
3. Context
4. Global State (only when necessary)

Do not introduce global state libraries without a documented reason.

---

# Styling

Follow the official CSS Architecture.

Rules:

- Use design tokens
- Avoid inline styles
- Keep component styles isolated
- Use CSS variables

Never hardcode colors, spacing, or typography values.

---

# Comments

Write comments only when they explain **why**, not **what**.

Good:

```tsx
// Prevent duplicate submissions while the request is pending.
```

Bad:

```tsx
// Increment count.
count++;
```

Well-written code should be self-explanatory.

---

# Imports

Use absolute imports whenever possible.

Correct:

```tsx
import Button from "@/components/ui/button/button";
```

Avoid long relative paths.

---

# Error Handling

Handle errors gracefully.

Do not leave empty catch blocks.

Correct:

```tsx
try {
    ...
} catch (error) {
    console.error(error);
}
```

---

# Accessibility

Every UI component must:

- Support keyboard navigation
- Have visible focus states
- Use semantic HTML
- Include accessible labels where required

Accessibility is mandatory.

---

# Responsive Design

Every component must work across supported screen sizes.

Never build desktop-only components.

Follow the Mobile-First approach.

---

# Performance

Prefer:

- Small components
- Lazy loading when appropriate
- Minimal re-renders
- Reusable utilities

Avoid unnecessary abstractions.

---

# Documentation

Whenever a major architectural decision changes:

- Update the related documentation.
- Update `project-state.md` if the project status changes.
- Keep documentation synchronized with implementation.

Documentation is part of development, not an afterthought.

---

# Git Workflow

Every commit should:

- Represent one logical change.
- Have a descriptive commit message.
- Keep the main branch stable.

Examples:

```
feat: add button component

fix: resolve container import

docs: update responsive guidelines

refactor: simplify layout structure
```

---

# Code Review Checklist

Before committing, verify:

- File names follow naming conventions.
- Imports are correct.
- Types are defined.
- Components are reusable.
- Responsive behavior works.
- Accessibility requirements are met.
- No duplicate code exists.
- Documentation is updated if required.

---

# AI Development Rules

When using AI assistants:

- Follow the existing documentation.
- Never invent new architecture.
- Never rename folders or files without approval.
- Never duplicate components.
- Reuse existing utilities.
- Ask for clarification if documentation conflicts.

AI should extend the project—not redesign it.

---

# Rules

Always:

- Write readable code.
- Follow the documented architecture.
- Keep components reusable.
- Keep logic separated from presentation.
- Update documentation when architecture changes.

Never:

- Ignore project documentation.
- Duplicate functionality.
- Hardcode design values.
- Mix responsibilities.
- Introduce undocumented patterns.

---

# Related Documents

- project-architecture.md
- folder-structure.md
- naming-conventions.md
- css-architecture.md
- project-state.md