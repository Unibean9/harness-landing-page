# ARCHITECTURE.md

Technical architecture of the Harness Engineering landing page as of June 2026.

---

## Stack

| Concern | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 |
| UI runtime | React 19.2.4 |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss`, CSS custom properties |
| Animation | GSAP + ScrollTrigger (scroll-driven), Motion/Framer `motion/react` (header behaviour) |
| State management | Redux Toolkit + redux-persist (auth slice only) |
| Server data fetching | TanStack Query (React Query) — provider is wired; usage is limited to the API layer |
| Realtime | Microsoft SignalR (`@microsoft/signalr`) — singleton hub connection, notification channel |
| Database | SQLite (`harness.db`, gitignored) — internal operational harness, not a product database |
| Auth | JWT (Bearer), decoded with `jwt-decode`, stored in Redux + `localStorage` via redux-persist, mirrored to a cookie via `cookies-next` |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Theming | `next-themes` (light/dark) |
| Component primitives | Radix UI |
| HTTP client | Axios (`lib/api/core.ts`) |

The site is served entirely in Vietnamese (`<html lang="vi">`). It targets Vietnamese-speaking software engineers who work with AI coding agents.

---

## Directory Structure

### `/app` — routes and pages

```
app/
  layout.tsx                      Root layout: provider stack, fonts, JSON-LD, metadata
  globals.css                     Design tokens (CSS custom properties) + Tailwind v4 @theme
  robots.ts                       robots.txt generation (allows all, blocks /api/)
  sitemap.ts                      Dynamic sitemap; fetches public subject slugs from backend API
  favicon.ico

  (home)/                         Route group — homepage only
    page.tsx                      Six sequential sections (Hero, Definition, Problem, Levels, Comparison, FinalCta)
    components/                   19 server components (see Frontend Architecture)

  nguyen-ly/                      13-principle Harness Engineering documentation
    layout.tsx                    Wraps in PrinciplesChromeRoot + Header + PrinciplesMotion + Footer
    page.tsx                      Immediate redirect → /nguyen-ly/harness-first
    [slug]/page.tsx               Dispatches to principle-0N-article.tsx or fallback PrinciplesArticle
    components/                   39 components: 13 article + 13 diagram + chrome + nav + toc + pager + mobile

  spec-driven-development/        5-article SDD documentation (partially built — only article 01 is complete)
    layout.tsx                    Reuses PrinciplesChromeRoot + Header + PrinciplesMotion + Footer shell
    page.tsx                      Immediate redirect → /spec-driven-development/executable-specifications
    [slug]/page.tsx               Routes article 01 to Sdd01Article; articles 02-05 to SddArticle fallback
    components/                   9 components: sdd-01-article, sdd-01-diagram-parts, sdd-01-diagram,
                                  sdd-01-death-diagram, sdd-article, sdd-doc-shell, sdd-mobile-bar,
                                  sdd-nav, sdd-pager

  docs/                           Renders all three tab groups (Lectures, Projects, Library)
    page.tsx                      Delegates to shared DocViewer component, no tab filter

  du-an/                          Pre-filters DocViewer to the 'projects' tab
    page.tsx

  tai-nguyen/                     Pre-filters DocViewer to the 'library' tab
    page.tsx

  ve-chung-toi/                   Static "About" page — no doc rendering, no dynamic data
    page.tsx

  khai-niem/                      Directory exists, no page.tsx — route is not implemented
