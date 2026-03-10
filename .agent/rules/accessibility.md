---
title: Frontend Accessibility Standards
description: Strict WCAG 2.2 AAA accessibility rules for React, Next.js, and Shadcn UI.
tags: [accessibility, wcag, a11y, react, tailwind, shadcn]
trigger: extensions: [tsx, ts, jsx, js], folders: [src/app, src/components, src/blocks]
---

# Frontend Accessibility (a11y) Rules

When building frontend components with Next.js, React, Tailwind CSS, and Shadcn UI, you **MUST** adhere to strict WCAG 2.2 AAA guidelines and modern accessibility practices.

## 1. Radix & Shadcn First
Since we use Shadcn UI (built on Radix Primitives), **always prefer using the established component primitives** over building interactive elements from scratch. Radix handles complex ARIA states, keyboard navigation, and focus management automatically.
- **Rule**: If a UI pattern exists in Shadcn (Dialog, Select, Accordion, Checkbox), use it instead of building a raw `<div onClick={...}>`.

## 2. Semantic HTML & Keyboard Navigation
Never use generic elements for interactive controls.
- **Rule**: Only `<button>`, `<a>`, `<input>`, `<select>`, and `<textarea>` should be focusable by default.
- **Rule**: Never use `<div onClick={...}>` or `<span onClick={...}>`. If it acts like a button, it must be a `<button>` or a `<Link>` (if it navigates).
- **Rule**: Focus states must be explicitly visible. Use Tailwind's `focus-visible:` utility, not `focus:`, to avoid trapping mouse users with focus rings.
  - Good: `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`

## 3. ARIA Attributes
- **Rule**: Only use ARIA attributes when native HTML semantics are insufficient. (First rule of ARIA: No ARIA is better than bad ARIA).
- **Rule**: Interactive custom components must have appropriate roles (e.g., `role="switch"`, `role="alert"`).
- **Rule**: State attributes must be accurately mapped (e.g., `aria-expanded={isOpen}`, `aria-hidden="true"` for decorative icons).
- **Rule**: Always provide `aria-label` or `aria-labelledby` for icon-only buttons. Use `<span className="sr-only">Label</span>` inside buttons as a preferred alternative to `aria-label`.

## 4. Color Contrast (WCAG 2.2 AAA & APCA)
- **Rule**: Text contrast must meet WCAG 2.2 AAA standards (7:1 for normal text, 4.5:1 for large text).
- **Rule**: Utilize APCA (Advanced Perceptual Contrast Algorithm) principles by ensuring lightness contrast between background and text is stark. Avoid pure grays on pure grays. 
- **Rule**: Do not convey information using color alone. Provide text or icon alternatives for states (e.g., an error state should have a red color AND an alert icon or text).

## 5. Next.js Specifics
- **Rule**: Always use `next/link` for internal navigation to ensure prefetching and proper client-side routing.
- **Rule**: Always provide descriptive `alt` text for `next/image`. If an image is purely decorative, use `alt=""` and `aria-hidden="true"`.

## 6. Dynamic Content Announcements
- **Rule**: Use Aria Live Regions (`aria-live="polite"` or `aria-live="assertive"`) for dynamic content changes that happen without a page reload (e.g., form submission errors, toast notifications).

## 7. Official References
If an edge case arises regarding complex interaction patterns, refer to:
- **WCAG 2.2 Guidelines**: https://www.w3.org/TR/WCAG22/
- **W3C ARIA Authoring Practices (APG)**: https://www.w3.org/WAI/ARIA/apg/
- **APCA Contrast Calculator**: https://www.myndex.com/APCA/
