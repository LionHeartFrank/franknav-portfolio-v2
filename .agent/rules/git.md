---
description: Git Workflow for Atomic Development and Feature Branches
---

Follow this workflow for every change to ensure stability and easy reversibility.

### 1. Branching Strategy

- **Base Branch**: ALWAYS branch from `main`.
- **Base Branch**: ALWAYS branch from `main`.
- **Branch Prefixes**:
  - `feature/`: New functionality (e.g., `feature/add-contact-form`)
  - `bugfix/`: Non-critical fixes (e.g., `bugfix/fix-header-padding`)
  - `hotfix/`: Critical production fixes (branched from `main`)
  - `release/`: Preparing for production (e.g., `release/v2.0.0`)
  - `docs/`: Documentation updates
  - `chore/`: Maintenance (e.g., `chore/update-deps`)
  - `refactor/`: Code structural changes
  - `test/`: Adding or modifying tests
- **Naming Rules**:
  - Use `kebab-case` (lowercase with hyphens).
  - Keep names descriptive but concise.
- **Command**: `git checkout -b feature/my-new-feature`

### 2. Atomic Commits

- Commit early and often.
- Each commit should represent a single "unit of work" (e.g., adding a single utility, updating one component's styles).
- **Commit Message Format**: Use Conventional Commits.
  - `feat`: A new feature
  - `fix`: A bug fix
  - `refactor`: Code change that neither fixes a bug nor adds a feature
  - `chore`: Updating build tasks, package manager configs, etc.
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **Example**: `feat: add getLocale utility to read NEXT_LOCALE cookie`

### 3. Verification Before Merging

- Before merging back to `main`, ensure the app builds and functions.
- **Commands**:
  - `pnpm generate:types` (if Payload config changed)
  - `pnpm build` (to check for TypeScript/Build errors)

### 4. Merging to Main

- Switch back to main: `git checkout main`
- Pull latest: `git pull origin main`
- Merge feature: `git merge feature/my-new-feature`
- Push: `git push origin main`

### 5. Reverting Changes

- If a feature causes issues, revert the entire merge or the specific atomic commits.
- **Command**: `git revert -m 1 [merge-commit-hash]` for merges, or `git revert [commit-hash]` for single commits.
