<p align="center"><b>uta (歌)</b><br><i>Hanzo's music & score generation model</i></p>

# Uta

Uta (`uta`, `uta-1`) is Hanzo's music and score generation model, served from Hanzo's inference fabric at `api.hanzo.ai` under the canonical id **`uta`** (open foundation: **`zen-musician`** / [`zenlm/zen-musician`](https://github.com/zenlm/zen-musician)). It composes multi-movement original songs, adaptive cinematic soundtracks, cue-driven scores, and mixable multitrack stems.

```bash
curl https://api.hanzo.ai/v1/audio/music \
  -H "Authorization: Bearer $HANZO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"uta","prompt":"minimalist analog synth underscore in D Dorian, 112 BPM, warm tape saturation"}' \
  --output score.mp3
```

## Capabilities

| | |
|---|---|
| Modes | text → music, lyrics + style → song (`/v1/audio/music`) |
| Model IDs | `uta`, `uta-1` (open foundation: `zen-musician`, `zen-music`) |
| Controls | Prompt, lyrics, key/mode, BPM tempo, duration, arrangement density |

- **Multi-movement song & score generation** — composes full arrangements with cohesive motifs, verse-chorus-bridge progressions, and orchestral codas.
- **Dynamic video cue scoring** — automated tempo ramps, harmonic tension builds, and dynamic hits synchronized to scene cuts.
- **Multitrack stem separation** — isolated mixable stems (lead vocal, backing vocal, drums, bass, guitars, synthesizers, strings).
- **Music theory controls** — explicit direction over key signatures, modes, time signatures, BPM tempos, and arrangement density.

## Creative AI Lineup

Each creative modality in Hanzo has its own dedicated model and repository:

| Model | Modality | Endpoint | Repository | Open Foundation |
|---|---|---|---|---|
| **Iro** (`iro`) | Image generation & editing | `POST /v1/images/generations` | [`hanzo-inc/iro`](https://github.com/hanzo-inc/iro) | `zen3-image` (`zenlm/zen-artist`) |
| **Koma** (`koma`) | Video generation & motion | `POST /v1/videos/generations` | [`hanzo-inc/koma`](https://github.com/hanzo-inc/koma) | `zen-director` (`zenlm/zen-director`) |
| **Koe** (`koe`) | Voice & dialogue synthesis | `POST /v1/audio/voice` | [`hanzo-inc/koe`](https://github.com/hanzo-inc/koe) | `zen3-tts` (`zenlm/zen-dub`) |
| **Oto** (`oto`) | Foley & sound effects | `POST /v1/audio/foley` | [`hanzo-inc/oto`](https://github.com/hanzo-inc/oto) | `zen-foley` (`zenlm/zen-foley`) |
| **Uta** (`uta`) | Music & score generation | `POST /v1/audio/music` | [`hanzo-inc/uta`](https://github.com/hanzo-inc/uta) | `zen-musician` (`zenlm/zen-musician`) |
| **Mori** (`mori`) | 3D assets, meshes & scenes | `POST /v1/videos/generations` | [`hanzo-inc/mori`](https://github.com/hanzo-inc/mori) | `zen-3d` (`zenlm/zen-3d`) |

## Surfaces

Uta is served by [`hanzo-inc/zen`](https://github.com/hanzo-inc/zen) and declared in `hanzo/universe` (`charts/app/files/zen/catalog.yaml`), with first-party Studio integration in [`hanzo-inc/studio`](https://github.com/hanzo-inc/studio) (`music.generate`).

- Product page: <https://hanzo.ai/uta>
- API and docs: <https://api.hanzo.ai/v1>, <https://docs.hanzo.ai>
- Studio & Dashboard: <https://hanzo.ai/studio>, <https://platform.hanzo.ai>
- Agent notes for this repo: [LLM.md](./LLM.md)

## License

The contents of this repository are licensed under Apache-2.0. The proprietary `uta-1` weights are served through the Hanzo API under the [Hanzo Terms](https://hanzo.ai/terms); the open foundation `zen-musician` is available at [`huggingface.co/zenlm/zen-musician`](https://huggingface.co/zenlm/zen-musician).
