"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";

interface UseSiteHeaderHiddenOptions {
  disabled?: boolean;
}

const TOP_REVEAL_Y = 72;
const SCROLL_DELTA = 10;

export function useSiteHeaderHidden({ disabled = false }: UseSiteHeaderHiddenOptions = {}) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const hiddenRef = useRef(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (reduceMotion || disabled) {
      if (hiddenRef.current) {
        hiddenRef.current = false;
        setHidden(false);
      }
      lastScrollY.current = latest;
      return;
    }

    const delta = latest - lastScrollY.current;

    if (latest <= TOP_REVEAL_Y) {
      if (hiddenRef.current) {
        hiddenRef.current = false;
        setHidden(false);
      }
    } else if (delta > SCROLL_DELTA && !hiddenRef.current) {
      hiddenRef.current = true;
      setHidden(true);
    } else if (delta < -SCROLL_DELTA && hiddenRef.current) {
      hiddenRef.current = false;
      setHidden(false);
    }

    lastScrollY.current = latest;
  });

  return hidden;
}
