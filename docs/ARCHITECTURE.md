The ARCHITECTURE.md document has been written to /Users/thinhkevin/unibean/harness/harness-landing-page/ARCHITECTURE.md.

It covers the full technical architecture as built, organized into the required sections:

**Stack** — Next.js 16.2.9 / React 19 / TypeScript 5 / Tailwind CSS v4 / GSAP + Motion-Framer (two separate animation systems) / Redux Toolkit + redux-persist (auth only) / TanStack Query (wired, not yet used) / Microsoft SignalR / SQLite harness.db / Axios API client.

**Directory Structure** — every route in /app described (including the empty khai-niem directory), all /lib modules, /components, /docs harness scaffolding, and /scripts with the four schema migration files.

**Data Architecture** covers three layers:
- Content model: the Principle/SddPrinciple typed interfaces, the per-principle content files pattern, and the hand-rolled markdownToHtml() converter for docs/vi/ files
- Database: all four migration files and what each table stores (intake, story, decision, backlog, trace, tool, intervention)
- API layer: the Axios ApiService with silent JWT refresh, the two auth endpoints, and the SEO ISR fetch for sitemap generation

**Frontend Architecture** — routing (static vs dynamic [slug], redirect chains, layout hierarchy), state (authSlice fields, SiteHeaderChromeContext, React Query scaffolded but unused), design system (CSS custom properties, Tailwind v4 @theme inline bridging, component CSS classes, FlowNode/FlowConnector/DiagramPanel diagram primitives, SVG wiring pattern for principles diagrams, GSAP data-attribute animation system vs Framer Motion header behaviour), SEO (buildPageMetadata, three JSON-LD graph nodes, AEO FAQ entries, dynamic sitemap).

**Realtime** — SignalR singleton hub at hubs/notifications, accessTokenFactory, automatic reconnect, drives Sonner toasts.

**Build & Deploy** — next.config.ts settings, the runtime fs dependency that prevents static export, partially built areas explicitly called out (SDD articles 02-05 are placeholders, /khai-niem has no page.tsx, /luyen-de routes referenced in sitemap but not in app directory, H3/H5 harness maturity partial, story/backlog system scaffolded but empty).
