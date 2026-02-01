# PR: Nested Documents Support & Header Navigation Refinement

## Overview
This PR implements full support for nested page routing (e.g., `/parent/child`) and transitions the site's navigation to a more flexible, blocks-based system. It also streamlines the Admin UI settings and establishes a long-term roadmap for future improvements.

## Major Features & Improvements

### 1. Nested Routing & Content Resolution
- **Catch-all Routing**: Migrated frontend routes from `[slug]` to `[...slug]`.
- **Breadcrumb Query Logic**: Optimized `queryPageByPath` to strictly match the last segment of the breadcrumb trail, ensuring parent pages no longer incorrectly render child content.
- **CMSLink Enhancement**: Updated the `CMSLink` component to automatically utilize breadcrumb URLs for nested pages.

### 2. Header & Navigation Overhaul
- **Blocks-Based System**: Transitioned the Header from fixed fields to a Block-based system supporting standard links and Nested Menu Groups.
- **Clickable Parent Links**: Added an optional `parentLink` field to Menu Groups, allowing top-level navigation labels to act as links.
- **Hover Dropdowns**: Implemented logic for frontend hover dropdowns for nested navigation items.

### 3. Global Settings Optimization
- **Flattened Settings**: Removed the redundant "Navigation" tab from the Settings global (now handled by the Header) and flattened the remaining fields to resolve Admin UI conflicts with certain plugins.
- **Localization**: Ensured all new global fields are fully localized for Spanish and English.

### 4. Future Roadmap & Proposals
- **Roadmap Phase 7**: Added a "Future Features" phase to the project roadmap.
- **Proposals**: Documented technical strategies for:
  - **Advanced Content Editor**: Adding code blocks and markdown support to Lexical.
  - **Custom Breadcrumbs**: Allowing per-page breadcrumb overrides.
  - **Settings Expansion**: Strategy for re-introducing organized tabs.

## Important File Changes
- `src/app/(frontend)/[...slug]/page.tsx`: Implemented robust nested route resolution.
- `src/Header/config.ts`: Redesigned Header configuration with block-based navigation.
- `src/Header/Nav/index.tsx`: Updated frontend to support both clickable parents and dropdown menus.
- `src/globals/Settings.ts`: Simplified and streamlined site-wide labels.
- `src/components/Link/index.tsx`: Improved URL generation for nested hierarchies.
- `docs/ROADMAP.md`: Established the vision for Phase 7.

## Verification Steps
- [x] Run `pnpm payload generate:types` to sync schemas.
- [x] Verified that `/ux-case-studies` and `/ux-case-studies/case-study-1` load distinct content.
- [x] Confirmed the Header labels are clickable and dropdowns remain functional.
- [x] Verified Settings global loads correctly in the Admin UI.
