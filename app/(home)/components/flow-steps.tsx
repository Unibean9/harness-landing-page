import { cn } from "@/lib/utils/cn";

interface FlowStep {
  index: string;
  title: string;
  description: string;
  fix?: string;
  highlight?: boolean;
}

interface FlowStepsProps {
  steps: FlowStep[];
  className?: string;
}

export function FlowSteps({ steps, className }: FlowStepsProps) {
  return (
    <ol className={cn("space-y-0", className)}>
      {steps.map((step, index) => (
        <li key={step.index} className="relative flex gap-4 pb-8 last:pb-0">
          {index < steps.length - 1 && (
            <span
              className="absolute left-[15px] top-8 bottom-0 w-px bg-border"
              aria-hidden="true"
            />
          )}
          <span
            className={cn(
              "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold tabular-nums",
              step.highlight
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-brand-surface text-brand-primary"
            )}
          >
            {step.index}
          </span>
          <article
            className={cn(
              "flex-1 rounded-xl border px-5 py-4",
              step.highlight
                ? "border-primary/40 bg-brand-accent-wash"
                : "border-border bg-background/70"
            )}
          >
            <h4 className="text-sm font-semibold text-brand-primary">{step.title}</h4>
            <p className="mt-1 text-sm leading-relaxed text-body-muted">
              {step.description}
            </p>
            {step.fix && (
              <p className="mt-3 border-t border-border/60 pt-3 text-base leading-relaxed text-body">
                <span className="font-semibold text-brand-emphasis">Harness → </span>
                {step.fix}
              </p>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}
