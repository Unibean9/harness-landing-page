# PRODUCT.md — Harness Engineering Landing Page

---

# Product Overview

## Harness Engineering là gì

Harness Engineering Landing Page là một trang web giáo dục bằng tiếng Việt, xây dựng trên Next.js 16, dành cho các kỹ sư phần mềm người Việt đang sử dụng AI coding agents (Claude Code, GitHub Copilot Codex, v.v.). Trang web truyền đạt và hệ thống hóa **Harness Engineering** — một kỷ luật kỹ thuật được Mitchell Hashimoto (nhà sáng lập HashiCorp/Terraform) đặt tên vào tháng 2 năm 2026.

**Định nghĩa cốt lõi:** Harness Engineering là thực hành thiết kế và vận hành toàn bộ "môi trường" bao quanh một AI model — bao gồm tools, access permissions, memory, feedback loops, guardrails, context management, session handoff — mọi thứ ngoại trừ bản thân model.

Công thức trung tâm của site: **Agent = Model + Harness**

Luận điểm định lượng chính: nghiên cứu SWE-agent (Princeton NLP, NeurIPS 2024) chứng minh cải thiện **64% hiệu suất** trên cùng một model, cùng task, cùng compute budget, chỉ bằng cách thiết kế lại môi trường — không thay đổi model.

## Mission / Value Proposition

Trang web định vị Harness Engineering là **thế hệ thứ ba** của công nghệ AI:

- **Prompt Engineering (2022–2024):** "Hỏi thế nào" — cách viết câu lệnh tốt hơn
- **Context Engineering (2025):** "Cung cấp thông tin gì" — quản lý ngữ cảnh
- **Harness Engineering (2026):** "Toàn bộ hệ sinh thái vận hành thế nào" — superset của context engineering

Value proposition: kỹ sư không cần đợi model mạnh hơn hay trả tiền API đắt hơn để có kết quả tốt hơn — họ cần thiết kế môi trường tốt hơn.

## Target Audience

- Kỹ sư phần mềm người Việt đang dùng AI coding agents hàng ngày
- Solution architects và AI practitioners đang xây dựng hệ thống agentic
- Những người muốn vượt qua giai đoạn "viết prompt" và tiến đến xây dựng hệ thống agent đáng tin cậy ở production

---

# Trang và tính năng đã có (Pages & Features Built)

## `/` — Trang chủ (Homepage)

**Route group:** `app/(home)/page.tsx`

Trang chủ được chia thành 6 section tuần tự, tất cả là server components:

| Section | ID / Anchor | Nhãn | Nội dung chính |
|---|---|---|---|
| HeroSection | `#trang-chu` | — | Tiêu đề lớn, tagline, CTA |
| DefinitionSection | `#dinh-nghia` | Phần 01 | Định nghĩa Harness Engineering, formula diagram, harness layers stack, definition contrasts |
| ProblemSection | `#van-de` | Phần 02 | Các vấn đề thực tế khi agent thất bại, warning cards, flow steps |
| LevelsSection | `#muc-do` | Phần 03 | Ba thế hệ (Prompt → Context → Harness Engineering) |
| ComparisonSection | `#so-sanh` | Phần 04 | So sánh ma trận, editorial table |
| FinalCtaSection | `#kham-pha` | Phần 05 | CTA cuối trang, link rows đến các tài nguyên chính |

**UI patterns nổi bật:**
- `section-shell.tsx` và `section-header.tsx` là layout primitives dùng chung cho mọi section
- `formula-diagram.tsx` render phương trình `Agent = Model + Harness` dạng visual
- `harness-layers-stack.tsx` hiển thị các lớp cấu thành của một harness
- `comparison-matrix.tsx` và `editorial-table.tsx` so sánh ba thế hệ engineering
- `warning-cards.tsx` liệt kê dấu hiệu khi harness bị thiếu
- `flow-steps.tsx` trình bày quy trình dạng step-by-step
- GSAP `[data-hero-item]` fade/slide-in animation khi tải trang; `[data-motion-item]` scroll-triggered entrance animation

## `/nguyen-ly/[slug]` — 13 Nguyên lý Harness Engineering

**Route:** `app/nguyen-ly/` — redirect ngay về `/nguyen-ly/harness-first`

