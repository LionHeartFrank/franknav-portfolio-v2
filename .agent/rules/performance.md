---
trigger: glob
description: Strict Next.js performance and React best practices.
globs: src/app/**/*.tsx, src/components/**/*.tsx
---

# Frontend Performance & Clean Code Rules

When building with Next.js App Router and React, we prioritize performance, minimize client-side javascript, and enforce clean architecture.

## 1. Server Components vs. Client Components

Next.js App Router defaults to Server Components.

- **Rule**: Default to Server Components. They do not ship JS to the client.
- **Rule**: Only use `'use client'` when strictly necessary. Reasons include:
  - Using React hooks (`useState`, `useEffect`, `useContext`)
  - Interactivity (event listeners like `onClick`)
  - Using browser APIs
- **Rule**: Push `'use client'` down the tree. Do not put `'use client'` at the page level if only a low-level button needs interactivity. Wrap the specific interactive piece in a client component and pass server components to it as `children` if needed.

## 2. Next.js Optimizations

- **Rule**: Always use `next/image` (`<Image />`) for images to ensure automatic WebP/AVIF conversion, resizing, and caching. Never use the native `<img>` tag unless specifically required for an edge case.
- **Rule**: Define explicit `width` and `height` properties on `<Image />` to prevent Cumulative Layout Shift (CLS), or use `fill` with a relatively positioned parent.
- **Rule**: Load third-party scripts using `next/script` with appropriate strategies (`lazyOnload`, `worker`, etc.) to prevent render blocking.
- **Rule**: Use `next/font` for self-hosting fonts with zero layout shift.

## 3. Clean Code & DRY Principles

- **Rule**: Remove dead code immediately. Do not leave commented-out blocks of old code logic in the final commit.
- **Rule**: If a UI pattern (like a styled badge or specific button shape) is used more than twice, extract it into a reusable component to avoid duplicated Tailwind class strings.
- **Rule**: Group related imports. Keep third-party module imports separated from local file imports.
- **Rule**: Use destructuring for props to clearly indicate component dependencies at a glance.

## 4. Render Optimization

- **Rule**: Avoid massive, deeply nested components. Break them down.
- **Rule**: Avoid inline object or array definitions within `useMemo` or `useEffect` dependency arrays or component props if it causes unnecessary re-renders. Extract constants outside the component.
- **Rule**: For heavy, non-critical components that must be loaded on the client, utilize Next.js `next/dynamic` for lazy loading (code splitting).
