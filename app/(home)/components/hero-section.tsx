import Link from "next/link";
import { SectionShell } from "./section-shell";

const outcomes = [
  {
    label: "Đáng tin cậy",
    detail: "Kết quả qua xác minh — không chỉ nghe hợp lý",
  },
  {
    label: "An toàn",
    detail: "Ranh giới và guardrails được thiết kế sẵn",
  },
  {
    label: "Lặp lại được",
    detail: "Pipeline có kiểm soát, không phụ thuộc may rủi",
  },
];

const sectionAnchors = [
  { label: "Khái niệm", href: "#dinh-nghia" },
  { label: "Vấn đề", href: "#van-de" },
  { label: "Mức độ", href: "#muc-do" },
  { label: "So sánh", href: "#so-sanh" },
  { label: "Khám phá", href: "#kham-pha" },
];

export function HeroSection() {
  return (
    <SectionShell
      id="trang-chu"
      className="relative overflow-hidden border-b border-border/60 py-0"
      innerClassName="relative flex flex-col justify-center pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-28 md:pb-20"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 size-128 rounded-full bg-primary/6 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-12 size-80 rounded-full bg-brand-accent-wash blur-3xl"
        aria-hidden="true"
      />

      <div className="relative space-y-8 lg:space-y-10">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center gap-3" data-hero-item>
            <span className="section-label">— Bắt đầu</span>
            <span className="h-px max-w-28 flex-1 bg-border" aria-hidden="true" />
          </div>

          <div className="space-y-6" data-hero-item>
            <h1 className="font-display text-[clamp(3rem,7vw,5.25rem)] leading-[0.92] font-bold tracking-[-0.035em] text-brand-primary text-balance">
              Harness{" "}
              <span className="text-primary italic">Engineering</span>
            </h1>
            <p className="max-w-2xl font-display text-[clamp(1.35rem,2.8vw,2rem)] font-semibold leading-snug tracking-[-0.015em] text-brand-primary/88 text-pretty">
              Kỹ thuật thiết lập môi trường hoạt động cho AI
            </p>
            <p className="max-w-prose text-base leading-[1.75] text-body sm:text-lg">
              Kỷ luật thiết kế môi trường có cấu trúc xung quanh các mô hình AI — không chỉ dựa
              vào model mạnh hay prompt khéo. Giúp coding agent và workflow automation vận hành
              đáng tin cậy, an toàn và có thể lặp lại.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center" data-hero-item>
            <Link href="#dinh-nghia" className="btn-primary w-full sm:w-auto">
              Tìm hiểu cách hoạt động
            </Link>
            <Link href="#muc-do" className="btn-ghost w-full sm:w-auto">
              Xem các mức độ triển khai
            </Link>
          </div>
        </div>

        <div className="space-y-4" data-hero-item>
          <p className="font-display text-sm italic text-brand-secondary">
            Một harness tốt hướng tới
          </p>
          <div className="grid overflow-hidden rounded-2xl border border-border bg-brand-surface/50 md:grid-cols-3">
            {outcomes.map((item, index) => (
              <article
                key={item.label}
                className="border-b border-border px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:py-6 md:last:border-r-0"
              >
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-base leading-snug">
                  <span className="font-mono text-xs font-bold tabular-nums text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display font-bold text-brand-primary">{item.label}</span>
                  <span className="text-brand-secondary" aria-hidden="true">
                    —
                  </span>
                  <span className="text-body-muted">{item.detail}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <nav
        className="relative mt-10 flex flex-wrap items-center gap-x-2 gap-y-3 border-t border-border/70 pt-6 lg:mt-12"
        aria-label="Mục lục trang"
        data-hero-item
      >
        <span className="font-display text-sm italic text-brand-secondary">Trên trang này</span>
        <span className="text-brand-secondary" aria-hidden="true">
          ·
        </span>
        {sectionAnchors.map((item, index) => (
          <span key={item.href} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="text-brand-secondary/80" aria-hidden="true">
                ·
              </span>
            )}
            <Link
              href={item.href}
              className="text-sm font-semibold text-brand-primary/80 transition duration-300 hover:text-primary"
            >
              {item.label}
            </Link>
          </span>
        ))}
      </nav>
    </SectionShell>
  );
}
