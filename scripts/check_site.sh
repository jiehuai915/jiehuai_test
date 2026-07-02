#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE_DIR="$REPO_ROOT/outputs/ai-five-layer-cake-site"

echo "== JS syntax =="
while IFS= read -r -d '' file; do
  rel="${file#$REPO_ROOT/}"
  echo "checking $rel"
  node --check "$file" >/dev/null
done < <(find "$SITE_DIR" -name '*.js' -print0 | sort -z)

echo
echo "== HTML local references =="
node - "$SITE_DIR" <<'NODE'
const fs = require('fs');
const path = require('path');

const siteDir = process.argv[2];
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}

function isExternal(value) {
  return /^(https?:)?\/\//i.test(value)
    || /^(mailto|tel|javascript):/i.test(value)
    || value.startsWith('#')
    || value.startsWith('data:');
}

walk(siteDir);

const missing = [];
const attrPattern = /\b(?:href|src)=["']([^"']+)["']/g;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = attrPattern.exec(html)) !== null) {
    const raw = match[1].trim();
    if (!raw || isExternal(raw)) continue;
    const withoutHash = raw.split('#')[0].split('?')[0];
    if (!withoutHash || isExternal(withoutHash)) continue;
    const target = path.resolve(path.dirname(file), withoutHash);
    if (!target.startsWith(siteDir) || !fs.existsSync(target)) {
      missing.push({
        from: path.relative(siteDir, file),
        ref: raw,
      });
    }
  }
}

if (missing.length) {
  console.error(`Missing local references: ${missing.length}`);
  for (const item of missing) {
    console.error(`- ${item.from} -> ${item.ref}`);
  }
  process.exit(1);
}

console.log(`HTML files checked: ${htmlFiles.length}`);
console.log('Missing local references: 0');
NODE

echo
echo "All site checks passed."
