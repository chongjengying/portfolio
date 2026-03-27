# Portfolio

Personal portfolio built with Next.js.

## Local development

```bash
npm install
npm run dev
```

## Cloudflare Pages deployment

This project is configured for static export and deploys from the `out` folder.

### 1) Build static output

```bash
npm run build:cf
```

### 2) Deploy to Cloudflare Pages

```bash
npm run deploy:cf -- --project-name portfolio
```

If this is your first deploy on this machine:

```bash
npx wrangler login
```

### 3) Optional local preview with Cloudflare runtime

```bash
npm run preview:cf
```
