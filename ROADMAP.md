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

---

## 🛑 PHASE TRANSITION GATE (DO NOT SKIP)

_This section must be completed BEFORE moving to Phase 5: Testing & Launch._

- [ ] Create a fresh, empty Production Database in Neon.
- [ ] Set `push: false` in `payload.config.ts`.
- [ ] Run `pnpm payload migrate:create --name initial_production_schema` to lock the UI structure.
- [ ] Connect Vercel to the Production Database URL.

---

## Phase 5: Testing & Launch

- [ ] Cross-browser & Mobile responsiveness audit
- [ ] SEO setup (Meta tags, OpenGraph, Sitemap)
- [ ] Configure functional production email (Gmail/SMTP)
- [ ] Finalized Migration: Disable `push` & Generate production schema
- [ ] Connect custom domain `franknav.com`
- [ ] Update `NEXT_PUBLIC_SERVER_URL` to `https://franknav.com`
- [ ] DNS Cutover & Final Production Launch
