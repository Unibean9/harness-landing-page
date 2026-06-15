import Link from "next/link";
import { getSddNavItems } from "@/lib/sdd-data";
import { cn } from "@/lib/utils/cn";

interface SddNavProps {
  activeSlug: string;
  variant?: "sidebar" | "panel";
  onNavigate?: () => void;
}

export function SddNav({ activeSlug, variant = "sidebar", onNavigate }: SddNavProps) {
  const items = getSddNavItems();

  return (
    <nav
      className={cn("principles-nav", variant === "panel" && "principles-nav--panel")}
      aria-label="Danh sách nguyên lý Spec Driven Development"
    >
      <p className="principles-nav-label">Spec Driven Development</p>
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
