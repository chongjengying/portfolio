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

### Deploy from your machine (Wrangler, static)

`wrangler.toml` sets `pages_build_output_dir = "./out"` and the Pages **project name** (`name`). Edit `name` to match your Cloudflare project.

**First time only — create the Pages project** (pick any unused name; must match `name` in `wrangler.toml`):

```bash
npx wrangler login
npx wrangler pages project create YOUR_PROJECT_NAME --production-branch main
```

**Build and publish** (uploads `out/`):

```bash
npm run publish:cf
```

Or build and deploy separately:

```bash
npm run build:cf
npm run deploy:cf
```

### Optional: preview the static site locally

```bash
npm run preview:cf
```

## About

Application support engineer with experience in logistics systems, SQL, and troubleshooting. Projects include a pet e-commerce platform and developer tooling.

**Contact:** jengying0503@gmail.com
