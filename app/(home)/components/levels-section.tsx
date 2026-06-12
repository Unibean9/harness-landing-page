import { SectionShell } from "./section-shell";
import { SectionHeader } from "./section-header";
import { Subheading } from "./subheading";

const levels = [
  {
    step: "01",
    level: "Mức độ nhẹ",
    capability: "Prompt Template",
    description:
      "Khuôn mẫu lời nhắc đi kèm hướng dẫn rõ ràng, ví dụ minh họa, từ ngữ bị cấm và tiêu chí nghiệm thu.",
    fit: "Tác vụ ngắn, tạo nội dung, phân loại đơn giản, chuẩn hóa đầu ra.",
  },
  {
    step: "02",
    level: "Mức độ trung bình",
    capability: "Retrieval",
    description:
      "Bổ sung truy xuất dữ liệu — AI lấy thông tin từ tài liệu nội bộ, thông số kỹ thuật hoặc ghi chú khách hàng.",
    fit: "Hỏi đáp tài liệu, chatbot nội bộ, trợ lý kiến thức, hệ thống hỗ trợ ra quyết định.",
  },
  {
    step: "03",
    level: "Mức độ chuyên sâu",
    capability: "Execution Environment",
    description:
      "Công cụ và quản lý trạng thái — AI chạy test, truy vấn API, theo dõi tiến độ, tự khôi phục sau lỗi và yêu cầu phê duyệt.",
    fit: "Coding agent, workflow automation, research agent, hệ thống AI vận hành dài hạn.",
    highlight: true,
  },
];

export function LevelsSection() {
  return (
    <SectionShell id="muc-do" className="border-t border-border/60">
      <div className="space-y-12 lg:space-y-16" data-motion-section>
        <div data-motion-item>
          <SectionHeader
            sectionLabel="Phần 03"
            title="Các mức độ của một Harness"
            description="Harness có thể triển khai từ đơn giản đến chuyên sâu — mỗi bước bổ sung thêm một lớp năng lực."
          />
        </div>

        <div className="space-y-6" data-motion-item>
          <Subheading>Lộ trình năng lực</Subheading>
          <div className="inline-flex flex-wrap gap-2 rounded-full border border-border bg-brand-surface/60 p-1">
            {levels.map((item) => (
              <span
                key={item.step}
                className={
                  item.highlight
                    ? "rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                    : "rounded-full px-4 py-2 text-xs font-semibold text-brand-primary/65"
                }
              >
                {item.capability}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4" data-motion-item>
          {levels.map((item) => (
            <article
              key={item.step}
              data-motion-item
              className={item.highlight ? "step-row-active" : "step-row"}
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-xs font-bold tabular-nums text-primary">
                  {item.step}
                </span>
                <h4 className="font-display text-base font-bold text-brand-primary">
                  {item.level}
                </h4>
                <span className="code-inline">{item.capability}</span>
              </div>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-brand-primary/75">
                {item.description}
              </p>
              <p className="mt-3 text-sm text-brand-primary/60">
                <span className="font-semibold text-brand-primary/75">Phù hợp: </span>
                {item.fit}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