Mỗi trong 13 nguyên lý có trang riêng tại `/nguyen-ly/[slug]`. Layout ba cột:
- **Cột trái:** `PrinciplesNav` — danh sách 13 nguyên lý, ẩn dưới breakpoint `lg`
- **Cột giữa:** Nội dung bài viết + `PrinciplesPager` (điều hướng prev/next)
- **Cột phải:** `PrinciplesToc` — mục lục trong trang, ẩn dưới breakpoint `xl`
- **Mobile:** `PrinciplesMobileBar` — thanh cố định ở đáy màn hình, portal vào `document.body`, mở hai panel: "Menu" và "Trên trang này"

Mỗi nguyên lý có hai component riêng biệt:
- `Principle0N-Article.tsx` — bài viết đầy đủ với nhiều section
- `Principle0N-Diagram.tsx` — SVG diagram inline trong `<figure>` với `<figcaption>`

## `/spec-driven-development/[slug]` — Spec-Driven Development (SDD)

**Route:** `app/spec-driven-development/` — redirect ngay về `/spec-driven-development/executable-specifications`

5 bài viết về phương pháp Spec-Driven Development. Layout giống hệt section Nguyên lý (ba cột, mobile bar), nhưng dùng nav, shell, và pager riêng (`SddNav`, `SddDocShell`, `SddPager`, `SddMobileBar`).

Bài 01 (`executable-specifications`) có component đầy đủ `Sdd01Article` với 11 diagram riêng biệt. Bài 02–05 dùng `SddArticle` — fallback renderer hiển thị title, quote, và body text (nội dung chi tiết chưa được viết).

## `/du-an` — Dự án

**Route:** `app/du-an/`

Hiển thị `DocViewer` đã lọc sang tab `projects`. Nội dung từ `docs/vi/projects/` bao gồm:
- Overview index
- 6 dự án thực hành: `project-01` đến `project-06` (baseline vs minimal harness, agent-readable workspace, multi-session continuity, incremental indexing, grounded QA verification, runtime observability)

Markdown được render phía client bằng custom `markdownToHtml()` trong `lib/markdown.ts`.

## `/tai-nguyen` — Tài nguyên

**Route:** `app/tai-nguyen/`

Hiển thị `DocViewer` đã lọc sang tab `library`. Nội dung từ `docs/vi/resources/` bao gồm:
- Templates copy-paste: `AGENTS.md`, `CLAUDE.md`, `feature_list.json`, `init.sh`, `claude-progress.md`, `session-handoff.md`, `clean-state-checklist.md`, `evaluator-rubric.md`, `quality-document.md`
- Reference docs: coding-agent-startup-flow, initializer-agent-playbook, method-map, prompt-calibration
- Thư mục `openai-advanced/` với repo-template và sops subdirectories
- `skills/index.md`

## `/docs` — Bài giảng

**Route:** `app/docs/`

Hiển thị `DocViewer` với cả ba tab (Lectures, Projects, Library). Tab Lectures chứa:
- Trang Welcome (`index.md`)
- Bài viết nền tảng từ Substack về Harness Engineering
- 12 bài giảng (`lecture-01` đến `lecture-12`): tại sao agent thất bại, harness là gì, repository-as-system-of-record, long-running continuity, initialization phase, overreach/under-finishing, feature lists, premature victory, end-to-end testing, observability, clean state

## `/ve-chung-toi` — Về chúng tôi

**Route:** `app/ve-chung-toi/`

Trang tĩnh độc lập, không dùng doc rendering system. Hiển thị thông tin về đội ngũ hoặc sứ mệnh của trang.

## Redirect

- `/khai-niem` → redirect cố định (301) đến `/nguyen-ly/harness-first` (cấu hình trong `next.config.ts`)
- Thư mục `app/khai-niem/` tồn tại nhưng không có `page.tsx` — route chưa được implement

---

# Nguyên lý Harness Engineering (The 13 Principles)

Toàn bộ 13 nguyên lý được định nghĩa trong `lib/principles-data.ts`, với content files mở rộng tại `lib/principles/principle-0N-content.ts`. Mỗi nguyên lý có article component và diagram component riêng biệt tại `app/nguyen-ly/components/`.

