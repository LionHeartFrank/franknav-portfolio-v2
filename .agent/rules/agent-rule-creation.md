---
description: Standard Operating Procedure for the AI Agent when creating new workspace rules.
---

# Agent Rule Creation Guidelines

This rule defines the Standard Operating Procedure (SOP) that the AI Agent **MUST** follow whenever the User requests the creation of a new Workspace Rule or Workflow.

## 1. File Placement and Formatting

- **Location**: All new rules must be placed directly inside the `.agent/rules/` directory. All new workflows must be placed directly inside the `.agent/workflows/` directory.
- **Format**: Use strict Markdown formatting.
- **Tone**: Use an imperative tone (e.g., "Must", "Never", "Always") and provide concrete code examples (Good vs. Bad) where applicable.

## 2. Mandatory Index Update

Whenever a new rule or workflow is created, the Agent **MUST** immediately update the master index file located at `.agent/rules/00-index.md`.

- Add a new row to the appropriate table (Rules or Workflows).
- Assign a clear, brief `Description`.
- Assign a `Scope` (e.g., Frontend UI, Backend / API, Database / Schema, Security, Admin UI, Agent Config).
- Assign the `Origin` (typically "Agent" or "User" depending on who provided the core logic).
- Recommend an `Activation Mode` (`Always On`, `Glob`, `Model Decision`, `Manual`).
- If `Glob` is recommended, provide the exact `Glob Pattern`. If taking a `/` command, provide it in the table.

## 3. UI Configuration Prompting

The Antigravity IDE requires the User to manually configure the "Activation Mode" via a dropdown in the file UI. The `trigger` frontend matter is not enough.

- **Rule**: Immediately after creating a new rule and updating the index, the Agent **MUST** explicitly notify the User to open the new rule file and configure the Activation Mode.
- **Instruction**: The Agent must tell the user exactly which option to pick from the dropdown (`Always On`, `Glob`, or `Model Decision`) and what Glob string to paste (if applicable).
