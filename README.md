# Abhishek Puri — Portfolio

Premium, dark-themed developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (scroll reveals, counters, hero motion)
- cmdk (Cmd/Ctrl+K command palette)
- lucide-react (icons)

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Before you deploy — fill these in
All real content lives in **`src/lib/data.ts`**. Search that file for `TODO` — each one is a spot with a placeholder:

- `profile.email` — your real email
- `profile.linkedin` — your real LinkedIn URL
- `profile.resumeUrl` — drop your PDF at `public/resume.pdf` (keep the filename or update the path)
- `experience[1]` (Optimus Information) — add real dates + 2-3 bullets
- `projects` — Intelligent Crop Selection, SnackSprint, AmbuSaver need real descriptions, stacks, and GitHub/demo links
- `achievements` — DSA count, research contribution, hackathons (delete any card that doesn't apply to you)
- `src/app/layout.tsx` and `src/app/sitemap.ts` / `robots.ts` — replace `your-domain.vercel.app` with your real deployed URL once you have it

## GitHub stats section
The GitHub Activity section pulls **live** data via github-readme-stats.vercel.app and github-readme-streak-stats — no manual updates needed, they reflect your real GitHub profile (`iabhishek023`) automatically.

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel        # first deploy, follow prompts
vercel --prod # subsequent production deploys
```

**Option B — GitHub + Vercel dashboard (recommended)**
1. Push this project to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repo, keep defaults (Next.js is auto-detected), click Deploy.
3. Every push to `main` auto-deploys from then on.

After deploying, update the `siteUrl` values in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` to your real Vercel URL, commit, and redeploy — this fixes SEO/Open Graph metadata.

## Performance notes
- All content is statically generated — no server components hitting a database, so Lighthouse should score well out of the box.
- The GitHub stats images are the main things to keep an eye on if you want a 100 performance score; they're lazy-loaded already.
- Framer Motion animations respect `prefers-reduced-motion`.

## What's intentionally NOT included
Per an accuracy check: I didn't invent achievements, project descriptions, or metrics for things I didn't have real details on (VoiceBot scope, Intelligent Crop Selection, SnackSprint, AmbuSaver, DSA count, hackathons, research paper). Those are marked `TODO` rather than fabricated — fill in only what's true.
