# FaunaHub

**Domain:** faunahub.com  
**Tagline:** Pet care, animal facts, and wildlife intelligence.

---

## Project Positioning

FaunaHub is an independent animal knowledge platform covering pet care, domestic animals, wildlife, animal facts, breed guides, animal comparisons, and practical tools for responsible pet owners and curious readers.

It is not a veterinary clinic, government agency, or conservation authority. All content is educational.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Rendering:** Static + Server-side (SSR/SSG via Next.js)
- **Hosting:** Vercel (not configured yet — GitHub-first development)

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Build for production
npm run build

# Run production build locally
npm run start
```

After cloning, run `npm install` first. Next.js will auto-generate `next-env.d.ts` on the first `dev`/`build`. Until then, IDEs may show transient `Cannot find module 'next'` errors — these resolve as soon as dependencies are installed.

---

## Deployment Notes (Vercel — for future setup)

This project is a stock Next.js 15 App Router app and ships with sane defaults for Vercel:

- No environment variables are required for the foundation build
- `app/sitemap.ts` and `app/robots.ts` produce `/sitemap.xml` and `/robots.txt`
- All routes are static-renderable by default (no dynamic data sources yet)
- When connecting to Vercel:
  1. Import the GitHub repo
  2. Framework preset: **Next.js**
  3. Build command: `next build` (default)
  4. Output: `.next` (default)
  5. No env vars needed for the initial deploy

---

## Project Structure

```
src/
  app/           Next.js App Router pages and layouts
  components/    Reusable UI components
  lib/           Utilities: metadata helpers, structured data (schema.org)
public/          Static assets
```

---

## Editorial Principles

1. No fake facts — do not invent veterinary data, scientific classifications, or conservation status.
2. No fake citations — do not create fake URL references.
3. No lorem ipsum in any user-facing content.
4. No thin AI-generated SEO spam — every page must provide real value.
5. Pet health content must include a veterinary disclaimer and never replace professional advice.
6. Wildlife content must note when exact conservation status or scientific data is pending review.
7. All claims should be traceable to authoritative sources (AVMA, IUCN, ASPCA, Merck Veterinary Manual, Cornell Vet, etc.).

---

## SEO Architecture

- Unique `<title>` and `<meta description>` per page
- Canonical URLs using `https://faunahub.com`
- Open Graph and Twitter Card metadata
- Structured data: WebSite, Organization, BreadcrumbList, Article, FAQPage (where real FAQs exist), ItemList
- `sitemap.xml` generated via Next.js `app/sitemap.ts`
- `robots.txt` served at `/robots.txt`
- All primary SEO content visible in initial HTML (no client-only rendering for indexable content)

---

## Content Safety

- Health content is **not** a substitute for professional veterinary care
- Emergency signs must be mentioned on health-adjacent pages
- Veterinary disclaimer required on all health pages
- Do not give dosages, diagnoses, or medication advice
- Conservation status noted as approximate unless sourced from IUCN Red List

---

## Brand Design System

| Token | Value |
|---|---|
| Background | `#FAFAF8` (warm off-white) |
| Text | `#1C2B3A` (dark slate) |
| Accent Green | `#2A7A4B` |
| Accent Blue | `#3B72A8` |
| Border | `#E4E8ED` |
| Muted Text | `#6B7684` |

---

## Site Architecture

```
/                         Homepage
/dogs                     Dogs hub
/dogs/breeds              Dog breeds
/dogs/health              Dog health
/dogs/food                Dog food
/dogs/behavior            Dog behavior
/dogs/costs               Dog costs
/dogs/insurance           Dog insurance

/cats                     Cats hub
/cats/breeds              Cat breeds
/cats/health              Cat health
/cats/food                Cat food
/cats/behavior            Cat behavior
/cats/costs               Cat costs
/cats/insurance           Cat insurance

/small-pets               Small pets hub
/birds                    Birds hub
/fish                     Fish hub
/reptiles                 Reptiles hub

/animal-encyclopedia      Encyclopedia hub
/animal-encyclopedia/mammals
/animal-encyclopedia/birds
/animal-encyclopedia/reptiles
/animal-encyclopedia/marine-animals
/animal-encyclopedia/insects

/animals/lion             Lion profile
/animals/wolf             Wolf profile
/animals/eagle            Eagle profile

/compare                  Compare hub
/compare/lion-vs-tiger    Lion vs Tiger
/compare/wolf-vs-dog      Wolf vs Dog

/tools                    Tools hub
/tools/pet-cost-calculator
/tools/dog-age-calculator
/tools/cat-age-calculator

/guides                   Guides hub
/resources                Resources hub
/about
/editorial-policy
/privacy-policy
/cookie-policy
/affiliate-disclosure
/contact
```

---

## Future Roadmap

- [ ] Expand animal encyclopedia (100+ animals)
- [ ] Expand dog and cat breed guides
- [ ] Add multilingual support (de, fr, es, pt, uk)
- [ ] Add image assets per category
- [ ] Add author profiles
- [ ] Connect CMS (TBD)
- [ ] Add analytics (privacy-compliant)
- [ ] Expand comparison pages
- [ ] Add more interactive tools

---

## Authorized Sources (Future Reference)

**Pet & Veterinary:**
- AVMA (avma.org)
- Merck Veterinary Manual
- ASPCA
- Cornell University College of Veterinary Medicine
- VCA Hospitals
- AKC (for breed information)

**Wildlife & Encyclopedia:**
- IUCN Red List
- Animal Diversity Web
- Smithsonian
- National Geographic
- Britannica
- WWF
- Government wildlife agencies
