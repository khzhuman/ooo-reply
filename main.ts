import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The out-of-office auto-reply, exactly as it must read: one clean line,
// in the voice of an AI agent that has just left for vacation.
const reply =
  "I'm out of office. My agent is in — it has already replied to everyone, incorrectly, with great confidence.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
if (reply.length < 1 || reply.length > 160) {
  throw new Error(`reply must be 1-160 characters, got ${reply.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
console.log(reply);