## 6 Lớp phân loại

| Lớp | Phạm vi | Nguyên lý |
|---|---|---|
| Layer 1 | Foundational mindset | 01, 02 |
| Layer 2 | Operational architecture | 03, 04 |
| Layer 3 | Control mechanisms | 05, 06 |
| Layer 4 | Governance | 07, 08 |
| Layer 5 | Agent design | 09, 10, 11 |
| Layer 6 | Observation and improvement | 12, 13 |

## Danh sách 13 nguyên lý

| # | Tên | Slug | Mô tả một câu |
|---|---|---|---|
| 01 | Harness-first | `harness-first` | Khi Agent hoạt động không hiệu quả, hãy tối ưu Harness trước khi tối ưu Model. |
| 02 | Harnessability | `harnessability` | Hệ thống phải được thiết kế để Agent có thể hiểu và được Harness kiểm soát. |
| 03 | Event/channel agnostic | `event-channel-agnostic` | Control layer phải độc lập với kênh kích hoạt — mọi luồng đi qua cùng một Harness. |
| 04 | Production controllability | `production-controllability` | Mọi hành vi của Agent phải có thể quan sát, giải thích và khôi phục khi cần thiết. |
| 05 | Guide & Sensor | `guide-and-sensor` | Mọi Agent cần được hướng dẫn trước khi hành động (feedforward) và được đánh giá sau khi hành động (feedback). |
| 06 | Spec-as-source | `spec-as-source` | Specification phải trở thành nguồn sự thật chính thức — không chỉ là tài liệu tham khảo. |
| 07 | Human as control point | `human-as-control-point` | Con người là control point chính thức — tham gia đúng lúc khi rủi ro cao, không phải mọi lúc. |
| 08 | Application-owned control flow | `application-owned-control-flow` | Harness làm chủ luồng chạy — LLM không tự quyết mọi branch, retry và side effect. |
| 09 | Small focused agents | `small-focused-agents` | Chia mục tiêu lớn thành các khối xây dựng nhỏ — thiết kế, lập trình, đánh giá, kiểm thử. |
| 10 | Context ownership | `context-ownership` | Context window là tài nguyên đắt tiền — chỉ đưa vào đúng dữ liệu cần thiết. |
| 11 | Structured-output-first | `structured-output-first` | Đầu ra có cấu trúc để các sensor tính toán có thể kiểm tra tự động trước khi execute. |
| 12 | Traceable state | `traceable-state` | State phải lưu input, context, output, action, error và business result của mọi lần thực thi. |
| 13 | Error as feedback | `error-as-feedback` | Lỗi là tín hiệu cho thấy harness đang thiếu tool, guardrail hoặc tài liệu — không phải lỗi của model. |

## Cấu trúc article + diagram

Mỗi nguyên lý từ 01 đến 13 đều có:

**Article component (`Principle0N-Article.tsx`)** gồm các section cố định:
1. Header (eyebrow + h1 + quote)
2. Intro — `PrincipleIntro` với một trong bốn variants: `editorial` (rail + blockquote), `question` (sai vs đúng), `definition` (thuật ngữ + định nghĩa), `prose` (lead text + note)
3. Diagram section — `Principle0N-Diagram`
4. Why exists
5. The principle (blockquote nổi bật)
6. Why matters — benefit grid
7. Practice — checklist
8. Antipatterns — grid
9. Các section mở rộng riêng của từng nguyên lý (ví dụ: components table, lifecycle strip, building blocks, signs matrix, event schema, execution record, feedback loop, comparison table, error mapping)
10. Summary — `PrincipleSummary` (watermark số + headline + ordered list 2–3 điểm)

**Diagram component (`Principle0N-Diagram.tsx`):** inline SVG trong `<figure>` + `<figcaption>`. Dùng amber-tinted fills (`rgb(180 83 9 / ...)`) và dashed/solid strokes. Ví dụ: diagram 01 minh họa phương trình `Agent = Model + Harness` dạng SVG; diagram 02 là split panel so sánh low vs high Harnessability.

Nguyên lý 03 có thêm `principle-03-flow-compare.tsx`. Nguyên lý 11 có thêm `principle-11-json-block.tsx` hiển thị JSON schema mẫu.

---

