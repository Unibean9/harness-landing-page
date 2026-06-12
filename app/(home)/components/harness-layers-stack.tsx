interface HarnessLayer {
  index: string;
  label: string;
  role: string;
}

const layers: HarnessLayer[] = [
  { index: "01", label: "Ràng buộc & ranh giới", role: "Mục tiêu, phạm vi, quy tắc" },
  { index: "02", label: "Công cụ thực thi", role: "API, runtime, sandbox" },
  { index: "03", label: "Xác minh & guardrails", role: "Test, lint, checklist" },
  { index: "04", label: "Quản lý trạng thái", role: "Session, memory, handoff" },
  { index: "05", label: "Vòng lặp phản hồi", role: "Lỗi → sửa → thử lại" },
  { index: "06", label: "Phê duyệt con người", role: "Checkpoint trước triển khai" },
];

export function HarnessLayersStack() {
  return (
    <div
      className="grid gap-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)] lg:items-start lg:gap-12"
      data-motion-item
    >
      <div className="space-y-5 lg:pt-1">
        <p className="text-base leading-relaxed text-body sm:text-lg">
          Sáu lớp này bọc quanh mô hình — từ ranh giới gần lõi đến vòng kiểm soát bên ngoài.
        </p>
        <p className="callout-accent rounded-r-xl py-4 pl-5 pr-4 font-display text-base leading-snug text-brand-primary">
          <span className="code-inline font-sans not-italic">AI Model</span>{" "}
          <span className="italic text-brand-primary/80">là lõi; harness là môi trường quanh nó.</span>
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-brand-surface/50">
        <ol className="divide-y divide-border">
          {layers.map((layer) => (
            <li key={layer.index}>
              <article className="group flex items-center gap-4 px-5 py-4 transition duration-300 hover:bg-brand-accent-wash/35 sm:gap-5 sm:px-6 sm:py-4.5">
                <span className="w-7 shrink-0 font-mono text-xs font-bold tabular-nums text-primary">
                  {layer.index}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <p className="font-display text-base font-bold text-brand-primary group-hover:text-primary sm:text-lg">
                    {layer.label}
                  </p>
                  <p className="text-sm text-body-muted">{layer.role}</p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
