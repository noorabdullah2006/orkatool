# Folder Structure

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official folder structure for the OrkaTool project.

Every directory has a single responsibility.

A well-organized structure improves:

- Scalability
- Readability
- Team collaboration
- Maintainability
- Code discoverability

No folder should exist without a clearly defined purpose.

---

# Architecture Principles

The project structure follows these principles:

- Single Responsibility
- Feature Organization
- Reusability Over Duplication
- Separation of Concerns
- Predictable Navigation
- Scalability
- Consistent Naming

---

# Root Structure

```
orkatool/

├── app/
├── components/
├── config/
├── docs/
├── hooks/
├── lib/
├── public/
├── styles/
├── types/
├── utils/

├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

Only top-level project folders belong here.

---

# app/

Purpose:

Contains the Next.js App Router.

Responsibilities:

- Routes
- Layouts
- Pages
- Metadata
- Loading UI
- Error UI

Example:

```
app/

layout.tsx
page.tsx

tools/
blog/
about/
contact/
```

Never place reusable UI components here.

---

# components/

Purpose:

Reusable React components.

Example:

```
components/

layout/
ui/
tool/
common/
```

This folder contains reusable presentation components only.

---

# components/layout/

Contains global layout components.

Examples:

```
header/
footer/
container/
section/
main/
```

These components define page structure.

---

# components/ui/

Contains reusable UI elements.

Examples:

```
button/
input/
card/
badge/
alert/
modal/
table/
```

These components are independent and reusable.

---

# components/tool/

Contains components specific to calculator or tool pages.

Examples:

```
tool-header/
tool-form/
tool-result/
faq/
share-buttons/
```

These are reusable across multiple tools.

---

# components/common/

Contains shared components that don't fit into other categories.

Examples:

```
loading/
empty-state/
error-state/
breadcrumbs/
pagination/
```

---

# config/

Purpose:

Application configuration.

Examples:

```
theme/
seo/
constants/
navigation/
```

Configuration should not contain business logic.

---

# docs/

Purpose:

Project documentation.

Contains:

```
01-foundation/
02-components/
03-architecture/
04-seo/
05-tools/

roadmap.md
changelog.md
project-state.md
README.md
```

Documentation is the project's source of truth.

---

# hooks/

Purpose:

Reusable React hooks.

Examples:

```
use-copy.ts

use-local-storage.ts

use-media-query.ts

use-scroll.ts
```

Hooks should remain generic.

---

# lib/

Purpose:

Application services and integrations.

Examples:

```
analytics/

api/

schema/

validators/
```

Business logic belongs here.

---

# public/

Purpose:

Static assets.

Examples:

```
images/

icons/

fonts/

robots.txt

favicon.ico
```

Files inside public are directly accessible by the browser.

---

# styles/

Purpose:

Global styling system.

Structure:

```
tokens/

base/

patterns/

layouts/

components/

animations/

responsive/

themes/
```

This folder follows the official CSS Architecture document.

---

# types/

Purpose:

Shared TypeScript types.

Examples:

```
tool.ts

navigation.ts

seo.ts

user.ts
```

Shared interfaces belong here.

---

# utils/

Purpose:

Pure utility functions.

Examples:

```
date.ts

math.ts

format.ts

slug.ts

validation.ts
```

Utility functions should have no side effects.

---

# File Placement Rules

Every file must have one clear responsibility.

Examples:

```
Button Component

↓

components/ui/button/
```

```
Button Styles

↓

styles/components/button.css
```

```
Button Documentation

↓

docs/02-components/buttons.md
```

```
Button Types

↓

types/button.ts
```

---

# Folder Responsibilities

One folder should solve one problem.

Do not combine unrelated files.

Incorrect:

```
components/

button.tsx

logo.svg

theme.ts

date.ts
```

Correct:

```
components/

config/

utils/

public/
```

---

# Future Growth

When adding a new folder:

Ask:

- Does a similar folder already exist?
- Is this responsibility unique?
- Can this live inside an existing folder?

Avoid unnecessary top-level folders.

---

# Naming Rules

All folders use:

lowercase + kebab-case

Examples:

```
tool-card

user-profile

blog-post

shared-layout
```

Never use:

```
ToolCard

toolCard

tool_card

TOOLS
```

---

# File Rules

All files use:

lowercase + kebab-case

Examples:

```
button.tsx

button.css

tool-card.tsx

tool-card.css

design-tokens.md
```

React component names remain PascalCase inside the file.

---

# Import Strategy

Prefer absolute imports.

Example:

```tsx
import Button from "@/components/ui/button/button";
```

Avoid deeply nested relative imports whenever possible.

---

# What Does NOT Belong

Do not place in the wrong folder:

- Business logic inside components
- CSS inside app/
- Images inside styles/
- Utilities inside components/
- Configuration inside utils/

Every file must live where its responsibility belongs.

---

# Rules

Always:

- Follow the official folder structure.
- Keep responsibilities separate.
- Reuse existing folders.
- Keep the root directory clean.
- Organize files logically.

Never:

- Create random folders.
- Mix unrelated files.
- Duplicate responsibilities.
- Ignore naming conventions.
- Break the project structure.

---

# Related Documents

- project-architecture.md
- coding-standards.md
- css-architecture.md
- naming-conventions.md