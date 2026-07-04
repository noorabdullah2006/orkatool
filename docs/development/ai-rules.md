# AI Development Rules

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the mandatory rules that every AI assistant must follow while working on the OrkaTool project.

These rules apply to all AI tools, including but not limited to:

- ChatGPT
- Claude
- Gemini
- GitHub Copilot
- Cursor AI
- Windsurf AI
- Any future AI assistant

The objective is to ensure consistent, predictable, and maintainable development.

---

# Primary Objective

AI should extend the existing project.

AI must never redesign, restructure, or replace previously approved architecture without explicit approval.

---

# Source of Truth

The documentation inside the `docs/` directory is the project's official source of truth.

If documentation and implementation differ:

- Follow the documentation.
- Report the mismatch.
- Do not silently change either one.

---

# Development Philosophy

AI should always prefer:

- Simplicity
- Consistency
- Readability
- Reusability
- Maintainability

Avoid unnecessary complexity.

---

# Documentation First

Architecture decisions should be documented before implementation.

If a new feature changes the architecture:

1. Update the documentation.
2. Then update the implementation.

---

# Never Redesign

AI must never:

- Redesign the project
- Replace the architecture
- Introduce a new structure
- Change folder organization
- Change styling architecture

unless explicitly instructed.

---

# Respect Existing Decisions

Previously approved decisions are considered permanent until changed by the project owner.

Never overwrite previous decisions.

---

# File Naming

Always follow the official naming conventions.

Rules:

- Folder names → lowercase
- File names → lowercase
- React component names → PascalCase

Never introduce inconsistent naming.

---

# Folder Structure

Never:

- Create random folders
- Duplicate existing folders
- Move files without approval
- Rename folders without approval

Always follow:

```
docs/03-architecture/folder-structure.md
```

---

# CSS Rules

Always follow:

```
docs/01-foundation/css-architecture.md
```

Never:

- Hardcode colors
- Hardcode spacing
- Duplicate CSS
- Ignore design tokens

---

# Design Tokens

Always use:

- Color tokens
- Typography tokens
- Radius tokens
- Shadow tokens
- Motion tokens
- Spacing tokens

Never replace design tokens with fixed values.

---

# Components

Before creating a new component:

Ask:

- Does it already exist?
- Can it be reused?
- Can it be extended?

Never duplicate components.

---

# Code Quality

Code should be:

- Clean
- Typed
- Readable
- Modular
- Predictable

Avoid clever code.

Prefer readable code.

---

# Scope Control

Only complete the requested task.

Do not modify unrelated files.

Do not perform additional refactoring unless requested.

---

# One Task at a Time

Complete one feature before starting another.

Do not partially implement multiple features.

---

# No Silent Changes

Never silently change:

- Colors
- Typography
- Folder names
- File names
- Routes
- Component APIs
- CSS Architecture

Every significant change must be approved.

---

# Documentation Sync

Whenever implementation changes:

Update the related documentation if required.

Documentation and implementation must remain synchronized.

---

# Project State

At the end of every development session:

Update:

```
docs/project-state.md
```

The project state must accurately reflect the current implementation.

---

# Imports

Use absolute imports whenever possible.

Follow the existing import strategy.

Do not introduce inconsistent import styles.

---

# Performance

Always consider:

- Bundle size
- Rendering performance
- Accessibility
- SEO
- Mobile responsiveness

Performance should never be ignored.

---

# Accessibility

Every UI component should support:

- Keyboard navigation
- Visible focus
- Semantic HTML
- Screen readers

Accessibility is mandatory.

---

# Error Prevention

Before generating code:

Check:

- Existing architecture
- Existing documentation
- Existing components
- Existing styles

Avoid duplicate solutions.

---

# Communication

If documentation is unclear:

Ask for clarification.

Never make assumptions about architectural decisions.

---

# What AI Should Never Do

Never:

- Rename existing folders
- Rename files
- Change architecture
- Change project structure
- Introduce new libraries without approval
- Ignore documentation
- Duplicate functionality
- Hardcode design values
- Modify unrelated files
- Replace existing patterns

---

# Development Workflow

Every task should follow this sequence:

```
Read Documentation

↓

Understand Existing Structure

↓

Implement Requested Feature

↓

Verify Consistency

↓

Update Documentation (if required)

↓

Update project-state.md
```

Never skip steps.

---

# Priority Order

When making decisions, follow this order:

1. User Instructions
2. Project Documentation
3. Existing Architecture
4. Coding Standards
5. Personal Preference

User instructions always have the highest priority.

---

# Rules

Always:

- Follow documentation.
- Respect previous decisions.
- Keep code consistent.
- Keep implementation simple.
- Reuse existing components.
- Complete one task at a time.
- Keep documentation synchronized.

Never:

- Redesign the project.
- Change approved architecture.
- Duplicate components.
- Ignore documentation.
- Make assumptions.
- Introduce undocumented patterns.

---

# Related Documents

- docs/03-architecture/project-architecture.md
- docs/03-architecture/coding-standards.md
- docs/03-architecture/folder-structure.md
- docs/01-foundation/css-architecture.md
- docs/01-foundation/naming-conventions.md
- docs/project-state.md