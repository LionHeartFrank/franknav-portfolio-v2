---
description: pnpm-Only Package Management Workflow
---

# 🛑 ALWAYS USE `pnpm`

This project uses `pnpm` as its exclusive package manager. `npm` and `yarn` should **never** be used or suggested.

### Rules for the Agent

1. **Commands**: Always use `pnpm` when suggesting or running terminal commands (e.g., `pnpm install`, `pnpm dev`, `pnpm payload ...`).
2. **Suggestions**: If the user asks for a command, provide the `pnpm` version.
3. **Lockfiles**: Ensure `pnpm-lock.yaml` is the only lockfile. If a `package-lock.json` or `yarn.lock` is detected, alert the user or delete it immediately.
4. **Consistency**: Maintain consistency with existing `pnpm` workspace settings and configurations.

Prevents environment drift and ensures efficient, consistent dependency management across the project.