```

**Permanent redirects (next.config.ts):** `/khai-niem` → `/nguyen-ly/harness-first`

**Route redirects (page.tsx):** `/nguyen-ly` → `/nguyen-ly/harness-first`; `/spec-driven-development` → `/spec-driven-development/executable-specifications`

### `/lib` — data, utilities, hooks, contexts

```
lib/
  navigation.ts               Five top-level nav items with slugs and Roman numeral labels
  docs.ts                     getAllDocs() — reads docs/vi/ at runtime via Node fs; returns three DocTab groups
  markdown.ts                 Hand-rolled markdownToHtml() — no external parser (see Data Architecture)
  principles-data.ts          Principle interface + array of all 13 + getPrincipleBySlug/NavItems/Pager helpers
  sdd-data.ts                 SddPrinciple interface + 5 articles + getSddBySlug/NavItems/Href/Pager helpers
  principles/
    principle-01-content.ts   TOC items, diagram data, benefits, anti-patterns, practice, signs, summary
    principle-02-content.ts   (same shape)
    ... through ...
    principle-13-content.ts
  sdd/
    sdd-01-content.ts         Full content constants for SDD article 01 (13 sections worth of data)
  api/
    core.ts                   Axios ApiService — JWT bearer, 401 silent-refresh, queued retry
    services/
      fetchAuth.ts            login (POST /api/v1/auth/login), logout (POST /api/v1/auth/logout)
  seo/
    site.ts                   Site identity constants (name, locale, base URL)
    metadata.ts               buildPageMetadata() — canonical, OG, Twitter card
    og-image.ts               Static OG image path (/metadata.png, 1731x909)
    home-aeo.ts               Vietnamese DefinedTerm + 4 FAQ entries for AI answer engine targeting
    home-json-ld.tsx          HomeJsonLd — three schema.org graph nodes: WebPage, DefinedTerm, FAQPage
    root-json-ld.tsx          RootJsonLd — site-wide WebSite node
    request-site-url.ts       Resolves NEXT_PUBLIC_APP_URL
    fetch-subjects-public.ts  Unauthenticated fetch of /api/v1/subjects/public (ISR, revalidate 600s)
  realtime/
    signalr.ts                Singleton HubConnection → NEXT_PUBLIC_API_URL + 'hubs/notifications'
  redux/
    store.ts                  Redux store + redux-persist (localStorage, whitelist: ['auth'])
    hooks.ts                  Typed useAppDispatch / useAppSelector
    slices/
      authSlice.ts            Single auth slice (user, token, refreshToken, isAuthenticated, isLoading)
  providers/
    index.tsx                 Composed provider stack (order: Redux → ReactQuery → next-themes → SignalR → Toaster)
    reduxProvider.tsx
    queryProvider.tsx
    signalRProvider.tsx
  contexts/
    site-header-chrome.tsx    SiteHeaderChromeContext — header hidden state computed once, shared via context
  hooks/
    use-site-header-hidden.ts useScroll + useMotionValueEvent; hides header after 82px downscroll
  constants/
    site-header-chrome.ts     Header height constants
  types/
    roles.ts                  User role enum
  utils/
    cn.ts                     clsx + tailwind-merge utility
    formatCurrency.ts
    formatDate.ts
    formatImageUrl.ts
    generateSlug.ts
```

### `/components` — shared UI

```
components/
  layout/
    header.tsx              Client component — Framer Motion scroll-hide, active nav underline (layoutId),
                            dark/light toggle, full-screen mobile overlay, optional sidebar toggle mode
    footer.tsx              Client component — navItems with Roman numerals, dynamic copyright year
    skip-to-content.tsx     Accessibility skip link
  doc-viewer.tsx            Shared component used by /docs, /du-an, /tai-nguyen — tab switching + markdown render
  harness-motion.tsx        GSAP + ScrollTrigger — scroll-driven entrance animations for data attributes
  ui/
    alert-dialog.tsx        Radix UI wrapper
    button.tsx
    card.tsx
    input.tsx
    label.tsx
    sonner.tsx              Toast notifications
    textarea.tsx
  widget/
    confirm-dialog.tsx
