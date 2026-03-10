---
description: Admin UI Documentation Workflow
---

# 🖥️ Admin UI Documentation

When modifying Payload CMS configurations, the Agent must provide clear guidance on how the changes affect the Admin UI.

### 1. The "Quick Admin Guide"

Whenever a `config.ts` for a collection or global is modified, the Agent must include a brief guide in the `walkthrough.md` or as a separate message:

- **Location**: Where to find the change in the Admin panel (e.g., "Globals > Header").
- **New Fields**: List the new fields or blocks added.
- **Instructions**: Briefly explain how to use the new features or if data needs to be re-entered due to structural changes.

### 2. Testing

- Suggest specific manual testing steps in the Admin UI to verify that the configuration behaves as expected (validation, field types, labels, etc.).
