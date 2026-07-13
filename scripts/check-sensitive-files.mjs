import { readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules", ".next", "dist", "coverage", ".turbo"]);
const prohibitedExtensions = new Set([
  ".csv",
  ".xlsx",
  ".xlsm",
  ".pdf",
  ".sql",
  ".dump",
  ".p12",
  ".pfx",
  ".pem",
  ".key",
]);
const prohibitedNames = new Set([".env", "id_rsa", "id_ed25519"]);
const findings = [];

function scan(directory) {
  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;
    const absolute = join(directory, entry);
    const stats = statSync(absolute);
    if (stats.isDirectory()) {
      scan(absolute);
      continue;
    }

    const relativePath = relative(root, absolute);
    if (prohibitedNames.has(entry) || prohibitedExtensions.has(extname(entry).toLowerCase())) {
      findings.push(relativePath);
    }
  }
}

scan(root);

if (findings.length > 0) {
  console.error("Potentially sensitive or prohibited files detected:");
  findings.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log("Sensitive-file guard passed.");
