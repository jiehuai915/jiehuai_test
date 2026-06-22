#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

REMOTE_URL="https://github.com/jiehuai915/jiehuai_test.git"
BRANCH_NAME="codex/ai-five-layer-cake-archive"
COMMIT_MESSAGE="Archive AI five-layer cake research terminal"

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

if git show-ref --verify --quiet "refs/heads/$BRANCH_NAME"; then
  git checkout "$BRANCH_NAME"
else
  git checkout -b "$BRANCH_NAME"
fi

git add \
  README.md \
  .gitignore \
  AGENTS.md \
  .agent/CORE.md \
  .agent/RULES.md \
  .agent/SOUL.md \
  .agent/MEMORY.md \
  .agent/ROADMAP.md \
  .agent/WORKFLOW.md \
  .agent/memory_search_config.json \
  .agent/workflows/code.md \
  .agent/workflows/finance.md \
  .agent/workflows/memory.md \
  .agent/workflows/ppt_report.md \
  .agent/workflows/research.md \
  scripts/memory_search.py \
  scripts/push_ai_five_layer_site.sh \
  outputs/ai-five-layer-cake-site \
  OpenClaw_workspace/AI/Research/ai_five_layer_cake_site_work_record.md

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "$COMMIT_MESSAGE"
fi

git push -u origin "$BRANCH_NAME"

echo
echo "Uploaded to branch: $BRANCH_NAME"
