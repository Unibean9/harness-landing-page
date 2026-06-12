"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import {
  PRINCIPLES_MOBILE_BAR_HEIGHT,
  SITE_HEADER_MOBILE_HEIGHT,
  siteHeaderChromeTransition,
} from "@/lib/constants/site-header-chrome";
import { useSiteHeaderChromeHidden } from "@/lib/contexts/site-header-chrome";
import { cn } from "@/lib/utils/cn";
import { usePrinciplesChrome } from "./principles-chrome-root";
import { PrinciplesNav } from "./principles-nav";
import { PrinciplesToc, type PrinciplesTocItem } from "./principles-toc";

type MobilePanel = "menu" | "toc" | null;

interface PrinciplesMobileBarProps {
  activeSlug: string;
  tocItems?: PrinciplesTocItem[];
}

export function PrinciplesMobileBar({ activeSlug, tocItems }: PrinciplesMobileBarProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const chrome = usePrinciplesChrome();
  const [mounted, setMounted] = useState(false);
  const [openPanel, setOpenPanel] = useState<MobilePanel>(null);
  const hasToc = Boolean(tocItems && tocItems.length > 0);
  const headerHidden = useSiteHeaderChromeHidden(openPanel !== null);

  const closePanel = useCallback(() => setOpenPanel(null), []);

  const togglePanel = (panel: Exclude<MobilePanel, null>) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    chrome?.setMobilePanelOpen(openPanel !== null);
  }, [chrome, openPanel]);

  useEffect(() => {
    closePanel();
  }, [pathname, closePanel]);

  useEffect(() => {
    if (!openPanel) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openPanel, closePanel]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closePanel();
  };

  const chromeTransition = reduceMotion ? { duration: 0 } : siteHeaderChromeTransition;

  const barY = headerHidden ? 0 : SITE_HEADER_MOBILE_HEIGHT;
  const overlayTop = headerHidden
    ? PRINCIPLES_MOBILE_BAR_HEIGHT
    : `calc(${SITE_HEADER_MOBILE_HEIGHT} + ${PRINCIPLES_MOBILE_BAR_HEIGHT})`;

  const bar = (
    <motion.div
      className="principles-mobile-bar lg:hidden"
      initial={false}
      animate={{ y: barY }}
      transition={chromeTransition}
    >
      <div className="principles-mobile-bar-inner">
        <button
          type="button"
          className={cn(
            "principles-mobile-bar-trigger",
            openPanel === "menu" && "principles-mobile-bar-trigger--active"
          )}
          aria-expanded={openPanel === "menu"}
          aria-controls="principles-mobile-menu-panel"
          onClick={() => togglePanel("menu")}
        >
          <Menu className="size-4 shrink-0" aria-hidden="true" />
          <span>Menu</span>
        </button>

        {hasToc ? (
          <button
            type="button"
            className={cn(
              "principles-mobile-bar-trigger",
              openPanel === "toc" && "principles-mobile-bar-trigger--active"
            )}
            aria-expanded={openPanel === "toc"}
            aria-controls="principles-mobile-toc-panel"
            onClick={() => togglePanel("toc")}
          >
            <span>Trên trang này</span>
            <ChevronDown
              className={cn(
                "size-4 shrink-0 transition-transform duration-200",
                openPanel === "toc" && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
        ) : (
          <span className="principles-mobile-bar-spacer" aria-hidden="true" />
        )}
      </div>
    </motion.div>
  );

  const overlay = (
    <AnimatePresence>
      {openPanel ? (
        <>
          <motion.button
            key="principles-mobile-backdrop"
            type="button"
            className="principles-mobile-bar-backdrop"
            style={{ top: overlayTop }}
            aria-label="Đóng menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={closePanel}
          />

          <motion.div
            key={`principles-mobile-panel-${openPanel}`}
            id={openPanel === "menu" ? "principles-mobile-menu-panel" : "principles-mobile-toc-panel"}
            className={cn(
              "principles-mobile-panel",
              openPanel === "toc" && "principles-mobile-panel--toc"
            )}
            style={{ top: overlayTop }}
            initial={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
            transition={chromeTransition}
          >
            {openPanel === "menu" ? (
              <PrinciplesNav activeSlug={activeSlug} variant="panel" onNavigate={closePanel} />
            ) : (
              <PrinciplesToc
                items={tocItems!}
                variant="panel"
                onNavigate={closePanel}
                onReturnToTop={scrollToTop}
              />
            )}
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      {mounted ? createPortal(bar, document.body) : null}

      <div aria-hidden="true" className="principles-mobile-bar-offset lg:hidden" />

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
