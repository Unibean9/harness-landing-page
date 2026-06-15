# STORIES.md — Learn Harness Engineering

User stories mapped from the existing codebase. Every story describes what IS already built. Status is assessed by direct code inspection.

---

## [STORY-001] Homepage Hero and Sections

**As a** Vietnamese software engineer visiting the site for the first time
**I want** to land on a page that explains what Harness Engineering is, why it matters, and where to start
**So that** I can quickly decide whether the content is relevant to my work with AI coding agents

**Acceptance Criteria:**
- [ ] Hero section renders with headline, subheading, and CTA link
- [ ] Definition section (Phần 01) explains Harness Engineering with formula diagram and layered stack
- [ ] Problem section (Phần 02) shows warning cards and flow steps describing agent failure modes
- [ ] Levels section (Phần 03) renders maturity levels
- [ ] Comparison section (Phần 04) shows a matrix and editorial table comparing Prompt / Context / Harness Engineering
- [ ] Final CTA section (Phần 05) links to the principles section
- [ ] All sections have semantic anchor IDs (`#trang-chu`, `#dinh-nghia`, `#van-de`, `#muc-do`, `#so-sanh`, `#kham-pha`)
- [ ] Page metadata (`<title>`, description, OG tags) is set via `buildPageMetadata()`
- [ ] HomeJsonLd structured data is injected into the page `<head>`

**Implementation notes:** `app/(home)/page.tsx` assembles six section components from `app/(home)/components/`. Key sub-components: `hero-section.tsx`, `definition-section.tsx` (with `formula-diagram.tsx`, `harness-layers-stack.tsx`, `definition-contrasts.tsx`), `problem-section.tsx` (with `warning-cards.tsx`, `flow-steps.tsx`), `levels-section.tsx`, `comparison-section.tsx` (with `comparison-matrix.tsx`, `editorial-table.tsx`), `final-cta-section.tsx` (with `link-rows.tsx`). Layout primitives: `section-shell.tsx`, `section-header.tsx`.

**Status:** Built

---

## [STORY-002] Navigation System (Header, Footer, Active State, Mobile)

**As a** visitor on any page of the site
**I want** a consistent header and footer that show me where I am and let me jump to any section
**So that** I can orient myself and navigate without getting lost

**Acceptance Criteria:**
- [ ] Header renders five nav items with Roman numeral labels (I–V): Nguyên lý, Spec Driven Development, Dự án, Tài nguyên, Về chúng tôi
- [ ] Active nav item is highlighted with a spring-animated underline (`layoutId='site-header-active'`)
- [ ] Header hides on downward scroll past 72 px and reveals on upward scroll
- [ ] Dark/light theme toggle (Sun/Moon icons via `next-themes`) is functional
- [ ] Mobile hamburger opens a full-screen overlay with the same nav items
- [ ] Mobile overlay closes on Escape key and locks body scroll while open
- [ ] Mobile overlay closes automatically on route change
- [ ] Footer mirrors the same five nav items with Roman numeral labels
- [ ] Footer shows a brand tagline and a CTA link to `/nguyen-ly/harness-first`
- [ ] Footer copyright year is dynamic
- [ ] A skip-to-content link is present for keyboard/screen reader accessibility
- [ ] `SiteHeaderChromeContext` provides `hidden` state to avoid duplicate scroll listeners

**Implementation notes:** `components/layout/header.tsx` (client component, Framer Motion scroll-hide, spring underline, mobile overlay). `components/layout/footer.tsx` (client component). `lib/navigation.ts` exports `navItems`. Scroll-hide logic in `lib/hooks/use-site-header-hidden.ts`; shared context in `lib/contexts/site-header-chrome.tsx`. Skip link: `components/layout/skip-to-content.tsx`. Header supports an optional `showSidebarToggle` prop used by doc pages.

**Status:** Built

---

