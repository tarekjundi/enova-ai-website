## Why "nothing changed" visually

The earlier migration only swapped imports in 6 main files (Navbar, Footer, Index, AboutUs, Solutions, Contact). Three things prevent the user from seeing any visible difference:

1. **Inline hand-coded SVGs are still there** in `src/pages/Careers.tsx` (9 SVGs), `src/pages/BlogPost.tsx` (3 SVGs), and the floating `src/components/ScrollToTop.tsx` button (the up-arrow the user is looking at on every page).
2. **shadcn UI primitives still import lucide-react internally** — these render the visible chevrons/checks on Contact's accordion (FAQ +/- is Phosphor, but the underlying AccordionTrigger chevron from shadcn is lucide), Select arrows, Checkbox tick, etc.
3. **Light weight isn't visually obvious on logo glyphs** (FacebookLogo, XLogo, etc. are filled marks — weight doesn't affect them). The user mostly sees those plus the small `ArrowRight` (size 14–16) where the stroke difference is hard to notice.

## What to change

### 1. Replace remaining inline SVGs with Phosphor Light icons
- **`src/pages/Careers.tsx`** — replace all 9 inline SVGs with appropriate Phosphor icons (e.g. `Lightbulb`, `Users`, `Rocket`, `Briefcase`, `MapPin`, `Clock`, `CurrencyDollar`, `GraduationCap`, `Heart`).
- **`src/pages/BlogPost.tsx`** — replace the 3 social-share inline SVGs with `XLogo`, `LinkedinLogo`, `LinkSimple` (or `Copy`).
- **`src/components/ScrollToTop.tsx`** — replace the inline up-arrow SVG with Phosphor `ArrowUp` (size 20, weight inherits Light from context). This is the most visible change for the user since the button shows on every page.

### 2. Swap lucide-react inside shadcn primitives that are actually used on the site
Audit shows these are rendered:
- `src/components/ui/accordion.tsx` → `ChevronDown` (used on Contact FAQ) → swap to Phosphor `CaretDown` with `weight="light"`.
- `src/components/ui/checkbox.tsx` → `Check` → swap to Phosphor `Check`.
- `src/components/ui/select.tsx` → `ChevronDown`, `ChevronUp`, `Check` → swap to Phosphor equivalents.
- `src/components/ui/dialog.tsx` / `sheet.tsx` → `X` close button → swap to Phosphor `X`.
- `src/components/ui/toast.tsx` → `X` → swap to Phosphor `X`.

Leave unused shadcn primitives (sidebar, command, carousel, breadcrumb, etc.) alone to limit risk of breakage.

### 3. Make Light weight take effect explicitly
The `IconContext.Provider` in `App.tsx` already sets `{ size: 24, weight: "light" }`, but for shadcn primitives swapped above, pass `weight="light"` directly on the icon to be safe — the context provider works only inside its tree and some Radix portals (Dialog, Toast, Select content) render outside it.

### 4. Keep sizes consistent
Match the existing per-icon `size` props (e.g. accordion chevron = 16, dialog X = 16, toast X = 16). Do not introduce a blanket 24px override that would break tightly-spaced UI controls.

## Files to edit

- `src/pages/Careers.tsx`
- `src/pages/BlogPost.tsx`
- `src/components/ScrollToTop.tsx`
- `src/components/ui/accordion.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/toast.tsx`

## Out of scope
- Other shadcn primitives that aren't currently rendered (sidebar, command, breadcrumb, carousel, pagination, etc.).
- Removing `lucide-react` from `package.json` — leave installed since some primitives still reference it.

After this, the visible difference (thinner strokes on chevrons, scroll-to-top arrow, share icons, careers cards, FAQ +/- caret) should be immediately apparent on the Contact page and across the site.