# Routing

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official routing architecture for the OrkaTool project.

It establishes how pages are organized, how URLs are structured, and the rules every route must follow.

A consistent routing system improves:

- User experience
- SEO
- Navigation
- Scalability
- Maintainability

---

# Routing Principles

The routing system follows these principles:

- Simple
- Predictable
- SEO Friendly
- Human Readable
- Scalable
- Consistent

URLs should clearly describe the page content.

---

# Framework

The project uses:

**Next.js App Router**

All routes are created inside the `app/` directory.

---

# Route Naming

All routes must use:

- lowercase
- kebab-case

Correct:

```
/age-calculator
/bmi-calculator
/currency-converter
```

Incorrect:

```
/AgeCalculator
/BMICalculator
/ageCalculator
```

---

# Root Routes

Core pages:

```
/

about

contact

blog

tools

privacy-policy

terms-of-service

disclaimer
```

---

# Tool Routes

Every tool has its own dedicated route.

Example:

```
/tools/age-calculator

/tools/bmi-calculator

/tools/percentage-calculator
```

Each tool page should have:

- Metadata
- Structured Data
- FAQ
- Internal Links

---

# Blog Routes

Blog articles:

```
/blog/post-slug
```

Example:

```
/blog/how-to-calculate-bmi
```

---

# Static Pages

Examples:

```
/about

/contact

/privacy-policy

/terms-of-service
```

Static pages should remain simple and lightweight.

---

# URL Rules

URLs should:

- Be descriptive
- Contain keywords naturally
- Avoid unnecessary words
- Avoid IDs when possible

Good:

```
/tools/bmi-calculator
```

Bad:

```
/page-15

/tool?id=5
```

---

# Nested Routes

Nested routes should only be used when they improve organization.

Example:

```
tools/

    bmi-calculator/

    age-calculator/

blog/

    seo-guide/

    health-tools/
```

Avoid excessive nesting.

---

# Dynamic Routes

Dynamic routes should be used only when necessary.

Examples:

```
blog/[slug]

category/[slug]
```

Tool pages should generally remain static.

---

# Route Groups

Route groups may be used for organization but should not affect the URL.

Example:

```
(app)

(marketing)

(tools)
```

---

# Route Layouts

Shared layouts should be used whenever possible.

Example:

```
layout.tsx

↓

Header

↓

Main

↓

Footer
```

Do not duplicate layouts across pages.

---

# Metadata

Every route should define:

- Title
- Description
- Canonical URL
- Open Graph
- Twitter Card

Metadata should accurately reflect the page content.

---

# Breadcrumbs

Pages deeper than one level should include breadcrumbs.

Example:

```
Home

↓

Tools

↓

BMI Calculator
```

Breadcrumbs improve navigation and SEO.

---

# Navigation

Primary navigation should link to major sections:

- Home
- Tools
- Blog
- About
- Contact

Navigation should remain consistent across the site.

---

# Error Routes

The application should support:

```
404

500

not-found

error
```

Error pages should provide clear recovery options.

---

# Loading Routes

Loading states should be implemented using:

```
loading.tsx
```

Loading UI should match the overall design system.

---

# SEO Considerations

Every route should:

- Have a unique URL
- Include a canonical tag
- Avoid duplicate content
- Use descriptive slugs

URLs should remain permanent whenever possible.

---

# Accessibility

Navigation between routes should:

- Preserve keyboard accessibility
- Maintain logical focus
- Announce page changes when appropriate

---

# Future Expansion

Future sections may include:

```
account/

dashboard/

saved-tools/

settings/
```

These should follow the same routing conventions.

---

# Rules

Always:

- Use lowercase routes.
- Use kebab-case.
- Keep URLs descriptive.
- Maintain consistent structure.
- Use shared layouts.

Never:

- Use camelCase URLs.
- Include unnecessary query parameters.
- Change existing URLs without redirects.
- Create duplicate routes.

---

# Related Documents

- project-architecture.md
- folder-structure.md
- seo-guidelines.md
- metadata.md
- structured-data.md