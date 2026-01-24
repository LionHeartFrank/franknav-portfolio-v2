# Portfolio v2 Roadmap & Checklist

Use this checklist to track the project's progress. Items marked with `[x]` are complete.

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

## Phase 2: UX Research & Content Migration

- [ ] Define user personas & success metrics
- [/] Finalize content strategy & Information Architecture
- [/] Build Page Skeleton via Payload Admin UI (on `main`)
- [ ] Seed database with initial English content
- [ ] Migrate existing projects/content from the old site
- [ ] Translate core content via Payload Admin Locale Toggle

## Phase 3: Design System & Customization

- [ ] Configure Tailwind theme (Brand colors, Typography, Spacing)
- [ ] Develop core UI component library
- [ ] Apply brand styling to global Header/Footer layouts

## Phase 4: Development & Features

- [ ] Build custom interactive portfolio showcase
- [ ] Implement contact forms & lead management
- [ ] **Frontend Localization**: Implement the user-facing language toggle

## Phase 5: Testing & Launch

- [ ] Cross-browser & Mobile responsiveness audit
- [ ] SEO setup (Meta tags, OpenGraph, Sitemap)
- [ ] Configure functional production email (Gmail/SMTP)
- [ ] DNS Cutover & Final Production Launch
