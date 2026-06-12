import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  title: React.ReactNode;
  description?: string;
  sectionLabel?: string;
  className?: string;
  centered?: boolean;
  /** Drop cap chỉ dùng khi mô tả bắt đầu bằng chữ Latin đơn — tránh lệch font với tiếng Việt */
  dropCap?: boolean;
}

export function SectionHeader({
  title,
  description,
  sectionLabel,
  className,
  centered = false,
  dropCap = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-5", centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      {sectionLabel && (
        <div className={cn("flex items-center gap-3", centered && "justify-center")}>
          <span className="section-label">— {sectionLabel}</span>
          <span className={cn("h-px bg-border", centered ? "w-16" : "flex-1")} aria-hidden="true" />
        </div>
      )}
      <h2
        className={cn(
          "font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-tight tracking-[-0.02em] font-bold text-brand-primary text-balance",
          centered && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-prose font-sans text-base leading-relaxed text-body text-pretty",
            dropCap && "drop-cap",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
