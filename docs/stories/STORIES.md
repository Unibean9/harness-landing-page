STORIES.md has been written to /Users/thinhkevin/unibean/harness/harness-landing-page/STORIES.md.

It contains 13 user stories covering every built feature. Here is a summary of what was written and the honest status assessment for each:

STORY-001 — Homepage Hero and Sections: Built. Six section components assembled in app/(home)/page.tsx with full formula diagrams, comparison matrix, and editorial table.

STORY-002 — Navigation System (Header, Footer, Active State, Mobile): Built. Spring-animated active underline, scroll-hide, dark/light toggle, full-screen mobile overlay with Escape + body-scroll-lock, matching footer, skip-to-content link.

STORY-003 — 13 Principles Listing Page: Built. /nguyen-ly redirects to the first principle; three-column chrome with left nav, right TOC, mobile bar, and GSAP scroll reveals is fully wired.

STORY-004 — Individual Principle Article Page: Built. All 13 dedicated article components (Principle01Article through Principle13Article) and 13 diagram components exist. Content data files for all 13 principles are present in lib/principles/.

STORY-005 — SDD Index Page: Built. /spec-driven-development redirects to the first article; the layout reuses the principles chrome; SddDocShell, SddNav, SddMobileBar, and SddPager all exist.

STORY-006 — Individual SDD Article Page: Partial. Article 01 (Executable Specifications) is fully built with 13 sections and 11 diagram components. Articles 02–05 are stubs — they have a slug, a quote, and one placeholder sentence ("Nội dung chi tiết cho nguyên lý này sẽ được bổ sung.") in lib/sdd-data.ts with no dedicated article component.

STORY-007 — Docs Page (Markdown Rendering): Built. Custom markdownToHtml() handles code blocks, GitHub-style alert boxes, tables, headings with slug anchors, and smart internal link routing. DocViewer is a full client-side tabbed viewer reading from docs/vi/ at build time.

STORY-008 — Vietnamese Content Pages: Built (three pages). /tai-nguyen and /du-an delegate to DocViewer with tab pre-filtering. /ve-chung-toi is a static about page. The /khai-niem directory exists but is empty — no page.tsx, no live route (Stub).

STORY-009 — SEO and AEO: Built (infrastructure). buildPageMetadata() covers canonical, OG, and Twitter. HomeJsonLd injects WebPage + DefinedTerm + FAQPage schema nodes. Sitemap and robots.txt are generated. Note: the sitemap includes /luyen-de/ and /courses dynamic routes that reference non-existent app pages, which is a mismatch worth flagging.

STORY-010 — Animation System: Built. Two libraries in use — GSAP + ScrollTrigger for homepage ([data-hero-item], [data-motion-item], [data-symptom-item], [data-scale-fade]) and principle articles ([data-principles-item]); Framer Motion (motion/react) for header scroll-hide and mobile panel animations. prefers-reduced-motion is respected in both.

STORY-011 — Realtime Notifications (SignalR): Partial. The full infrastructure is built — singleton HubConnection, SignalRProvider, useSignalR hook, useSignalRNotifications hook wired to sonner toasts. However no page or component currently calls useSignalRNotifications, so no UI surface actually receives notifications.

STORY-012 — Harness CLI and SQLite Database Layer: Built. Prebuilt Rust binary at scripts/bin/harness-cli. Four SQL migrations define intake, story, decision, backlog, trace, tool, and intervention tables with proper CHECK constraints, WAL mode, and foreign keys. This is internal harness tooling — not the app's user database.

STORY-013 — Design System (CSS Tokens, Component Classes, Diagram Components): Built. Full Desert Rose token system in globals.css forwarded to Tailwind v4 via @theme inline, @layer components utility classes, per-principle inline SVG diagrams, and the SDD FlowNode/FlowPipeline/ComparePanels/BranchLayout primitive set in sdd-01-diagram-parts.tsx.
