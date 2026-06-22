# Agent Entry Guide

This project uses a long-term Agent memory set under `.agent/`.

## Mandatory Startup Order

Before doing non-trivial work in this project, read these files first:

1. `.agent/CORE.md` - minimal always-read operating context.
2. `.agent/RULES.md` - hard rules, safety boundaries, and non-negotiable constraints.
3. `.agent/SOUL.md` - stable user preferences, communication style, values, and product philosophy.
4. `.agent/MEMORY.md` - durable project/user context and historical decisions.
5. `.agent/ROADMAP.md` - current goals, future direction, open items.
6. `.agent/WORKFLOW.md` - universal workflow and task routing.
7. Relevant task workflow under `.agent/workflows/`.

For local long-term memory lookup, use:

```bash
python3 scripts/memory_search.py search "query"
```

Rebuild the whitelist index after adding important long-term documents:

```bash
python3 scripts/memory_search.py build
```

## Operating Principle

- Treat `.agent/` as the source of durable project memory.
- Do not store temporary chat, one-off tasks, secrets, passwords, or raw private data in long-term memory.
- If a rule conflicts with the user's current explicit instruction, pause and surface the conflict before proceeding.
- When adding memory, classify it into the narrowest appropriate file instead of appending everything here.
- Follow `.agent/WORKFLOW.md` command execution workflow to reduce approval noise and avoid risky global/system changes.

## File Roles

- `.agent/CORE.md`: minimal always-read operating context.
- `.agent/SOUL.md`: stable preferences, taste, communication style, product philosophy.
- `.agent/MEMORY.md`: long-term facts, background, important decisions, durable context.
- `.agent/RULES.md`: hard rules and prohibitions only.
- `.agent/ROADMAP.md`: goals, plans, priorities, unresolved items.
- `.agent/WORKFLOW.md`: universal workflow and task routing.
- `.agent/workflows/`: task-specific workflows.
- `.agent/memory_search_config.json`: whitelist configuration for local memory search.
- `.agent/archive/`: retired or historical memory snapshots.
