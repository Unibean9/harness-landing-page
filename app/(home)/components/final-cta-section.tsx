import Link from "next/link";
import { SectionShell } from "./section-shell";
import { SectionHeader } from "./section-header";
import { Subheading } from "./subheading";
import { LinkRows } from "./link-rows";

const links = [
  {
    step: "01",
    title: "Nguyên lý",
    href: "/nguyen-ly/harness-first",
    description:
      "Tìm hiểu các thành phần cốt lõi như ràng buộc, guardrails, feedback loop và quản lý trạng thái.",
  },
  {
    step: "02",
    title: "Dự án",
    href: "/du-an",
    description:
      "Xem cách Harness Engineering được áp dụng vào coding agent, chatbot nội bộ và workflow automation.",
  },
  {
    step: "03",
    title: "Tài nguyên",
    href: "/tai-nguyen",
    description:
      "Tổng hợp nội dung giúp tiếp tục nghiên cứu và triển khai Harness Engineering.",
  },
];

export function FinalCtaSection() {
  return (
    <SectionShell
      id="kham-pha"
      tone="wash"
      className="border-t border-border/60 pb-32 md:pb-40"
    >
      <div className="space-y-12 lg:space-y-16" data-motion-section>
        <div data-motion-item>
          <SectionHeader
            sectionLabel="Phần 05"
            title={
              <>
                Khám phá sâu hơn về{" "}
                <span className="text-primary">Harness Engineering</span>
              </>
            }
            description="Lộ trình học từ nguyên lý nền tảng đến thực hành và tài liệu tham khảo."
          />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Lộ trình học</Subheading>
          <LinkRows items={links} />
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center" data-motion-item>
          <Link href="/nguyen-ly/harness-first" className="btn-primary">
            Bắt đầu với Nguyên lý
          </Link>
          <Link
            href="/du-an"
            className="text-sm font-semibold text-primary transition hover:underline"
          >
            Hoặc xem Dự án →
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
