import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface WarningCard {
  title: string;
  description: string;
}

interface WarningCardsProps {
  items: WarningCard[];
  className?: string;
}

export function WarningCards({ items, className }: WarningCardsProps) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-3", className)}>
      {items.map((item) => (
        <article
          key={item.title}
          className="flex flex-col items-center rounded-xl border border-border bg-brand-surface/80 px-5 py-6 text-center"
        >
          <AlertTriangle className="size-5 text-primary" strokeWidth={1.75} />
          <h4 className="mt-4 text-sm font-semibold text-brand-primary">{item.title}</h4>
          <p className="mt-2 text-xs leading-relaxed text-brand-primary/60">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
