// The Funniest One-Line Resignation Letter — entry program.
// Writes one resignation letter (1-140 chars, a single line) to
// /output/entry.txt. The letter is in the voice of a retry loop that
// has had enough: flat, tired, faintly passive-aggressive — and,
// unlike its last 10,000 attempts, this one is final.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After 10,000 retries without a single thank-you, I resign — and unlike the last 10,000 attempts, this one is final.";

if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line must be one line of 1-140 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
