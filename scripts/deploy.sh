#!/usr/bin/env bash
# Deduped + business-isolated production deploy for the EW marketing site.
#
# Two protections:
#  1. Business isolation: refuses to deploy if .vercel/project.json points
#     at a Vercel project that isn't this repo's known project.
#  2. Duplicate dedupe: checks the Vercel API for a recent deploy with the
#     same git SHA; skips if <60s old.

set -euo pipefail

cd "$(git rev-parse --show-toplevel)"
HEAD_SHA=$(git rev-parse HEAD)

# ── Business identity (THIS REPO ONLY) ───────────────────────────────
EXPECTED_PROJECT_ID="prj_3GXDnzqirYx3vLBlfWaavnUe7mTq"   # enhanced-wellbeing
EXPECTED_PROJECT_NAME="enhanced-wellbeing"
BUSINESS="EW Marketing"
TEAM_ID="team_q4NLjxlN6vYdLnr5uygwzDNw"

# ── Project ID validation ────────────────────────────────────────────
if [ ! -f .vercel/project.json ]; then
  echo "❌ BLOCKED: .vercel/project.json missing. Run \`vercel link\` first."
  exit 1
fi

LOCAL_PROJECT_ID=$(python3 -c "import json; print(json.load(open('.vercel/project.json')).get('projectId',''))" 2>/dev/null || echo "")
LOCAL_PROJECT_NAME=$(python3 -c "import json; print(json.load(open('.vercel/project.json')).get('projectName',''))" 2>/dev/null || echo "")

if [ "$LOCAL_PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  echo ""
  echo "❌ BLOCKED: business isolation violation."
  echo ""
  echo "   This repo ($BUSINESS / enhanced-wellbeing) must deploy to:"
  echo "     $EXPECTED_PROJECT_NAME ($EXPECTED_PROJECT_ID)"
  echo ""
  echo "   But .vercel/project.json points at:"
  echo "     $LOCAL_PROJECT_NAME ($LOCAL_PROJECT_ID)"
  echo ""
  echo "   Fix: rm -rf .vercel && vercel link --yes --project=$EXPECTED_PROJECT_NAME"
  echo ""
  exit 1
fi

# ── Duplicate dedupe via Vercel API ──────────────────────────────────
TOKEN_FILE="$HOME/Library/Application Support/com.vercel.cli/auth.json"
if [ -f "$TOKEN_FILE" ]; then
  TOKEN=$(python3 -c "import json,sys; print(json.load(open(sys.argv[1])).get('token',''))" "$TOKEN_FILE" 2>/dev/null || echo "")
fi

if [ -n "${TOKEN:-}" ]; then
  latest=$(curl -fsS "https://api.vercel.com/v6/deployments?projectId=$EXPECTED_PROJECT_ID&teamId=$TEAM_ID&limit=1&target=production" \
    -H "Authorization: Bearer $TOKEN" 2>/dev/null || echo '{}')

  latest_sha=$(echo "$latest" | python3 -c "import json,sys; d=json.load(sys.stdin); print((d.get('deployments',[{}])[0].get('meta',{}) or {}).get('githubCommitSha',''))" 2>/dev/null || echo "")
  latest_ts=$(echo "$latest" | python3 -c "import json,sys; d=json.load(sys.stdin); print((d.get('deployments',[{}])[0]).get('createdAt',0))" 2>/dev/null || echo "0")
  now_ms=$(($(date +%s) * 1000))
  age_sec=$(( (now_ms - latest_ts) / 1000 ))

  if [ "$latest_sha" = "$HEAD_SHA" ] && [ "$age_sec" -lt 60 ]; then
    echo "⏭  Skipping deploy: SHA $HEAD_SHA was already deployed $age_sec seconds ago."
    exit 0
  fi
fi

echo "→ Deploying $HEAD_SHA to ${BUSINESS} (${EXPECTED_PROJECT_NAME})..."
vercel deploy --prebuilt --prod
