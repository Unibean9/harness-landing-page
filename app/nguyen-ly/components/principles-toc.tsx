"use client";

import { useEffect, useState } from "react";
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

/** Matches `scroll-mt-28` on article sections plus fixed header clearance. */
const SCROLL_OFFSET = 112;

export function PrinciplesToc({
  items,
  variant = "sidebar",
  onNavigate,
  onReturnToTop,
}: PrinciplesTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const itemIds = items.map((item) => item.id);
    if (!itemIds.length) return;

    const resolveActive = () => {
      let current = itemIds[0];

      for (const id of itemIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id;
        } else {
          break;
        }
      }

      setActiveId(current);
    };

    resolveActive();
    window.addEventListener("scroll", resolveActive, { passive: true });
    window.addEventListener("resize", resolveActive);

    return () => {
      window.removeEventListener("scroll", resolveActive);
      window.removeEventListener("resize", resolveActive);
    };
  }, [items]);

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
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={cn("principles-toc-link", isActive && "principles-toc-link--active")}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  setActiveId(item.id);
                  onNavigate?.();
                }}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
