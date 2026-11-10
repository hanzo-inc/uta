// TypeScript / Bun / Node 22+ example for Uta (歌)
// Run: HANZO_API_KEY=... bun run examples/generate.ts

import { writeFileSync } from "node:fs";

const apiKey = process.env.HANZO_API_KEY;
if (!apiKey) throw new Error("Set HANZO_API_KEY");

const prompt = process.argv[2] ?? "Minimalist analog synth underscore in D Dorian, 112 BPM, warm tape saturation";

const res = await fetch("https://api.hanzo.ai/v1/audio/music", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "uta",
    prompt: prompt,
  }),
});

if (!res.ok) {
  throw new Error(`uta failed (${res.status}): ${await res.text()}`);
}

const buf = Buffer.from(await res.arrayBuffer());
const outPath = "/tmp/uta.mp3";
writeFileSync(outPath, buf);
console.log(`Saved ${buf.byteLength} bytes to ${outPath}`);
