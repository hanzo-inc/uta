# Uta — agent notes

Uta (`uta`, `uta-1`) is Hanzo's music and score generation SKU. This repo is its **model card, API contract, and deployment spec**; inference serving runs in [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen). Read this before changing anything that serves `uta`.

## Where Uta lives across the stack

| Layer | Repo / file | What it owns |
|---|---|---|
| The SKU, its price, its rungs | `hanzo/universe` → `charts/app/files/zen/catalog.yaml` | the `uta` entry (`mode: audio`, `zen-music: *uta`, `zen-musician: *uta`, alias `uta-1: uta`) |
| The serving plane | [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) → `media.go` | `handleAudio` → `/v1/audio/music` → `mediaProxy` |
| Cloud gateway & Studio | `hanzo-inc/cloud` → `apps/ai/media_rpc.go`, `apps/studio/exec.go` | `/v1/audio/music` at `api.hanzo.ai`; Studio step defaults `music.generate` to `uta` |
| 1-click K8s Stack | [`hanzo-inc/platform`](https://github.com/hanzo-inc/platform) → `src/lib/deploy/stacks.ts` | `uta` stack template (`ghcr.io/hanzoai/uta:latest`) |
| Product page | [`hanzo-inc/app`](https://github.com/hanzo-inc/app) → `lib/creative-models.ts` | `/uta` (`uta-1`, open foundation `zen-musician` / `zenlm/zen-musician`) |

## Verifying a deploy

```bash
# 1. Verify uta is in the live model catalog
curl -s https://api.hanzo.ai/v1/models | jq '.data[] | select(.id=="uta")'

# 2. Generate music with uta
curl -s https://api.hanzo.ai/v1/audio/music \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"uta","prompt":"minimalist analog synth underscore in D Dorian, 112 BPM"}' \
  --output /tmp/uta.mp3
```
