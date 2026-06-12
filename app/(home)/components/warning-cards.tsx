import { cn } from "@/lib/utils/cn";

interface WarningCard {
  signal: string;
  title: string;
  description: string;
}

interface WarningCardsProps {
  items: WarningCard[];
  className?: string;
}

export function WarningCards({ items, className }: WarningCardsProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-primary/20 bg-brand-surface/60",
        className
      )}
      data-symptom-list
    >
      <ol className="grid list-none divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {items.map((item, index) => (
          <li key={item.title} data-symptom-item>
            <article
              className="h-full px-5 py-5 transition duration-300 hover:bg-brand-accent-wash/45 sm:px-6 sm:py-6"
              aria-label={`${item.signal}: ${item.title}`}
            >
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base leading-snug sm:text-[1.0625rem] sm:leading-relaxed">
                <span className="font-mono text-sm font-bold tabular-nums text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-bold text-brand-primary">{item.title}</span>
                <span className="text-brand-secondary" aria-hidden="true">
                  —
                </span>
                <span className="text-body">{item.description}</span>
              </p>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
