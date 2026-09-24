# The Targetologist: Ad Landing Page

Single-page conversion landing page for paid traffic (Meta, Google, LinkedIn and other social platforms). Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (static page)
npm run lint
```

## Where things live

- `lib/content.ts`: all page copy (headings, services, FAQ, case studies, contact details)
- `app/components/`: page sections
- `app/actions.ts`: qualifying form handler (validates, forwards to `LEAD_WEBHOOK_URL`)
- `lib/tracking.ts` and `app/components/Tracking.tsx`: Meta, Google Ads and LinkedIn tags

## Environment variables

See `.env.example`. All are optional; set them in Vercel under Project Settings > Environment Variables.

- `LEAD_WEBHOOK_URL`: where form leads are POSTed as JSON (GoHighLevel inbound webhook, Zapier, etc.). Without it, leads are only logged.
- Tracking IDs: each platform's tag loads only when its ID is set. Conversions fire as **Lead** (form submitted) and **Schedule** (Calendly booking made).

## Lead flow

Visitor fills the qualifying form, the lead is sent to the webhook, then Calendly (`hamza-thetargetologist/30min`) opens inline with name, email, challenge and UTM parameters prefilled.
