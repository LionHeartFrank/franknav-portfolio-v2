---
title: Frontend Responsive Design Standards
description: Strict mobile-first responsive design rules using Tailwind CSS.
tags: [responsive, tailwind, mobile-first, css]
trigger: extensions: [tsx, ts, jsx, js], folders: [src/app, src/components, src/blocks]
---

# Responsive Design Rules

When styling components with Tailwind CSS in this project, you **MUST** follow a strict mobile-first approach.

## 1. Mobile-First Tailwind Usage
All base classes in Tailwind apply to mobile by default. You must style for the smallest screen sizes first, then use breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) to add complexity for larger screens.
- **Rule**: Never start with desktop styling and override for mobile.
  - ❌ BAD: `<div className="w-full md:w-1/2 lg:w-1/3">` (Often implies designing desktop first, then shoehorning mobile).
  - ✅ GOOD: `<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">` (Establishes base mobile layout, expands gracefully).

## 2. Touch Targets & Spacing
Mobile users interact with fingers, not mouse cursors.
- **Rule**: Interactive elements (buttons, links, form inputs) must have a minimum touch target size of 44x44 CSS pixels. Use padding (`p-3` or `p-4`) or explicit min-heights (`min-h-[44px]`).
- **Rule**: Provide adequate spacing between clickable elements to prevent misclicks, especially in mobile navigation (`gap-`, `space-y-`, `space-x-`).

## 3. Responsive Typography
Viewport differences require fluid or stepped typography.
- **Rule**: Use Tailwind's responsive text utilities to scale typography.
  - Example: `<h1 className="text-3xl md:text-5xl lg:text-6xl">`
- **Rule**: Avoid fixed absolute heights on text-containing elements to prevent text overflow issues when translated or when users increase default font sizes.

## 4. Container & Layout Behaviors
- **Rule**: Avoid explicit fixed widths (e.g., `w-[500px]`). Prefer relative widths (`w-full`), max-widths (`max-w-md`), or CSS Grid/Flexbox layouts that fluidly adapt.
- **Rule**: Use object-fit utilities (`object-cover`, `object-contain`) for images spanning responsive containers to prevent distortion.

## 5. Viewport Edge Cases
- **Rule**: Ensure the layout accounts for safe areas on modern mobile devices (e.g., iPhone notches/dynamic islands).
- **Rule**: Be cautious with `100vh`, as it doesn't always account for mobile browser UI bars. Prefer `min-h-screen` or `min-h-[100dvh]` where applicable.
