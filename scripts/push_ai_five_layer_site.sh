#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

TARGET_BRANCH="${TARGET_BRANCH:-codex/ai-five-layer-cake-archive}"
COMMIT_MESSAGE="${COMMIT_MESSAGE:-Update AI five-layer learning map}"

usage() {
  cat <<USAGE
Usage:
  scripts/push_ai_five_layer_site.sh --check
  scripts/push_ai_five_layer_site.sh --publish

Default behavior is safe: run --check before publishing.
--publish requires the current branch to already be $TARGET_BRANCH and an origin remote to already exist.
This script does not reset remotes, switch branches, or add missing files.
USAGE
}

mode="${1:---check}"

case "$mode" in
  --check)
    scripts/check_site.sh
    echo
    echo "Publish is not automatic. To publish intentionally, run:"
    echo "  scripts/push_ai_five_layer_site.sh --publish"
    ;;
  --publish)
    scripts/check_site.sh

    current_branch="$(git branch --show-current)"
    if [[ "$current_branch" != "$TARGET_BRANCH" ]]; then
      echo "Refusing to publish from branch '$current_branch'."
      echo "Switch to '$TARGET_BRANCH' yourself, then rerun with --publish."
      exit 1
    fi

    if ! git remote get-url origin >/dev/null 2>&1; then
      echo "Refusing to publish: origin remote is not configured."
      exit 1
    fi

    git add \
      README.md \
      .gitignore \
      AGENTS.md \
      scripts/check_site.sh \
      scripts/push_ai_five_layer_site.sh \
      outputs/ai-five-layer-cake-site \
      OpenClaw_workspace/AI/Research/ai_five_layer_cake_site_work_record.md

    if git diff --cached --quiet; then
      echo "No staged changes to commit."
    else
      git commit -m "$COMMIT_MESSAGE"
    fi

    git push -u origin "$TARGET_BRANCH"
    ;;
  -h|--help)
    usage
    ;;
  *)
    usage
    exit 1
    ;;
esac
