# Arun Prabhakar Films

One-page site for [arunprabhakarfilms.com](https://arunprabhakarfilms.com) — Film Director & Cinematographer.

Static Next.js export, ready for Cloudflare Pages.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `out/` (fully static HTML/CSS/JS).

## Cloudflare Pages

| Setting | Value |
|---------|--------|
| Framework preset | Next.js (Static HTML Export) or None |
| Build command | `npm run build` (uses Webpack; avoid bare `npx next build`) |
| Build output directory | `out` |
| Node version | 20+ |

Connect the custom domain `arunprabhakarfilms.com` in Pages → Custom domains.
