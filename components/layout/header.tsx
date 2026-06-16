"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteHeaderChromeTransition } from "@/lib/constants/site-header-chrome";
import { useSiteHeaderChromeHidden } from "@/lib/contexts/site-header-chrome";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  currentPath?: string;
  showSidebarToggle?: boolean;
  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

const TOC_ROMAN = ["I", "II", "III", "IV", "V"] as const;

function isNavActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header({ showSidebarToggle, isSidebarOpen, onToggleSidebar }: HeaderProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const hidden = useSiteHeaderChromeHidden(mobileNavOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 32 };

  const headerChromeTransition = reduceMotion ? { duration: 0 } : siteHeaderChromeTransition;

  return (
    <motion.header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-0 pt-0 will-change-transform"
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={headerChromeTransition}
    >
      <nav
        className={cn(
          "site-header-bar site-header-masthead pointer-events-auto relative z-10",
          scrolled && "site-header-bar--scrolled",
          showMobileSiteNav && "site-header-bar--open"
        )}
        aria-label="Điều hướng chính"
      >
        <div className="site-header-masthead-rule site-header-masthead-rule--top" aria-hidden="true" />
        <div className="relative mx-auto flex h-[3.25rem] max-w-7xl items-center gap-2 px-4 sm:px-5 lg:h-[3.75rem] lg:gap-6 lg:px-6 xl:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 lg:flex-none lg:gap-2">
            {showSidebarToggle ? (
              <button
                type="button"
                onClick={onToggleSidebar}
                className="site-header-icon-btn lg:hidden"
                aria-label="Mở menu tài liệu"
                aria-expanded={isSidebarOpen}
              >
                {isSidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            ) : null}

            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              <motion.div
                className="site-header-logo relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-brand-surface sm:size-8 lg:size-9"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={spring}
              >
                <img
                  src="/logo-harness.png"
                  alt="Harness Logo"
                  className="size-full object-cover"
                />
              </motion.div>
              <span className="flex min-w-0 flex-col">
                <span className="site-header-wordmark site-header-masthead-brand truncate">
                  Harness
                </span>
                <span className="site-header-masthead-kicker truncate">engineering</span>
              </span>
            </Link>
          </div>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="site-header-nav-track">
              {navItems.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "site-header-nav-link",
                      active && "site-header-nav-link--active"
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="site-header-active"
                        className="site-header-nav-underline"
                        transition={spring}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative z-10">{item.shortLabel ?? item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 lg:gap-1">
            {!showSidebarToggle ? (
              <button
                type="button"
                onClick={() => setMobileNavOpen((open) => !open)}
                className="site-header-toc-trigger lg:hidden"
                aria-label={mobileNavOpen ? "Đóng mục lục" : "Mở mục lục"}
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-site-nav"
              >
                {mobileNavOpen ? "Đóng" : "Mục lục"}
              </button>
            ) : null}
            {mounted ? (
              <motion.button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="site-header-icon-btn site-header-masthead-theme"
                title="Đổi giao diện"
                aria-label="Đổi giao diện"
                whileHover={reduceMotion ? undefined : { rotate: 12 }}
                whileTap={reduceMotion ? undefined : { scale: 0.94 }}
                transition={spring}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme === "dark" ? "sun" : "moon"}
                    initial={reduceMotion ? false : { rotate: -40, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { rotate: 40, opacity: 0, scale: 0.8 }}
                    transition={{ duration: reduceMotion ? 0 : 0.18 }}
                    className="inline-flex"
                  >
                    {theme === "dark" ? (
                      <Sun className="size-5 text-amber-400" />
                    ) : (
                      <Moon className="size-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            ) : (
              <span className="size-9" aria-hidden="true" />
            )}
          </div>
        </div>

        <div
          className={cn(
            "site-header-masthead-rule",
            scrolled && "site-header-masthead-rule--scrolled"
          )}
          aria-hidden="true"
        />
      </nav>

      <AnimatePresence>
        {showMobileSiteNav ? (
          <motion.div
            id="mobile-site-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="site-header-mobile-overlay pointer-events-auto lg:hidden"
          >
            <motion.header
              className="site-header-toc-head"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="site-header-toc-kicker">Harness Engineering</p>
              <h2 className="site-header-toc-title">Mục lục</h2>
              <div className="site-header-toc-rule" aria-hidden="true" />
            </motion.header>
            <nav className="site-header-toc-list" aria-label="Mục lục trang">
              {navItems.map((item, index) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, transition: { duration: 0.12 } }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.3,
                      delay: reduceMotion ? 0 : 0.05 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "site-header-toc-item",
                        active && "site-header-toc-item--active"
                      )}
                      onClick={() => setMobileNavOpen(false)}
                    >
                      <span className="site-header-toc-index" aria-hidden="true">
                        {TOC_ROMAN[index]}
                      </span>
                      <span className="site-header-toc-label">{item.shortLabel ?? item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <motion.footer
              className="site-header-toc-footer"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : 0.32,
              }}
            >
              <span>tài liệu tham chiếu mở</span>
              <span className="site-header-toc-footer-dot" aria-hidden="true">
                ·
              </span>
              <span>harness.engineering</span>
            </motion.footer>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
