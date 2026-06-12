import { cn } from "@/lib/utils/cn";

interface ComparisonMethod {
  key: string;
  step: string;
  label: string;
  focus: string;
  limit: string;
  highlight?: boolean;
}

const methods: ComparisonMethod[] = [
  {
    key: "prompt",
    step: "01",
    label: "Prompt Engineering",
    focus: "Cách ra lệnh cho AI",
    limit: "Dễ thất bại với tác vụ nhiều bước hoặc dài hạn",
  },
  {
    key: "context",
    step: "02",
    label: "Context Engineering",
    focus: "AI được nhìn thấy dữ liệu gì",
    limit: "Giải quyết thông tin đầu vào, nhưng chưa đủ cho quy trình dài hạn",
  },
  {
    key: "harness",
    step: "03",
    label: "Harness Engineering",
    focus: "AI vận hành trong môi trường nào",
    limit: "Môi trường, công cụ, ràng buộc, xác minh và vòng lặp phản hồi",
    highlight: true,
  },
];

const dimensions = [
  { key: "focus", label: "Tập trung vào" },
  { key: "limit", label: "Giới hạn" },
] as const;

export function ComparisonMatrix() {
  return (
    <div data-motion-item>
      {/* Desktop — bảng so sánh 3 cột (ClaudeKit Traditional vs Claude Code style) */}
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-background/70 sm:block">
        <table className="w-full table-fixed border-collapse text-left">
          <colgroup>
            <col className="w-[14%]" />
            <col className="w-[28.66%]" />
            <col className="w-[28.66%]" />
            <col className="w-[28.66%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-border">
              <th className="bg-brand-surface/60 px-5 py-5" aria-hidden="true" />
              {methods.map((method) => (
                <th
                  key={method.key}
                  className={cn(
                    "px-5 py-5 text-left align-top",
                    method.highlight
                      ? "bg-brand-accent-wash/80"
                      : "bg-brand-surface/40"
                  )}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                        Bước {method.step}
                      </span>
                      {method.highlight && (
                        <span className="shrink-0 rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                          Toàn diện nhất
                        </span>
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-2 font-display text-lg font-bold leading-snug",
                        method.highlight ? "text-primary" : "text-brand-primary"
                      )}
                    >
                      {method.label}
                    </p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dimensions.map((dim) => (
              <tr key={dim.key} className="border-b border-border/70 last:border-b-0">
                <th
                  scope="row"
                  className="bg-brand-surface/60 px-5 py-6 font-display text-base italic font-normal text-primary align-top"
                >
                  {dim.label}
                </th>
                {methods.map((method) => (
                  <td
                    key={`${method.key}-${dim.key}`}
                    className={cn(
                      "px-5 py-6 text-base leading-relaxed align-top",
                      method.highlight
                        ? "bg-brand-accent-wash/50 font-medium text-brand-primary"
                        : "text-body"
                    )}
                  >
                    {method[dim.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — 3 cột so sánh dạng card, cùng cấu trúc */}
      <div className="space-y-4 sm:hidden">
        {methods.map((method) => (
          <article
            key={method.key}
            className={cn(
              "rounded-2xl border px-5 py-5",
              method.highlight
                ? "border-primary/40 bg-brand-accent-wash"
                : "border-border bg-background"
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-brand-secondary uppercase">
                Bước {method.step}
              </span>
              {method.highlight && (
                <span className="shrink-0 rounded-md bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                  Toàn diện nhất
                </span>
              )}
            </div>
            <p
              className={cn(
                "mt-2 font-display text-lg font-bold",
                method.highlight ? "text-primary" : "text-brand-primary"
              )}
            >
              {method.label}
            </p>

            <dl className="mt-4 space-y-3">
              {dimensions.map((dim) => (
                <div key={dim.key}>
                  <dt className="font-display text-sm italic text-primary">{dim.label}</dt>
                  <dd className="mt-1 text-base leading-relaxed text-body">
                    {method[dim.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
