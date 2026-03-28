# Portfolio

Personal portfolio built with Next.js (static export for Cloudflare Pages).

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Pages deployment

This project is set up for **Cloudflare Pages** using **static HTML export** (no Node server, no OpenNext). `next build` writes the site to **`out/`**.

**Node version:** `.nvmrc` pins **20** for local builds and matches what Cloudflare Pages should use (set **Environment variable** `NODE_VERSION` = `20` in the Pages project if your build image does not read `.nvmrc`).

### Important: `wrangler deploy` vs `wrangler pages deploy`

- **Workers:** `wrangler deploy` — do **not** use this for this site.
- **Pages (this repo):** `wrangler pages deploy` only.

This repo **does not** include a root `wrangler.toml`, so Cloudflare’s Git build is less likely to treat the project as a Worker and run the wrong command.

If you still see: *“you have run `wrangler deploy` on a Pages project”*, open the Pages project in the dashboard and clear any **Deploy command** that runs `wrangler deploy`. For a static `out/` build, that field should usually be **empty**.

### Dashboard settings (Git-connected Pages)

| Setting | Value |
|--------|--------|
| Framework preset | None (or Static / custom) |
| Build command | `npm run build` (same as `npm run pages:build`) |
| Build output directory | `out` |
| Root directory | `/` (repo root) |
| Deploy command | *(leave empty)* |

Do **not** use `npx opennextjs-cloudflare build` for this repo (that path targets full Next.js on Workers, not static export).

### Deploy from your machine (Pages only)

1. Set your Pages project name once in **`package.json`** → **`config.cloudflare_pages_project`** (must match an existing Cloudflare Pages project).

2. Log in (first time only):

```bash
npx wrangler login
```

3. Build and upload static files:

```bash
npm run pages:publish
```

Or deploy only (after `npm run pages:build` or `npm run build`):

```bash
npm run pages:deploy
```

These scripts run **`wrangler pages deploy out`** via `scripts/cf-pages-deploy.cjs` — never `wrangler deploy`.

### Optional: preview the static site locally

```bash
npm run pages:preview
```

## About

Application support engineer with experience in logistics systems, SQL, and troubleshooting. Projects include a pet e-commerce platform and developer tooling.

**Contact:** jengying0503@gmail.com
