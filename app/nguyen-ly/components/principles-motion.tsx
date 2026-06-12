"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function PrinciplesMotion() {
  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const articleBlocks = gsap.utils.toArray<HTMLElement>("[data-principles-item]");

      if (reduceMotion) {
        gsap.set(articleBlocks, { opacity: 1, y: 0 });
        return;
      }

      articleBlocks.forEach((block) => {
        gsap.from(block, {
          opacity: 0,
          y: 32,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