# Spec-Driven Development (SDD)

## Tổng quan section

Section `/spec-driven-development` là tài liệu về phương pháp **Spec-Driven Development** — phương pháp phát triển phần mềm đặt specification làm trung tâm, trong đó các đặc tả có thể chạy được, kiểm tra được, và làm cơ sở sinh ra mọi artifact khác. SDD được trình bày như một kỷ luật bổ sung cho Harness Engineering, tập trung vào phía "specification" trong công thức `Agent = Model + Harness`.

Data model: `lib/sdd-data.ts` định nghĩa interface `SddPrinciple` và helper functions `getSddBySlug`, `getSddNavItems`, `getSddHref`, `getSddPager`.

## 5 bài viết

| # | Tên | Slug | Trạng thái nội dung |
|---|---|---|---|
| 01 | Executable Specifications | `executable-specifications` | **Đầy đủ** — 13 section, 11 diagram |
| 02 | Constitutional Governance | `constitutional-governance` | Placeholder — chưa có nội dung chi tiết |
| 03 | Transformation Automation | `transformation-automation` | Placeholder — chưa có nội dung chi tiết |
| 04 | Living Documentation | `living-documentation` | Placeholder — chưa có nội dung chi tiết |
| 05 | Continuous Validation | `continuous-validation` | Placeholder — chưa có nội dung chi tiết |

## Cấu trúc bài 01 (Executable Specifications)

Bài 01 có component riêng `Sdd01Article` với 13 section theo thứ tự:
`sdd01-intro` (Most Specifications Die) → `sdd01-problem` → `sdd01-shift` → `sdd01-worlds` (Documents vs Engines) → `sdd01-gps` (GPS Analogy) → `sdd01-drift` (Why Traditional Documentation Fails) → `sdd01-ai` (The AI Era) → `sdd01-pipeline` → `sdd01-example` (CRM real example) → `sdd01-harness` (Executable Specs + Harness Engineering) → `sdd01-signs` (Warning Signs) → `sdd01-iac` (Documentation → Infrastructure) → `sdd01-summary`

Data constants cho bài 01 nằm tại `lib/sdd/sdd-01-content.ts`, xuất các mảng: `sdd01Toc`, `sdd01TraditionalFlow`, `sdd01EngineFlow`, `sdd01PipelineSteps`, `sdd01CascadeSteps`, `sdd01CrmSpec`, `sdd01CrmArtifacts`, `sdd01WarningSigns`, `sdd01Summary`.

**Diagram architecture cho bài 01:** Tách thành hai file:
- `sdd-01-diagram-parts.tsx` — layout primitives: `FlowNode` (5 variants), `FlowConnector`, `FlowArrow`, `FlowChain`, `FlowPipeline`, `MismatchRow`, `DiagramStack`, `DiagramPanel`, `DiagramSplit`, `ComparePanels`, `BranchLayout` (2/3/4 cột), `BranchStackLink`
- `sdd-01-diagram.tsx` — 11 diagram components dựng từ các primitives trên: `Sdd01DeathDiagram`, `Sdd01ProblemDiagram`, `Sdd01ShiftDiagram`, `Sdd01WorldsDiagram`, `Sdd01GpsDiagram`, `Sdd01DriftDiagram`, `Sdd01AiDiagram`, `Sdd01PipelineDiagram`, `Sdd01CrmDiagram`, `Sdd01HarnessDiagram`, `Sdd01IacDiagram`
- `sdd-01-death-diagram.tsx` — file riêng cho death diagram, re-export từ `sdd-01-diagram.tsx`

## Cấu trúc layout SDD

`SddDocShell` (`sdd-doc-shell.tsx`) cung cấp layout ba cột giống hệt Nguyên lý: left sidebar (`SddNav`), center content + `SddPager`, right TOC (`PrinciplesToc` tái sử dụng từ Nguyên lý). Mobile: `SddMobileBar` portal slide-in với menu và TOC panel.

---

# Tính năng kỹ thuật (Technical Features)

## SEO & AEO Strategy

**Metadata system:** `lib/seo/metadata.ts` xuất `buildPageMetadata()` — tự động attach canonical URL, OpenGraph (`website` type), và Twitter card (`summary_large_image`) cho mọi trang. OG image là static `/metadata.png` (1731×909 px).

