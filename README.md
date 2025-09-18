# TravelGenius (Minimal Affiliate Build)

- Next.js 14 App Router
- No Tailwind/PostCSS
- Working API routes:
  - `/api/deeplink/flights?origin=DEL&dest=CDG&depart=2025-11-12&ret=2025-11-20` (redirects to Kayak)
  - `/api/deeplink/hotels?city=Paris&checkin=2025-11-12&checkout=2025-11-20&adults=2` (returns JSON with links)
- Configure affiliate IDs via env vars or edit `lib/affiliates.js`.

## Deploy on Vercel
1. Push these files to GitHub.
2. Import the repo in Vercel → Deploy.

## Run locally
```bash
npm install
npm run dev
```
