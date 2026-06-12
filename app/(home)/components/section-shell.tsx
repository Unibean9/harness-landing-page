import { cn } from "@/lib/utils/cn";

interface SectionShellProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  tone?: "default" | "wash" | "sage";
}

export function SectionShell({
  id,
  children,
  className,
  innerClassName,
  tone = "default",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-24 md:py-32",
        tone === "wash" && "bg-brand-accent-wash/35",
        tone === "sage" && "bg-brand-sage/80",
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-7xl", innerClassName)}>{children}</div>
    </section>
  );
}
