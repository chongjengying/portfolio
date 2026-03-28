/**
 * Runs ONLY `wrangler pages deploy` (never `wrangler deploy`).
 * Project name: package.json → config.cloudflare_pages_project
 */
const { spawnSync } = require("node:child_process");
const { existsSync, readFileSync } = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const outDir = path.join(root, "out");

if (!existsSync(outDir)) {
  console.error("Missing out/ — run: npm run pages:build (or npm run build)");
  process.exit(1);
}

const pkg = JSON.parse(readFileSync(path.join(root, "package.json"), "utf8"));
const name = pkg.config?.cloudflare_pages_project;

if (!name || typeof name !== "string") {
  console.error(
    'Set package.json "config": { "cloudflare_pages_project": "your-cloudflare-pages-name" }',
  );
  process.exit(1);
}

const result = spawnSync(
  "npx",
  ["wrangler", "pages", "deploy", "out", "--project-name", name],
  { cwd: root, stdio: "inherit", env: process.env, shell: true },
);
process.exit(result.status === null ? 1 : result.status);
