import { cn } from "@/lib/utils/cn";

interface FormulaNodeProps {
  caption: string;
  label: string;
  highlight?: boolean;
  className?: string;
}

function FormulaNode({ caption, label, highlight, className }: FormulaNodeProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-col rounded-xl border px-5 py-5 sm:px-6 sm:py-5",
        highlight
          ? "border-primary/45 bg-brand-accent-wash shadow-[0_4px_20px_rgb(180_83_9/0.08)]"
          : "border-border bg-background",
        className
      )}
    >
      <span className="font-mono text-xs font-semibold tracking-wider text-brand-secondary uppercase">
        {caption}
      </span>
      <p
        className={cn(
          "mt-2 font-display text-lg font-bold leading-snug sm:text-xl xl:whitespace-nowrap",
          highlight ? "text-primary" : "text-brand-primary"
        )}
      >
        {label}
      </p>
    </article>
  );
}

function FormulaOperator({ children }: { children: string }) {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center self-center font-display text-2xl font-bold text-primary sm:size-11"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

const steps = [
  { caption: "Đầu vào", label: "AI Model" },
  { caption: "Harness", label: "Môi trường có cấu trúc", highlight: true },
  { caption: "Kết quả", label: "Khả năng đáng tin cậy" },
] as const;

export function FormulaDiagram() {
  return (
    <div
      className="rounded-2xl border border-border bg-brand-surface/50 px-5 py-7 sm:px-8 sm:py-8"
      data-motion-item
    >
      <p className="mb-6 text-pretty text-base leading-relaxed text-body sm:mb-7 sm:text-lg">
        Một hệ thống AI đáng tin cậy không chỉ cần model mạnh — cần thêm lớp môi trường
        bao quanh:
      </p>

      <div className="hidden items-center gap-3 md:flex lg:gap-5">
        <FormulaNode caption={steps[0].caption} label={steps[0].label} className="flex-1" />
        <FormulaOperator>+</FormulaOperator>
        <FormulaNode
          caption={steps[1].caption}
          label={steps[1].label}
          highlight
          className="flex-[1.15]"
        />
        <FormulaOperator>=</FormulaOperator>
        <FormulaNode caption={steps[2].caption} label={steps[2].label} className="flex-1" />
      </div>

      <div className="space-y-3 md:hidden">
        {steps.map((step, index) => (
          <div key={step.label}>
            <FormulaNode
              caption={step.caption}
              label={step.label}
              highlight={"highlight" in step && step.highlight}
            />
            {index < steps.length - 1 && (
              <p
                className="py-2 text-center font-display text-xl font-bold text-primary"
                aria-hidden="true"
              >
                {index === 0 ? "+" : "="}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
