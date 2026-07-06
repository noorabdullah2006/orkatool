# Git Workflow

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

This document defines the official Git workflow for the OrkaTool project.

The objective is to maintain a clean, organized, and traceable Git history throughout the project's lifecycle.

---

# Objectives

The Git workflow should:

- Keep commit history clean
- Make changes easy to track
- Simplify debugging
- Reduce merge conflicts
- Support future collaboration

---

# Branch Strategy

The project uses a simple branch strategy.

```
main
```

Current development happens directly on the `main` branch.

If the project grows or multiple developers join, feature branches may be introduced.

---

# Future Branch Structure

Recommended future structure:

```
main

feature/

fix/

docs/

refactor/

hotfix/
```

Examples:

```
feature/button-component

feature/navigation

fix/header-import

docs/design-tokens

refactor/layout-system
```

---

# Commit Philosophy

Each commit should represent **one logical change**.

A commit should never mix unrelated work.

Good:

- Add button component
- Fix header layout
- Update documentation

Bad:

- Add button + fix footer + update SEO + change colors

---

# Commit Message Format

The project follows Conventional Commits.

Structure:

```
type: short description
```

---

# Commit Types

| Type | Purpose |
|--------|----------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| refactor | Code improvement without changing behavior |
| style | Formatting only |
| test | Testing changes |
| chore | Maintenance tasks |

---

# Examples

```
feat: add reusable button component

fix: resolve header import path

docs: complete css architecture

refactor: simplify layout structure

style: format component files

test: add responsive testing checklist

chore: update dependencies
```

---

# Commit Rules

Always:

- Write meaningful messages.
- Keep messages short.
- Describe the change.
- Use lowercase after the type.

Avoid:

```
update

changes

done

final

new

fix

test
```

These messages provide no useful history.

---

# Commit Frequency

Commit after completing one logical task.

Examples:

✔ Finish one component

↓

Commit

✔ Finish one documentation file

↓

Commit

✔ Fix one bug

↓

Commit

Do not wait until dozens of unrelated changes accumulate.

---

# Documentation Commits

Documentation changes should be committed separately whenever possible.

Example:

```
docs: complete routing documentation
```

---

# Feature Development

Recommended workflow:

```
Read documentation

↓

Implement feature

↓

Verify

↓

Update documentation (if needed)

↓

Commit
```

---

# Pull Requests

Currently:

Not required.

Future team workflow:

```
Feature Branch

↓

Pull Request

↓

Review

↓

Merge into main
```

---

# Merge Rules

Never merge code that:

- Breaks the build
- Violates documentation
- Introduces duplicate architecture
- Fails testing

---

# Before Every Commit

Verify:

- Project builds successfully.
- No unnecessary files are included.
- Imports are correct.
- Documentation is updated (if required).
- Formatting is complete.

---

# Files That Should Never Be Committed

Examples:

```
node_modules/

.env

.next/

dist/

coverage/

temporary files

backup files
```

These should remain excluded through `.gitignore`.

---

# Versioning

The project follows Semantic Versioning.

Format:

```
MAJOR.MINOR.PATCH
```

Example:

```
1.0.0
```

Rules:

- MAJOR → Breaking changes
- MINOR → New features
- PATCH → Bug fixes

---

# Rollback Strategy

If a change introduces problems:

- Identify the offending commit.
- Revert the commit cleanly.
- Avoid deleting Git history.

Git history should remain transparent.

---

# AI Development

When AI generates code:

- Commit only after reviewing the output.
- Never commit AI-generated code blindly.
- Ensure generated code follows project documentation.

---

# Rules

Always:

- Make small, logical commits.
- Use Conventional Commits.
- Keep history readable.
- Review changes before committing.
- Keep documentation synchronized.

Never:

- Mix unrelated changes.
- Use meaningless commit messages.
- Commit generated files.
- Rewrite Git history without reason.
- Commit broken code.

---

# Related Documents

- ai-rules.md
- coding-standards.md
- project-state.md