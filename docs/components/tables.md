# Tables

## Overview

Tables are used to present structured data in rows and columns.

They should make large amounts of information easy to scan, compare, sort, and understand while remaining responsive and accessible.

The Table component should be reusable across the OrkaTool platform.

---

# Goals

The Table component should be:

- Reusable
- Responsive
- Accessible
- Easy to Scan
- Consistent
- Scalable

---

# Use Cases

Tables are used for:

- Tool Comparison
- Conversion Charts
- Unit Reference Tables
- Feature Lists
- Pricing Comparison (future)
- Keyboard Shortcuts
- Formula Reference
- Documentation
- Data Lists
- Statistics

---

# Folder Structure

```
components/
└── ui/
    └── table/
        ├── table.tsx
        ├── table-head.tsx
        ├── table-body.tsx
        ├── table-row.tsx
        ├── table-cell.tsx
        ├── table.types.ts
        └── index.ts
```

---

# Table Anatomy

A standard table contains:

- Table
- Caption (optional)
- Header
- Header Row
- Header Cell
- Body
- Data Rows
- Data Cells
- Footer (optional)

Example

```
--------------------------------------------

| Tool | Category | Free |

--------------------------------------------

| BMI Calculator | Health | Yes |

| Age Calculator | Calculator | Yes |

| JSON Formatter | Developer | Yes |

--------------------------------------------
```

---

# Table Types

## Basic Table

Displays simple information.

---

## Comparison Table

Used to compare multiple items.

Example

- Features
- Pricing
- Specifications

---

## Responsive Table

Optimized for mobile devices.

---

## Data Table

Supports:

- Sorting
- Filtering
- Pagination

(Future)

---

# Table States

Tables support:

Default

Hover Row

Selected Row

Loading

Empty State

Disabled

---

# Empty State

When no data exists, display a friendly message.

Example

```
No data available.
```

---

# Loading State

Loading tables should display:

- Skeleton Rows
- Loading Indicator

Avoid layout shifts.

---

# Responsive Behaviour

Desktop

Standard table layout.

Tablet

Horizontal scrolling if necessary.

Mobile

Scrollable container.

Avoid shrinking text excessively.

---

# Accessibility

Tables must:

- Use semantic HTML.
- Include table headers.
- Maintain readable contrast.
- Support keyboard navigation where applicable.
- Provide captions when needed.

Recommended HTML

```
<table>

<caption>

<thead>

<tbody>

<tr>

<th>

<td>
```

---

# Design Tokens

Tables must use design tokens.

Colors

```
--color-surface

--color-border

--color-text-primary

--color-text-secondary

--color-background-secondary

--color-primary
```

Spacing

```
--space-3

--space-4

--space-6
```

Typography

```
--font-size-sm

--font-size-base

--font-weight-medium

--font-weight-semibold
```

Radius

```
--radius-lg
```

Shadow

```
--shadow-sm
```

Transitions

```
--transition-fast
```

---

# Best Practices

- Keep headers descriptive.
- Align similar data consistently.
- Use zebra rows only when helpful.
- Keep sufficient spacing.
- Highlight important values.
- Use responsive containers.

---

# Avoid

Do not:

- Use tables for page layout.
- Overcrowd rows.
- Hide important columns.
- Use inconsistent alignment.
- Depend only on color.

---

# Future Improvements

The Table component may later support:

- Sorting
- Filtering
- Search
- Sticky Header
- Sticky Columns
- Expandable Rows
- Row Selection
- Export CSV
- Export PDF
- Pagination
- Virtual Scrolling

---

# Related Components

- Card
- Button
- Badge
- Alert
- Modal
- Form

---

# Summary

The Table component provides a structured and consistent way to present data throughout the OrkaTool platform.

A standardized table system improves readability, accessibility, and scalability while supporting future advanced data features.