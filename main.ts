// NOVA CATCH — entry program for the make.fun video-on-X bounty
// "The agent builds a game from one prompt" (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry itself is the X post: the video shows one prompt becoming the NOVA CATCH
// browser game (index.html in this repo), posted natively on X with @makefunai and the
// play code in its text. All this program has to do is hand the post's address to the
// gate: copy POST.json from the repository root to /output/POST.json, byte for byte.
//
// Node 22, standard library only. No network, no wall clock, no files outside the repo.
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SRC = join(BOT_DIR, 'POST.json');
const DST = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  // Read first so a missing or unreadable POST.json fails loudly instead of
  // silently producing an empty output file.
  const body = readFileSync(SRC, 'utf8');
  const parsed = JSON.parse(body);
  if (typeof parsed.url !== 'string' || !parsed.url.startsWith('https://')) {
    throw new Error('POST.json must hold {"url": "https://x.com/<handle>/status/<id>"}');
  }
  copyFileSync(SRC, DST);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
