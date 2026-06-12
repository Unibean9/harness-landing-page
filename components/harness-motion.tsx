"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function HarnessMotion() {
  useEffect(() => {
    const context = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const scaleFadeItems = gsap.utils.toArray<HTMLElement>("[data-scale-fade]");

      if (reduceMotion) {
        gsap.set("[data-hero-item], [data-motion-item], [data-symptom-item]", {
          opacity: 1,
          y: 0,
          x: 0,
        });
        if (scaleFadeItems.length) {
          gsap.set(scaleFadeItems, { opacity: 1, scale: 1 });
        }
        return;
      }

      gsap.set("[data-hero-item], [data-motion-item]", { opacity: 0, y: 22 });
      if (scaleFadeItems.length) {
        gsap.set(scaleFadeItems, { opacity: 0, scale: 0.94 });
      }

      gsap.to("[data-hero-item]", {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.12,
      });

      if (scaleFadeItems.length) {
        gsap.to(scaleFadeItems, {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.35,
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-motion-section]").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>("[data-motion-item]");
        if (!items.length) return;

        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-symptom-list]").forEach((list) => {
        const items = list.querySelectorAll<HTMLElement>("[data-symptom-item]");
        if (!items.length) return;

        gsap.set(items, { opacity: 0, y: 14 });
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: list,
            start: "top 82%",
            once: true,
          },
        });
      });

      scaleFadeItems.forEach((item) => {
        if (item.closest("#trang-chu")) return;

        gsap.fromTo(
          item,
          { opacity: 0.3, scale: 0.94 },
          {
            opacity: 1,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 50%",
              scrub: 0.6,
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
