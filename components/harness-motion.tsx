"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HarnessMotion() {
  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set("[data-reveal], [data-scale-fade]", { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        "[data-reveal]",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-reveal]",
            start: "top 70%",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-scale-fade]").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.28, scale: 0.92 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              end: "bottom 44%",
              scrub: true,
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
