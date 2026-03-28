# Portfolio

Personal portfolio built with Next.js (static export for Cloudflare Pages).

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Pages deployment

This project uses **static export**. The build writes files to the **`out`** folder. Do **not** use `opennextjs-cloudflare` for this repo.

### Dashboard settings (Cloudflare Pages)

| Setting | Value |
|--------|--------|
| Framework preset | None (or Static / custom) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (repo root) |

**Do not** set the build command to `npx opennextjs-cloudflare build`. That adapter is for full Next.js on Workers and expects a different build layout; it will fail with errors about `.next/standalone/.../pages-manifest.json` when used with `output: "export"`.

For **Git-connected** Pages builds, leave **Deploy command** empty unless you know you need one. The platform uploads `out/` after the build. Never set the deploy step to `wrangler deploy` (that is for Workers, not Pages).

### Deploy from your machine (Wrangler, static)

`wrangler.toml` sets `pages_build_output_dir = "./out"` and the Pages **project name** (`name`). Edit `name` to match your Cloudflare project.

**First time only — create the Pages project** (pick any unused name; must match `name` in `wrangler.toml`):

```bash
npx wrangler login
npx wrangler pages project create YOUR_PROJECT_NAME --production-branch main
```

**Build and publish** (uploads `out/` with **Pages** only — not `wrangler deploy`):

```bash
npm run pages:publish
```

Or deploy only (after `npm run build:cf`):

```bash
npm run pages:deploy
```

If you see a warning about **`wrangler deploy` on a Pages project**, you ran the wrong command. This repo uses **`wrangler pages deploy`** only (via the scripts above).

### Optional: preview the static site locally

```bash
npm run pages:preview
```

## About

Application support engineer with experience in logistics systems, SQL, and troubleshooting. Projects include a pet e-commerce platform and developer tooling.

**Contact:** jengying0503@gmail.com
