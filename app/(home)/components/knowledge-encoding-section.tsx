import { SectionShell } from "./section-shell";
import { ImagePlaceholder } from "./image-placeholder";

const rows = [
  {
    before: "Kiến thức nằm rải rác trong tài liệu",
    after: "Kiến thức được chuẩn hóa thành quy tắc",
  },
  {
    before: "Kinh nghiệm phụ thuộc vào nhân sự cấp cao",
    after: "AI có thể thực thi theo tiêu chuẩn chung",
  },
  {
    before: "Quy chuẩn làm việc khó lặp lại",
    after: "Quy trình có thể kiểm soát và tái sử dụng",
  },
  {
    before: "Review thủ công nhiều",
    after: "Có checklist, guardrails và tiêu chí nghiệm thu",
  },
];

export function KnowledgeEncodingSection() {
  return (
    <SectionShell id="ma-hoa" className="border-t border-border/60 bg-brand-surface/40">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="space-y-8" data-reveal>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em] font-bold text-brand-primary">
            Mã hóa kiến thức chuyên môn vào môi trường AI
          </h2>

          <p className="text-lg leading-relaxed text-body">
            Một harness tốt sẽ lưu giữ và mã hóa những đánh giá chuyên môn của tổ chức thành
            một dạng mà AI có thể thực thi.
          </p>

          <div className="overflow-hidden rounded-[20px] border border-border bg-brand-surface">
            <div className="grid grid-cols-2 border-b border-border bg-background text-sm font-bold text-brand-primary">
              <div className="px-5 py-4">Trước khi có Harness</div>
              <div className="border-l border-border px-5 py-4">Sau khi có Harness</div>
            </div>
            {rows.map((row) => (
              <div
                key={row.before}
                className="grid grid-cols-2 border-b border-border last:border-b-0 text-sm"
              >
                <div className="px-5 py-4 text-body-muted">{row.before}</div>
                <div className="border-l border-border px-5 py-4 text-brand-primary/80">
                  {row.after}
                </div>
              </div>
            ))}
          </div>

          <p className="rounded-[16px] border border-border bg-background px-6 py-5 text-base font-medium leading-relaxed text-brand-primary">
            Harness Engineering giúp AI hiểu &ldquo;cách chúng ta làm việc tại đây là như thế
            nào&rdquo;.
          </p>
        </div>

        <div data-scale-fade>
          <ImagePlaceholder
            label="Tài liệu, quy chuẩn code, quy chuẩn thiết kế, giọng văn thương hiệu được gom vào hệ thống trung tâm"
            aspect="square"
          />
        </div>
      </div>
    </SectionShell>
  );
}