## [STORY-003] 13 Harness Engineering Principles Listing Page (redirect + nav)

**As a** learner who clicks "Nguyên lý" in the nav
**I want** to be taken directly to the first principle article (Harness-first)
**So that** I can start reading immediately without landing on an empty index

**Acceptance Criteria:**
- [ ] `GET /nguyen-ly` performs a permanent redirect to `/nguyen-ly/harness-first`
- [ ] Left sidebar shows all 13 principles in order, grouped by the 6-layer taxonomy
- [ ] Each nav item is linked and the active item is visually highlighted
- [ ] Sidebar is hidden below `lg` breakpoint; mobile bar replaces it
- [ ] A right sidebar TOC is rendered at `xl` breakpoint and above
- [ ] A fixed bottom mobile bar portals "Menu" and "Trên trang này" panels
- [ ] Mobile menu panel closes on route change and on Escape key
- [ ] GSAP scroll-triggered fade-in fires on each `[data-principles-item]` element
- [ ] `prefers-reduced-motion` disables all animations

**Implementation notes:** `app/nguyen-ly/page.tsx` (redirect). `app/nguyen-ly/layout.tsx` wraps in `PrinciplesChromeRoot` + `Header` + `PrinciplesMotion` + `Footer`. Components: `principles-chrome-root.tsx` (client context for mobile panel state), `principles-chrome-motion.tsx` (Framer Motion header offset), `principles-motion.tsx` (GSAP scroll triggers), `principles-nav.tsx`, `principles-toc.tsx`, `principles-doc-shell.tsx`, `principles-mobile-bar.tsx`, `principles-pager.tsx`. Data: `lib/principles-data.ts`.

**Status:** Built

---

## [STORY-004] Individual Principle Article Page (Article + Diagram)

**As a** learner reading the principles
**I want** to read a full, rich article for each of the 13 principles with inline diagrams, benefit grids, anti-pattern cards, and practice checklists
**So that** I can deeply understand each principle and apply it in my own work

**Acceptance Criteria:**
- [ ] Each of the 13 slugs (`/nguyen-ly/[slug]`) resolves to its dedicated article component
- [ ] Article anatomy includes: eyebrow + h1 + quote header, intro section (one of four variants: editorial/question/definition/prose), SVG diagram, why-exists, the-principle blockquote, why-matters benefit grid, practice checklist, antipatterns grid, extended content sections (component tables, lifecycle strips, state machines, etc.), and summary
- [ ] Each principle's inline SVG diagram renders inside a `<figure>` with a `<figcaption>`
- [ ] All section headings have `scroll-mt-28` for sticky-header offset
- [ ] TOC items in the right sidebar link to the correct section anchors
- [ ] Prev/next principle pager renders at the bottom of each article
- [ ] Page metadata is generated per-principle via `buildPageMetadata()`
- [ ] A conclusion page exists at the end of the principles sequence
- [ ] Static params are generated for all 13 slugs at build time

**Implementation notes:** `app/nguyen-ly/[slug]/page.tsx` maps each slug to its dedicated article component (`Principle01Article` through `Principle13Article`). All 13 article components and 13 diagram components live in `app/nguyen-ly/components/`. Extended content data is in `lib/principles/principle-0N-content.ts` (all 13 files). Shared rendering primitives: `principle-intro.tsx` (4 variants), `principle-summary.tsx`. Special extras: `principle-03-flow-compare.tsx`, `principle-11-json-block.tsx`. Conclusion: `principles-conclusion-page.tsx`.

**Status:** Built

---

## [STORY-005] Spec-Driven Development Index Page

**As a** learner who clicks "Spec Driven Development" in the nav
**I want** to be taken directly to the first SDD article (Executable Specifications)
**So that** I can start reading the SDD content without a blank index page

