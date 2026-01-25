---
description: Type Generation Workflow
---

Only Generate types via Payload

- Ensures is frontend perfectly in sync with CMS config without human error.

From now on, whenever we modify a collection or global config, the Agent will:

1. Apply the config changes.
2. Immediately notify me (human coder) to run pnpm payload generate:types in the terminal.
3. Wait for you to confirm it's done before I touch any frontend code that relies on those types.

This will keep the payload-types.ts file clean and "machine-authoritative."
