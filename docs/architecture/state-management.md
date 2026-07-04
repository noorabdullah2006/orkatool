# State Management

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines how application state is managed throughout the OrkaTool project.

The goal is to keep state management simple, predictable, scalable, and maintainable.

The project follows a "use the simplest solution first" philosophy.

---

# Design Philosophy

State should only exist when necessary.

Before introducing state, ask:

- Can this be a constant?
- Can this be a prop?
- Can this be derived?
- Can this be computed?

If the answer is yes, avoid creating additional state.

---

# Core Principles

State management should be:

- Simple
- Predictable
- Minimal
- Local by default
- Global only when required
- Easy to debug

---

# State Hierarchy

Preferred order:

```
Constants

↓

Props

↓

Local State

↓

Shared State

↓

Global State

↓

Server State (Future)
```

Always choose the lowest level that solves the problem.

---

# Local State

Use local component state whenever possible.

Examples:

- Input values
- Modal visibility
- Dropdown state
- Tabs
- Accordion state
- Loading spinner
- Form validation

Recommended:

```tsx
useState()
```

---

# Derived State

Never duplicate values that can be calculated.

Correct:

```tsx
const total = price * quantity;
```

Incorrect:

```tsx
const [total, setTotal] = useState();
```

Derived values should not be stored as state.

---

# Props

Use props to pass data between parent and child components.

Props should remain the primary communication method.

Avoid unnecessary prop drilling.

---

# Shared State

When multiple related components need the same data, use React Context.

Examples:

- Theme
- Navigation
- User preferences
- Language (future)

Context should not become a replacement for all state.

---

# Global State

Global state should be introduced only when genuinely required.

Possible future use cases:

- Authentication
- User profile
- Dashboard
- Saved calculations

Until then, avoid global state libraries.

---

# Current State Strategy

Current project strategy:

- React State
- React Context (when needed)

No external state management library is used.

---

# Future Expansion

If the project grows significantly, a dedicated state management solution may be introduced.

Possible candidates:

- Zustand
- Redux Toolkit
- TanStack Store

The choice should be based on project complexity—not popularity.

---

# Server State

Server state is planned for future backend integration.

Examples:

- User accounts
- Saved history
- API responses
- Analytics

Server state should remain separate from UI state.

---

# Form State

Forms should manage their own local state.

Typical form state includes:

- Input values
- Validation
- Submission
- Errors

Avoid storing unrelated form data globally.

---

# UI State

Examples:

- Drawer open
- Modal open
- Selected tab
- Tooltip visibility
- Toast notifications

UI state should remain local whenever possible.

---

# URL State

Whenever appropriate, state should be reflected in the URL.

Examples:

- Search query
- Filters
- Pagination

Benefits:

- Shareable links
- Better SEO
- Better user experience

---

# Persistent State

Only important user preferences should be persisted.

Examples:

- Language (future)
- Theme (future)
- Cookie preferences

Temporary UI state should not be persisted.

---

# State Naming

Use descriptive names.

Examples:

```tsx
isLoading

hasError

selectedTool

searchQuery

activeTab
```

Avoid vague names.

Examples:

```tsx
data

temp

value

item
```

---

# Immutable Updates

Never mutate state directly.

Correct:

```tsx
setItems([...items, newItem]);
```

Incorrect:

```tsx
items.push(newItem);
```

Always create new objects or arrays.

---

# Performance

Avoid unnecessary state updates.

Guidelines:

- Keep state close to where it is used.
- Avoid duplicate state.
- Minimize re-renders.
- Memoize expensive calculations only when necessary.

---

# Data Flow

State should follow a one-way data flow.

```
User

↓

Input

↓

State Update

↓

UI Render
```

Predictable data flow simplifies debugging.

---

# Error Handling

State should always represent clear UI conditions.

Typical states:

- Idle
- Loading
- Success
- Error

Avoid ambiguous states.

---

# Testing

State logic should be easy to test.

Business logic should remain independent from UI whenever possible.

---

# Rules

Always:

- Prefer local state.
- Keep state minimal.
- Derive values instead of storing them.
- Use Context only when needed.
- Keep data flow predictable.

Never:

- Duplicate state.
- Mutate state directly.
- Introduce global state without justification.
- Store derived values.
- Use external libraries prematurely.

---

# Related Documents

- project-architecture.md
- coding-standards.md
- folder-structure.md