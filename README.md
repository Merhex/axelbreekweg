# TenantShowcase

A premium, single-page tenant profile for **Axel** — built to help Lithuanian
landlords and rental agencies feel confident that renting to him is a safe,
low-risk, and positive decision.

The page is calm, warm and minimal (Apple / Airbnb / Notion-inspired) and walks
a visitor through a trust-building narrative: who he is → can I trust him → is
his income stable → why he's moving → the dogs → home care → timeline → FAQ →
contact.

## Tech stack

- **Next.js 14** (App Router, static export — `output: "export"`)
- **TypeScript**
- **TailwindCSS** (custom warm palette + design tokens)
- **Framer Motion** (subtle fade / slide-up, respects `prefers-reduced-motion`)
- **lucide-react** (outline icons)
- **qrcode.react** (shareable QR code)

No backend, no database, no CMS — content is hardcoded in `lib/content.ts`.

## Features

- 🇱🇹 **Lithuanian by default**, English secondary. Automatic detection,
  always-visible toggle, **instant switching with no page reload**
  (client-side i18n context, persisted to `localStorage`).
- Fully **responsive** and mobile-first, no horizontal scrolling.
- **Accessible**: semantic HTML, heading hierarchy, focus states, ARIA on the
  accordion / toggle / reveal, skip link, alt text, WCAG-AA contrast.
- **Contact details are hidden** until the visitor clicks to reveal them
  (reduces spam). Phone, WhatsApp, iMessage, LinkedIn.
- **QR code** component pointing at the current page for print / sharing.
- Elegant **photo placeholders** so the layout looks finished before real
  photography is dropped in (see `public/images/README.md`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs a fully static site to ./out
```

Serve `./out` from any static host (Netlify, Vercel, GitHub Pages, S3, …).

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy.yml` builds the site and publishes it
to GitHub Pages on every push to `main` or the working branch.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**. The site is then served from
`https://<user>.github.io/TenantShowcase/`.

Because it lives in a subdirectory, the build passes
`NEXT_PUBLIC_BASE_PATH=/TenantShowcase` so all asset and image URLs resolve.
If you rename the repo or use a custom domain, update that value (an empty
value serves from the domain root).

## Editing content

- **Copy (both languages):** `lib/content.ts`
- **Contact details:** the `CONTACT` object at the top of `lib/content.ts`
- **Photos:** `public/images/` (see that folder's README)
- **Colors / radius / shadows:** `tailwind.config.ts`

## Project structure

```
app/            layout, global styles, the single page
components/      Header, Footer, LanguageToggle, QrCode
  sections/     Hero, TrustSnapshot, About, WhyMoving, Dogs,
                FeatureGrid, Timeline, Faq, Closing, Contact
  ui/           Section, Button, Photo, Reveal (primitives)
lib/            content (i18n copy), i18n context, icon map
```