**Acceptance Criteria:**
- [ ] `GET /spec-driven-development` performs a permanent redirect to `/spec-driven-development/executable-specifications`
- [ ] Left sidebar shows all 5 SDD principles linked, with the active one highlighted
- [ ] Right TOC sidebar and mobile bar behave identically to the principles section
- [ ] The layout reuses `PrinciplesChromeRoot`, `Header`, `PrinciplesMotion`, and `Footer` from the principles section
- [ ] `SddDocShell` provides the three-column layout (left nav, center content, right TOC)
- [ ] Static params are generated for all 5 SDD slugs at build time

**Implementation notes:** `app/spec-driven-development/page.tsx` (redirect). `app/spec-driven-development/layout.tsx` (wraps in shared chrome). Components in `app/spec-driven-development/components/`: `sdd-nav.tsx`, `sdd-doc-shell.tsx`, `sdd-mobile-bar.tsx`, `sdd-pager.tsx`. Data: `lib/sdd-data.ts` (5 principles, helper functions `getSddBySlug`, `getSddNavItems`, `getSddPager`).

**Status:** Built

---

## [STORY-006] Individual SDD Article Page

**As a** learner reading about Spec-Driven Development
**I want** to read a rich article for each of the 5 SDD principles with diagrams, examples, and structured data
**So that** I understand how to apply executable specifications in practice

**Acceptance Criteria:**
- [ ] Article 01 (Executable Specifications) renders the full `Sdd01Article` with 13 named sections, 11 diagram components, and content arrays from `sdd-01-content.ts`
- [ ] Articles 02–05 render the `SddArticle` fallback which shows title, quote, and a Vietnamese placeholder body
- [ ] Article 01 diagrams include: death diagram, problem, shift, worlds comparison, GPS analogy, drift, AI era, pipeline, CRM example, harness connection, IaC
- [ ] Diagram primitives (`FlowNode`, `FlowConnector`, `FlowChain`, `FlowPipeline`, `ComparePanels`, `BranchLayout`, etc.) are reusable across diagrams
- [ ] TOC for article 01 shows all 13 section entries from `sdd01Toc`
- [ ] TOC for articles 02–05 shows three generic entries (title, quote, body)
- [ ] Prev/next pager navigates between the 5 articles
- [ ] Page metadata is generated per-article

**Implementation notes:** `app/spec-driven-development/[slug]/page.tsx` routes slug `executable-specifications` to `Sdd01Article`; all other slugs to `SddArticle`. Rich content data: `lib/sdd/sdd-01-content.ts`. Diagram primitives: `sdd-01-diagram-parts.tsx`. Composed diagrams: `sdd-01-diagram.tsx` + `sdd-01-death-diagram.tsx`. Articles 02–05 have only a one-sentence placeholder body in `lib/sdd-data.ts`.

**Status:** Partial — Article 01 is fully built; articles 02–05 are stubs with placeholder text.

---

## [STORY-007] Docs Page (Markdown Rendering)

**As a** learner who wants to browse lectures, projects, and the resource library
**I want** to read all site content through a tabbed document viewer with sidebar navigation and search
**So that** I can find and read any piece of content without navigating to a separate page

