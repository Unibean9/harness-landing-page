"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils/cn";

const TOC_ROMAN = ["I", "II", "III", "IV", "V"] as const;

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto">
      <div className="site-footer-rule" aria-hidden="true" />

      <div className="site-footer-body">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <Link href="/" className="site-footer-wordmark group">
              <span className="site-footer-wordmark-kicker">Harness Engineering</span>
              <span className="site-footer-wordmark-title">Harness Knowledge</span>
            </Link>
            <p className="site-footer-lede">
              Học liệu mở về ngữ cảnh, trạng thái và xác minh — dành cho kỹ sư làm việc với AI
              coding agent.
            </p>
            <Link href="/nguyen-ly/harness-first" className="site-footer-cta group">
              <span>Bắt đầu với Nguyên lý</span>
              <ArrowUpRight
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>

          <nav className="site-footer-nav" aria-label="Liên kết chân trang">
            <p className="site-footer-nav-kicker">Mục lục</p>
            <ul className="site-footer-nav-list">
              {navItems.map((item, index) => {
                const active = isNavActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "site-footer-nav-link",
                        active && "site-footer-nav-link--active",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="site-footer-nav-index">{TOC_ROMAN[index]}</span>
                      <span className="site-footer-nav-label">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-bottom-inner">
          <p className="site-footer-bottom-copy">Tài liệu tham chiếu mở · Tiếng Việt</p>
          <p className="site-footer-bottom-meta">
            <span>harness.engineering</span>
            <span className="site-footer-bottom-dot" aria-hidden="true">
              ·
            </span>
            <span>{year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