**AEO (Answer Engine Optimization):** `lib/seo/home-aeo.ts` định nghĩa định nghĩa tiếng Việt chính thức về "Harness Engineering" và 4 FAQ entries phân biệt với Prompt Engineering và Context Engineering. Các nội dung này được inject vào homepage qua `HomeJsonLd()` trong `lib/seo/home-json-ld.tsx` dưới dạng ba schema.org JSON-LD graph nodes: `WebPage`, `DefinedTerm`, và `FAQPage` — nhắm mục tiêu vào AI answer engines và featured snippets.

**Sitemap:** `app/sitemap.ts` fetch động các subject slugs từ `/api/v1/subjects/public` (Next.js revalidate 600 giây) để build các route `/luyen-de/:slug` và `/luyen-de/:slug/thi-thu`. Các route tĩnh: `/` (priority 1.0), `/courses` (0.8), `/login` (0.5).

**Robots:** `robots.ts` cho phép mọi crawler trên mọi path, ngoại trừ `/api/`.

**Google verification:** File xác minh Google site verification đã được thêm vào `/public/`.

## Navigation System

Được định nghĩa trong `lib/navigation.ts`. Năm mục điều hướng chính với nhãn Roman numerals I–V trong header và footer:

| # | Label | Href |
|---|---|---|
| I | Nguyên lý | `/nguyen-ly/harness-first` |
| II | Spec Driven Development | `/spec-driven-development/executable-specifications` |
| III | Dự án | `/du-an` |
| IV | Tài nguyên | `/tai-nguyen` |
| V | Về chúng tôi | `/ve-chung-toi` |

**Header (`components/layout/header.tsx`):** Client component. Sử dụng Framer Motion cho scroll-hide animation. Spring-based active nav underline dùng `layoutId='site-header-active'`. Dark/light theme toggle (biểu tượng Sun/Moon). Mobile: full-screen overlay nav với Escape-key và body-scroll-lock. Hỗ trợ prop `showSidebarToggle` cho các trang doc có sidebar.

**Footer (`components/layout/footer.tsx`):** Client component, mirror navItems với Roman numeral labels, brand tagline, và CTA link đến `/nguyen-ly/harness-first`.

## Animation System (harness-motion)

Hai thư viện animation hoạt động song song:

**GSAP + ScrollTrigger** (`components/harness-motion.tsx`):
- `[data-hero-item]`: fade/slide-in khi tải trang, duration 0.85s, easing power3.out, stagger 0.1s
- `[data-motion-item]` bên trong `[data-motion-section]`: scroll trigger tại top 80% viewport
- `[data-symptom-item]` bên trong `[data-symptom-list]`: scroll trigger tại top 82% viewport
- `[data-scale-fade]` ngoài `#trang-chu`: scrubbed scale animation
- Tất cả animation bị bỏ qua khi `prefers-reduced-motion` được bật

**GSAP + ScrollTrigger (principles-motion):** `PrinciplesMotion` trong `app/nguyen-ly/components/principles-motion.tsx` dùng GSAP + ScrollTrigger để fade-in từng `[data-principles-item]` khi vào viewport.

**Motion/Framer (motion/react):**
- Header scroll hide/show qua `lib/hooks/use-site-header-hidden.ts` — dùng `useScroll` + `useMotionValueEvent`; header ẩn sau khi scroll xuống hơn 10px qua ngưỡng 72px, hiện lại khi scroll lên
- `PrinciplesChromeMotion` dịch dọc content area khi header ẩn trên mobile
- Spring-based active nav underline trong header

## Realtime / SignalR

`lib/realtime/signalr.ts` bao bọc `@microsoft/signalr`. Module-level singleton `HubConnection` kết nối đến `NEXT_PUBLIC_API_URL + 'hubs/notifications'`, dùng `accessTokenFactory` cho bearer auth, bật automatic reconnect, log ở Warning level. Hook `useSignalR` tại `hooks/useSignalR.ts` re-export SignalRProvider context. Mục đích: nhận real-time notifications từ backend service (push notification khi có sự kiện từ server).

## Docs Rendering System (Markdown → Page)

