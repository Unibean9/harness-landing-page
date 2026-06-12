import { cn } from "@/lib/utils/cn";

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export function Subheading({ children, className }: SubheadingProps) {
  return (
    <h3
      className={cn(
        "font-display text-xl font-bold tracking-[-0.01em] text-brand-primary",
        className
      )}
    >
      {children}
    </h3>
  );
}
