import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HarnessMotion } from "@/components/harness-motion";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Learn Harness Engineering - Làm chủ AI Coding Agent",
  description:
    "Thư viện kiến thức tiếng Việt về Harness Engineering: Thiết lập môi trường, quản lý context, state và tự động xác minh cho các AI Coding Agent.",
  path: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header currentPath="/" />
      <HarnessMotion />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="trang-chu" className="relative min-h-[calc(100vh-4rem)] px-4 pt-28 md:pt-32 flex items-center">
          <div className="mx-auto grid max-w-7xl gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 w-full">
            <div className="space-y-8">
              <p className="max-w-xl text-xs font-bold uppercase tracking-[0.2em] text-brand-tertiary">
                Học liệu mở tiếng Việt đầu tiên
              </p>
              <h1 className="max-w-5xl font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.03em] font-bold text-brand-primary">
                Làm chủ AI Coding Agent với Harness Engineering.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-brand-primary/72">
                Khóa học và thư viện tài liệu kỹ thuật tiếng Việt chuyên sâu về cách thiết kế môi trường,
                quản lý context, state và cơ chế kiểm soát giúp các trợ lý lập trình AI hoạt động tin cậy tuyệt đối.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/khai-niem"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] bg-primary px-6 text-sm font-bold text-primary-foreground transition hover:translate-y-[-1px] active:translate-y-0 hover:shadow-[0_10px_30px_rgb(217_123_90/0.28)]"
                >
                  Bắt đầu học ngay
                </Link>
                <Link
                  href="/du-an"
                  className="inline-flex h-12 items-center justify-center rounded-[10px] border border-border bg-brand-surface px-6 text-sm font-bold text-brand-primary transition hover:translate-y-[-1px] active:translate-y-0"
                >
                  Xem dự án thực hành
                </Link>
              </div>
            </div>

            <div data-scale-fade className="relative">
              <div className="overflow-hidden rounded-[20px] border border-border bg-brand-surface shadow-[0_28px_90px_rgb(31_20_16/0.10)]">
                <div className="border-b border-border px-5 py-4 bg-brand-neutral/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.1em] text-brand-secondary">
                      /docs/vi
                    </span>
                    <span className="rounded-[10px] bg-brand-neutral px-3 py-1 text-xs font-semibold text-brand-primary">
                      Vietnamese
                    </span>
                  </div>
                </div>
                <div className="grid gap-0 md:grid-cols-[0.72fr_1.28fr]">
                  <aside className="border-b border-border bg-brand-neutral/40 p-5 md:border-b-0 md:border-r flex flex-col gap-1">
                    {[
                      { label: "Khái niệm", href: "/khai-niem" },
                      { label: "Nguyên lý", href: "/nguyen-ly" },
                      { label: "Dự án", href: "/du-an" },
                      { label: "Tài nguyên", href: "/tai-nguyen" },
                      { label: "Về chúng tôi", href: "/ve-chung-toi" },
                      { label: "Tài liệu", href: "/docs" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-[10px] px-3 py-2 text-sm text-brand-primary/70 transition hover:bg-brand-surface hover:text-brand-primary font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </aside>
                  <div className="space-y-5 p-6">
                    <div>
                      <p className="text-sm font-semibold text-brand-secondary">Khởi đầu nhanh</p>
                      <h2 className="mt-2 font-display text-3xl tracking-[-0.02em] font-bold">
                        Quy trình học: Khái niệm, Nguyên lý, Dự án thực hành.
                      </h2>
                    </div>
                    <div className="grid gap-3">
                      {[
                        "Thiết lập AGENTS.md",
                        "Quản lý trạng thái",
                        "Tự động xác minh",
                        "Bàn giao session",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-[14px] border border-border bg-background p-4 shadow-sm"
                        >
                          <BookOpenText className="size-4 text-brand-tertiary" strokeWidth={1.8} />
                          <span className="text-sm font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
