"use client";

import { useEffect } from "react";

export default function RevealInit() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    if (prefersReduced) {
      revealElements.forEach((el) => {
        el.classList.remove(
          "opacity-0",
          "translate-y-4",
          "-translate-y-6",
          "translate-y-6",
          "blur-[2px]",
          "blur-sm"
        );
        el.style.transition = "none";
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const show = (el: HTMLElement) => {
      const delay = parseInt(el.dataset.delay || "0", 10);
      setTimeout(() => {
        el.classList.remove(
          "opacity-0",
          "translate-y-4",
          "-translate-y-6",
          "translate-y-6",
          "blur-[2px]",
          "blur-sm"
        );
        el.classList.add("opacity-100", "translate-y-0");
      }, delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
