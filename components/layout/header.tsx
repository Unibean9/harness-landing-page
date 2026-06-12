"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  currentPath?: string;
  showSidebarToggle?: boolean;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function desktopNavClass(isActive: boolean) {
  return cn(
    "relative whitespace-nowrap px-3 py-2 text-sm font-medium transition duration-300",
    isActive
      ? "font-display font-semibold text-primary after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
      : "text-brand-primary/65 hover:text-brand-primary"
  );
}

function mobileNavClass(isActive: boolean) {
  return cn(
    "block rounded-xl px-4 py-3 text-base font-semibold transition duration-300",
    isActive
      ? "bg-brand-accent-wash text-primary"
      : "text-brand-primary/75 hover:bg-brand-neutral/30 hover:text-brand-primary"
  );
}

export function Header({ showSidebarToggle, isSidebarOpen, onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileNavOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileNavOpen]);

  const showMobileSiteNav = !showSidebarToggle && mobileNavOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-5">
      <nav
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-border/80 bg-background/88 shadow-[0_8px_32px_rgb(45_41_38/0.05)] backdrop-blur-md transition-[padding] duration-300",
          showMobileSiteNav && "pb-2"
        )}
        aria-label="Điều hướng chính"
      >
        <div className="grid h-14 grid-cols-[1fr_auto] items-center gap-3 px-3 sm:px-4 lg:h-15 lg:grid-cols-[minmax(0,11rem)_1fr_auto] lg:gap-6 lg:px-5">
          <div className="flex min-w-0 items-center gap-2">
            {showSidebarToggle ? (
              <button
                type="button"
                onClick={onToggleSidebar}
                className="rounded-lg p-2 text-brand-primary/70 transition hover:bg-brand-neutral/40 hover:text-brand-primary lg:hidden"
                aria-label="Mở menu tài liệu"
                aria-expanded={isSidebarOpen}
              >
                {isSidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMobileNavOpen((open) => !open)}
                className="rounded-lg p-2 text-brand-primary/70 transition hover:bg-brand-neutral/40 hover:text-brand-primary lg:hidden"
                aria-label={mobileNavOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-site-nav"
              >
                {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            )}

            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2.5 transition-transform duration-200 active:scale-[0.98] sm:gap-3"
            >
              <div className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-brand-surface sm:size-9">
                <img
                  src="/logo-harness.png"
                  alt="Harness Logo"
                  className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="truncate font-display text-xl font-bold leading-none tracking-[-0.02em] text-brand-primary sm:text-2xl">
                Harness
              </span>
            </Link>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="flex items-center gap-0.5 xl:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={desktopNavClass(isNavActive(pathname, item.href))}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end">
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full border border-transparent p-2 text-brand-primary/70 transition duration-300 hover:border-border hover:bg-brand-surface/80 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                title="Đổi giao diện"
                aria-label="Đổi giao diện"
              >
                {theme === "dark" ? (
                  <Sun className="size-5 text-amber-400" />
                ) : (
                  <Moon className="size-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {showMobileSiteNav && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-brand-primary/15 backdrop-blur-[1px] lg:hidden"
              aria-label="Đóng menu"
              onClick={() => setMobileNavOpen(false)}
            />
            <div
              id="mobile-site-nav"
              className="relative z-50 border-t border-border/80 px-2 pt-2 lg:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileNavClass(isNavActive(pathname, item.href))}
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
