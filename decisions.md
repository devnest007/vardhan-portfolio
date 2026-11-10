# Decisions log

## 2026-11-10 — Rebuilt Adithya's portfolio template for Aditya Vardhan (video editor)
- **What:** Copied github.com/SreeAdithya123/Adithya_portfolio (React 19 + Vite + Tailwind v4 + GSAP) and replaced all content with Aditya Vardhan's, taken from his live site editwithaditya.vercel.app (name, bio, tools, services, timeline, contact, 9 YouTube long-form works).
- **Why this approach:** The template keeps all copy in `src/config/portfolio.ts`, so content swaps are one file; only a few strings lived in components (About statement, Contact blurb, game fallback text, index.html meta), edited directly.
- **Accent:** `#ff5c3d` → `#e8b547` (sed across `src/`) to match his existing amber brand, rather than introducing a theme system.
- **Projects:** Dropped GitHub/architecture/metrics UI (not applicable to video); "Live Demo" → "Watch on YouTube". Thumbnails come from YouTube (`maxresdefault`) saved into `public/projects/`, so no hotlinking.
- **Hero stat cards:** Only facts stated on his site (freelancing since 2020, 3 teams, 48–72h short-form turnaround, 5 tools). No invented view counts.
- **Socials:** Only Instagram existed on his site; GitHub/LinkedIn/X removed, phone row added.
- **Not carried over:** his Shorts/Reels grid and thumbnail gallery, and his contact form (its Discord webhook URL is public in his site's JS bundle — he should rotate it).
- **Tagline:** "I cut raw footage into stories people stay for."

## 2026-11-10 — Reels/Shorts section, thumbnails, hero crop
- **What:** Added `src/components/ReelsSection.tsx` (17 reels/shorts from his site: 13 YouTube Shorts play inline via embed, 4 Instagram reels open out; plus 5 thumbnail designs) and a "Reels" nav item. Data lives in `PORTFOLIO_CONFIG.reels` / `.thumbnails`.
- **Why:** His site's bundle contains exactly 9 long-form + 17 shorts/reels + 5 thumbnails; the first pass only used the 9 long-form. Instagram cannot be embedded without their script, so those link out using his own `reel-N.jpg` covers.
- **Hero:** Cropped `public/portrait.jpg` to the face/shoulders (140,250)-(760,1090) of his `main.jpg` and moved the desktop portrait anchor from `top-[2vh]` to `-top-[8vh]` so the face clears the PORTFOLIO wordmark.
- **Assets:** Shorts covers via YouTube `oar2.jpg` (vertical 1080x1920); thumbnails re-encoded to ≤1280px JPEG (originals were 2.7 MB PNGs). Pillow was installed to a scratch dir only, not into the project.

## 2026-11-10 — GitHub Pages deploy
- **What:** Added `.github/workflows/pages.yml` (build with Node 22 → `actions/deploy-pages`), `base: process.env.BASE_PATH ?? '/'` in `vite.config.ts`, and an `asset()` helper in `src/config/portfolio.ts` that prefixes `public/` files with `import.meta.env.BASE_URL`. Added `src/vite-env.d.ts` for the `import.meta.env` types. Renamed the package from the leftover `adithya-ai-architect-portfolio` to `vardhan-portfolio`.
- **Why:** Project pages are served at `/<repo>/`, so the template's absolute `/portrait.jpg`-style paths would 404. The workflow derives the base from the repo name (`BASE_PATH=/<repo>/`), so local dev and any future custom domain still work at `/`. Actions deploy chosen over a `gh-pages` branch to keep built files out of git.
- **Verified:** `vite preview` at `/vardhan-portfolio/` served all asset types with 200 and 0 of 49 images broken.
- **One manual step:** Pages source must be set to "GitHub Actions" in the repo settings (the workflow's token cannot enable Pages itself).
