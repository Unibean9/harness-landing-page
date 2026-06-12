"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useSiteHeaderChromeHidden } from "@/lib/contexts/site-header-chrome";
import {
  SITE_HEADER_MOBILE_HEIGHT,
  siteHeaderChromeTransition,
} from "@/lib/constants/site-header-chrome";

interface PrinciplesChromeMotionProps {
  children: React.ReactNode;
}

function subscribeMobileChrome(onStoreChange: () => void) {
  const media = window.matchMedia("(max-width: 1023px)");
  media.addEventListener("change", onStoreChange);

  return () => media.removeEventListener("change", onStoreChange);
}

function getMobileChromeSnapshot() {
  return window.matchMedia("(max-width: 1023px)").matches;
}

function getMobileChromeServerSnapshot() {
  return false;
}

export function PrinciplesChromeMotion({ children }: PrinciplesChromeMotionProps) {
  const reduceMotion = useReducedMotion();
  const headerHidden = useSiteHeaderChromeHidden();
  const isMobileChrome = useSyncExternalStore(
    subscribeMobileChrome,
    getMobileChromeSnapshot,
    getMobileChromeServerSnapshot
  );

  if (!isMobileChrome) {
    return <>{children}</>;
  }

  const shouldLift = headerHidden;

  return (
    <motion.div
      className="principles-chrome-motion"
      initial={false}
      animate={{ y: shouldLift ? `-${SITE_HEADER_MOBILE_HEIGHT}` : 0 }}
      transition={reduceMotion ? { duration: 0 } : siteHeaderChromeTransition}
    >
      {children}
    </motion.div>
  );
}
