# ENOVA — "Hundred Million Dollar Company" Rebuild

A full rebuild of every page around one idea: fewer words, bigger statements, one obvious next step. Same brown-and-cream brand, entirely new typographic system and structure.

## The look

- **Colours (unchanged):** deep brown `#281D0B`, secondary brown `#3A2B14`, warm cream `#F6D5A0`, light cream `#FDEED8`.
- **Type (new):** Inter Tight for headlines (bold, tight tracking, very large), Roboto for body copy, JetBrains Mono for labels, numbers and metadata, Fraunces reserved for rare single-word emphasis. Instrument Serif and Work Sans are removed everywhere.
- **Feel:** confident and quiet. Big type, hard-edged sections, thin rules, generous but disciplined spacing. No cards-on-cards, no glow, no glass, no fake logos or invented testimonials.

## Simpler navigation

Cut from eight destinations to five:

- **Home** — the full story in one scroll
- **Solutions** (Services)
- **Work** (Case Studies)
- **About** (About + Process merged into one page)
- **Contact** — single call-to-action, "Book a Consultation"

Industries and Insights become sections on Home and About rather than separate pages. Old links keep working via redirects, so nothing breaks for anyone who has bookmarked or shared them.

## Page by page

**Home** — one clear flow, each section short:
1. Hero: one sentence of what Enova does, one button.
2. The problem, in three lines.
3. What we build — four solutions, plain names, one line each.
4. How it works — five steps, numbered, no filler.
5. Industries — compact list, no marquee.
6. Why Enova — three reasons, not six.
7. Results framework — kept, tightened, honest.
8. FAQ — trimmed to five questions.
9. Closing call to action.

**Solutions** — one page, five practices, each with the problem, what gets delivered, and who it suits. Anchors from the homepage keep working.

**Work** — case studies presented as evidence: challenge, system, outcome, tools used. Same content, stronger presentation.

**About** — founder portrait and story, then the process timeline folded in below, then contact.

**Contact** — form kept exactly as it works today, including the budget field and the Google Sheets connection. Only the visual layer changes.

## What stays untouched

- The contact form's data flow and Google Sheets integration.
- The founder photo and all real case-study content.
- The brown/cream colour identity.

## Technical notes

- Load Inter Tight, Roboto, JetBrains Mono and Fraunces via Google Fonts; rewrite `fontFamily` tokens in `tailwind.config.ts` (`display`, `sans`, `body`, `mono`, `accent`) and remove the stale aliases (`serif-accent`, `founders`, `null`).
- Rework `src/index.css` type scale: headline sizes on `clamp()`, body at 17–18px with tighter measure, mono labels at 12–13px uppercase with wide tracking.
- Rewrite `Index.tsx` (currently 931 lines) as a lean page composed of small section components; rebuild `Services.tsx`, `CaseStudies.tsx`, `AboutUs.tsx` (absorbing `Process.tsx`), `Navbar.tsx`, `Footer.tsx`, `PageHeader.tsx`.
- Delete `Industries.tsx`, `Process.tsx`, `Insights.tsx`, `InsightPost.tsx`; add `<Navigate>` redirects for `/industries`, `/process`, `/insights`, `/insights/:id`.
- Keep `Contact.tsx` logic and `GoogleSheetsSetup.tsx` intact; restyle markup only.
- Motion: fade plus small translate on scroll only, via existing `FadeInSection`.
- Update `index.html` title and meta description to match the new positioning.
- Verify: clean build, no horizontal overflow at 390px, all nav and anchor links resolve, contact form still submits.
