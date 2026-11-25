import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh: Roast Your Fridge — a single line roasting my fridge.
//
// The roast, revised: tighter, and the punch lands in the last few words.
// The hum is the fridge gossiping about you all night; the light is the
// spotlight that catches you mid-snack at 2am. Same two details, sharper
// turn: gossip first, caught red-handed last.
function composeRoast(): string {
  const gossip = "My fridge hums all night like it's gossiping about me";
  const spotlight = "and its light snaps on at 2am like a spotlight catching me mid-snack";
  return `${gossip}, ${spotlight}.`;
}

const entry = composeRoast();

// Self-check against the competition gate: 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error(`entry fails gate: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars: ${entry}`);
