import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: a night nurse, twelve hours in, watching the
// baby she refused to give up on breathe on his own. One line, 1-240 chars,
// no trailing newline. The pride lands on the last three words.
const ENTRY =
  "At 2 a.m., twelve hours in, the night nurse finally sat down and watched the baby she had refused to give up on breathe on his own.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write atomically via a temp file so a partial write never lands.
const tmpPath = join(outDir, ".entry.txt.tmp");
writeFileSync(tmpPath, ENTRY, "utf8");
renameSync(tmpPath, join(outDir, "entry.txt"));
