# The Targetologist: Ad Landing Page

Single-page conversion landing page for paid traffic (Google, Meta and LinkedIn Ads). Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static page)
npm run lint
```

## Where things live

- `lib/content.ts`: all page copy (trust points, results, case studies, contact details)
- `app/components/`: page sections
- `lib/tracking.ts` and `app/components/Tracking.tsx`: Meta, Google Ads and LinkedIn tags

## Environment variables

See `.env.example`. All are optional; set them in Vercel under Project Settings > Environment Variables.

- Tracking IDs: each platform's tag loads only when its ID is set. The conversion fires as **Schedule** when a Calendly booking is made.

## Lead flow

Calendly (`hamza-thetargetologist/30min`) is embedded in the hero, so visitors pick a time without scrolling. UTM parameters from the ad click are passed through to the booking. Every "Book Call" button scrolls back to it.

## Adding client logos

Put logo files (SVG or PNG) in `public/logos/` and list them in `clientLogos` in `lib/content.ts`. The "Brands We've Worked With" strip under the hero stays hidden until at least one is added. Only list clients who've agreed to be shown.

## Adding results

Real headline numbers (ad spend managed, CPL, ROAS, leads) go in `results` in `lib/content.ts`. The results strip above the case studies stays hidden until at least one is added.
