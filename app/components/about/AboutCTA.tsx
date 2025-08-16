"use client";

import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutCTA() {
  const ctaRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(
              entry.target.getAttribute("data-delay") || "0",
              10
            );
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-6");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    ctaRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setCTARef = (index: number) => (el: HTMLElement | null) => {
    ctaRefs.current[index] = el;
  };

  return (
    <section id="contact" className="py-10 lg:py-16">
      <div
        className="rounded-2xl bg-white ring-1 ring-zinc-200 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 reveal opacity-0 translate-y-6 transition-all duration-700"
        data-delay="160"
        ref={setCTARef(0)}
      >
        <div>
          <div className="inline-flex items-center gap-2 text-xs text-zinc-600">
            <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
            Disponible pour de nouveaux projets
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight">
            Gardons ça simple et livrons quelque chose de solide.
          </h3>
          <p className="mt-2 text-sm text-zinc-700">
            Dites-moi ce que vous voulez accomplir, je suggérerai le chemin le
            plus direct.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-zinc-900 text-zinc-50 px-5 py-3 shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            <Calendar className="h-5 w-5 text-emerald-300" />
            <span className="font-medium">Appel gratuit de 30 min</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
