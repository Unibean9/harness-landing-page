import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Nguyên lý - Learn Harness Engineering",
  description: "Các nguyên lý thiết kế Harness cho AI Agent để đảm bảo sự ổn định và hiệu năng cao.",
  path: "/nguyen-ly",
});

const principles = [
  "Mỗi khi agent mắc lỗi, bạn xây dựng một giải pháp kỹ thuật trong môi trường để agent không bao giờ lặp lại lỗi đó nữa.",
  "Model chịu trách nhiệm suy nghĩ, harness quyết định những gì model suy nghĩ về và cách thức nó tương tác.",
  "Không để agent tự đánh giá công việc của chính mình; cần một cơ chế tự động xác minh và QA độc lập.",
  "Mọi trạng thái công việc và nhật ký tiến độ phải được tài liệu hóa liên tục qua mỗi phiên (session-handoff).",
];

export default function NguyenLyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header currentPath="/nguyen-ly" />
      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-tertiary mb-3">Tư duy hệ thống</p>
          <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-bold text-brand-primary tracking-tight">
            Nguyên lý thiết kế Harness.
          </h1>
          <p className="mt-6 text-lg text-body leading-relaxed">
            Ưu tiên cách nghĩ hệ thống: môi trường làm việc quyết định hiệu suất của AI agent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {principles.map((principle, index) => (
            <article
              key={principle}
              className="rounded-[20px] border border-border bg-brand-surface p-8 shadow-sm flex items-start gap-6 transition hover:shadow-md"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-[14px] bg-brand-primary font-mono text-xl text-brand-surface font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xl leading-relaxed text-brand-primary font-medium">{principle}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
