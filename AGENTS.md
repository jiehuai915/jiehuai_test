# Agent Entry Guide

This project is a static AI industry learning, explainer, and stock-research site.

## Mandatory Startup Order

Before doing non-trivial work in this project, read these files first:

1. `README.md` - current product positioning, site structure, data scale, and roadmap.
2. `outputs/ai-five-layer-cake-site/WORK_RECORD.md` - current status, recent work, next tasks, and verification notes.
3. The specific source files needed for the task.

Do not rely on the old multi-file memory workflow. This repository currently uses the lighter `README.md` + `WORK_RECORD.md` workflow.

## Operating Rules

- Keep changes minimal and scoped to the requested task.
- Preserve the current positioning: AI industry learning notes, friend-facing explainer pages, and stock-research knowledge base.
- Do not change company data, source data, KPI data, or navigation unless the task explicitly asks for it.
- Do not add investment recommendations or trading instructions.
- Do not write proxy tokens, subscription URLs, account secrets, or remote-control credentials into project files.
- Check the worktree before editing and do not revert unrelated user changes.

## Recommended Task Prompt

```text
Read README.md and outputs/ai-five-layer-cake-site/WORK_RECORD.md first.
Task: [one narrow goal].
Touch only [specific files or area].
Do not change positioning, navigation, data schema, or source data unless needed.
Verify with JS syntax checks, local-reference checks, and affected-page smoke checks.
Summarize changed files and test results.
```

## Verification

Use the project check script before reporting completion:

```bash
scripts/check_site.sh
```

For quick JS-only validation:

```bash
node --check outputs/ai-five-layer-cake-site/script.js
```

For local preview:

```bash
python3 -m http.server 8080 --directory outputs/ai-five-layer-cake-site
```

## File Roles

- `README.md`: product positioning, current capabilities, directory map, and roadmap.
- `outputs/ai-five-layer-cake-site/WORK_RECORD.md`: active project status and handoff record.
- `OpenClaw_workspace/AI/Research/ai_five_layer_cake_site_work_record.md`: historical archive only.
- `scripts/check_site.sh`: safe local verification; no Git changes, no publish.
- `scripts/push_ai_five_layer_site.sh`: explicit publish helper; do not run unless publish is requested.
