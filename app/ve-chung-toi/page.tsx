import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GraduationCap, Workflow, Boxes } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Về chúng tôi - Learn Harness Engineering",
  description: "Về Learn Harness Engineering: Học liệu mở tiếng Việt nâng cao chất lượng AI Agent.",
  path: "/ve-chung-toi",
});

export default function VeChungToiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header currentPath="/ve-chung-toi" />
      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 pt-32 pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 pt-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-tertiary mb-3">Sứ mệnh</p>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-bold text-brand-primary tracking-tight">
              Xây dựng thư viện tri thức đáng tin cậy.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-brand-primary/72">
            <p>
              Learn Harness Engineering là một trang học liệu mở cho kỹ sư phần mềm Việt Nam muốn làm chủ các trợ lý AI
              nhũ Claude Code và Codex, tối ưu hóa ngân sách ngữ cảnh và xây dựng luồng tự động hóa tin cậy.
            </p>
            <p>
              Nội dung được nghiên cứu và cấu trúc tỉ mỉ dựa trên các báo cáo thực tiễn cốt lõi của OpenAI và Anthropic.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 mt-8">
              {[
                {
                  icon: GraduationCap,
                  text: "Lộ trình bài bản",
                  desc: "Đi từ lý thuyết cốt lõi của các AI labs đến dự án thực tế.",
                },
                {
                  icon: Workflow,
                  text: "Quy trình vòng kín",
                  desc: "Thiết lập cơ chế tự sửa lỗi và phản hồi runtime cho agent.",
                },
                {
                  icon: Boxes,
                  text: "Tài nguyên sẵn dùng",
                  desc: "Các template và file cấu hình sao chép ngay để thiết lập.",
                },
              ].map((item) => (
                <div key={item.text} className="rounded-[16px] border border-border bg-brand-surface p-4 shadow-sm">
                  <item.icon className="size-5 text-brand-tertiary" strokeWidth={1.8} />
                  <p className="mt-4 text-sm font-bold leading-6 text-brand-primary">{item.text}</p>
                  <p className="mt-2 text-xs text-brand-primary/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
