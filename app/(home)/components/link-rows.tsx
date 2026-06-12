import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface LinkRow {
  step: string;
  title: string;
  description: string;
  href: string;
}

interface LinkRowsProps {
  items: LinkRow[];
  className?: string;
}

export function LinkRows({ items, className }: LinkRowsProps) {
  return (
    <div className={cn("divide-y divide-border rounded-xl border border-border bg-brand-surface/50", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex items-center gap-4 px-5 py-4 transition hover:bg-brand-accent-wash/40 sm:px-6 sm:py-5"
        >
          <span className="hidden w-16 shrink-0 font-mono text-xs text-brand-secondary sm:block">
            Bước {item.step}
          </span>
          <span className="shrink-0 rounded-md bg-brand-accent-wash px-2 py-1 font-mono text-xs font-semibold text-primary sm:hidden">
            {item.step}
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold text-brand-primary group-hover:text-primary">
              {item.title}
            </p>
            <p className="mt-0.5 text-sm leading-relaxed text-brand-primary/60">
              {item.description}
            </p>
          </div>
          <ChevronDown
            className="size-4 shrink-0 -rotate-90 text-brand-secondary transition group-hover:text-primary"
            strokeWidth={2}
          />
        </Link>
      ))}
    </div>
  );
}
