# Workspace Rules and Workflows Index

This file serves as a master directory for all AI agent rules and workflows within this repository.

## Rule Activation Instructions

In the Antigravity IDE, rules must be activated through the **"Activation Mode"** dropdown located in the file's UI panel, rather than through frontmatter metadata.

- **Activation Mode**: Must be one of `Manual`, `Always On`, `Model Decision`, or `Glob`.
- **Glob Pattern**: If the Activation Mode is set to `Glob`, you must carefully copy and paste the provided pattern from the table below into the input field that appears in the UI.

## Rules (`.agent/rules/`)

Rules are guidelines that the AI agent follows autonomously based on specific triggers (like file types or active directories).

| File Name                                                      | Description                                                               | Scope             | Origin  | Priority | Activation Mode | Glob Pattern                                                       |
| :------------------------------------------------------------- | :------------------------------------------------------------------------ | :---------------- | :------ | :------- | :-------------- | :----------------------------------------------------------------- |
| [`access-control-advanced.md`](./access-control-advanced.md)   | Complex security scenarios and role-based access control.                 | Security          | Payload | High     | Always On       | -                                                                  |
| [`access-control.md`](./access-control.md)                     | Security and permission strategies for collections and fields.            | Security          | Payload | High     | Glob            | `src/collections/**/*.ts, src/globals/**/*.ts, src/access/**/*.ts` |
| [`accessibility.md`](./accessibility.md)                       | Enforces WCAG 2.2 AAA, semantic HTML, and proper Radix/Shadcn usage.      | Frontend UI       | Agent   | High     | Glob            | `src/app/**/*.tsx, src/components/**/*.tsx`                        |
| [`adapters.md`](./adapters.md)                                 | Database and storage configuration guidelines.                            | Database / Schema | Payload | Medium   | Glob            | `src/payload.config.ts`                                            |
| [`admin-ui-guide.md`](./admin-ui-guide.md)                     | Admin UI Documentation guidelines.                                        | Admin UI          | User    | High     | Always On       | -                                                                  |
| [`agent-identity.md`](./agent-identity.md)                     | Core persona and behavioral guidelines for the AI Agent.                  | Agent Config      | Agent   | Critical | Always On       | -                                                                  |
| [`agent-rule-creation.md`](./agent-rule-creation.md)           | SOP for the AI Agent when creating and registering new rules.             | Agent Config      | Agent   | Critical | Always On       | -                                                                  |
| [`collections.md`](./collections.md)                           | Guidelines for defining collection structures and fields.                 | Database / Schema | Payload | High     | Glob            | `src/collections/**/*.ts, src/globals/**/*.ts`                     |
| [`communication.md`](./communication.md)                       | Project Management & Communication guidelines.                            | Core / General    | User    | High     | Always On       | -                                                                  |
| [`components.md`](./components.md)                             | Custom Admin UI development guidelines.                                   | Admin UI          | Payload | Medium   | Model Decision  | -                                                                  |
| [`endpoints.md`](./endpoints.md)                               | Custom API routing guidelines.                                            | Backend / API     | Payload | Medium   | Model Decision  | -                                                                  |
| [`field-type-guards.md`](./field-type-guards.md)               | TypeScript safety for Payload fields.                                     | Database / Schema | Payload | Medium   | Glob            | `src/collections/**/*.ts, src/globals/**/*.ts, src/fields/**/*.ts` |
| [`fields.md`](./fields.md)                                     | Best practices for field definitions.                                     | Database / Schema | Payload | High     | Glob            | `src/collections/**/*.ts, src/globals/**/*.ts, src/fields/**/*.ts` |
| [`generate-types.md`](./generate-types.md)                     | Manual type generation instruction (`pnpm payload generate:types`).       | Core / General    | User    | Critical | Always On       | -                                                                  |
| [`git.md`](./git.md)                                           | Git guidelines for Atomic Development and Feature Branches.               | Core / General    | User    | High     | Always On       | -                                                                  |
| [`hooks.md`](./hooks.md)                                       | Patterns for data manipulation in lifecycle hooks.                        | Database / Schema | Payload | High     | Glob            | `src/collections/**/*.ts, src/globals/**/*.ts, src/hooks/**/*.ts`  |
| [`payload-cms-overview.md`](./payload-cms-overview.md)         | Definitive core rules and structures for Payload CMS.                     | Agent Config      | Payload | Critical | Always On       | -                                                                  |
| [`performance.md`](./performance.md)                           | Enforces Next.js best practices, Server Components, and clean code.       | Frontend UI       | Agent   | High     | Glob            | `src/app/**/*.tsx, src/components/**/*.tsx`                        |
| [`plugin-development.md`](./plugin-development.md)             | Extending Payload functionality.                                          | Backend / API     | Payload | Medium   | Model Decision  | -                                                                  |
| [`pnpm-only.md`](./pnpm-only.md)                               | pnpm-Only Package Management guidelines.                                  | Core / General    | User    | High     | Always On       | -                                                                  |
| [`proposal-roadmap-linking.md`](./proposal-roadmap-linking.md) | Requirement to link all proposals to the master roadmap.                  | Core / General    | User    | High     | Always On       | -                                                                  |
| [`queries.md`](./queries.md)                                   | Data fetching best practices.                                             | Backend / API     | Payload | High     | Model Decision  | -                                                                  |
| [`responsive-design.md`](./responsive-design.md)               | Enforces mobile-first Tailwind, specific touch targets, and fluid layout. | Frontend UI       | Agent   | High     | Glob            | `src/app/**/*.tsx, src/components/**/*.tsx`                        |
| [`security-critical.md`](./security-critical.md)               | Critical security patterns for Local API, Hooks, and Access Control.      | Security          | Payload | Critical | Always On       | -                                                                  |

## Workflows (`.agent/workflows/`)

Workflows are step-by-step Standard Operating Procedures (SOPs) that the agent can execute on command using the `/` slash command. Currently, all executable actions have been migrated to Rules, but this directory remains available for future true workflows (e.g., CI/CD scripts, automated test suites).

| File Name       | Description | Scope | Origin | Command / Notes |
| :-------------- | :---------- | :---- | :----- | :-------------- |
| _(None Active)_ | -           | -     | -      | -               |
