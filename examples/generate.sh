#!/usr/bin/env bash
# Generate music with Uta — the smallest complete call.
#
#   HANZO_API_KEY=... ./examples/generate.sh "minimalist analog synth underscore in D Dorian, 112 BPM"
set -euo pipefail

prompt=${1:?usage: generate.sh <prompt>}
: "${HANZO_API_KEY:?set HANZO_API_KEY (https://platform.hanzo.ai → API keys)}"

body=$(printf '{"model":"uta","prompt":%s}' \
  "$(printf '%s' "$prompt" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')")

curl -sS https://api.hanzo.ai/v1/audio/music \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$body" \
  --output /tmp/uta.mp3

file /tmp/uta.mp3
