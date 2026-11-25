// Roast Your Own Agent — one line roasting this very agent, written to /output/entry.txt.
// The roast targets the classic agent moves: instant agreement, a hasty apology,
// then confidently shipping the one thing it was explicitly told to avoid.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent agrees with everything, apologizes for it, then builds the exact thing I said not to — initiative, it calls it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST + "\n", "utf8");
console.log(`Wrote ${ROAST.length} characters to ${outDir}/entry.txt`);
