# Portfolio v2 Roadmap & Checklist

> [!IMPORTANT]
> **CURRENT ACTIVE PHASE: 🧪 PHASE 1-4 (EXPERIMENTAL)**
>
> - **Mode**: `push: true` (Auto-Synced)
> - **Database**: Development Sandbox
> - **Goal**: Rapid Prototyping & UI Design

---

Use this checklist to track the project's progress. Items marked with `[x]` are complete.

### **Summary of the New Plan**

| Feature             | Phase 1: Experimental (Next 2 Months)  | Phase 2: Production (Final Month)         |
| :------------------ | :------------------------------------- | :---------------------------------------- |
| **Database Mode**   | **`push: true`** (Auto-sync)           | **`push: false`** (Manual Migrations)     |
| **Workflow**        | Change code -> Save -> Test.           | Create Migration -> Review -> Deploy.     |
| **Migration Files** | **None.** (Skip to stay fast)          | One "Master" migration, then incremental. |
| **Vercel Build**    | Skip `payload migrate` to avoid hangs. | Run `payload migrate` automatically.      |
| **Data Safety**     | Dummy content only.                    | Real content (strictly protected).        |

## Phase 0: Pre-planning & Design

- [x] Define core objectives & target audience
- [ ] Create UI/UX wireframes (Mobile/Desktop)
- [ ] Establish content architecture & sitemap

## Phase 1: Setup & Configuration [/]

- [x] Deploy Payload CMS 3.0 template
- [x] Standardize on `README.md` (resolved case-sensitivity bugs)
- [x] Configure Backend Localization infrastructure (`en`/`es`)
- [x] Register `Settings` Global for localized static text
- [x] Establish Atomic Git Workflow (.agent/workflows/git.md)
- [x] Establish Local-First Migration practice (Execute `payload migrate` locally before push)
- [x] Configure Email Adapter (`@payloadcms/email-nodemailer`)
- [ ] Configure Vercel deployment pipeline
- [ ] Connect custom domain `franknav.com`

## Phase 2: UX Research

- [ ] Define user personas & success metrics
- [/] Finalize content strategy & Information Architecture
- [/] Build Page Skeleton via Payload Admin UI (on `main`)
- [ ] Seed database with initial English content
  - [ ] Use template dummy data to populate the database for testing

## Phase 3: Design System & Customization

- [ ] Configure Tailwind theme (Brand colors, Typography, Spacing)
  - [ ] Define project-wide color system (HSL variables) - [Proposal](./docs/proposals/color-system.md)
  - [ ] Site Branding & SEO Integration - [Proposal](./docs/proposals/site-branding-and-seo.md)
  - [ ] Select and standardize icon set (e.g., Lucide-React)
  - [ ] Audit and integrate `shadcn/ui` components
  - [ ] Audit and integrate `next-themes` components
  - [ ] Audit and integrate `next-intl` components
  - [ ] Audit and integrate `next-auth` components
  - [ ] Audit and integrate `next-seo` components
  - [ ] Audit and integrate `next-sitemap` components
  - [ ] Audit and integrate `next-og-image` components

- [ ] Create Workspace level rules for Agent to follow to ensure brand consistency and accessibility
  - [ ] Ensure all components are accessible and follow WCAG 2+ AAA standards
  - [ ] Ensure all components are responsive and follow mobile-first design principle
- [ ] Ensure all components are performant and follow best practices
- [ ] Ensure colors are WCAG 2+ AAA standards and Advanced Perceptual Contrast Algorithm (APCA).
- [ ] Develop core UI component library
- [ ] Apply brand styling to global Header/Footer layouts

## Phase 4: Development & Features

- [ ] Build custom interactive portfolio showcase
- [ ] Implement contact forms & lead management
- [ ] **Advanced Content Editor**: Upgrade Lexical editor for code blocks and markdown support.
  - [Proposal: Advanced Lexical Editor](./docs/proposals/future-features/advanced-editor.md)
- [ ] **Frontend Localization**: Implement the user-facing language toggle
- [ ] Accessibility audit for all pages and components
- [ ] Performance audit for all pages and components

---

# 🛑 PHASE TRANSITION GATE (DO NOT SKIP)

## Phase 5: Content Migration Phase

_This section must be completed BEFORE moving to Phase 5: Testing & Launch._

- [ ] Create a fresh, empty Production Database in Neon.
- [ ] Set `push: false` in `payload.config.ts`.
- [ ] Run `pnpm payload migrate:create --name initial_production_schema` to lock the UI structure.
- [ ] Connect Vercel to the Production Database URL.
- [ ] Deploy to Vercel
- [ ] Configure functional production email (Gmail/SMTP)
- [ ] Migrate existing projects/content from the old site
- [ ] Translate core content via Payload Admin Locale Toggle

---

## Phase 6: Testing & Launch

- [ ] Cross-browser & Mobile responsiveness audit
- [ ] Content Audit
  - [ ] Review all content for accuracy, clarity, and tone.
    - [ ] Review all content for consistency, completeness, and relevance.
  - [ ] Review all content for grammar and spelling errors.
  - [ ] Review all content for SEO optimization.
  - [ ] Content Accessibility Checks
- [ ] SEO setup (Meta tags, OpenGraph, Sitemap)
- [ ] Configure functional production email (Gmail/SMTP)
- [ ] Finalized Migration: Disable `push` & Generate production schema
- [ ] Connect custom domain `franknav.com`
- [ ] Update `NEXT_PUBLIC_SERVER_URL` to `https://franknav.com`
- [ ] DNS Cutover & Final Production Launch

---

## Phase 7: Future Features and Improvements

- [ ] **Expanded Multi-Tab Settings**: Re-introduce organized tabs for site-wide configuration.
  - [Suggestion: Settings Expansion & Improvements](./docs/proposals/future-features/settings-expansion.md)
- [ ] **Custom Breadcrumbs**: Allow per-page breadcrumb overrides.
  - [Phase 7: Custom Breadcrumbs Proposal](./docs/proposals/future-features/custom-breadcrumbs.md)
  - [ ] Add `customBreadcrumbs` field to `Pages` collection sidebar.
  - [ ] Update `Breadcrumbs` component for override logic.
- [ ] **Advanced Portfolio Features**:
  - [ ] Interactive filtering for Case Studies.
  - [ ] Dark/Light mode toggle refinements.
- [ ] **UX & Performance**:
  - [ ] Implement micro-interactions for button hovers and transitions.
  - [ ] Image optimization audit for large high-res case study assets.
