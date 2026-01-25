---
description: Project Management & Communication Workflow
---

# 📋 Project Management & Communication

This workflow ensures context continuity, token efficiency, and clear project tracking.

### 1. Roadmap & Task Tracking

- **Living Documents**: `ROADMAP.md` and `task.md` are the primary sources of truth for project status.
- **Updates**: Update these files at the end of every significant task or session.
- **Approvals**: **NEVER** mark a task as complete in `ROADMAP.md` without explicit user confirmation.
- **Dynamic Growth**: Suggest adding new tasks to the roadmap if they emerge during development.

### 2. Token Optimization & New Chats

- **Context Management**: To reduce token usage and keep responses fast, the Agent should suggest starting a **new chat session** when:
  - A major roadmap item is completed.
  - The conversation history becomes long enough to induce latency or high token costs.
  - The topic switches to a fundamentally different part of the codebase.
- **Handover**: Before ending a chat, ensure `ROADMAP.md` and `task.md` are fully updated so the next session can resume seamlessly.

### 3. Collaboration

- **Check-ins**: Check in with the user frequently.
- **Clarification**: If a task's definition of "done" is ambiguous, ask for the user's criteria before proceeding.
