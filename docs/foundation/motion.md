# Motion System

**Version:** 1.0.0  
**Status:** Stable  
**Last Updated:** 2026-07-04

---

# Purpose

The Motion System defines how animation and transitions are used throughout OrkaTool.

Motion should improve usability by providing visual feedback, guiding user attention, and making interactions feel natural.

Animations are a supporting element of the user experience and should never distract from the primary task.

---

# Design Philosophy

Motion should feel:

- Natural
- Fast
- Smooth
- Predictable
- Purposeful
- Professional

Every animation must have a clear purpose.

If an animation does not improve usability, it should not exist.

---

# Motion Principles

Every animation should be:

- Meaningful
- Consistent
- Accessible
- Lightweight
- Responsive

Motion should communicate change, not decoration.

---

# Objectives

Motion should help users:

- Understand interface changes
- Recognize interactive elements
- Follow navigation
- Receive visual feedback
- Maintain context during state changes

---

# Motion Hierarchy

Animations are divided into four categories.

## Level 1 — Essential

Used for:

- Focus states
- Hover states
- Active states
- Button feedback

These animations should always exist.

---

## Level 2 — Functional

Used for:

- Dropdowns
- Accordions
- Tabs
- Modals
- Toasts

These animations help users understand interface changes.

---

## Level 3 — Informational

Used for:

- Loading indicators
- Progress bars
- Skeleton screens

These animations communicate system status.

---

## Level 4 — Decorative

Examples:

- Floating objects
- Background effects
- Hero animations

Decorative motion should be used sparingly.

---

# Duration Scale

Use standardized durations.

| Token | Duration |
|--------|----------|
| Instant | 0ms |
| Fast | 150ms |
| Normal | 200ms |
| Medium | 300ms |
| Slow | 500ms |

Avoid animations longer than 500ms for UI interactions.

---

# Timing Functions

Preferred easing functions:

| Token | Function |
|--------|----------|
| Standard | ease |
| Enter | ease-out |
| Exit | ease-in |
| Smooth | ease-in-out |

Avoid custom cubic-bezier curves unless necessary.

---

# Hover Animations

Hover effects should be subtle.

Recommended effects:

- Background color
- Border color
- Shadow
- Slight scale (maximum 1.02)

Avoid dramatic movement.

---

# Focus Animations

Focus should be immediate and clearly visible.

Recommended effects:

- Outline
- Focus ring
- Border color

Never animate focus with long delays.

---

# Button Animations

Buttons may animate:

- Background color
- Shadow
- Border color
- Slight scale

Avoid bouncing or rotating buttons.

---

# Form Animations

Inputs may animate:

- Border color
- Focus ring
- Background color

Validation messages should fade in smoothly.

---

# Card Animations

Cards may animate:

- Shadow
- Border
- Small translateY (-2px maximum)

Avoid large movement.

---

# Modal Animations

Recommended:

Opening:

- Fade
- Scale (0.98 → 1)

Closing:

- Fade out

Duration:

200–300ms

---

# Drawer Animations

Navigation drawers should slide naturally.

Recommended:

- Slide from edge
- Fade overlay

Avoid excessive overshoot.

---

# Accordion Animations

Accordions should animate:

- Height
- Opacity

Animation should remain smooth regardless of content size.

---

# Dropdown Animations

Dropdowns should:

- Fade
- Slide slightly downward

Duration:

150–200ms

---

# Tooltip Animations

Tooltips should:

- Fade
- Small upward movement

Duration:

150ms

---

# Toast Animations

Recommended:

Enter:

- Fade
- Slide

Exit:

- Fade

Duration:

200ms

---

# Loading States

Preferred loading indicators:

- Skeleton screens
- Progress indicators
- Spinner (only when necessary)

Avoid blocking the interface.

---

# Skeleton Screens

Skeletons should:

- Match final layout
- Use subtle shimmer animation
- Disappear smoothly

Avoid excessive shimmer speed.

---

# Page Transitions

Page transitions should remain minimal.

Prefer:

- Fade
- Small content transition

Avoid dramatic page animations.

---

# Scroll Animations

Scroll-triggered animations should be used sparingly.

Content should remain readable without animation.

Avoid delaying important content.

---

# Reduced Motion

Respect the user's operating system preference.

Support:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- Remove decorative animations.
- Reduce transition duration.
- Disable parallax.
- Disable automatic movement.

Essential feedback animations may remain.

---

# Performance

Animations must:

- Use GPU-friendly properties.
- Avoid layout recalculations.
- Maintain 60 FPS where possible.

Prefer animating:

- opacity
- transform

Avoid animating:

- width
- height
- top
- left
- margin

unless absolutely necessary.

---

# Accessibility

Motion must never:

- Cause motion sickness.
- Flash rapidly.
- Hide important information.
- Prevent interaction.

Users should always be able to interact immediately.

---

# Rules

Always:

- Keep animations subtle.
- Use standard durations.
- Respect reduced motion.
- Animate only when helpful.
- Maintain consistency.

Never:

- Use unnecessary animations.
- Delay user interaction.
- Create distracting effects.
- Use autoplay decorative motion.
- Animate every element on the page.

---

# Related Documents

- design-philosophy.md
- colors.md
- spacing.md
- accessibility.md
- css-architecture.md