import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function ImagePlaceholder({
  label,
  className,
  aspect = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-brand-accent-wash/40 p-8 text-center",
        aspectClasses[aspect],
        className
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-full border border-primary/25 bg-brand-surface">
        <ImageIcon className="size-5 text-primary" strokeWidth={1.5} />
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-caption">{label}</p>
    </div>
  );
}