```

### `/docs` — documentation and harness scaffolding

```
docs/
  HARNESS.md                Harness operating manual for agents
  ARCHITECTURE.md           Architecture thinking template (not a scaffold — placeholder only)
  FEATURE_INTAKE.md         10-flag risk classification checklist
  HARNESS_AUDIT.md          Entropy score formula and thresholds
  HARNESS_BACKLOG.md        Currently empty — no candidate items
  HARNESS_COMPONENTS.md     11 Runtime Substrate responsibility map
  HARNESS_MATURITY.md       H0-H5 maturity levels (H0-H2 and H4 achieved; H3 and H5 partial)
  TRACE_SPEC.md             Three trace quality tiers: Minimal/Standard/Detailed
  TOOL_REGISTRY.md          Machine-readable tool catalogue specification
  IMPROVEMENT_PROTOCOL.md
  CONTEXT_RULES.md
  GLOSSARY.md
  TEST_MATRIX.md            Empty — no implemented rows yet
  decisions/                ADRs 0001-0007 (see Harness CLI section)
  stories/                  Empty story backlog; templates present but no active packets
  templates/                story.md, high-risk story folder template
  vi/                       Vietnamese Markdown content (see Data Architecture)
    index.md                Welcome / landing page
    lectures/               lecture-01 through lecture-12 (one folder each)
    projects/               project-01 through project-06
    resources/              templates/, reference/, openai-advanced/, skills/
  product/                  Intentionally empty — awaits spec input
  harness/                  Internal harness docs
  setup/
```

### `/scripts` — CLI binary and DB schema

```
scripts/
  bin/
    harness-cli             Prebuilt Rust binary (not compiled from source in this repo)
    README.md               Install and usage instructions
  schema/
    001-init.sql            Core tables: intake, story, decision, backlog, trace
    002-story-verify.sql    Adds verify_command, last_verified_at, last_verified_result to story
    003-tool-registry.sql   Adds tool registry table
    004-intervention.sql    Adds intervention table linked to trace and story
