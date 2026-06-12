import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface PrinciplesTocItem {
  id: string;
  label: string;
}

interface PrinciplesTocProps {
  items: PrinciplesTocItem[];
  variant?: "sidebar" | "panel";
  onNavigate?: () => void;
  onReturnToTop?: () => void;
}

export function PrinciplesToc({
  items,
  variant = "sidebar",
  onNavigate,
  onReturnToTop,
}: PrinciplesTocProps) {
  return (
    <nav
      className={cn("principles-toc", variant === "panel" && "principles-toc--panel")}
      aria-label="Mục lục trong trang"
    >
      {variant === "panel" ? (
        <button type="button" className="principles-toc-return" onClick={onReturnToTop}>
          Về đầu trang
        </button>
      ) : (
        <p className="principles-toc-label">Trên trang này</p>
      )}

      <ol className="principles-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`#${item.id}`} onClick={onNavigate}>
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