**Acceptance Criteria:**
- [ ] `/docs` shows all three tab groups: lectures (12 lectures + welcome), projects (6 projects), library (templates + references)
- [ ] `/du-an` filters to the `projects` tab only on load
- [ ] `/tai-nguyen` filters to the `library` tab only on load
- [ ] Selecting a tab and an item updates the URL query params (`?tab=&item=`) without a full page reload
- [ ] Markdown content is rendered via a custom hand-rolled `markdownToHtml()` converter
- [ ] Rendered output handles: fenced code blocks with language tags, GitHub-style alert boxes (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`), tables, unordered/ordered lists, H1–H3 headings with slug anchors, inline code, bold, italic, images, and smart internal link routing
- [ ] Search filters the item list by title
- [ ] Content is read from `docs/vi/` at build/request time via Node `fs`

**Implementation notes:** `app/docs/page.tsx`, `app/du-an/page.tsx`, `app/tai-nguyen/page.tsx` each call `getAllDocs()` and pass results to `DocViewer`. `lib/docs.ts` defines `DocTab`/`DocItem` and `getAllDocs()`. `lib/markdown.ts` contains `markdownToHtml()`. `components/doc-viewer.tsx` is the full client-side viewer component. Content lives under `docs/vi/` (12 lecture folders, 6 project folders, resources directory with templates and references).

**Status:** Built

---

## [STORY-008] Vietnamese Content Pages (Tài nguyên, Dự án, Về chúng tôi)

**As a** Vietnamese-speaking learner
**I want** dedicated pages for the resource library, practice projects, and the About section
**So that** I can navigate directly to the content type I need from the main nav

**Acceptance Criteria:**
- [ ] `/tai-nguyen` loads `DocViewer` pre-filtered to the `library` tab
- [ ] `/du-an` loads `DocViewer` pre-filtered to the `projects` tab
- [ ] `/ve-chung-toi` renders a static about page with mission statement, two paragraphs of copy, and a 3-column feature grid (Lộ trình bài bản, Quy trình vòng kín, Tài nguyên sẵn dùng)
- [ ] All three pages have `<title>` and description set via `buildPageMetadata()`
- [ ] `Header` and `Footer` are rendered on all three pages
- [ ] The `/khai-niem` directory exists but has no `page.tsx` — the route is not live

**Implementation notes:** `app/tai-nguyen/page.tsx`, `app/du-an/page.tsx` delegate to `DocViewer` with tab filtering. `app/ve-chung-toi/page.tsx` is self-contained static JSX using Lucide icons (`GraduationCap`, `Workflow`, `Boxes`). The `app/khai-niem/` directory is empty — no page, no route.

**Status:** Built (the three pages); `/khai-niem` is a Stub (empty directory, no route)

---

## [STORY-009] SEO and AEO (Structured Data, JSON-LD, Sitemap, Robots)

**As a** site operator
**I want** the site to be properly indexed by search engines and AI answer engines
**So that** Vietnamese developers can find the content through Google, and AI assistants can surface definitions accurately

**Acceptance Criteria:**
- [ ] Every page has `<title>`, `<meta name="description">`, canonical URL, OpenGraph tags, and Twitter card via `buildPageMetadata()`
- [ ] Root layout injects `RootJsonLd` (WebSite schema node)
- [ ] Home page injects `HomeJsonLd` with three schema.org graph nodes: `WebPage`, `DefinedTerm` (Harness Engineering definition in Vietnamese), and `FAQPage` (4 FAQ entries distinguishing HE from PE and CE)
- [ ] `app/sitemap.ts` generates static routes (`/`, `/courses`, `/login`) plus dynamic routes for `/luyen-de/:slug` and `/luyen-de/:slug/thi-thu` fetched from the backend API with 10-minute ISR cache
- [ ] `app/robots.ts` allows all crawlers on all paths except `/api/`
- [ ] OG image is a static `/metadata.png` (1731×909 px)
- [ ] `noindex` flag can be set per-page via `buildPageMetadata({ noindex: true })`

**Implementation notes:** `lib/seo/metadata.ts` (`buildPageMetadata()`), `lib/seo/site.ts` (`SITE` constants, `getSiteUrl()`), `lib/seo/home-aeo.ts` (Vietnamese definition + FAQ data), `lib/seo/home-json-ld.tsx` (`HomeJsonLd` component), `lib/seo/root-json-ld.tsx` (`RootJsonLd`), `lib/seo/og-image.ts`, `lib/seo/fetch-subjects-public.ts` (ISR fetch for sitemap), `app/sitemap.ts`, `app/robots.ts`. Note: the sitemap references `/luyen-de/` routes and `/courses` which do not exist as app routes — those appear to be legacy or forward-looking entries.

**Status:** Built (SEO infrastructure fully built; sitemap dynamic routes reference non-existent `/luyen-de/` and `/courses` app pages)

---

## [STORY-010] Animation System (HarnessMotion Scroll Reveals, Header Motion)

**As a** visitor reading homepage sections and principle articles
**I want** smooth scroll-triggered entrance animations that make content feel polished
**So that** the reading experience feels considered without being distracting

**Acceptance Criteria:**
- [ ] `[data-hero-item]` elements fade and slide in on page load (0.85 s, power3.out, 0.1 s stagger, 0.12 s delay)
- [ ] `[data-motion-item]` elements inside `[data-motion-section]` fade/slide in when the section enters viewport (top 80%)
- [ ] `[data-symptom-item]` elements inside `[data-symptom-list]` trigger at top 82% viewport
- [ ] `[data-scale-fade]` elements outside `#trang-chu` get a scrubbed scale animation on scroll
- [ ] `[data-principles-item]` elements in principle articles fade in as they enter viewport (top 85%), triggered once per element
- [ ] Header hides when the user scrolls down more than 10 px past the 72 px threshold; reveals on upward scroll
- [ ] Header uses a `motion.header` with a `y: "-100%"` animation (Framer Motion / `motion/react`)
- [ ] `prefers-reduced-motion` disables all GSAP animations (elements set to `opacity: 1, y: 0` immediately)
- [ ] GSAP context is cleaned up (`context.revert()`) on component unmount

**Implementation notes:** `components/harness-motion.tsx` (`HarnessMotion` — GSAP + ScrollTrigger, used on homepage). `app/nguyen-ly/components/principles-motion.tsx` (`PrinciplesMotion` — GSAP scroll triggers for principle articles). `lib/hooks/use-site-header-hidden.ts` (Framer Motion `useScroll` + `useMotionValueEvent` for header hide). `app/nguyen-ly/components/principles-chrome-motion.tsx` (Framer Motion vertical shift when header hides on mobile). Two libraries are in use: GSAP for scroll-driven entrance; `motion/react` (Framer Motion) for header behaviour and mobile panel animations.

**Status:** Built

---

## [STORY-011] Realtime Notifications (SignalR)

**As a** logged-in user
**I want** to receive real-time toast notifications pushed from the server
**So that** I am informed of events (e.g., course updates, system messages) without refreshing the page

**Acceptance Criteria:**
- [ ] `SignalRProvider` wraps the app and creates a `HubConnection` to `NEXT_PUBLIC_API_URL + 'hubs/notifications'`
- [ ] Connection starts when a JWT token is present in Redux state; stops when the token is cleared
- [ ] Connection uses `accessTokenFactory` for bearer auth
- [ ] Automatic reconnect is enabled
- [ ] `useSignalR()` hook exposes the `HubConnection` to consuming components
- [ ] `useSignalRNotifications(eventName)` subscribes to a named hub event and renders a `sonner` toast with `payload.title` and `payload.message`
- [ ] The provider is included in the app-level provider stack (Redux → React Query → next-themes → SignalR → Toaster)

**Implementation notes:** `lib/realtime/signalr.ts` (singleton `HubConnection` factory, `startSignalRConnection`, `stopSignalRConnection`). `lib/providers/signalRProvider.tsx` (`SignalRProvider`, `useSignalRContext`). `hooks/useSignalR.ts` (thin re-export). `hooks/useSignalRNotifications.ts` (event subscription + `sonner` toast). Note: no page or component in the codebase currently calls `useSignalRNotifications` — the infrastructure is wired and tested-ready but no active consumer exists on any visible page.

**Status:** Partial — infrastructure is fully built; no UI surface currently subscribes to notifications.

---

## [STORY-012] Harness CLI and SQLite Database Layer

**As an** AI agent (or human operator) working on this repository
**I want** a local CLI tool backed by a SQLite database to record intake, stories, decisions, traces, backlog items, and tool registrations
**So that** all work is auditable, every task has a trace, and the harness can evolve from its own friction data

**Acceptance Criteria:**
- [ ] A prebuilt Rust binary exists at `scripts/bin/harness-cli`
- [ ] Migration 001 creates tables: `schema_version`, `intake`, `story`, `decision`, `backlog`, `trace`
- [ ] Migration 002 adds `verify_command`, `last_verified_at`, `last_verified_result` to `story`
- [ ] Migration 003 adds a `tool` registry table (name, command, description, args, responsibility, provider)
- [ ] Migration 004 adds an `intervention` table linked back to `trace` and `story`
- [ ] `intake` table enforces valid `input_type` and `risk_lane` via CHECK constraints
- [ ] `story` table enforces valid `status` lifecycle via CHECK constraint
- [ ] `trace` table records `task_summary`, `actions_taken`, `files_read`, `files_changed`, `decisions_made`, `errors`, `outcome`, `duration_seconds`, `token_estimate`, `harness_friction`
- [ ] WAL mode and foreign keys are enabled in migration 001
- [ ] The `harness.db` file is gitignored

**Implementation notes:** Binary: `scripts/bin/harness-cli`. Schema migrations: `scripts/schema/001-init.sql` through `004-intervention.sql`. The CLI is documented in `docs/HARNESS.md` and `scripts/README.md`. The database is an internal operational harness tool — it is not the application's user or content database. No application code reads from `harness.db` at runtime.

**Status:** Built (schema and binary exist; operational records are populated by agent/human CLI invocations, not by the app at runtime)

---

## [STORY-013] Design System (CSS Tokens, Component Classes, Diagram Components)

**As a** developer building new pages or components for this site
**I want** a consistent set of CSS tokens, utility classes, and reusable diagram primitives
**So that** every page looks and feels like it belongs to the same "Desert Rose" design language without repeating style decisions

**Acceptance Criteria:**
- [ ] Light and dark mode CSS custom properties are defined in `:root` and `.dark` in `globals.css`
- [ ] All brand colour tokens are forwarded into Tailwind v4 via `@theme inline` so they are usable as utilities (e.g. `bg-brand-surface`, `text-primary`)
- [ ] `--radius` (1.25 rem) and derived `-sm`/`-md`/`-lg` variants are available
- [ ] Font stack tokens: `--font-sans` (Inter), `--font-display` (Libre Caslon Display)
- [ ] On mobile (`<768 px`) `--font-display` falls back to Inter
- [ ] `@layer components` defines reusable classes: `.btn-primary`, `.btn-ghost`, `.surface-card`, `.surface-card-active`, `.editorial-frame`, `.section-label`, `.drop-cap`, `.callout-accent`, `.code-inline`, `.step-row`, `.step-row-active`
- [ ] Principle diagram components use amber-tinted SVG fills (`rgb(180 83 9 / ...)`) and dashed/solid strokes
- [ ] SDD diagram primitive components (`FlowNode` with 5 variants, `FlowConnector`, `FlowArrow`, `FlowChain`, `FlowPipeline`, `MismatchRow`, `DiagramStack`, `DiagramPanel`, `DiagramSplit`, `ComparePanels`, `BranchLayout`, `BranchStackLink`) are available for reuse

**Implementation notes:** `app/globals.css` (CSS custom properties + `@theme inline` + `@layer components`). Principle diagrams: `app/nguyen-ly/components/principle-0N-diagram.tsx` (inline SVG per principle). SDD diagram primitives: `app/spec-driven-development/components/sdd-01-diagram-parts.tsx`. SDD composed diagrams: `app/spec-driven-development/components/sdd-01-diagram.tsx`. Radix UI primitives and Lucide icons are available globally. The design is documented in `docs/DESIGN.md` (Desert Rose palette).

**Status:** Built
