---
description: Ironclad Type Generation Protocol
---

# 🛑 NEVER EDIT `payload-types.ts` MANUALLY

This is an **ironclad rule**. This file is machine-generated and manual changes will be overwritten.

### The Protocol

Whenever a collection or global config is modified, the Agent **MUST**:

1. **Apply Config Changes**: Update the `config.ts` of the collection or global.
2. **Halt Execution**: Stop all work on the frontend.
3. **Notify User**: Instead of trying to generate types with a terminal command inside the chat, **ALWAYS IMMEDIATELY** ask the User to manually run the following in their terminal:
   ```bash
   pnpm payload generate:types
   ```
4. **Await Confirmation**: Do not resume or attempt to "guess" the types. Wait for the user to confirm the command finished successfully.
5. **Verify & Continue**: Read the updated `payload-types.ts` to sync the internal state before touching any frontend components.

Ensures the frontend is perfectly in sync with the CMS config without human error.