```

### Key config files

| File | Purpose |
|---|---|
| `next.config.ts` | One redirect, remote image domains |
| `tailwind.config.ts` | Tailwind v4 — tokens bridged from CSS custom properties via `@theme inline` |
| `postcss.config.mjs` | `@tailwindcss/postcss` |
| `tsconfig.json` | TypeScript 5 strict mode |
| `package.json` | Dependency manifest |
| `harness.db` | SQLite operational database (gitignored) |

---

## Data Architecture

### Content Model

**Principles content (`lib/principles/*.ts` + article components)**

`lib/principles-data.ts` defines the `Principle` interface:

```ts
{
  id: number
  slug: string
  title: string
  shortLabel: string
  quote: string
  body: string[]
  callout?: { variant: 'evidence' | 'practice' | 'story' | 'warning'; ... }
}
```

All 13 principles are defined inline in this file. The file also exports `getPrincipleBySlug`, `getPrinciplesNavItems`, and `getPrinciplePager`.

Each of the 13 principles has a dedicated `lib/principles/principle-0N-content.ts` exporting typed data arrays: TOC items, diagram data, benefits, anti-patterns, practice checklists, signs-correct/signs-wrong, and summary points. These are consumed by the per-principle article and diagram components at `app/nguyen-ly/components/principle-0N-article.tsx` and `principle-0N-diagram.tsx`.

The `[slug]/page.tsx` route dispatches: if a slug matches a known article component, it renders the full article with all extended sections; otherwise it falls back to `PrinciplesArticle`, which renders only the core `Principle` object fields (title, quote, body paragraphs).

**SDD content (`lib/sdd/*.ts` + article components)**

`lib/sdd-data.ts` defines `SddPrinciple` with the same fields as `Principle` minus the callout. Five articles are defined. Helpers: `getSddBySlug`, `getSddNavItems`, `getSddHref`, `getSddPager`.

Only article 01 ("Executable Specifications") has full content, stored in `lib/sdd/sdd-01-content.ts`. It exports 13 section-worth of data constants consumed by `sdd-01-article.tsx` and its two diagram files. Articles 02-05 contain placeholder body text and render through the `SddArticle` fallback. This section is partially built.

**docs/vi Markdown files**

`lib/docs.ts` reads the `docs/vi/` directory at runtime using Node `fs`. It assembles three `DocTab` groups:

- `lectures`: `index.md` (Welcome) + 12 lecture folders (`lecture-01` through `lecture-12`)
- `projects`: overview index + 6 project folders (`project-01` through `project-06`)
- `library`: resources overview, templates directory files (AGENTS.md, CLAUDE.md, feature_list.json, etc.), reference docs, openai-advanced guide, skills index

Markdown-to-HTML conversion is handled by `lib/markdown.ts`, a hand-rolled converter with no external parser dependency. It supports: fenced code blocks with language tags, GitHub-style alert blockquotes (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`) with color-coded borders, tables, ordered/unordered lists, H1-H3 headings with Vietnamese-aware anchor slugification, inline code, bold, italic, images, and smart internal link routing:

- Links containing `/lectures/` → `/docs?tab=lectures&item=...`
- Links containing `/projects/` → `/du-an?tab=projects&item=...`
- Links containing `/resources/` → `/tai-nguyen?tab=library&item=...`

### Database (`harness.db` / SQLite)

`harness.db` is **not** the application's user or content database. It is the internal operational harness — a durable record of AI agent work. It is gitignored and managed exclusively by the `scripts/bin/harness-cli` Rust binary. WAL mode and foreign keys are enabled.

**Migration 001 — core tables (`scripts/schema/001-init.sql`)**

| Table | Purpose |
|---|---|
| `intake` | Classifies incoming work: `type` (new_spec, spec_slice, change_request, new_initiative, maintenance, harness_improvement) and `risk_lane` (tiny, normal, high_risk) |
| `story` | Work packets with status lifecycle: planned → in_progress → implemented → changed → retired. Four proof columns: unit, integration, e2e, platform |
| `decision` | ADRs with optional `verify_command` and pass/fail verification history |
| `backlog` | Harness improvement proposals with `predicted_outcome` vs `actual_outcome` |
| `trace` | Every agent task execution: `actions_taken`, `files_read`, `files_changed`, `decisions_made`, `errors`, `outcome`, `duration`, `token_estimate`, `harness_friction` |

**Migration 002 (`002-story-verify.sql`)** — adds `verify_command`, `last_verified_at`, `last_verified_result` to `story` for per-story mechanical verification.

**Migration 003 (`003-tool-registry.sql`)** — adds `tool` table: name, command, description, args, responsibility, provider. Machine-readable catalogue looked up by capability, not name, enabling graceful degradation.

**Migration 004 (`004-intervention.sql`)** — adds `intervention` table: type (human, reviewer, CI, agent), correction/override/escalation/approval records, linked back to `trace` and `story` via foreign keys.

**What the harness CLI reads/writes:** The CLI classifies intake, manages story lifecycle, records decisions (ADRs 0001-0007 are in `docs/decisions/`), tracks backlog proposals, writes traces with quality tier scoring (Minimal score=1, Standard score=2, Detailed score=3), registers tools, logs interventions, and generates structured improvement proposals via `propose`. It runs `migrate` to apply schema files sequentially. The CLI is shipped as a prebuilt binary — the repo does not include Rust source.

### API Layer

**External backend service**

`lib/api/core.ts` is an Axios `ApiService` class pointing at `NEXT_PUBLIC_API_URL` (default `http://localhost:8080/`). This is an external backend — not a Next.js API route. It:

- Reads the JWT access token from Redux state and attaches it as a `Bearer` header
- Implements silent token refresh on 401 responses with a queued-retry mechanism for concurrent in-flight requests
- On refresh failure, clears the `authToken` cookie and dispatches a Redux `logout` action

**Auth service (`lib/api/services/fetchAuth.ts`)**

- `POST /api/v1/auth/login` — returns `{ accessToken, refreshToken, expiresAt, tokenType }`
- `POST /api/v1/auth/logout`

**SEO ISR fetch (`lib/seo/fetch-subjects-public.ts`)**

- `GET /api/v1/subjects/public` — unauthenticated, Next.js ISR cache with `revalidate: 600` seconds. Used by `app/sitemap.ts` to build dynamic `/luyen-de/:slug` and `/luyen-de/:slug/thi-thu` sitemap entries. These routes do not exist in the current app directory — they are anticipated future routes.

**Authentication approach:** JWT-based. On login, the token is decoded with `jwt-decode` to extract `{ id, email, userName, role[], avatarUrl }` via `parseUserFromToken`. The raw token is written to a cookie via `cookies-next` in addition to Redux state persistence via `redux-persist` to `localStorage`. `setupAutoRefresh` schedules a `setTimeout` to dispatch `logout()` two minutes before JWT expiry.

---

## Frontend Architecture

### Routing

**Static pages:** `/` (homepage), `/docs`, `/du-an`, `/tai-nguyen`, `/ve-chung-toi` — all server-rendered with no dynamic path segments.

**Dynamic `[slug]` pages:**
- `/nguyen-ly/[slug]` — 13 possible values, all pre-known from `lib/principles-data.ts`. The page reads the slug, looks up the principle, and dispatches to the appropriate article component.
- `/spec-driven-development/[slug]` — 5 possible values from `lib/sdd-data.ts`. Dispatches article 01 to the full component; 02-05 to the fallback.

**Route-group layout (`(home)`):** The homepage lives inside a route group so it does not inherit doc-section chrome. The group shares no layout with other routes.

**Redirect chain:** `/khai-niem` → `/nguyen-ly/harness-first` (permanent, next.config.ts). `/nguyen-ly` → `/nguyen-ly/harness-first` (page-level). `/spec-driven-development` → `/spec-driven-development/executable-specifications` (page-level).

**Layout hierarchy:**

```
app/layout.tsx (root)
  └── Providers (Redux → ReactQuery → next-themes → SignalR → Toaster)
      ├── app/(home)/page.tsx
      │     Header + Footer (imported directly in root layout or page)
      ├── app/nguyen-ly/layout.tsx
      │     PrinciplesChromeRoot → Header → PrinciplesMotion → [content] → Footer
      ├── app/spec-driven-development/layout.tsx
      │     PrinciplesChromeRoot → Header → PrinciplesMotion → [content] → Footer
      └── app/docs|du-an|tai-nguyen|ve-chung-toi/page.tsx
            Header + Footer embedded
```

### State Management

**Redux — `authSlice` (`lib/redux/slices/authSlice.ts`)**

The only Redux slice. Fields: `user` (decoded JWT payload), `token` (access JWT), `refreshToken`, `isAuthenticated: boolean`, `isLoading: boolean`. Async thunks: `loginAsync`, `logoutAsync`. Persisted to `localStorage` via `redux-persist` (whitelist: `['auth']`). SSR-safe noop storage substituted when `window` is undefined.

**React context — `SiteHeaderChromeContext` (`lib/contexts/site-header-chrome.tsx`)**

Provides the header hidden state (boolean) computed once at layout level. Consumed via `useSiteHeaderChromeHidden` hook anywhere in the tree. Falls back to a local `use-site-header-hidden` hook instance if no provider is present. The `hideDisabled` prop prevents hiding on pages requiring a persistent header.

**TanStack Query (React Query)**

The `QueryProvider` is wired in the provider stack. It is not yet used for any data fetching in the current routes — the API client (`lib/api/core.ts`) is Axios-based and currently called imperatively. React Query is scaffolded for future use.

### Design System

**CSS variables and design tokens (`app/globals.css`)**

Defined on `:root` (light) and `.dark` (dark mode). Key tokens:

| Token | Light | Dark |
|---|---|---|
| `--brand-primary` | `#2d2926` (near-black brown) | — |
| `--primary` | `#b45309` (amber-orange) | `#e07a3a` |
| `--background` | `#fdf8f3` (warm off-white) | `#14100d` |
| `--brand-surface` | warm neutral | inverted |
| `--radius` | `1.25rem` | — |

The "Desert Rose" palette from the design spec (`DESIGN.md`) defines: Primary `#1F1410` (ink), Secondary `#9E7B6E` (dusty rose), Tertiary `#D97B5A` (single interaction accent), Neutral `#F5E6D8`, Surface `#FBF1E5`. The globals.css amber-based tokens are the implemented approximation of this spec.

Tokens are forwarded into Tailwind v4 via `@theme inline` so all brand colours are available as Tailwind utilities: `bg-brand-surface`, `text-primary`, etc.

**Typography:** Libre Caslon Display (`--font-libre-caslon`, display/serif) for H1 and display use. Inter (`--font-inter`, sans-serif) for body and labels. On mobile (<768px), `font-display` falls back to Inter because Libre Caslon lacks full Vietnamese glyph and weight support at small sizes.

**Tailwind configuration:** v4 with `@tailwindcss/postcss`. No separate `tailwind.config.ts` with theme extensions — design tokens live in CSS custom properties and are bridged via `@theme inline`.

**Reusable CSS component classes (`@layer components`):**

| Class | Purpose |
|---|---|
| `.btn-primary` / `.btn-ghost` | Pill buttons with hover lift and amber shadow |
| `.surface-card` / `.surface-card-active` | Rounded cards with hover lift |
| `.editorial-frame` | Padded bordered content block |
| `.section-label` | Small italic serif label in primary colour |
| `.drop-cap` | Serif float drop-cap |
| `.callout-accent` | Left-border accent block |
| `.code-inline` | Monospace inline code chip |
| `.step-row` / `.step-row-active` | Bordered process-step rows |

**Diagram component system (SDD section)**

`app/spec-driven-development/components/sdd-01-diagram-parts.tsx` exports primitive layout components that compose all diagrams:

- `FlowNode` — 5 variants: default / accent / muted / danger / dashed
- `FlowConnector`, `FlowArrow` — directional connectors
- `FlowChain`, `FlowPipeline` — linear sequences
- `MismatchRow`, `DiagramStack`, `DiagramPanel`, `DiagramSplit`, `ComparePanels` — layout containers
- `BranchLayout` — 2, 3, or 4 column branching; `BranchStackLink` — stacked links within a branch

`sdd-01-diagram.tsx` builds 11 named diagram components from these primitives: `Sdd01DeathDiagram`, `Sdd01ProblemDiagram`, `Sdd01ShiftDiagram`, `Sdd01WorldsDiagram`, `Sdd01GpsDiagram`, `Sdd01DriftDiagram`, `Sdd01AiDiagram`, `Sdd01PipelineDiagram`, `Sdd01CrmDiagram`, `Sdd01HarnessDiagram`, `Sdd01IacDiagram`. The death diagram has its own file (`sdd-01-death-diagram.tsx`) and is re-exported.

**SVG wiring pattern (principles section)**

Each principle's diagram (`principle-0N-diagram.tsx`) renders inline SVG inside a `<figure>` with `<figcaption>`. Diagrams use amber-tinted fills (`rgb(180 83 9 / <alpha>)`) and dashed/solid strokes. Principle 01's diagram renders the equation `Agent = Model + Harness` as an SVG with Model as a central rect surrounded by the Harness boundary rect. Principle 02's is a split-panel SVG comparing low vs. high Harnessability. Principle 03 has an additional `principle-03-flow-compare.tsx` component. Principle 11 has an additional `principle-11-json-block.tsx` for rendering structured output examples.

**Animation system**

Two separate libraries are used:

1. **GSAP + ScrollTrigger** (`components/harness-motion.tsx`) — scroll-driven entrance animations. Targets data attributes:
   - `[data-hero-item]` — fades/slides in on load (0.85s, power3.out, stagger 0.1s)
   - `[data-motion-item]` inside `[data-motion-section]` — triggers at top 80% viewport
   - `[data-symptom-item]` inside `[data-symptom-list]` — triggers at top 82%
   - `[data-scale-fade]` outside `#trang-chu` — scrubbed scale animation
   - `[data-principles-item]` — fade-in as elements enter viewport (in `PrinciplesMotion`)
   - All animations skipped when `prefers-reduced-motion` is set; elements forced to `visible`.

2. **Motion/Framer** (`motion/react`) — header scroll behaviour only. `use-site-header-hidden.ts` uses `useScroll` + `useMotionValueEvent`: header hides after scrolling down more than 10px past the 72px threshold; reveals on upward scroll. Also used for the active nav underline `layoutId='site-header-active'` spring animation.

### SEO Architecture

**Metadata generation**

`lib/seo/metadata.ts` exports `buildPageMetadata(title, description, path)`. It produces:
- `<title>` with site suffix
- `<meta name="description">`
- `<link rel="canonical">` constructed from `NEXT_PUBLIC_APP_URL + path`
- OpenGraph type: `website`, with `og:image` pointing to `/metadata.png` (1731x909)
- Twitter card: `summary_large_image`

The root `app/layout.tsx` calls `buildPageMetadata()` for the root metadata object and injects `RootJsonLd` and `HomeJsonLd`.

**JSON-LD structured data**

Three schema.org graph nodes injected on the homepage:

1. `WebPage` — page identity and description
2. `DefinedTerm` — formal Vietnamese definition of "Harness Engineering" (from `lib/seo/home-aeo.ts`)
3. `FAQPage` — 4 FAQ entries distinguishing Harness Engineering from Prompt Engineering and Context Engineering

`lib/seo/root-json-ld.tsx` provides the site-wide `WebSite` node.

**AEO (Answer Engine Optimization)**

`lib/seo/home-aeo.ts` contains the curated Vietnamese-language content specifically structured to target AI answer engines and featured snippets. The `DefinedTerm` and `FAQPage` JSON-LD nodes are the primary AEO mechanism.

**Sitemap**

`app/sitemap.ts` generates:
- Static routes: `/` (priority 1.0), `/courses` (0.8), `/login` (0.5)
- Dynamic routes from `fetchSubjectsPublic()`: `/luyen-de/:slug` and `/luyen-de/:slug/thi-thu` — these route paths do not yet exist in the app directory; they are anticipated future content pages.

`app/robots.ts` allows all crawlers on all paths, blocks `/api/`.

---

## Realtime

**SignalR connection (`lib/realtime/signalr.ts`)**

A module-level singleton `HubConnection` pointed at `NEXT_PUBLIC_API_URL + 'hubs/notifications'`. Configuration:
- `accessTokenFactory`: returns the JWT access token from Redux state
- Automatic reconnect enabled
- Log level: Warning

**What it subscribes to:** The generic notifications channel (`hubs/notifications`). Specific event names subscribed are defined in `hooks/useSignalRNotifications.ts`.

**What it drives:** Toast notifications to the user (via Sonner). The `useSignalR` hook at `hooks/useSignalR.ts` re-exports the `SignalRProvider` context. The `SignalRProvider` at `lib/providers/signalRProvider.tsx` wraps the app and manages the connection lifecycle.

The SignalR integration is fully wired into the provider stack and auth flow. It is infrastructure-complete but the specific notification event handlers depend on the backend contract.

---

## Build & Deploy

**next.config.ts**

- One permanent redirect: `/khai-niem` → `/nguyen-ly/harness-first`
- `images.remotePatterns`: `images.unsplash.com`, `utfs.io`, `github.com`, `*.cloudfront.net`
- No custom webpack config, no experimental flags, no `output: 'export'`

**Notable build characteristics**

- The `docs/vi/` Markdown files are read at runtime via Node `fs` (in `lib/docs.ts`). This requires a Node.js runtime environment — the app cannot be statically exported (`output: 'export'`) without replacing this with build-time generation.
- All 13 principle pages and 5 SDD pages are dynamically routed via `[slug]` without `generateStaticParams` confirmed — they will render on demand unless static generation is explicitly configured.
- The sitemap fetches from the backend API with a 10-minute Next.js ISR revalidate cache, making it semi-dynamic.
- `harness.db` is gitignored and must be initialized locally via `scripts/bin/harness-cli migrate` before any CLI commands work.
- The Rust CLI binary is a prebuilt artifact — consumers do not need a Rust toolchain.

**Partially built areas**

| Area | State |
|---|---|
| SDD articles 02-05 | Placeholder body text only; full article components not yet written |
| `/khai-niem` route | Directory exists, no `page.tsx` — route returns 404 |
| `/luyen-de/:slug` routes | Referenced in sitemap and sitemap fetch but no app directory entries |
| TanStack Query usage | Provider wired; no actual query hooks in use |
| H3 maturity (trace scoring + friction loop) | Partial — benchmark component attribution missing |
| H5 maturity (self-improving harness) | Partial — repeated benchmark outcome proof not demonstrated |
| Story and backlog system | All templates in place; no active story packets, no backlog items |