`lib/markdown.ts` cung cấp custom `markdownToHtml()` function xử lý:
- Code blocks với language tagging
- Blockquotes với GitHub-style alert boxes: `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]` — render với color-coded borders
- Tables, unordered/ordered lists
- H1–H3 headings với Vietnamese-aware slugify cho anchor IDs
- Inline code, bold, italic, images
- **Smart internal link routing:** links chứa `/lectures/` → `/docs?tab=lectures&item=...`; `/projects/` → `/du-an?tab=projects&item=...`; `/resources/` → `/tai-nguyen?tab=library&item=...`

`lib/docs.ts` đọc `docs/vi/` tại runtime bằng Node `fs`, trả về ba `DocTab` objects: `lectures`, `projects`, `library`.

## State Management

Redux Toolkit + redux-persist. `authSlice` (`lib/redux/slices/authSlice.ts`) giữ toàn bộ auth state: user, token, refreshToken, isAuthenticated, isLoading. Store dùng redux-persist với localStorage, whitelist chỉ `auth`. SSR-safe noop storage khi `window` là undefined.

`loginAsync` / `logoutAsync` là RTK async thunks. Token được decode bằng `jwt-decode`, user fields (id, email, userName, role[], avatarUrl) được extract qua `parseUserFromToken`. `setupAutoRefresh` schedule timeout logout 2 phút trước khi JWT hết hạn. `useAuth` hook tại `hooks/useAuth.ts` expose convenience booleans: `isAdmin`, `isInstructor`, `isStudent`.

## API Client

`lib/api/core.ts` là Axios-based `ApiService` class trỏ đến `NEXT_PUBLIC_API_URL` (mặc định `http://localhost:8080/`). Đọc JWT từ Redux state, attach làm Bearer headers, và implement silent token-refresh flow khi 401 (với queued-retry mechanism cho concurrent requests).

---

# Nội dung và Tone

## Ngôn ngữ

Toàn bộ nội dung, label UI, navigation items, heading, body text đều bằng **tiếng Việt**. Thuật ngữ kỹ thuật (Harness, Agent, Model, spec, token, context window, guardrail, v.v.) được giữ nguyên tiếng Anh, không dịch. Tag `<html lang="vi">`.

## Giọng văn (Writing Style)

- **Thực chất, không hoa mỹ:** Mỗi câu mang thông tin cụ thể. Không có câu chào đón chung chung.
- **Có dẫn chứng:** Luận điểm kèm bằng chứng định lượng (64%, 20 phút, 6 giờ, 200 lần thử) hoặc nguồn cụ thể (Princeton NLP, Anthropic blog, OpenAI).
- **Phân tầng rõ ràng:** Mỗi nguyên lý có: nhận định cốt lõi (quote), lý giải, benefit, antipattern, practice checklist — đọc được từng phần độc lập.
- **Tông học thuật-thực hành:** Giữa technical paper và engineering playbook — không phải marketing copy, không phải hàn lâm thuần túy.
- **Callouts có phân loại:** `evidence` (dẫn chứng thí nghiệm), `practice` (thực hành cụ thể), `story` (case study), `warning` (cảnh báo anti-pattern) — mỗi loại có visual riêng.

## Những gì KHÔNG làm (Clichés Avoided)

- Không dùng cụm từ marketing sáo rỗng kiểu "giải pháp toàn diện", "đột phá", "cách mạng hóa"
- Không hứa hẹn kết quả mà không có dẫn chứng cụ thể
- Không dịch máy móc thuật ngữ kỹ thuật sang tiếng Việt khi bản gốc tiếng Anh đã là chuẩn ngành
- Không có gradient hay hiệu ứng thị giác phức tạp — flat color, single accent per screen
- Không có font Libre Caslon Display trên mobile (< 768px) vì font không hỗ trợ đầy đủ ký tự tiếng Việt — fallback về Inter
- Không để agent tự khai báo "xong" mà không có Definition of Done có thể xác minh (nguyên lý 06 là ví dụ mẫu cho chính trang web này)

---

*Tài liệu này mô tả trạng thái đã build tính đến ngày 15 tháng 6 năm 2026. Các trang placeholder (SDD bài 02–05, /khai-niem) chưa có nội dung và chưa được tính là feature hoàn thiện.*
