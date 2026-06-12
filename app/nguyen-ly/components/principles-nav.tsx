import Link from "next/link";
import { getPrinciplesNavItems } from "@/lib/principles-data";
import { cn } from "@/lib/utils/cn";

interface PrinciplesNavProps {
  activeSlug: string;
  variant?: "sidebar" | "panel";
  onNavigate?: () => void;
}

export function PrinciplesNav({
  activeSlug,
  variant = "sidebar",
  onNavigate,
}: PrinciplesNavProps) {
  const items = getPrinciplesNavItems();

  return (
    <nav
      className={cn("principles-nav", variant === "panel" && "principles-nav--panel")}
      aria-label="Danh sách nguyên lý"
    >
      <p className="principles-nav-label">Nguyên lý</p>
      <ol className="principles-nav-list">
        {items.map((item) => {
          const isActive = activeSlug === item.slug;

          return (
            <li key={item.slug}>
              <Link
                href={item.href}
                className={cn("principles-nav-link", isActive && "principles-nav-link--active")}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
              >
                <span className="principles-nav-link-text">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
