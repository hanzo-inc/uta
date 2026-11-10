#!/usr/bin/env python3
"""Generate with Uta (歌) via https://api.hanzo.ai/v1/audio/music."""
import json
import os
import sys
import urllib.request

API_KEY = os.environ["HANZO_API_KEY"]
PROMPT = sys.argv[1] if len(sys.argv) > 1 else "Minimalist analog synth underscore in D Dorian, 112 BPM, warm tape saturation"

body = {"model": "uta", "prompt": PROMPT}
if "uta" == "koe":
    body["voice"] = "alloy"

req = urllib.request.Request(
    "https://api.hanzo.ai/v1/audio/music",
    data=json.dumps(body).encode(),
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    },
)
with urllib.request.urlopen(req, timeout=120) as resp:
    raw = resp.read()

out_path = "/tmp/uta.mp3"
with open(out_path, "wb") as f:
    f.write(raw)
print(f"Wrote {len(raw)} bytes to {out_path}")
